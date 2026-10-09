import { html, LitElement } from "lit";
import styles from './editor.styles';

export class FamilyCalendarCardEditor extends LitElement {
    static styles = styles;

    connectedCallback() {
        super.connectedCallback();
        this.loadCustomElements();
    }

    async loadCustomElements() {
        // All of these must be registered for the editor to render. Checking
        // only ha-entity-picker is not enough: it is often already registered
        // globally, which would skip loading ha-textfield / ha-list-item and
        // leave the text fields and dropdown items invisible.
        if (customElements.get("ha-textfield")
            && customElements.get("ha-select")
            && customElements.get("ha-list-item")
            && customElements.get("ha-entity-picker")) {
            return;
        }
        try {
            const helpers = window.loadCardHelpers ? await window.loadCardHelpers() : null;
            if (helpers) {
                const card = await helpers.createCardElement({ type: "entities", entities: [] });
                await card.constructor.getConfigElement();
            } else if (customElements.get("hui-entities-card")) {
                await customElements.get("hui-entities-card").getConfigElement();
            }
        } catch (e) {
            console.warn("Family Calendar: editor component preload failed", e);
        }
        this.requestUpdate();
    }

    static get properties() {
        return {
            // `hass` is a public property set by Home Assistant.
            hass: {},
            // Internal editor state — never an attribute (Lit docs: use state).
            _config: { state: true },
        };
    }

    setConfig(config) {
        this._config = config;
    }

    // Langue de l'éditeur : celle de l'utilisateur Home Assistant. Français si
    // HA est en français, anglais sinon (la carte est publiée sur HACS).
    get _fr() {
        const lang = (this.hass && ((this.hass.locale && this.hass.locale.language) || this.hass.language)) || 'en';
        return String(lang).toLowerCase().startsWith('fr');
    }

    _t(fr, en) {
        return this._fr ? fr : en;
    }

    _viewOptions() {
        return [
            { value: 'Today', label: this._t('Aujourd’hui', 'Today') },
            { value: 'Tomorrow', label: this._t('Demain', 'Tomorrow') },
            { value: 'Week', label: this._t('Semaine', 'Week') },
            { value: 'Biweek', label: this._t('2 semaines', '2 weeks') },
            { value: 'Month', label: this._t('Mois', 'Month') },
        ];
    }

