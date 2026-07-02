# 📺 Tablette frigo — installation kiosque (Ubuntu + Chromium)

> Guide de l'installation réelle utilisée pour afficher **Family Calendar Card**
> en permanence sur une tablette montée au réfrigérateur. Sert d'exemple complet
> pour un affichage mural/cuisine piloté par Home Assistant.

---

## 1. Matériel

| Élément | Détail |
|---|---|
| **Tablette** | Lenovo **IdeaPad Duet 3i (11IAN8)** — 2-en-1 détachable, écran tactile 11" |
| **Écran** | Dalle **DSI** tactile **capacitive** — usage **au doigt** (pas de stylet) |
| **Montage** | Fixée au **frigo** (support magnétique / aimant), orientation paysage |
| **Alimentation** | USB-C branché en permanence (pas de gestion batterie) |
| **Réseau** | Wi-Fi, IP locale fixe **`192.168.8.12`** |

> 💡 N'importe quelle tablette x86 ou mini-PC sous Linux convient. Les points
> spécifiques « DSI » et « Wayland » ci-dessous sont les seuls vraiment liés au
> modèle.

---

## 2. Système d'exploitation

- **Ubuntu 26.04** (GNOME, **Wayland** uniquement — pas de session X11).
- Installation **minimale** (sans la suite d'applis préinstallées).
- **Autologin** activé sur l'utilisateur `tab` → la tablette démarre directement
  sur le bureau, sans saisie de mot de passe.
- Fuseau horaire réglé sur **`Europe/Paris`** (⚠️ voir piège fuseau §7).

### Pourquoi Ubuntu plutôt que Windows ?

- Kiosque Chromium fiable au démarrage, sans pubs ni mises à jour intempestives.
- Pilotage fin de l'écran (extinction/luminosité) scriptable.
- Léger, stable pour un appareil « toujours allumé ».

---

## 3. Affichage de la carte (mode kiosque)

Chromium est lancé en plein écran au démarrage via un autostart GNOME.

**`~/.config/autostart/kiosk.desktop`**
```ini
[Desktop Entry]
Type=Application
Name=Calendrier Kiosk
Exec=/home/tab/kiosk.sh
X-GNOME-Autostart-enabled=true
```

**`~/kiosk.sh`** (appartient à `tab`, éditable sans sudo)
```bash
#!/usr/bin/env bash
sleep 3
# Jamais de blank / veille / dim pendant la journée
gsettings set org.gnome.desktop.session idle-delay 0
gsettings set org.gnome.desktop.screensaver lock-enabled false
gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-ac-type 'nothing'
gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-battery-type 'nothing'
gsettings set org.gnome.settings-daemon.plugins.power idle-dim false
# Clavier tactile GNOME (OSK) activé
gsettings set org.gnome.desktop.a11y.applications screen-keyboard-enabled true
sudo /usr/local/bin/screen-power on
# Évite la bulle "Chromium ne s'est pas fermé correctement" après coupure de courant
PREF="$HOME/snap/chromium/common/chromium/Default/Preferences"
[ -f "$PREF" ] && sed -i 's/"exit_type":"[^"]*"/"exit_type":"Normal"/' "$PREF"
exec chromium --kiosk --ozone-platform=wayland --enable-wayland-ime --wayland-text-input-version=3 \
  --noerrdialogs --disable-session-crashed-bubble \
  --disable-features=Translate --no-first-run --password-store=basic \
  --overscroll-history-navigation=0 \
  "https://ha.jeegaillard.ovh/calendrier-familiale/Calendrier_Familiale?wp_enabled=true&wp_hide_toolbar=true&wp_hide_sidebar=true&wp_idle_time=0"
```

> ⚠️ **`--ozone-platform=wayland` est indispensable** : en session GNOME, le snap
> Chromium tourne par défaut en **X11/XWayland** (son launcher n'active Wayland
> que sous Ubuntu Frame). Sans ce flag, tout ce qui touche au clavier tactile
> (`--enable-wayland-ime`, `--wayland-text-input-version=3`) est **ignoré
> silencieusement**. Et c'est bien le commutateur runtime
> `--wayland-text-input-version=3` qu'il faut — `--enable-features=WaylandTextInputV3`
> ne fait rien.

> 🖥️ **Vue tablette** : utiliser **Chromium**, pas Firefox. Sous Linux, Firefox
> déclare mal le tactile (`matchMedia('(pointer: coarse)')` → `false`), donc la
> carte bascule en disposition « ordinateur ». Chromium détecte correctement le
> tactile → vue tablette + breakpoints OK.

### Plein écran total (masquer la barre HA + sidebar)

Réalisé avec l'extension HACS **[lovelace-wallpanel](https://github.com/j-a-n/lovelace-wallpanel)**.
⚠️ La config `wallpanel:` posée dans le dashboard **ne s'applique pas** de façon
fiable (elle atterrit dans la vue, pas à la racine). La méthode qui **fonctionne**
= **override par paramètres d'URL** dans `kiosk.sh` :

```
?wp_enabled=true&wp_hide_toolbar=true&wp_hide_sidebar=true&wp_idle_time=0
```

> ⚠️ **`wp_idle_time=0` est indispensable.** Activer wallpanel active aussi son
> **screensaver** (diaporama photo/vidéo après ~15 s d'inactivité, défaut
> `idle_time: 15`). Sans `wp_idle_time=0`, des images viennent recouvrir le
> calendrier. La valeur `0` désactive le screensaver tout en gardant le masquage
> de la barre et de la sidebar.

C'est persistant aux reboots et n'exige aucune modif côté HA.

### Clavier tactile (OSK GNOME)

Le clavier virtuel de GNOME fonctionne dans le kiosque, mais **pas en
apparition automatique** : aucun navigateur ne la déclenche pour les champs des
pages web (bug documenté — Firefox ne la fait que pour sa barre d'adresse :
[Bugzilla 1231067](https://bugzilla.mozilla.org/show_bug.cgi?id=1231067) ;
Chromium n'y arrive pas non plus, quels que soient les flags).

**Le mode d'emploi qui marche** (validé, y compris par-dessus le plein écran
`--kiosk`) :

1. Toucher le champ de saisie (il prend le focus) ;
2. **Glisser du bord bas de l'écran vers le haut** → l'OSK GNOME apparaît ;
3. Taper — la frappe arrive bien dans le champ (grâce aux flags Wayland du
   `kiosk.sh` ci-dessus).

Prérequis : `gsettings set org.gnome.desktop.a11y.applications
screen-keyboard-enabled true` (posé par `kiosk.sh`) + les 3 flags Wayland.

> 🔍 **Tester au doigt sur l'écran, jamais via RDP** : au clic souris (dont
> l'entrée émulée du RDP), les champs web ne convoquent jamais l'OSK — seuls
> les champs natifs GNOME le font. Un test RDP « négatif » ne prouve rien.

> 🛠️ **DevTools** : en mode `--kiosk`, Chromium désactive F12 avec un message
> trompeur (« Votre organisation a bloqué… ») alors qu'aucune policy n'existe.
> Pour déboguer : remplacer temporairement `--kiosk` par `--start-maximized`
> dans `kiosk.sh` et relancer le kiosque.

### Vue Musique (bouton flottant)

La carte calendrier affiche un bouton flottant 🎵 (option `floatingButton`,
`navigationPath` vers une vue `musique` du même dashboard). Cette vue contient
une carte **[mediocre-hass-media-player-cards](https://github.com/antontanderup/mediocre-hass-media-player-cards)**
(`custom:mediocre-multi-media-player-card`, size `large`) : choix de
l'enceinte, navigateur de bibliothèque **Music Assistant**, recherche (avec
l'OSK ci-dessus) et file d'attente (via l'intégration
[mass_queue](https://github.com/droans/mass_queue)). Un bouton « ‹ Calendrier »
(Bubble Card) ramène au calendrier.

---

## 4. Pilotage de l'écran depuis Home Assistant (MQTT)

L'architecture : **HA = cerveau** (décisions/automatisations), **tablette = exécutant**
(un service systemd écoute MQTT et agit sur l'écran).

```
┌──────────────┐   MQTT   ┌──────────────────────┐
│ Home Assistant│ ───────▶ │ tablette: screen-mqtt │ ──▶ brightnessctl
│ (automations) │          │ (service systemd)     │     (allume/éteint/dim)
└──────────────┘          └──────────────────────┘
```

### Côté tablette : service `screen-mqtt`

Un service systemd (root) abonné à 3 topics MQTT :

| Topic | Payload | Action |
|---|---|---|
| `tablette/frigo/ecran/set` | `on` / `off` | `screen-power on\|off` |
| `tablette/frigo/ecran/brightness` | `0`–`100` | `brightnessctl set N%` (0 = éteint) |
| `tablette/frigo/ecran/restart` | (n'importe) | `kiosk-restart` (tue + relance Chromium) |

**`/usr/local/bin/screen-power`**
```bash
#!/bin/bash
case "$1" in
  off) brightnessctl set 0 ;;
  on)  brightnessctl set 100% ;;
esac
```

> ⚠️ **Dalle DSI** : le `bl_power` du backlight est **ignoré** → on éteint en
> mettant la **luminosité à 0** (`brightnessctl set 0`), pas via `bl_power`.
> Utiliser des **valeurs fixes**, **jamais `--save/--restore`** (qui sauvegarde
> 0 quand l'écran est déjà éteint → écran bloqué noir au réveil).

### Côté HA : entités + automatisation

- **`switch.ecran_frigo`** — switch créé par **MQTT Discovery**, publie sur
  `…/ecran/set`. Permet de forcer ON/OFF à la main.
- **`button.relancer_kiosque_frigo`** — bouton MQTT qui publie sur `…/ecran/restart`
  → `screen-mqtt` lance `/usr/local/bin/kiosk-restart`. ⚠️ Ce script **tue Chromium
  PUIS le relance** : le snap Chromium fait du **single-instance**, donc relancer
  sans tuer d'abord ne fait *rien* (la 2ᵉ invocation réveille la 1ʳᵉ et ressort).
  La relance passe par `systemd-run --user` pour que Chromium tourne dans un scope
  de la session de `tab`, indépendant du service `screen-mqtt`.
- **`automation.ecran_frigo_presence_horaire`** — la logique centrale (voir §5).

---

## 5. Allumage intelligent : présence + horaire + luminosité auto

L'écran ne reste pas bêtement allumé : il s'allume **uniquement** quand quelqu'un
est à la maison et dans la plage horaire utile, et sa **luminosité s'adapte** à la
lumière ambiante.

**Règle de `automation.ecran_frigo_presence_horaire` :**

```
SI  (07h ≤ heure < 23h)  ET  (zone.home > 0 personne)
    → publier sur …/ecran/brightness  =  clamp( (lux − 1) × 0,25 + 1 , 1 , 3 )
SINON (nuit OU maison vide)
    → publier "0"  (écran éteint)
```

- **Déclencheurs** : 07h, 23h, changement de `zone.home`, démarrage HA,
  reconnexion MQTT de la tablette, et un `time_pattern` **toutes les 2 min**
  (ré-évalue la luminosité au fil de la journée).
- **Capteur de lumière** : `sensor.awtrix_0c0984_illuminance` (horloge
  **AWTRIX / Ulanzi** posée près du frigo). La tablette **n'a pas** de capteur
  de luminosité ambiante interne (son IIO n'expose qu'accéléromètre/gyro).
- **Courbe** : `(lux − 1) × 0,25 + 1`, bornée **1–3 %**. Oui, si peu : d'une
  part le capteur AWTRIX a une **plage minuscule** (≈1 la nuit → ≈9 en plein
  jour, jamais plus — calibrer la courbe sur la plage *réelle*, sinon l'écran
  semble « ne pas réagir »), d'autre part une dalle à 2-3 % suffit largement
  dans une cuisine. Ajustez pente et bornes à votre goût.

### Réveil / boost au toucher : service `screen-touch`

Un second service systemd (root, Python stdlib) lit les événements bruts du
digitizer (résolu par **nom** dans `/proc/bus/input/devices`, robuste aux
reboots) et réagit aux **vrais appuis** (pas au contact continu — une trace de
condensation sur la dalle ne doit pas compter) :

- écran **éteint** + appui → réveil à `WAKE_PCT` (30 %) — un invité peut lancer
  de la musique même quand tout le monde est « absent » ;
- écran **allumé** + appui → boost à `+BOOST_PCT` (+10 %) pour la lisibilité ;
- après `IDLE` (12 s) sans nouvel appui → retour à la luminosité de repos (0 si
  l'écran était éteint → il se ré-éteint tout seul) ;
- garde-fou `MAX_AWAKE` (600 s) contre un contact fantôme permanent.

---

## 6. Administration à distance

### SSH par clé (sans mot de passe)

Depuis le poste de dev :
```bash
ssh -i ~/.ssh/tab_fridge tab@192.168.8.12
```
- Clé **ed25519**, sans passphrase.
- **Pas de sudo** par cette clé (le sudo général demande le mot de passe) **sauf**
  `sudo /usr/local/bin/screen-power` (règle **NOPASSWD** dédiée).
- → `apt`, édition de fichiers root, install de services = **fait par l'utilisateur**
  en local.

### Bureau distant (RDP, pas VNC)

Sous **Wayland**, le partage d'écran passe par **`gnome-remote-desktop`** (RDP),
pas VNC. Accès : **`192.168.8.12:3389`**, utilisateur `tab`.

Configuration via `grdctl` (voir pièges §7) :
```bash
grdctl rdp enable
grdctl rdp set-tls-cert <cert.pem>     # certificat auto-signé à générer à la main
grdctl rdp set-tls-key  <key.pem>
grdctl rdp set-credentials             # interactif uniquement (getpass → pty requis)
```

#### ⚠️ Autologin = RDP qui recasse à chaque reboot (fix durable)

`gnome-remote-desktop` stocke les identifiants RDP dans le trousseau GNOME.
Avec l'**autologin**, PAM n'a pas de mot de passe à passer au trousseau →
`login.keyring` reste **verrouillé** à chaque boot → `grdctl status` affiche
`Username/Password: (empty)` et toute connexion RDP est refusée. Le
déverrouillage headless (`gnome-keyring-daemon --unlock`) **ne marche pas**
sur une session déjà ouverte.

**Fix durable (100 % SSH, sans écran)** : créer un trousseau par défaut **sans
mot de passe** (fichier en clair — compromis assumé pour un kiosque sur LAN) :

```bash
cd ~/.local/share/keyrings
printf '[keyring]\ndisplay-name=Default keyring\nctime=0\nmtime=0\nlock-on-idle=false\nlock-after=false\n' > Default_keyring.keyring
printf 'Default_keyring' > default
chmod 600 Default_keyring.keyring default
# Redémarrer le daemon (socket-activated, il revient tout seul)
pkill -f gnome-keyring-daemon
systemctl --user restart gnome-remote-desktop
grdctl rdp set-credentials        # re-poser les identifiants (interactif)
```

Ce trousseau se déverrouille **sans mot de passe à chaque boot** → le RDP
survit aux redémarrages. L'ancien `login.keyring` reste intact (chiffré).

---

## 7. Pièges rencontrés (et résolus)

| Symptôme | Cause | Solution |
|---|---|---|
| **Vue « ordinateur » au lieu de tablette** | Firefox/Linux déclare mal le tactile | **Chromium** (détecte le tactile) |
| **Events décalés de 2 h** | Session démarrée en **UTC** | Régler la tablette sur **`Europe/Paris`** (= fuseau HA) |
| **Écran ne s'éteint pas** | Dalle **DSI** ignore `bl_power` | `brightnessctl set 0` |
| **Écran reste noir au réveil** | `screen-power --restore` avait sauvegardé 0 | Valeurs **fixes** `set 0` / `set 100%` |
| **`wallpanel:` dans le dashboard sans effet** | Config atterrit dans la vue, pas à la racine | **Override par URL** dans `kiosk.sh` |
| **Pas de rotation d'écran** | `xrandr` n'existe pas sous Wayland | Réglages → Affichage, ou `monitors.xml` (+ copie `/var/lib/gdm3/.config/` pour l'écran de login) ; désactiver `iio-sensor-proxy` pour figer |
| **`grdctl` « Cannot autolaunch D-Bus »** | lancé en **sudo** → perd le bus de session | Sans sudo + exporter `XDG_RUNTIME_DIR` et `DBUS_SESSION_BUS_ADDRESS` |
| **RDP recasse à chaque reboot** | **Autologin** → trousseau `login` re-**verrouillé** au boot | Trousseau par défaut **en clair** (voir §6) → auto-déverrouillage, creds persistants |
| **`pkill -f chromium` tue la session SSH** | Le motif `chromium` matche aussi le shell SSH | `pkill -x chrome` / `pkill -x chromium` |
| **Clavier tactile jamais auto-affiché dans le navigateur** | Bug navigateurs (champs web ≠ focus GTK) ; et flags IME ignorés si Chromium tourne en XWayland | `--ozone-platform=wayland` + flags IME, puis **geste glisser-du-bas** (voir §3) |
| **F12 « bloqué par votre organisation »** | Effet du mode `--kiosk` (aucune policy réelle) | Basculer temporairement en `--start-maximized` |
| **Install snap interminable via l'App Center** | Téléchargement App Center peu fiable | `snap download <paquet>` (sans root) puis `sudo snap ack *.assert && sudo snap install *.snap` |
| **Luminosité « qui ne réagit pas »** | Courbe calibrée sur 0-100 alors que le capteur ne sort que 1-9 | Calibrer sur la **plage réelle** du capteur (historique HA) |

### Éditer un script sur la tablette : ne **jamais** faire coller un heredoc

Copier-coller d'un heredoc dans le terminal **corrompt** le fichier (saut de ligne
en tête → shebang absent → `Exec format error` 203 ; les `\` de continuation
sautent → « commande introuvable »).

**Méthode fiable** : transférer le fichier via **SSH + base64** (transfert exact)
dans `~/xxx.new`, puis :
```bash
sudo install -m 700 ~/xxx.new /usr/local/bin/xxx
```
Le service utilise `ExecStart=/bin/bash /usr/local/bin/screen-mqtt` (lancé via
`bash` → shebang indifférent). Garder `mosquitto_sub` sur **une seule ligne**.

---

## 8. Récapitulatif des entités HA

| Entité | Rôle |
|---|---|
| `switch.ecran_frigo` | Forcer l'écran ON/OFF (MQTT Discovery) |
| `button.relancer_kiosque_frigo` | Relancer le kiosque Chromium |
| `automation.ecran_frigo_presence_horaire` | Allumage présence + horaire + luminosité auto |
| `sensor.awtrix_0c0984_illuminance` | Capteur de lumière ambiante (externe, AWTRIX) |
| `zone.home` | Détection de présence à la maison |

---

*Installation documentée en juin 2026, mise à jour juillet 2026 (Wayland natif,
clavier tactile, RDP durable, vue Musique). Adaptez les IP, chemins et noms
d'entités à votre environnement.*
