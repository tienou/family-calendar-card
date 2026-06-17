# Skylight Family Calendar Card

[![en](https://img.shields.io/badge/lang-English-blue)](README.md) [![fr](https://img.shields.io/badge/lang-Fran%C3%A7ais-blue)](README.fr.md)

![Skylight Family Calendar](examples/screenshots/main_view.png)

A Skylight-inspired family calendar card for Home Assistant. Displays events from multiple calendars with a beautiful touchscreen-friendly interface, dual themes, weather integration, and full event management (create, edit, delete).

## Preview — "familial" theme

Month view on a desktop / wall-mounted tablet:

![Month view — desktop](examples/screenshots/familial_desktop.png)

Month view on mobile (Samsung-Calendar style — colored dots + a tap-to-open day panel):

<img src="examples/screenshots/familial_mobile.png" width="320" alt="Month view — mobile">

## Features

### Event Management
- **Full CRUD**: Create, edit, and delete events directly from the card (no external helpers needed)
- **Quick add**: write the time and the title in one go (e.g. "9h dentist" or "dentist 9h") — the card splits them automatically. No time written → all-day event. Ideal for pen/stylus entry.
- **AI quick add** (optional): if an `ai_task` entity is configured in Home Assistant, an "Analyze with AI" button parses free natural-language text (e.g. "thursday 8pm cinema with the kids") into title + time + duration via your configured LLM. Auto-enabled when an `ai_task` entity exists; disable with `aiQuickAdd: false` or force the entity with `aiTaskEntity`.
- **✍️ Handwriting recognition** (optional): with a `geminiApiKey` **or** `claudeApiKey`, the quick-add area becomes a **drawing canvas** on touch tablets — write the event with a stylus and the AI (Google Gemini or Anthropic Claude) reads your handwriting (far better than the OS recognizer) and fills title + time + duration. On desktop (mouse) and phones the form stays keyboard-only.
- **Simple forms**: only title, start, duration (presets) and location are shown — everything else is in a collapsible "Advanced options" drawer
- **All-day events**: create and edit date-only events, including multi-day ones
- **Recurrence support**: Daily, weekly, monthly, yearly — with interval, day selection, and end options (in the advanced drawer)
- **🔔 Notification markers**: Checkbox in event forms to flag events for voice/phone notifications (detectable by HA automations via `summary.startswith('🔔')`)
- **Google Places Autocomplete** for location field (optional, requires API key)

### Calendar Display
- Skylight-style header with date, time, and current weather
- Calendar filter buttons (legend) to show/hide individual calendars
- View selector: Today, Tomorrow, Week, 2 Weeks, Month
- Weather forecast per day + current weather in header (centered in day cells)
- Auto-detect weather entity
- Month/week navigation with arrows
- Day headers (Monday, Tuesday...) above columns
- Full-color event backgrounds with calendar colors
- Today highlighting (orange badge)
- Bold event times, location with pin icon
- **Merged multi-day events**: vacations and trips display as a continuous colored banner across days (Google Calendar style), with `multiDayMode` to restore legacy rendering
- **View persistence**: selected view is saved to localStorage and restored on reload

### Themes
- **Skylight theme**: Original Skylight-inspired look with signature colors and style
- **Home Assistant theme**: Native HA look that follows your HA theme (dark mode supported)
- **Familial theme**: Clean redesign with explicit light/dark tokens — opaque panel, tinted event cards with a coloured left bar and contrasted text, accent "today" pill, weekend tint, and a filter legend split into **Members** (round dots) / **Categories** (square dots). Light/dark follows the active HA theme. Your calendar colours are preserved. Calendars are grouped automatically (writable person calendars → members; all-day/holiday calendars → categories); override per calendar with `group: member` or `group: category`. With `fillHeight`, the month grid adapts **per cell**: a roomy day shows a **detailed** card (time range + title + location, category icon first), a tight day collapses to a **single line** (start time + truncated title; full range + location in the hover tooltip) and overflow becomes a `+N` chip — so the whole month fits one page.

### Mobile Month View
- **Google Agenda-style** mobile month view on small screens (smartphones)
- Mini calendar grid with **colored event dots** indicating events per day
- **Tap a day** to display its events in a panel below the calendar grid
- Abbreviated weekday headers (LUN, MAR, MER...) on mobile
- Auto-selects today when entering month view

### Touch & Swipe Navigation
- **Swipe left/right** to navigate between weeks or months on touch devices
- Navigation arrows automatically hidden on touch devices (smartphones, tablets)
- Works on smartphones, tablets, and Windows touch devices

### Internationalization & UX
- Multi-language support (en, fr, de, es, it, nl, pt) with auto-translation
- Responsive layout with configurable columns
- Touchscreen-friendly interface (designed for wall-mounted tablets and smartphones)
- Compact mode
- Full GUI configuration editor with descriptions
- HACS compatible

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant
2. Go to Frontend
3. Click the three dots menu and select "Custom repositories"
4. Add `https://github.com/tienou/ha-skylight-family-calendar-card` with category "Lovelace"
5. Install "Skylight Family Calendar Card"
6. Restart Home Assistant

### Manual

1. Download `skylight-family-calendar-card.js` from the [latest release](https://github.com/tienou/ha-skylight-family-calendar-card/releases)
2. Copy it to `config/www/skylight-family-calendar-card.js`
3. Add the resource in your dashboard:

```yaml
resources:
  - url: /local/skylight-family-calendar-card.js
    type: module
```

## Configuration

### Basic example

```yaml
type: custom:skylight-family-calendar-card
title: Family Calendar
locale: fr
defaultView: Week
startingDay: monday
showHeader: true
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

### Configuration options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | string | - | Card title displayed above the calendar |
| `locale` | string | `en` | Language locale (fr, de, es, it, nl, pt) |
| `defaultView` | string | `Week` | Default view (Today/Tomorrow/Week/Biweek/Month) |
| `startingDay` | string | `today` | First day of the week (monday, today, etc.) |
| `showHeader` | boolean | `true` | Show the date/time/weather header |
| `showHeaderDate` | boolean | `true` | Show date in header |
| `showHeaderClock` | boolean | `true` | Show clock in header |
| `showTitle` | boolean | `true` | Show card title |
| `showNavigation` | boolean | `true` | Show month/week navigation arrows |
| `showWeekDayText` | boolean | `true` | Show day headers (Mon, Tue...) |
| `showCurrentWeather` | boolean | `false` | Show current weather in header |
| `showWeather` | boolean | `true` | Show weather forecast per day |
| `showTime` | boolean | `false` | Show event start/end time |
| `showLocation` | boolean | `true` | Show event location in calendar view |
| `showLocationInForm` | boolean | `true` | Show location field in create/edit forms |
| `showDescription` | boolean | `false` | Show event description |
| `colorFullEvent` | boolean | `true` | Color full event background with calendar color |
| `stripTitlePrefixes` | list | `[]` | Filler prefixes removed from the **start** of event titles to save space, e.g. `["Rendez-vous", "RDV", "Visite", "Appel", "Anniversaire de"]`. A following connector (chez / au / avec / à / pour …) and a `:`/`-` separator are dropped too, then the title is re-capitalised. Case-insensitive; `"Rendez-vous"` also matches `"Rendez vous"`. Works even when a category emoji leads the title (the emoji is moved to the icon); a leading 🔔 reminder is preserved. Never blanks a title (`"Rendez-vous"` alone is kept). |
| `compact` | boolean | `true` | Compact display mode |
| `fillHeight` | boolean | `false` | Stretch the day rows so the calendar fills the screen height (best in a panel / full-height view, e.g. a wall-mounted tablet) |
| `materialSymbols` | boolean | `false` | Use [Material Symbols](https://github.com/beecho01/material-symbols) icons. When on, calendars use their `iconMaterial` and categories show their `icon` instead of the emoji (requires the Material Symbols integration) |
| `views` | list | all | Which view buttons to show (e.g. `Week,Month`) |
| `defaultCalendar` | string | - | Default calendar entity for event creation |
| `googleApiKey` | string | - | Google Places API key for location autocomplete |
| `weather` | object | - | Weather entity and display options |
| `calendars` | list | required | Calendar entities to display |
| `hidePastEvents` | boolean | `false` | Hide past events |
| `hideWeekend` | boolean | `false` | Hide weekend days |
| `highlightWeekend` | boolean | `false` | Tint the weekend day cells with a different background |
| `weekendDays` | list | `[6, 7]` | Which weekdays count as weekend (Mon=1 … Sun=7), e.g. `[5, 6, 7]` |
| `weekendColor` | string | - | Custom weekend tint color (leave empty for an auto shade that adapts to light/dark) |
| `combineSimilarEvents` | boolean | `false` | Combine duplicate events |
| `updateInterval` | number | `60` | Auto-refresh interval in seconds |
| `multiDayMode` | string | `banner` | Multi-day events: `banner` (merged strip), `default`, `multiple`, `single` |
| `slotStartHour` | number | `7` | First hour shown in the time-slot picker |
| `slotEndHour` | number | `22` | Last hour shown in the time-slot picker |
| `aiQuickAdd` | boolean | auto | "Analyze with AI" button on quick add (auto-enabled if an `ai_task` entity exists; `false` to disable) |
| `aiTaskEntity` | string | auto | `ai_task.*` entity to use for AI quick add (auto-detected if unset) |
| `geminiApiKey` | string | - | Google Gemini API key → enables the handwriting drawing canvas in quick add |
| `geminiModel` | string | `gemini-2.5-flash` | Gemini model used for handwriting recognition |
| `claudeApiKey` | string | - | Anthropic Claude API key → enables the handwriting canvas via Claude Vision |
| `claudeModel` | string | `claude-opus-4-8` | Claude model used for handwriting recognition (e.g. `claude-haiku-4-5` for lower cost/latency) |
| `aiProvider` | string | auto | Force the handwriting provider: `gemini` or `claude` (auto-selected if only one key is set; Claude preferred when both) |
| `theme` | string | `skylight` | Theme: `skylight`, `homeassistant` or `familial` |

### Calendar options

| Option | Type | Description |
|--------|------|-------------|
| `entity` | string | Calendar entity ID (required) |
| `name` | string | Display name (falls back to HA friendly_name) |
| `color` | string | Color hex (auto-assigned pastel if not set) |
| `icon` | string | MDI icon |
| `iconMaterial` | string | Material Symbols icon used instead of `icon` when `materialSymbols` is on (e.g. `m3rf:home`) |
| `filter` | string | Regex to filter events |
| `allDayOnly` | boolean | Treat as an "info" calendar (e.g. birthdays): the create form shows the title only and saves a single all-day event with no time or duration |
| `titleEmoji` | string | Emoji shown before every event title of this calendar (display only, e.g. `🎂` for birthdays). When `materialSymbols` is on, the calendar's `iconMaterial` is shown instead. |

> **Read-only calendars** (holidays, school holidays — integrations that don't support event creation) are detected automatically: they never appear as a create target, and their events open in read-only detail view (no edit/delete).

### Event categories

On normal calendars, the create/edit form shows a **category picker**. Picking a category prepends its emoji to the event title (the same mechanism as the 🔔 reminder), so it persists and is visible everywhere — including the Google Calendar app.

Default categories: 🏃 Sport · 🩺 Medical · 🎓 School · 💼 Work · 🍽️ Meal · 🚐 Holidays · 🎉 Party · 🛒 Shopping.

You can edit the list in the visual editor (**Event categories** panel — the built-in categories show as editable rows; expand one to change its icon/name, remove it, or add your own), or in YAML:

```yaml
eventCategories:
  - emoji: "🏃"
    label: Sport
    icon: m3rf:directions-run   # optional Material Symbols icon (needs materialSymbols: true)
  - emoji: "🩺"
    label: Medical
    icon: m3rf:stethoscope
```

> Google Calendar has no per-event "category"/tag field reachable through Home Assistant (only title, description, location, dates and recurrence are writable), so the emoji prefix is the portable way to tag events. With `materialSymbols: true` the card *displays* the category's `icon` instead of the emoji, while still saving the emoji in the title (so it stays visible in the Google Calendar app).

### Google Places Autocomplete

To enable location autocomplete in event forms, add a Google Places API key:

```yaml
googleApiKey: YOUR_GOOGLE_API_KEY
```

Requirements:
1. Create a project in [Google Cloud Console](https://console.cloud.google.com/)
2. Enable **Places API (New)**
3. Create an API key in Credentials
4. Add the key to your card config

Without an API key, the location field works as a simple text input.

### ✍️ Handwriting recognition (Gemini)

Set `geminiApiKey` to turn the quick-add area into a handwriting canvas. Write the event with a stylus, tap **Analyze with AI**, and Gemini Vision reads your handwriting and fills the form.

```yaml
geminiApiKey: YOUR_GEMINI_API_KEY
geminiModel: gemini-2.5-flash   # optional
```

Get a free key at [Google AI Studio](https://aistudio.google.com/apikey). The drawn image is sent to Google for recognition. The key is stored in the dashboard config — for a shared dashboard, restrict it to the *Generative Language API* in Google Cloud.

**Or use Anthropic Claude** instead of Gemini:

```yaml
claudeApiKey: YOUR_ANTHROPIC_API_KEY
claudeModel: claude-opus-4-8   # optional; claude-haiku-4-5 is cheaper/faster
```

Get a key at the [Anthropic Console](https://console.anthropic.com/). If both keys are set, Claude is used by default — override with `aiProvider: gemini`. The drawn image is sent to Anthropic for recognition.

### 🔔 Notification Markers

The card includes a **notification** checkbox in event create/edit forms. When checked, a `🔔` prefix is added to the event title (summary). This lets Home Assistant automations detect marked events and trigger voice or phone notifications.

A **reminder lead-time** selector (20 min / 1 h / day before) sits next to the checkbox. The card itself can't fire scheduled notifications (a Lovelace card only runs while the dashboard is open) — so the lead time is encoded as a hidden `[r:1h]` / `[r:1d]` tag in the event **description** (20 min, the default, writes no tag). Your automation reads the tag and fires at the matching offset. The tag is hidden from the card's display and preserved across edits.

Example automation trigger (fixed 15 min, simplest form):

```yaml
automation:
  - alias: "Calendar Voice Notification"
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

For **per-event lead times**, give the automation three calendar triggers (offsets `-0:20:0`, `-1:0:0`, `-24:0:0`) with `id`s `r20m` / `r1h` / `r1d`, and a condition that matches the trigger to the tag in the description (defaulting to `r20m` when no tag is present):

```yaml
condition:
  - condition: template
    value_template: >
      {% set d = (trigger.calendar_event.description or '') %}
      {% set want = 'r1h' if '[r:1h]' in d else ('r1d' if '[r:1d]' in d else 'r20m') %}
      {{ (trigger.calendar_event.summary or '').startswith('🔔') and trigger.id == want }}
```

See [`examples/family_calendar.yaml`](examples/family_calendar.yaml) for a complete example with both voice and phone notifications.

## Security & privacy

- **All event text is rendered as plain text** (not HTML) — titles, descriptions and locations alike. This prevents a malicious or compromised shared-calendar event from injecting scripts into your dashboard (XSS). Line breaks in descriptions are preserved.
- **Location links** only ever use an `http(s)` base (the `locationLink` value is validated), and the location text is URL-encoded, so a crafted location can't become a `javascript:`/`data:` link.
- **Custom formats and filters** from the config (`dayFormat`, `filter`, `filterText`) are rendered as text / compiled defensively (an invalid regex is ignored instead of breaking the card).
- **API keys** (`geminiApiKey`, `claudeApiKey`, `googleApiKey`) are stored in the dashboard configuration and sent to the respective provider. On a shared dashboard, restrict each key to its specific API in the provider console (e.g. restrict the Gemini key to the *Generative Language API*). The Claude and Google Places keys are sent as request headers; the Gemini key is passed as a URL query parameter (required by Google's browser API).
- **Handwriting recognition** uploads the drawn image to Google Gemini or Anthropic Claude for parsing. No image is sent unless a key is configured and you tap Create/Analyze.

## Localization

The card auto-translates UI texts based on the `locale` setting. Supported languages: English, French, German, Spanish, Italian, Dutch, Portuguese.

You can override any text in the `texts` config section.

## Inspirations & Credits

This project builds upon and is inspired by:

- **[FamousWolf/week-planner-card](https://github.com/FamousWolf/week-planner-card)** by Rudy Gnodde -- the foundational calendar rendering engine
- **[mohesles/my-skylight-calendar](https://github.com/mohesles/my-skylight-calendar)** -- the original DIY Skylight calendar concept
- **[Skylight](https://www.skylightframe.com/)** -- commercial smart home calendar that inspired the aesthetic

## License

MIT License

Copyright (c) 2024 Rudy Gnodde (week-planner-card)
Copyright (c) 2024 mohesles (my-skylight-calendar)
Copyright (c) 2025-2026 Etienne Gaillard (ha-skylight-family-calendar-card)