    render() {
        if (!this.hass || !this._config) {
            return html``;
        }
        const t = (fr, en) => this._t(fr, en);
        const calendars = this.getConfigValue('calendars') || [];

        return html`
            <div class="sk-editor">
                ${this.addExpansionPanel(t('Général', 'General'), html`
                    ${this.addSelectField('theme', t('Thème', 'Theme'), [
                        { value: 'skylight', label: 'Skylight' },
                        { value: 'homeassistant', label: 'Home Assistant' },
                        { value: 'familial', label: 'Familial' },
                    ], true, 'skylight')}
                    ${this.addTextField('title', t('Titre', 'Title'))}
                    ${this.addBooleanField('showTitle', t('Afficher le titre', 'Show title'), true)}
                    ${this.addSelectField('locale', t('Langue de la carte', 'Card language'), [
                        { value: 'en', label: 'English' },
                        { value: 'fr', label: 'Français' },
                        { value: 'de', label: 'Deutsch' },
                        { value: 'es', label: 'Español' },
                        { value: 'it', label: 'Italiano' },
                        { value: 'nl', label: 'Nederlands' },
                        { value: 'pt', label: 'Português' },
                    ], true)}
                    ${this.addHint(t('Langue des dates, boutons et textes de la carte.', 'Language for dates, buttons and card texts.'))}
                    ${this.addTextField('timeFormat', t('Format de l’heure', 'Time format'))}
                    ${this.addHint(t('Vide = suit votre profil Home Assistant (12 h ou 24 h). Sinon un format Luxon, ex. HH:mm ou h:mm a.', 'Empty = follows your Home Assistant profile (12 h or 24 h). Otherwise a Luxon format, e.g. HH:mm or h:mm a.'))}
                    ${this.addBooleanField('materialSymbols', t('Icônes Material Symbols', 'Material Symbols icons'))}
                    ${this.addHint(t('Nécessite l’intégration « Material Symbols ». Les calendriers et catégories affichent alors leur icône Material à la place de l’emoji (l’emoji reste enregistré dans le titre).', 'Requires the "Material Symbols" integration. Calendars and categories then show their Material icon instead of the emoji (the emoji is still saved in the title).'))}
                `, true)}

                ${this.addExpansionPanel(t('Calendriers', 'Calendars'), html`
                    ${calendars.map((calendar, index) => this.addExpansionPanel(
                        `${(calendar && (calendar.name || calendar.entity)) || t('Nouveau calendrier', 'New calendar')}`,
                        html`
                            ${this.addEntityPickerField('calendars.' + index + '.entity', t('Entité', 'Entity'), ['calendar'])}
                            ${this.addTextField('calendars.' + index + '.name', t('Nom affiché', 'Display name'))}
                            ${this.addHint(t('Vide = nom de l’entité dans Home Assistant.', 'Empty = the entity name from Home Assistant.'))}
                            ${this.addColorField('calendars.' + index + '.color', t('Couleur', 'Color'))}
                            ${this.addHint(t('« A » = couleur attribuée automatiquement.', '"A" = colour assigned automatically.'))}
                            ${this.addIconPickerField('calendars.' + index + '.icon', t('Icône', 'Icon'))}
                            ${this.addIconPickerField('calendars.' + index + '.iconMaterial', t('Icône Material Symbols', 'Material Symbols icon'))}
                            ${this.addHint(t('Utilisée à la place de l’icône ci-dessus quand « Icônes Material Symbols » est activé (ex. m3rf:home).', 'Used instead of the icon above when "Material Symbols icons" is on (e.g. m3rf:home).'))}
                            ${this.addBooleanField('calendars.' + index + '.initiallyHidden', t('Masqué au démarrage', 'Hidden on load'))}
                            ${this.addHint(t('Ses événements sont cachés jusqu’à ce qu’on active sa pastille de filtre.', 'Its events stay hidden until its filter chip is switched on.'))}
                            ${this.addBooleanField('calendars.' + index + '.allDayOnly', t('Calendrier d’information (journée entière)', 'Info calendar (all-day only)'))}
                            ${this.addHint(t('Crée des événements sans heure ni durée, ex. anniversaires.', 'Creates events with no time or duration, e.g. birthdays.'))}
                            ${this.addEmojiField('calendars.' + index + '.titleEmoji', t('Emoji devant les titres', 'Emoji before titles'))}
                            ${this.addHint(t('Affiché devant chaque titre de ce calendrier (affichage seulement), ex. 🎂.', 'Shown before every title of this calendar (display only), e.g. 🎂.'))}
                            <div class="sk-row">
                                ${index > 0 ? this.addButton(t('Monter', 'Move up'), 'mdi:arrow-up', () => this._moveCalendar(index, -1)) : ''}
                                ${index < calendars.length - 1 ? this.addButton(t('Descendre', 'Move down'), 'mdi:arrow-down', () => this._moveCalendar(index, 1)) : ''}
                                ${this.addButton(t('Supprimer', 'Remove'), 'mdi:trash-can', () => {
                                    const config = JSON.parse(JSON.stringify(this._config));
                                    config.calendars = (config.calendars || []).filter((c, i) => i !== index);
                                    this._config = config;
                                    this.dispatchConfigChangedEvent();
                                })}
                            </div>
                        `
                    ))}
                    ${this.addButton(t('Ajouter un calendrier', 'Add calendar'), 'mdi:plus', () => {
                        this.setConfigValue('calendars.' + calendars.length, {});
                    })}
                    ${this.addHint(t('L’ordre des calendriers fixe celui des pastilles de filtre et des événements.', 'Calendar order sets the order of the filter chips and events.'))}
                `)}

                ${this.addExpansionPanel(t('Catégories d’événements', 'Event categories'), html`
                    ${this.addHint(t('Choisir une catégorie dans le formulaire ajoute son emoji au début du titre de l’événement.', 'Picking a category in the event form adds its emoji to the start of the event title.'))}
                    ${this._effectiveCategories().map((cat, index) => this.addExpansionPanel(
                        `${(cat && cat.emoji) || ''} ${(cat && cat.label) || (t('Catégorie', 'Category') + ' ' + (index + 1))}`,
                        html`
                            ${this._renderEmojiPicker(cat && cat.emoji, (v) => this._writeCategories((arr) => {
                                if (!arr[index]) arr[index] = { emoji: '', label: '' };
                                arr[index].emoji = v;
                            }), t('Emoji (enregistré dans le titre)', 'Emoji (saved in the title)'))}
                            <div class="sk-field">
                                <label class="sk-label">${t('Nom', 'Label')}</label>
                                <input class="sk-input" type="text"
                                    .value="${(cat && cat.label) || ''}"
                                    @change="${(e) => this._writeCategories((arr) => {
                                        if (!arr[index]) arr[index] = { emoji: '', label: '' };
                                        arr[index].label = e.target.value;
                                    })}" />
                            </div>
                            <ha-icon-picker
                                .hass="${this.hass}"
                                label="${t('Icône Material Symbols', 'Material Symbols icon')}"
                                .value="${(cat && cat.icon) || ''}"
                                @value-changed="${(e) => this._writeCategories((arr) => {
                                    if (!arr[index]) arr[index] = { emoji: '', label: '' };
                                    arr[index].icon = e.detail.value;
                                })}"
                            ></ha-icon-picker>
                            ${this.addButton(t('Supprimer la catégorie', 'Remove category'), 'mdi:trash-can', () => this._writeCategories((arr) => {
                                arr.splice(index, 1);
                            }))}
                        `
                    ))}
                    <div class="sk-row">
                        ${this.addButton(t('Ajouter une catégorie', 'Add category'), 'mdi:plus', () => this._writeCategories((arr) => {
                            arr.push({ emoji: '', label: '' });
                        }))}
                        ${this.addButton(t('Catégories par défaut', 'Default categories'), 'mdi:restore', () => {
                            const config = JSON.parse(JSON.stringify(this._config));
                            config.eventCategories = this._defaultCategories();
                            this._config = config;
                            this.dispatchConfigChangedEvent();
                        })}
                    </div>
                `)}

                ${this.addExpansionPanel(t('Affichage', 'Display'), html`
                    ${this.addSelectField('defaultView', t('Vue au démarrage', 'Default view'), this._viewOptions(), true)}
                    ${this._renderViewsPicker()}
                    ${this.addSelectField('startingDay', t('Premier jour', 'Starting day'), [
                        { value: 'today', label: t('Aujourd’hui', 'Today') },
                        { value: 'tomorrow', label: t('Demain', 'Tomorrow') },
                        { value: 'yesterday', label: t('Hier', 'Yesterday') },
                        { value: 'monday', label: t('Lundi', 'Monday') },
                        { value: 'tuesday', label: t('Mardi', 'Tuesday') },
                        { value: 'wednesday', label: t('Mercredi', 'Wednesday') },
                        { value: 'thursday', label: t('Jeudi', 'Thursday') },
                        { value: 'friday', label: t('Vendredi', 'Friday') },
                        { value: 'saturday', label: t('Samedi', 'Saturday') },
                        { value: 'sunday', label: t('Dimanche', 'Sunday') },
                        { value: 'month', label: t('Début du mois', 'Start of month') },
                    ], true)}
                    ${this.addHint(t('Premier jour des vues Semaine, 2 semaines et Mois (lundi par défaut).', 'First day of the Week, 2 weeks and Month views (Monday by default).'))}
                    ${this.addBooleanField('showHeader', t('En-tête (date, heure, météo)', 'Header (date, time, weather)'), true)}
                    ${this.addBooleanField('showHeaderDate', t('Date dans l’en-tête', 'Date in header'), true)}
                    ${this.addBooleanField('showHeaderClock', t('Horloge dans l’en-tête', 'Clock in header'), true)}
                    ${this.addBooleanField('showNavigation', t('Flèches de navigation', 'Navigation arrows'), true)}
                    ${this.addBooleanField('swipeNavigation', t('Balayage tactile pour naviguer', 'Swipe to navigate (touch)'), true)}
                    ${this.addBooleanField('fillHeight', t('Remplir la hauteur de l’écran', 'Fill the screen height'))}
                    ${this.addHint(t('Étire la grille sur toute la hauteur (vue en panneau, tablette murale).', 'Stretches the grid to the full height (panel view, wall tablet).'))}
                    ${this.addBooleanField('compact', t('Mode compact', 'Compact mode'), true)}
                    ${this.addBooleanField('noCardBackground', t('Fond de carte transparent', 'Transparent card background'))}
                    ${this.addBooleanField('colorFullEvent', t('Événements entièrement colorés', 'Fully coloured events'), true)}
                    ${this.addHint(t('Sinon, seule une barre de couleur à gauche (thèmes Skylight et Home Assistant).', 'Otherwise only a coloured bar on the left (Skylight and Home Assistant themes).'))}
                `)}

                ${this.addExpansionPanel(t('Jours', 'Days'), html`
                    ${this.addBooleanField('showWeekDayText', t('Noms des jours (lun., mar.…)', 'Day names (Mon, Tue…)'), true)}
                    ${this.addBooleanField('hideWeekend', t('Masquer le week-end', 'Hide weekend'))}
                    ${this.addBooleanField('highlightWeekend', t('Teinter le week-end', 'Tint the weekend'))}
                    ${this._renderWeekendDayPicker()}
                    ${this.addColorField('weekendColor', t('Couleur du week-end', 'Weekend colour'))}
                    ${this.addHint(t('« A » = teinte qui s’adapte au mode clair ou sombre.', '"A" = a shade that adapts to light or dark mode.'))}
                    ${this.addBooleanField('hideDaysWithoutEvents', t('Masquer les jours sans événement (sauf aujourd’hui)', 'Hide days without events (except today)'))}
                    ${this.addBooleanField('hideTodayWithoutEvents', t('Masquer aussi aujourd’hui s’il est vide', 'Also hide today when empty'))}
                    ${this.addTextField('maxDayEvents', t('Événements maximum par jour (0 = illimité)', 'Maximum events per day (0 = unlimited)'), 'number', 0)}
                    ${this.addHint(t('Les suivants sont regroupés en « +N ».', 'The rest are grouped as "+N".'))}
                `)}

                ${this.addExpansionPanel(t('Événements', 'Events'), html`
                    ${this.addSelectField('multiDayMode', t('Événements sur plusieurs jours', 'Multi-day events'), [
                        { value: 'banner', label: t('Bandeau continu', 'Continuous banner') },
                        { value: 'default', label: t('Un bloc par jour', 'One block per day') },
                        { value: 'multiple', label: t('Blocs répétés', 'Repeated blocks') },
                        { value: 'single', label: t('Premier jour seulement', 'First day only') },
                    ], true, 'banner')}
                    ${this.addBooleanField('showTime', t('Afficher l’heure', 'Show time'))}
                    ${this.addBooleanField('showEventTitle', t('Afficher le titre', 'Show title'), true)}
                    ${this.addBooleanField('showLocation', t('Afficher le lieu', 'Show location'), true)}
                    ${this.addBooleanField('showDescription', t('Afficher la description', 'Show description'))}
                    ${this.addBooleanField('hidePastEvents', t('Masquer les événements passés', 'Hide past events'))}
                    ${this.addBooleanField('hideAllDayEvents', t('Masquer les événements « journée entière »', 'Hide all-day events'))}
                    ${this.addTextField('maxEvents', t('Événements maximum au total (0 = illimité)', 'Maximum events in total (0 = unlimited)'), 'number', 0)}
                    <div class="sk-subtitle">${t('Fenêtre de détail', 'Details window')}</div>
                    ${this.addBooleanField('showDate', t('Afficher la date', 'Show date'))}
                    ${this.addBooleanField('showCalendarName', t('Afficher le nom du calendrier', 'Show calendar name'))}
                `)}

                ${this.addExpansionPanel(t('Création d’événements', 'Event creation'), html`
                    ${this.addEntityPickerField('defaultCalendar', t('Calendrier par défaut', 'Default calendar'), ['calendar'])}
                    ${this.addHint(t('Présélectionné dans le formulaire de création.', 'Pre-selected in the create form.'))}
                    <div class="sk-row sk-row-fields">
                        ${this.addTextField('slotStartHour', t('Première heure proposée', 'First hour offered'), 'number', 7)}
                        ${this.addTextField('slotEndHour', t('Dernière heure proposée', 'Last hour offered'), 'number', 22)}
                    </div>
                    ${this.addBooleanField('showLocationInForm', t('Champ « lieu » dans le formulaire', 'Location field in the form'), true)}
                    ${this.addTextField('googleApiKey', t('Clé API Google Places', 'Google Places API key'), 'password')}
                    ${this.addHint(t('Active la saisie semi-automatique du lieu. Sans clé, le lieu est un simple champ texte.', 'Enables location autocomplete. Without a key the location is a plain text field.'))}
                    <div class="sk-subtitle">${t('Répétitions hors vacances', 'Recurrences outside holidays')}</div>
                    ${this.addEntityPickerField('vacationCalendar', t('Calendrier des vacances scolaires', 'School holidays calendar'), ['calendar'])}
                    ${this.addEntityPickerField('holidayCalendar', t('Calendrier des jours fériés', 'Public holidays calendar'), ['calendar'])}
                    ${this.addHint(t('Ajoute les cases « Hors vacances scolaires » et « Hors jours fériés » aux événements répétés : leurs occurrences tombant dans ces périodes sont masquées sur la carte.', 'Adds "Skip school holidays" and "Skip public holidays" checkboxes to recurring events: occurrences falling in those periods are hidden on the card.'))}
                `)}

                ${this.addExpansionPanel(t('Météo', 'Weather'), html`
                    ${this.addEntityPickerField('weather.entity', t('Entité météo', 'Weather entity'), ['weather'])}
                    ${this.addHint(t('Détectée automatiquement si vide.', 'Auto-detected when empty.'))}
                    ${this.addBooleanField('showWeather', t('Prévisions dans les jours', 'Forecast in the days'), true)}
                    ${this.addBooleanField('showCurrentWeather', t('Météo actuelle dans l’en-tête', 'Current weather in the header'))}
                    ${this.addBooleanField('weather.showCondition', t('Icône du temps', 'Condition icon'), true)}
                    ${this.addBooleanField('weather.showTemperature', t('Température', 'Temperature'))}
                    ${this.addBooleanField('weather.showLowTemperature', t('Température minimale', 'Low temperature'))}
                    ${this.addBooleanField('weather.roundTemperature', t('Arrondir les températures', 'Round temperatures'))}
                    ${this.addBooleanField('weather.useTwiceDaily', t('Prévision biquotidienne', 'Twice-daily forecast'))}
                    ${this.addHint(t('Pour les entités météo sans prévision journalière.', 'For weather entities without a daily forecast.'))}
                `)}

                ${this.addExpansionPanel(t('IA et écriture manuscrite', 'AI & handwriting'), html`
                    ${this.addBooleanField('handwriting', t('Écriture manuscrite sur tablette', 'Handwriting on tablets'), true)}
                    ${this.addHint(t('Sur tablette, le formulaire de création devient une zone d’écriture au doigt ou au stylet. Désactiver pour toujours taper au clavier.', 'On a tablet the create form becomes a finger/stylus writing area. Turn off to always type on the keyboard.'))}
                    ${this.addSelectField('aiProvider', t('Moteur de lecture', 'Recognition engine'), [
                        { value: 'gemini', label: 'Google Gemini' },
                        { value: 'claude', label: 'Anthropic Claude' },
                    ], true)}
                    ${this.addHint(t('Automatique si une seule clé est renseignée.', 'Automatic when only one key is set.'))}
                    ${this.addTextField('geminiApiKey', t('Clé API Google Gemini', 'Google Gemini API key'), 'password')}
                    ${this.addTextField('geminiModel', t('Modèle Gemini', 'Gemini model'), 'text', 'gemini-2.5-flash')}
                    ${this.addTextField('claudeApiKey', t('Clé API Anthropic Claude', 'Anthropic Claude API key'), 'password')}
                    ${this.addTextField('claudeModel', t('Modèle Claude', 'Claude model'), 'text', 'claude-opus-4-8')}
                    <div class="sk-warning">
                        ${t('⚠️ Ces clés sont enregistrées dans la configuration du tableau de bord : tout utilisateur qui l’ouvre peut les lire. Restreignez-les côté fournisseur (référent HTTP de votre Home Assistant, plafond de dépense).', '⚠️ These keys are stored in the dashboard configuration: any user who opens it can read them. Restrict them on the provider side (HTTP referrer of your Home Assistant, spending cap).')}
                    </div>
                `)}
            </div>
        `;
    }

