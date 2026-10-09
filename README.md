# Family Calendar Card

[![en](https://img.shields.io/badge/lang-English-blue)](README.md) [![fr](https://img.shields.io/badge/lang-Fran%C3%A7ais-blue)](README.fr.md)

A family calendar card for Home Assistant. Displays events from multiple calendars with a touchscreen-friendly interface, three themes, weather integration, and full event management (create, edit, delete) — designed for wall-mounted tablets as much as for phones and desktops.

> **Renamed in v2.0.0** (was *Skylight Family Calendar Card*). The card type is `custom:family-calendar-card`. Dashboards still using `custom:skylight-family-calendar-card` keep working — the old type is kept as a backward-compatible alias.
>
> ⚠️ **Upgrading from before the rename?** HACS may leave a **duplicate Lovelace resource** (the old `ha-skylight-family-calendar-card` one), which serves a stale copy that overrides the update. **Fix:** go to **Settings → Dashboards → (⋮ top-right) → Resources**, delete the entry pointing to `/hacsfiles/ha-skylight-family-calendar-card/…`, keep the `/hacsfiles/family-calendar-card/…` one, then hard-reload (`Ctrl+Shift+R`).

## Upgrading to 3.0

Version 3.0 removes options that no longer had any effect or contradicted the card. **Nothing breaks**: an unknown option left in your YAML is simply ignored. Only the features listed below are gone.

| Removed option | Why | What to do |
|---|---|---|
| `days` | Ignored since views were introduced: the selected view always sets the number of days | Use `defaultView` / `views` |
| `aiQuickAdd`, `aiTaskEntity` | The AI text quick add was removed from the interface a long time ago — these options did nothing | Nothing — handwriting recognition (`geminiApiKey` / `claudeApiKey`) is unchanged |
| `actions` | Made every tap fire a custom action and silently disabled event editing | Nothing |
| `showLegend`, `legendToggle`, `calendars[].hideInLegend` | Duplicated the filter chips, which are always shown and already toggle each calendar | Use the filter chips |
| `startingDayOffset` | Undocumented; it also shifted the *Today* and *Tomorrow* views, contradicting their names | Use `startingDay` |

Also changed in 3.0:
- Editing a recurring event now offers **"This event only"** or **"This and following events"** (like Home Assistant's own UI). The former *"All events"* rewrote the series start date from the clicked occurrence, wiping past occurrences.
- The visual editor is reorganised and follows your Home Assistant language (French or English).

## Preview — "familial" theme

Month view on a desktop / wall-mounted tablet:

![Month view — desktop](examples/screenshots/familial_desktop.png)

Month view on mobile (Samsung-Calendar style — coloured dots + a tap-to-open day panel):

<img src="examples/screenshots/familial_mobile.png" width="320" alt="Month view — mobile">

## Features

### Event management
- **Create, edit and delete** events directly from the card (no external helpers needed).
- **✍️ Handwriting recognition** (optional): with a `geminiApiKey` **or** `claudeApiKey`, the create dialog becomes a **writing area** on touch tablets — write "dentist 9am" with a finger or stylus, tap **Create**, and the AI (Google Gemini or Anthropic Claude) reads it in the background and creates the event with title, time and duration. On desktop and phones the form stays keyboard-only.
- **Simple forms**: title, start, duration presets and location — everything else lives in a collapsible **Advanced options** drawer (end date, recurrence, reminder), available in **both** the keyboard and the handwriting dialogs.
- **All-day events**, including multi-day ones.
- **Recurrence**: daily, weekly, monthly, yearly — with interval, day selection and end options.
- **Skip school / public holidays** (optional): a recurring event can skip the occurrences that fall during school holidays or on public holidays (see `vacationCalendar` / `holidayCalendar`).
- **Event categories**: a category picker prepends an emoji to the title, visible everywhere — including the Google Calendar app.
- **🔔 Notification markers** with a reminder lead time, for Home Assistant voice/phone automations.
- **Google Places autocomplete** for the location field (optional, requires an API key).

### Calendar display
- Header with date, time and current weather.
- **Filter chips** to show/hide each calendar (the familial theme splits them into *Members* and *Categories*).
- Views: Today, Tomorrow, Week, 2 weeks, Month — the selected view is remembered.
- Weather forecast per day, with auto-detection of the weather entity.
- Navigation arrows, and **swipe left/right** on touch screens.
- **Merged multi-day events**: trips and holidays display as a continuous banner across days (Google Calendar style).
- **12 h / 24 h** times following your Home Assistant profile (or forced with `timeFormat`).

### Themes
- **Skylight**: the original Skylight-inspired look.
- **Home Assistant**: native look that follows your HA theme (dark mode supported).
- **Familial**: clean redesign with explicit light/dark tokens — opaque panel, tinted event cards with a coloured left bar, accent "today" pill, weekend tint, and filter chips split into **Members** (round dots) / **Categories** (square dots). Calendars are grouped automatically (writable person calendars → members; all-day/holiday calendars → categories); override per calendar with `group: member` or `group: category`. With `fillHeight`, the month grid adapts **per cell**: a roomy day shows a detailed card, a tight day collapses to a single line and overflow becomes a `+N` chip — so the whole month fits one screen.

### Mobile month view
- Google-Agenda-style month view on phones: compact grid with **coloured event dots**.
- **Tap a day** to show its events in a panel below the grid.

### Configuration
- Full **visual editor**, organised in nine panels, in French or English following your Home Assistant language.
- 7 card languages (en, fr, de, es, it, nl, pt).
- HACS compatible.

## Installation

### HACS (recommended)

1. Open HACS in Home Assistant
2. Click the three-dots menu and select **Custom repositories**
3. Add `https://github.com/tienou/family-calendar-card` with category **Dashboard**
4. Install **Family Calendar Card**
5. Reload your browser

### Manual

1. Download `skylight-family-calendar-card.js` from the [latest release](https://github.com/tienou/family-calendar-card/releases)
2. Copy it to `config/www/skylight-family-calendar-card.js`
3. Add the resource in your dashboard:

```yaml
resources:
  - url: /local/skylight-family-calendar-card.js
    type: module
```

### 📺 Wall display / kiosk (fridge tablet)

Running the card full-time on a wall- or fridge-mounted tablet? See the
[**fridge tablet kiosk guide**](docs/tablette-frigo.md) — a complete real-world
setup: Lenovo IdeaPad Duet 3i under Ubuntu, Chromium kiosk, screen on/off driven
by Home Assistant over MQTT (presence + schedule), adaptive brightness, touch
keyboard and remote admin (SSH/RDP), with every gotcha encountered.

## Configuration

### Basic example

```yaml
type: custom:family-calendar-card
title: Family Calendar
locale: en
defaultView: Week
startingDay: monday
weather:
  entity: weather.home
  showCondition: true
  showTemperature: true
  showLowTemperature: true
calendars:
  - entity: calendar.family
    name: Family
    color: "#4A90E2"
  - entity: calendar.work
    name: Work
    color: "#E27D4A"
```

### General options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `calendars` | list | required | Calendar entities to display (see *Calendar options*) |
| `theme` | string | `skylight` | `skylight`, `homeassistant` or `familial` |
| `title` | string | – | Card title |
| `showTitle` | boolean | `true` | Show the card title |
| `locale` | string | `en` | Card language: `en`, `fr`, `de`, `es`, `it`, `nl`, `pt` |
| `timeFormat` | string | auto | Luxon time format, e.g. `HH:mm` (24 h) or `h:mm a` (12 h, "5:45 PM"). Unset: follows your Home Assistant **Profile → Time format** |
| `multiDayTimeFormat` | string | auto | Same, for multi-day events, e.g. `d LLL HH:mm` |
| `dateFormat` | string | `cccc d LLLL yyyy` | Date format in the event details window |
| `dayFormat` | string | – | Luxon format for the day headers |
| `materialSymbols` | boolean | `false` | Use [Material Symbols](https://github.com/beecho01/material-symbols) icons: calendars show their `iconMaterial` and categories their `icon` (requires the Material Symbols integration) |
| `texts` | object | – | Override any interface text (see *Localization*) |

### Display options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `defaultView` | string | `Week` | View on load: `Today`, `Tomorrow`, `Week`, `Biweek`, `Month` |
| `views` | list | all | View buttons shown, e.g. `[Week, Month]` |
| `startingDay` | string | `monday` | First day of the Week / 2 weeks / Month views: a weekday, `today`, `tomorrow`, `yesterday` or `month` |
| `showHeader` | boolean | `true` | Header with date, time and weather |
| `showHeaderDate` | boolean | `true` | Date in the header |
| `showHeaderClock` | boolean | `true` | Clock in the header |
| `showNavigation` | boolean | `true` | Navigation arrows |
| `swipeNavigation` | boolean | `true` | Swipe left/right on touch screens to change period |
| `fillHeight` | boolean | `false` | Stretch the grid to the full screen height (panel view, wall tablet) |
| `compact` | boolean | `true` | Compact spacing |
| `noCardBackground` | boolean | `false` | Transparent card background |
| `colorFullEvent` | boolean | `true` | Fully coloured events (otherwise a coloured left bar — Skylight / Home Assistant themes) |
| `showWeekDayText` | boolean | `true` | Day names above the columns |
| `hideWeekend` | boolean | `false` | Hide Saturday and Sunday |
| `highlightWeekend` | boolean | `false` | Tint the weekend cells |
| `weekendDays` | list | `[6, 7]` | Weekdays counted as weekend (Mon=1 … Sun=7) |
| `weekendColor` | string | auto | Weekend tint colour (auto adapts to light/dark) |
| `hideDaysWithoutEvents` | boolean | `false` | Hide days without events (except today) |
| `hideTodayWithoutEvents` | boolean | `false` | Also hide today when empty |
| `maxDayEvents` | number | `0` | Maximum events per day, the rest grouped as `+N` (0 = unlimited) |
| `columns` | object | – | Columns per screen size: `extraLarge`, `large`, `medium`, `small`, `extraSmall` |
| `floatingButton` | object | – | Floating action button — see [Floating action button](#-floating-action-button) |

### Event options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `multiDayMode` | string | `banner` | Multi-day events: `banner` (continuous strip), `default`, `multiple`, `single` |
| `showTime` | boolean | `false` | Show the event time |
| `showEventTitle` | boolean | `true` | Show the event title |
| `showLocation` | boolean | `true` | Show the location |
| `showDescription` | boolean | `false` | Show the description |
| `showDate` | boolean | `false` | Show the date in the details window |
| `showCalendarName` | boolean | `false` | Show the calendar name in the details window |
| `hidePastEvents` | boolean | `false` | Hide past events |
| `hideAllDayEvents` | boolean | `false` | Hide all-day events |
| `maxEvents` | number | `0` | Maximum events in total (0 = unlimited) |
| `combineSimilarEvents` | boolean | `false` | Merge identical events from several calendars |
| `stripTitlePrefixes` | list | `[]` | Filler prefixes removed from the **start** of titles (display only), e.g. `["Appointment", "Call"]`. A following connector and a `:`/`-` separator are dropped too. Never blanks a title |
| `filter` | string | – | Regex: hide events whose title matches |
| `filterText` | string | – | Regex: text removed from titles (display only) |
| `replaceTitleText` | object | – | Text replacements in titles, e.g. `{ "Dr ": "Doctor " }` |
| `updateInterval` | number | `60` | Refresh interval, in seconds |

### Event creation options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `defaultCalendar` | string | – | Calendar pre-selected in the create form |
| `slotStartHour` / `slotEndHour` | number | `7` / `22` | Range of hours offered by the time picker |
| `showLocationInForm` | boolean | `true` | Location field in the forms |
| `googleApiKey` | string | – | Google Places API key for location autocomplete |
| `locationLink` | string | Google Maps | Base URL of the location link (`http(s)` only) |
| `vacationCalendar` | string | – | School-holidays calendar. Adds a **Skip school holidays** checkbox to recurring events: occurrences falling in a holiday period are hidden on the card |
| `holidayCalendar` | string | – | Public-holidays calendar. Adds a **Skip public holidays** checkbox, same principle |
| `eventCategories` | list | 8 defaults | Event categories — see [Event categories](#event-categories) |
| `handwriting` | boolean | `true` | Handwriting area on touch tablets (needs an AI key). `false` = always the keyboard form |
| `geminiApiKey` | string | – | Google Gemini key → enables handwriting recognition |
| `geminiModel` | string | `gemini-2.5-flash` | Gemini model |
| `claudeApiKey` | string | – | Anthropic Claude key → handwriting recognition via Claude |
| `claudeModel` | string | `claude-opus-4-8` | Claude model (e.g. `claude-haiku-4-5`, cheaper and faster) |
| `aiProvider` | string | auto | Force `gemini` or `claude` (automatic with a single key; Claude preferred with both) |

### Weather options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `weather.entity` | string | auto | Weather entity (auto-detected when empty) |
| `showWeather` | boolean | `true` | Forecast in the day cells |
| `showCurrentWeather` | boolean | `false` | Current weather in the header |
| `weather.showCondition` | boolean | `true` | Condition icon |
| `weather.showTemperature` | boolean | `false` | Temperature |
| `weather.showLowTemperature` | boolean | `false` | Low temperature |
| `weather.roundTemperature` | boolean | `false` | Round temperatures |
| `weather.useTwiceDaily` | boolean | `false` | Twice-daily forecast, for entities without a daily one |

### Calendar options

| Option | Type | Description |
|--------|------|-------------|
| `entity` | string | Calendar entity ID (required) |
| `name` | string | Display name (defaults to the entity's friendly name) |
| `color` | string | Colour (a pastel is auto-assigned when unset) |
| `icon` | string | MDI icon |
| `iconMaterial` | string | Material Symbols icon used instead of `icon` when `materialSymbols` is on (e.g. `m3rf:home`) |
| `initiallyHidden` | boolean | Events hidden on load, until the calendar's filter chip is switched on |
| `allDayOnly` | boolean | "Info" calendar (e.g. birthdays): the create form asks for the title only and saves a single all-day event |
| `titleEmoji` | string | Emoji shown before every title of this calendar (display only, e.g. `🎂`) |
| `group` | string | Familial theme: force the chip group, `member` or `category` |
| `filter` | string | Regex: hide this calendar's events whose title matches |
| `filterText` | string | Regex: text removed from this calendar's titles |
| `replaceTitleText` | object | Text replacements in this calendar's titles |
| `eventTitleField` | string | Event field used as the displayed title (e.g. `description`) |
| `sorting` | number | Sort order of this calendar's events |

> **Read-only calendars** (holidays, school holidays — integrations that cannot create events) are detected automatically: they are never offered as a create target, and their events open in a read-only details window.

### Editing recurring events

Saving a recurring event asks **"This event only"** or **"This and following events"**. Past occurrences are never touched. To change the whole series, open its first occurrence and choose *This and following events*.

### Event categories

On normal calendars the create/edit form shows a **category picker**. Picking a category prepends its emoji to the event title (the same mechanism as the 🔔 reminder), so it persists and is visible everywhere — including the Google Calendar app.

Default categories: 🏃 Sport · 🩺 Medical · 🎓 School · 💼 Work · 🍽️ Meal · 🚐 Holidays · 🎉 Party · 🛒 Shopping.

Edit the list in the visual editor (**Event categories** panel), or in YAML:

```yaml
eventCategories:
  - emoji: "🏃"
    label: Sport
    icon: m3rf:directions-run   # optional Material Symbols icon (needs materialSymbols: true)
  - emoji: "🩺"
    label: Medical
    icon: m3rf:stethoscope
```

> Google Calendar has no per-event category field reachable through Home Assistant (only title, description, location, dates and recurrence are writable), so the emoji prefix is the portable way to tag events. With `materialSymbols: true` the card *displays* the category's `icon` instead of the emoji, while still saving the emoji in the title.

### Skip school / public holidays

```yaml
vacationCalendar: calendar.school_holidays
holidayCalendar: calendar.public_holidays
```

When set, the **Advanced options** of a recurring event show two checkboxes: *Skip school holidays* and *Skip public holidays*. The card then hides the occurrences that fall in those periods. This is a display filter: Home Assistant cannot create Google recurrences with exceptions, so the Google Calendar app still shows those occurrences. If a reference calendar is unavailable, nothing is hidden.

### Google Places autocomplete

```yaml
googleApiKey: YOUR_GOOGLE_API_KEY
```

1. Create a project in the [Google Cloud Console](https://console.cloud.google.com/)
2. Enable **Places API (New)**
3. Create an API key and restrict it (see *Security & privacy*)

Without a key, the location field is a plain text input.

### ✍️ Handwriting recognition

Set `geminiApiKey` (or `claudeApiKey`) to turn the create dialog into a handwriting area on touch tablets. Write the event ("dentist 9am"), tap **Create**: the dialog closes immediately and the AI reads the writing in the background, then creates the event. Open **Advanced options** first to add an end date, a recurrence or a reminder.

```yaml
geminiApiKey: YOUR_GEMINI_API_KEY
geminiModel: gemini-2.5-flash   # optional
```

Get a free key at [Google AI Studio](https://aistudio.google.com/apikey). Or use Anthropic Claude:

```yaml
claudeApiKey: YOUR_ANTHROPIC_API_KEY
claudeModel: claude-opus-4-8   # optional; claude-haiku-4-5 is cheaper/faster
```

If both keys are set, Claude is used — override with `aiProvider: gemini`. Transient provider errors (e.g. Gemini's *"This model is currently experiencing high demand"*) are retried automatically (up to three attempts in total).

### 🔔 Notification markers

The create/edit forms include a **notification** checkbox. When checked, a `🔔` prefix is added to the event title, so Home Assistant automations can detect marked events and trigger voice or phone notifications.

A **reminder lead time** selector (20 min / 1 h / day before) sits next to it. A Lovelace card only runs while the dashboard is open and cannot fire scheduled notifications, so the lead time is stored as a hidden `[r:1h]` / `[r:1d]` tag in the event **description** (20 min, the default, writes no tag). Your automation reads the tag. The tag is hidden from the card and preserved across edits.

Example automation (fixed 15 min):

```yaml
automation:
  - alias: "Calendar voice notification"
    trigger:
      - platform: calendar
        event: start
        offset: "-00:15:00"
        entity_id: calendar.family
    condition:
      - condition: template
        value_template: "{{ trigger.calendar_event.summary.startswith('🔔') }}"
    action:
      - action: tts.speak
        target:
          entity_id: media_player.living_room_speaker
        data:
          message: "Reminder: {{ trigger.calendar_event.summary.replace('🔔 ', '') }} in 15 minutes"
```

For **per-event lead times**, use three calendar triggers (offsets `-0:20:0`, `-1:0:0`, `-24:0:0`) with ids `r20m` / `r1h` / `r1d`, and a condition matching the trigger to the tag:

```yaml
condition:
  - condition: template
    value_template: >
      {% set d = (trigger.calendar_event.description or '') %}
      {% set want = 'r1h' if '[r:1h]' in d else ('r1d' if '[r:1d]' in d else 'r20m') %}
      {{ (trigger.calendar_event.summary or '').startswith('🔔') and trigger.id == want }}
```

See [`examples/family_calendar.yaml`](examples/family_calendar.yaml) for a complete example.

### 🔘 Floating action button

An optional small round button overlaid at the bottom-right of the card — it takes no layout space. Handy on a wall tablet to open a music page, a player, or call a service.

```yaml
floatingButton:
  icon: mdi:music            # default mdi:music
  label: Music               # tooltip / aria-label
  # Pick ONE action (priority: service > navigationPath > entity):
  service: media_player.media_play_pause
  serviceData: {}
  navigationPath: /lovelace/music     # internal paths starting with "/" only
  entity: media_player.kitchen        # opens the entity's details dialog
```

## Security & privacy

- **Event text is always rendered as plain text** (titles, descriptions, locations): an event from a shared or compromised calendar cannot inject scripts into your dashboard.
- **Links**: the location link only accepts an `http(s)` base and URL-encodes the location; `floatingButton.navigationPath` only accepts internal paths starting with `/`.
- **Colours and sizes from the config** (`color`, `weekendColor`, `columns`…) are validated before reaching a style attribute: a value that could break out of the CSS declaration or load an external resource is ignored.
- **Regexes from the config** (`filter`, `filterText`) are compiled defensively (an invalid regex is ignored) and only applied to the first 500 characters of a title, so a giant crafted title cannot freeze the dashboard.
- ⚠️ **API keys** (`geminiApiKey`, `claudeApiKey`, `googleApiKey`) are stored in the dashboard configuration, which is sent to **every browser that opens the dashboard**: any Home Assistant user with access to it can read them. Restrict each key on the provider side — an HTTP referrer restriction to your Home Assistant address and a single API for the Google keys, a dedicated key with a spending cap for Anthropic.
- **Handwriting recognition** uploads only the drawn image, and only when you tap Create.

## Localization

The interface follows the `locale` setting: English, French, German, Spanish, Italian, Dutch, Portuguese. Override any text with `texts`:

```yaml
texts:
  noEvents: "Nothing planned"
```

## Inspirations & credits

- **[FamousWolf/week-planner-card](https://github.com/FamousWolf/week-planner-card)** by Rudy Gnodde — the foundational calendar rendering engine
- **[mohesles/my-skylight-calendar](https://github.com/mohesles/my-skylight-calendar)** — the original DIY Skylight calendar concept
- **[Skylight](https://www.skylightframe.com/)** — the commercial smart calendar that inspired the look

## License

MIT License

Copyright (c) 2024 Rudy Gnodde (week-planner-card)
Copyright (c) 2024 mohesles (my-skylight-calendar)
Copyright (c) 2025-2026 Etienne Gaillard (family-calendar-card)