    // Vues proposées dans la barre de la carte : cases à cocher (enregistre une
    // LISTE). L'ancien champ texte à virgules réécrivait la liste en chaîne.
    // Aucune case = clé supprimée = toutes les vues (jamais une liste vide, qui
    // laisserait la carte sans bouton de vue).
    _renderViewsPicker() {
        const all = this._viewOptions();
        const cfg = this._config && this._config.views;
        const current = typeof cfg === 'string'
            ? cfg.split(',').map((v) => v.trim()).filter(Boolean)
            : (Array.isArray(cfg) && cfg.length ? cfg : all.map((v) => v.value));
        const toggle = (value) => {
            const set = new Set(current);
            if (set.has(value)) {
                set.delete(value);
            } else {
                set.add(value);
            }
            const next = all.map((v) => v.value).filter((v) => set.has(v));
            const config = JSON.parse(JSON.stringify(this._config));
            if (!next.length || next.length === all.length) {
                delete config.views;
            } else {
                config.views = next;
            }
            this._config = config;
            this.dispatchConfigChangedEvent();
        };
        return html`
            <div class="sk-field">
                <label class="sk-label">${this._t('Vues proposées', 'Available views')}</label>
                <div class="sk-day-picker">
                    ${all.map((v) => html`
                        <button type="button"
                            class="sk-day-btn ${current.includes(v.value) ? 'selected' : ''}"
                            @click="${() => toggle(v.value)}">${v.label}</button>
                    `)}
                </div>
            </div>
        `;
    }

    addHint(text) {
        return html`<p class="sk-hint">${text}</p>`;
    }

    addTextField(name, label, type, defaultValue) {
        // Native <input> instead of ha-textfield: ha-textfield is not reliably
        // registered in every HA build's card-editor context (it would render
        // invisible), whereas a native input always renders.
        return html`
            <div class="sk-field">
                <label class="sk-label">${label ?? name}</label>
                <input
                    class="sk-input"
                    name="${name}"
                    type="${type ?? 'text'}"
                    .value="${String(this.getConfigValue(name, defaultValue) ?? '')}"
                    @change="${this._valueChanged}"
                />
            </div>
        `;
    }

    addEntityPickerField(name, label, includeDomains, defaultValue) {
        return html`
            <ha-entity-picker
                .hass="${this.hass}"
                name="${name}"
                label="${label ?? name}"
                .value="${this.getConfigValue(name, defaultValue)}"
                .includeDomains="${includeDomains}"
                allow-custom-entity
                @value-changed="${this._valueChanged}"
            ></ha-entity-picker>
        `;
    }

    addIconPickerField(name, label, defaultValue) {
        return html`
            <ha-icon-picker
                .hass="${this.hass}"
                name="${name}"
                label="${label ?? name}"
                .value="${this.getConfigValue(name, defaultValue)}"
                @value-changed="${this._valueChanged}"
            ></ha-icon-picker>
        `;
    }

    addSelectField(name, label, options, clearable, defaultValue) {
        return html`
            <ha-select
                naturalMenuWidth
                name="${name}"
                label="${label ?? name}"
                .value="${this.getConfigValue(name, defaultValue)}"
                .clearable="${clearable ?? false}"
                @selected="${this._valueChanged}"
                @closed="${(event) => event.stopPropagation()}"
            >
                ${(options ?? []).map((option) => html`
                    <ha-list-item value="${option.value}">${option.label}</ha-list-item>
                `)}
            </ha-select>
        `;
    }

    addBooleanField(name, label, defaultValue) {
        return html`
            <ha-formfield label="${label ?? name}">
                <ha-switch
                    name="${name}"
                    .checked="${!!this.getConfigValue(name, defaultValue)}"
                    @change="${this._valueChanged}"
                ></ha-switch>
            </ha-formfield>
        `;
    }

    // Color picker as a palette of preset swatches (plus an "Auto" option that
    // clears the value so the card auto-assigns a pastel). If the current value
    // isn't in the palette (e.g. a custom hex set via YAML), it's shown as an
    // extra selected swatch so nothing is silently lost.
    addColorField(name, label, defaultValue) {
        const palette = [
            '#D50000', '#E67C73', '#F4511E', '#F6BF26',
            '#33B679', '#0B8043', '#039BE5', '#3F51B5',
            '#7986CB', '#8E24AA', '#E91E63', '#616161',
        ];
        const current = String(this.getConfigValue(name, defaultValue) ?? '').trim();
        const currentLc = current.toLowerCase();
        const inPalette = palette.some((c) => c.toLowerCase() === currentLc);
        return html`
            <div class="sk-field">
                <label class="sk-label">${label ?? name}</label>
                <div class="sk-swatches">
                    <button type="button" class="sk-swatch sk-swatch-auto ${current === '' ? 'selected' : ''}"
                        title="${this._t('Automatique', 'Auto')}" @click="${() => this.setConfigValue(name, '')}">A</button>
                    ${palette.map((c) => html`
                        <button type="button"
                            class="sk-swatch ${currentLc === c.toLowerCase() ? 'selected' : ''}"
                            style="background:${c}" title="${c}"
                            @click="${() => this.setConfigValue(name, c)}"></button>
                    `)}
                    ${current !== '' && !inPalette ? html`
                        <button type="button" class="sk-swatch selected"
                            style="background:${current}" title="${current}"></button>
                    ` : ''}
                </div>
            </div>
        `;
    }

    // Emoji are plain Unicode characters drawn by the system font — no assets.
    _emojiPalette() {
        return [
            '🏃', '⚽', '🏀', '🎾', '🏊', '🚴', '⛷️', '🏋️',
            '🩺', '💊', '🦷', '🏥', '🧠', '🩹',
            '🎓', '📚', '✏️', '🎒', '🔬',
            '💼', '🖥️', '📞', '📅', '⏰', '✉️',
            '🍽️', '🍕', '☕', '🍷', '🎂', '🍔',
            '🚐', '✈️', '🏖️', '🏕️', '🚗', '🚂', '⛵',
            '🎉', '🎁', '🎵', '🎬', '🎨', '🎮', '🎤',
            '🛒', '🧹', '🧺', '🔧', '🏠', '🐶', '🐱', '🌳',
            '❤️', '⭐', '👶', '💆', '💇', '🙏', '🎯', '📷',
        ];
    }

    // A tap-to-select emoji palette (no typing) plus a free-text fallback for any
    // emoji not in the palette. `onPick(emoji)` receives the chosen value.
    _renderEmojiPicker(current, onPick, label) {
        const palette = this._emojiPalette();
        const cur = String(current ?? '').trim();
        const inPalette = palette.includes(cur);
        return html`
            <div class="sk-field">
                ${label ? html`<label class="sk-label">${label}</label>` : ''}
                <div class="sk-swatches">
                    ${palette.map((e) => html`
                        <button type="button"
                            class="sk-swatch sk-emoji-swatch ${cur === e ? 'selected' : ''}"
                            title="${e}" @click="${() => onPick(e)}">${e}</button>
                    `)}
                    ${cur !== '' && !inPalette ? html`
                        <button type="button" class="sk-swatch sk-emoji-swatch selected" title="${cur}">${cur}</button>
                    ` : ''}
                </div>
                <input class="sk-input" type="text" placeholder="Custom emoji"
                    .value="${cur}"
                    @change="${(e) => onPick(e.target.value)}" />
            </div>
        `;
    }

    addEmojiField(name, label, defaultValue) {
        const current = this.getConfigValue(name, defaultValue);
        return this._renderEmojiPicker(current, (v) => this.setConfigValue(name, v), label ?? name);
    }

    // The built-in category list, shown in the editor when the card has no
    // explicit `eventCategories` (must mirror the card's DEFAULT_CATEGORIES).
    _defaultCategories() {
        return [
            { emoji: '🏃', label: 'Sport', icon: 'm3rf:directions-run' },
            { emoji: '🩺', label: 'Médical', icon: 'm3rf:stethoscope' },
            { emoji: '🎓', label: 'École', icon: 'm3rf:school' },
            { emoji: '💼', label: 'Travail', icon: 'm3rf:business-center' },
            { emoji: '🍽️', label: 'Repas', icon: 'm3rf:restaurant' },
            { emoji: '🚐', label: 'Vacances', icon: 'm3rf:luggage' },
            { emoji: '🎉', label: 'Fête', icon: 'm3rf:celebration' },
            { emoji: '🛒', label: 'Courses', icon: 'm3rf:shopping-cart' },
        ];
    }

    // The list the editor shows: the configured one, or the defaults as a
    // starting point so the user always sees editable rows.
    _effectiveCategories() {
        const cats = this._config && this._config.eventCategories;
        return Array.isArray(cats) ? cats : this._defaultCategories();
    }

    // Any edit/remove materialises the effective list into the config (so editing
    // a shown-default actually writes all of them), then applies the change.
    _writeCategories(mutate) {
        const config = JSON.parse(JSON.stringify(this._config));
        const arr = Array.isArray(config.eventCategories)
            ? config.eventCategories
            : JSON.parse(JSON.stringify(this._defaultCategories()));
        mutate(arr);
        config.eventCategories = arr;
        this._config = config;
        this.dispatchConfigChangedEvent();
    }

    addExpansionPanel(header, content, expanded) {
        return html`
            <ha-expansion-panel
                header="${header}"
                .expanded="${expanded ?? false}"
                outlined="true"
            >
                <div style="display: flex; flex-direction: column">
                    ${content}
                </div>
            </ha-expansion-panel>
        `;
    }

    addButton(text, icon, clickFunction) {
        return html`
            <ha-button
                @click="${clickFunction}"
            >
                <ha-icon icon="${icon}"></ha-icon>
                ${text}
            </ha-button>
        `;
    }

    _valueChanged(event) {
        const target = event.target;
        if (!target || !target.attributes.name) return;
        const name = target.attributes.name.value;

        let value;
        if (target.tagName === 'HA-SWITCH') {
            value = target.checked;
        } else if (event.detail && event.detail.value !== undefined) {
            value = event.detail.value;
        } else {
            value = target.value ?? '';
        }

        // Store numeric text fields as numbers, not strings
        if ((target.tagName === 'HA-TEXTFIELD' || target.tagName === 'INPUT')
            && target.getAttribute('type') === 'number'
            && value !== '' && value != null) {
            const num = Number(value);
            if (!Number.isNaN(num)) value = num;
        }

        // Skip no-op writes (avoids churn / dirtying the dashboard on open)
        const current = this.getConfigValue(name);
        if (current === value) return;

        this.setConfigValue(name, value);
    }

    getConfigValue(key, defaultValue) {
        if (!this._config) {
            return '';
        }

        defaultValue = defaultValue ?? '';

        return key.split('.').reduce((o, i) => o[i] ?? defaultValue, this._config) ?? defaultValue;
    }

    // Day-of-week picker for `weekendDays` (Luxon weekday numbers Mon=1 … Sun=7).
    _renderWeekendDayPicker() {
        const locale = (this._config && this._config.locale) || 'en';
        const cfg = this._config && this._config.weekendDays;
        const selected = (Array.isArray(cfg) && cfg.length) ? cfg.map((d) => parseInt(d)) : [6, 7];
        const fmt = new Intl.DateTimeFormat(locale, { weekday: 'short', timeZone: 'UTC' });
        // 2024-01-01 is a Monday → weekday wd maps to Jan (wd).
        const days = [1, 2, 3, 4, 5, 6, 7].map((wd) => ({
            wd,
            label: fmt.format(new Date(Date.UTC(2024, 0, wd))),
        }));
        return html`
            <div class="sk-field">
                <label class="sk-label">${this._t('Jours de week-end', 'Weekend days')}</label>
                <div class="sk-day-picker">
                    ${days.map((d) => html`
                        <button type="button"
                            class="sk-day-btn ${selected.includes(d.wd) ? 'selected' : ''}"
                            @click="${() => this._toggleWeekendDay(d.wd)}">${d.label}</button>
                    `)}
                </div>
            </div>
        `;
    }

    _toggleWeekendDay(wd) {
        const config = JSON.parse(JSON.stringify(this._config));
        const cur = (Array.isArray(config.weekendDays) && config.weekendDays.length)
            ? config.weekendDays.map((d) => parseInt(d))
            : [6, 7];
        config.weekendDays = (cur.includes(wd) ? cur.filter((d) => d !== wd) : [...cur, wd]).sort((a, b) => a - b);
        this._config = config;
        this.dispatchConfigChangedEvent();
    }

    // Swap a calendar with its neighbour to reorder the list (dir = -1 up / +1 down).
    _moveCalendar(index, dir) {
        const config = JSON.parse(JSON.stringify(this._config));
        const arr = config.calendars;
        const j = index + dir;
        if (!Array.isArray(arr) || j < 0 || j >= arr.length) {
            return;
        }
        const tmp = arr[index];
        arr[index] = arr[j];
        arr[j] = tmp;
        this._config = config;
        this.dispatchConfigChangedEvent();
    }

    setConfigValue(key, value) {
        const config = JSON.parse(JSON.stringify(this._config));
        const keyParts = key.split('.');
        const lastKeyPart = keyParts.pop();
        const lastObject = keyParts.reduce((objectPart, keyPart) => {
            if (!objectPart[keyPart]) {
                objectPart[keyPart] = {};
            }
            return objectPart[keyPart];
        }, config);
        if (value === '') {
            delete lastObject[lastKeyPart];
        } else {
            lastObject[lastKeyPart] = value;
        }
        this._config = config;

        this.dispatchConfigChangedEvent();
    }

    dispatchConfigChangedEvent() {
        const configChangedEvent = new CustomEvent("config-changed", {
            detail: { config: this._config },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(configChangedEvent);
    }
}
