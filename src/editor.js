import { html, LitElement } from "lit";
import styles from './editor.styles';

export class SkylightFamilyCalendarCardEditor extends LitElement {
    static styles = styles;

    connectedCallback() {
        super.connectedCallback();
        this.loadCustomElements();
    }

    async loadCustomElements() {
        if (!customElements.get("ha-entity-picker")) {
            await customElements.get("hui-entities-card").getConfigElement();
        }
    }

    static get properties() {
        return {
            hass: {},
            _config: {},
        };
    }

    setConfig(config) {
        this._config = config;
    }

    render() {
        if (!this.hass || !this._config) {
            return html``;
        }

        return html`
            <div style="display: flex; flex-direction: column">
                ${this.addExpansionPanel(
                    'General',
                    html`
                        ${this.addSelectField('theme', 'Theme', [
                            { value: 'skylight', label: 'Skylight' },
                            { value: 'homeassistant', label: 'Home Assistant' },
                        ], true, 'skylight')}
                        ${this.addHint('Visual style of the calendar card')}
                        ${this.addTextField('title', 'Title')}
                        ${this.addHint('Card title displayed above the calendar')}
                        ${this.addBooleanField('showTitle', 'Show title', true)}
                        ${this.addSelectField('locale', 'Locale', [
                            { value: 'en', label: 'English' },
                            { value: 'fr', label: 'Fran\u00e7ais' },
                            { value: 'de', label: 'Deutsch' },
                            { value: 'es', label: 'Espa\u00f1ol' },
                            { value: 'it', label: 'Italiano' },
                            { value: 'nl', label: 'Nederlands' },
                            { value: 'pt', label: 'Portugu\u00eas' },
                        ], true)}
                        ${this.addHint('Language for dates, buttons and UI texts')}
                        ${this.addSelectField('defaultView', 'Default view', [
                            { value: 'Today', label: 'Today' },
                            { value: 'Tomorrow', label: 'Tomorrow' },
                            { value: 'Week', label: 'Week' },
                            { value: 'Biweek', label: 'Biweek' },
                            { value: 'Month', label: 'Month' },
                        ], true)}
                        ${this.addHint('View shown when the card loads')}
                        ${this.addSelectField('startingDay', 'Starting day', [
                            { value: 'today', label: 'Today' },
                            { value: 'tomorrow', label: 'Tomorrow' },
                            { value: 'yesterday', label: 'Yesterday' },
                            { value: 'sunday', label: 'Sunday' },
                            { value: 'monday', label: 'Monday' },
                            { value: 'tuesday', label: 'Tuesday' },
                            { value: 'wednesday', label: 'Wednesday' },
                            { value: 'thursday', label: 'Thursday' },
                            { value: 'friday', label: 'Friday' },
                            { value: 'saturday', label: 'Saturday' },
                            { value: 'month', label: 'Month' },
                        ], true)}
                        ${this.addHint('First day shown in the calendar')}
                        ${this.addBooleanField('showHeader', 'Show Skylight header', true)}
                        ${this.addHint('Show the date/time/weather header at the top')}
                        ${this.addBooleanField('showHeaderDate', 'Show date in header', true)}
                        ${this.addBooleanField('showHeaderClock', 'Show clock in header', true)}
                        ${this.addEntityPickerField('defaultCalendar', 'Default calendar for event creation', ['calendar'])}
                        ${this.addHint('Pre-selected calendar when creating a new event')}
                    `,
                    true
                )}
                ${this.addExpansionPanel(
                    'Calendars',
                    html`
                        ${this.getConfigValue('calendars').map((calendar, index) => {
                            return html`
                                ${this.addExpansionPanel(
                                    `Calendar: ${calendar.name ?? calendar.entity}`,
                                    html`
                                        ${this.addEntityPickerField('calendars.' + index + '.entity', 'Entity', ['calendar'])}
                                        ${this.addTextField('calendars.' + index + '.name', 'Name')}
                                        ${this.addHint('Custom display name (uses HA friendly name if empty)')}
                                        ${this.addTextField('calendars.' + index + '.color', 'Color')}
                                        ${this.addHint('Hex color code (e.g. #FF5733). Auto-assigned if empty')}
                                        ${this.addIconPickerField('calendars.' + index + '.icon', 'Icon')}
                                        ${this.addTextField('calendars.' + index + '.eventTitleField', 'Event title field', 'text', 'summary')}
                                        ${this.addHint('Event attribute to use as title (default: summary)')}
                                        ${this.addTextField('calendars.' + index + '.filter', 'Filter events (regex)')}
                                        ${this.addHint('Only show events matching this pattern')}
                                        ${this.addTextField('calendars.' + index + '.filterText', 'Filter event text (regex)')}
                                        ${this.addHint('Replace event text matching this pattern')}
                                        ${this.addBooleanField('calendars.' + index + '.initiallyHidden', 'Initially hide calendar events')}
                                        ${this.addHint('Events hidden by default, toggle via filter buttons')}
                                        ${this.addButton('Remove calendar', 'mdi:trash-can', () => {
                                            const config = JSON.parse(JSON.stringify(this._config));
                                            if (config.calendars.length === 1) {
                                                config.calendars = [];
                                            } else {
                                                delete config.calendars[index];
                                                config.calendars = config.calendars.filter(Boolean);
                                            }
                                            this._config = config;
                                            this.dispatchConfigChangedEvent();
                                        })}
                                    `
                                )}
                            `;
                        })}
                        ${this.addButton('Add calendar', 'mdi:plus', () => {
                            const index = this.getConfigValue('calendars').length;
                            this.setConfigValue('calendars.' + index, {});
                        })}
                    `
                )}
                ${this.addExpansionPanel(
                    'Days',
                    html`
                        ${this.addBooleanField('showWeekDayText', 'Show week day text', true)}
                        ${this.addHint('Display day names (Mon, Tue...) above columns')}
                        ${this.addBooleanField('hideWeekend', 'Hide weekend')}
                        ${this.addBooleanField('hideDaysWithoutEvents', 'Hide days without events except for today')}
                        ${this.addBooleanField('hideTodayWithoutEvents', 'Also hide today without events')}
                        ${this.addTextField('maxDayEvents', 'Maximum number of events per day (0 is no maximum)', 'number', 0)}
                        ${this.addHint('Limit events per day, extra shown as "+X more"')}
                        ${this.addBooleanField('showNavigation', 'Show navigation')}
                        ${this.addHint('Show arrows to navigate between weeks/months')}
                        ${this.addBooleanField('showLegend', 'Show calendar legend')}
                        ${this.addHint('Show the list of calendars with their colors')}
                        ${this.addBooleanField('legendToggle', 'Legend toggles calendar visibility')}
                        ${this.addHint('Click a legend entry to show/hide that calendar')}
                        ${this.addTextField('startingDayOffset', 'Starting day offset', 'number')}
                        ${this.addHint('Shift the first day by N days')}
                    `
                )}
                ${this.addExpansionPanel(
                    'Events',
                    html`
                        ${this.addTextField('maxEvents', 'Maximum number of events (0 is no maximum)', 'number', 0)}
                        ${this.addHint('Total event limit across all days')}
                        ${this.addBooleanField('hidePastEvents', 'Hide past events')}
                        ${this.addBooleanField('hideAllDayEvents', 'Hide all day events')}
                        ${this.addSelectField('multiDayMode', 'Multi day mode', [
                            { value: 'banner', label: 'Banner (merged)' },
                            { value: 'default', label: 'Default' },
                            { value: 'multiple', label: 'Multiple' },
                            { value: 'single', label: 'Single' },
                        ], true, 'banner')}
                        ${this.addHint('Banner: continuous strip across days (default). Others: repeated blocks or first day only')}
                        ${this.addTextField('filter', 'Filter events (regex)')}
                        ${this.addHint('Only show events whose title matches this pattern')}
                        ${this.addTextField('filterText', 'Filter event text (regex)')}
                        ${this.addHint('Replace displayed event text matching this pattern')}
                        ${this.addBooleanField('combineSimilarEvents', 'Combine similar events')}
                        ${this.addHint('Merge identical events from multiple calendars')}
                        ${this.addBooleanField('showDayName', 'Show day name')}
                        ${this.addHint('Show day name (Mon, Tue...) in each event')}
                        ${this.addBooleanField('showTime', 'Show time')}
                        ${this.addHint('Show start/end time in each event')}
                        ${this.addBooleanField('showEventTitle', 'Show title in overview', true)}
                        ${this.addHint('Show event title in the calendar view')}
                        ${this.addBooleanField('showLocation', 'Show location in calendar', true)}
                        ${this.addHint('Display event location in the calendar day view')}
                        ${this.addBooleanField('showLocationInForm', 'Show location in event forms', true)}
                        ${this.addHint('Show location field with autocomplete in create/edit forms')}
                        ${this.addBooleanField('showDescription', 'Show description')}
                        ${this.addHint('Show the event description in the calendar view')}
                        ${this.addBooleanField('showDate', 'Show date in event details')}
                        ${this.addBooleanField('showCalendarName', 'Show calendar name in event details')}
                        ${this.addTextField('slotStartHour', 'Time picker — first hour', 'number', 7)}
                        ${this.addTextField('slotEndHour', 'Time picker — last hour', 'number', 22)}
                        ${this.addHint('Range of hours offered in the event time-slot picker (create/edit forms)')}
                    `
                )}
                ${this.addExpansionPanel(
                    'Date/time formats',
                    html`
                        <p>These formats use <a href="https://moment.github.io/luxon/#/formatting?id=table-of-tokens" target="_blank">Luxon format tokens</a></p>
                        ${this.addTextField('dateFormat', 'Date format')}
                        ${this.addHint('e.g. dd/MM for "07/03", d MMM for "7 mars"')}
                        ${this.addTextField('timeFormat', 'Time format')}
                        ${this.addHint('e.g. HH:mm for "15:00", h:mm a for "3:00 PM"')}
                        ${this.addTextField('multiDayTimeFormat', 'Multi day time format')}
                        ${this.addHint('Format for multi-day events (default: d LLL HH:mm)')}
                        ${this.addTextField('dayFormat', 'Override day number')}
                        ${this.addHint('Custom format for the day number in column headers')}
                    `
                )}
                ${this.addExpansionPanel(
                    'Weather',
                    html`
                        ${this.addEntityPickerField('weather.entity', 'Weather entity', ['weather'])}
                        ${this.addHint('Weather entity to use (auto-detected if empty)')}
                        ${this.addBooleanField('showCurrentWeather', 'Show current weather in header')}
                        ${this.addHint('Display current temperature and icon in the header')}
                        ${this.addBooleanField('showWeather', 'Show weather in calendar', true)}
                        ${this.addHint('Display weather forecast in day columns')}
                        ${this.addBooleanField('weather.showCondition', 'Show condition icon')}
                        ${this.addBooleanField('weather.showTemperature', 'Show temperature')}
                        ${this.addBooleanField('weather.showLowTemperature', 'Show low temperature')}
                        ${this.addBooleanField('weather.roundTemperature', 'Round temperatures to nearest integer')}
                        ${this.addBooleanField('weather.useTwiceDaily', 'Use twice daily if entity does not support daily')}
                        ${this.addHint('Fallback for weather entities without daily forecast')}
                    `
                )}
                ${this.addExpansionPanel(
                    'Override columns',
                    html`
                        <p>The number of columns is based on the size of the card.</p>
                        ${this.addTextField('columns.extraLarge', 'Extra large (>= 1920px)', 'number')}
                        ${this.addTextField('columns.large', 'Large (>= 1280px)', 'number')}
                        ${this.addTextField('columns.medium', 'Medium (>= 1024px)', 'number')}
                        ${this.addTextField('columns.small', 'Small (>= 640px)', 'number')}
                        ${this.addTextField('columns.extraSmall', 'Extra small (< 640px)', 'number')}
                    `
                )}
                ${this.addExpansionPanel(
                    'Appearance',
                    html`
                        ${this.addBooleanField('colorFullEvent', 'Color full event background', true)}
                        ${this.addHint('Color entire event block with calendar color instead of left border only')}
                        ${this.addBooleanField('noCardBackground', 'No card background')}
                        ${this.addHint('Make the card background transparent')}
                        ${this.addTextField('eventBackground', 'Override events background color')}
                        ${this.addHint('Custom background color for all events (hex or CSS color)')}
                        ${this.addBooleanField('compact', 'Compact mode')}
                        ${this.addHint('Reduce spacing and padding for smaller displays')}
                        ${this.addTextField('dayHeaderFontSize', 'Day header font size')}
                        ${this.addHint('e.g. 1.2em or 18px for the weekday header text')}
                        ${this.addTextField('dayHeaderColor', 'Day header color')}
                        ${this.addHint('CSS color for the weekday header text')}
                    `
                )}
                ${this.addExpansionPanel(
                    'Views',
                    html`
                        <p>Select which view buttons are displayed. Leave empty for all views.</p>
                        ${this.addTextField('views', 'Views (comma separated: Today,Tomorrow,Week,Biweek,Month)')}
                        ${this.addHint('e.g. "Week,Month" to show only these two views')}
                    `
                )}
                ${this.addExpansionPanel(
                    'Texts',
                    html`
                        <p style="color: var(--secondary-text-color); font-size: 0.85em; margin: 0 0 8px 0">Override auto-translated UI texts. Leave empty to use locale defaults.</p>
                        ${this.addTextField('texts.fullDay', 'Entire day')}
                        ${this.addTextField('texts.noEvents', 'No events')}
                        ${this.addTextField('texts.moreEvents', 'More events')}
                        ${this.addTextField('texts.today', 'Today')}
                        ${this.addTextField('texts.tomorrow', 'Tomorrow')}
                        ${this.addTextField('texts.yesterday', 'Yesterday')}
                        ${this.addTextField('texts.sunday', 'Sunday')}
                        ${this.addTextField('texts.monday', 'Monday')}
                        ${this.addTextField('texts.tuesday', 'Tuesday')}
                        ${this.addTextField('texts.wednesday', 'Wednesday')}
                        ${this.addTextField('texts.thursday', 'Thursday')}
                        ${this.addTextField('texts.friday', 'Friday')}
                        ${this.addTextField('texts.saturday', 'Saturday')}
                        ${this.addTextField('texts.editEvent', 'Edit event button')}
                        ${this.addTextField('texts.deleteEvent', 'Delete event button')}
                        ${this.addTextField('texts.eventTitle', 'Event title label')}
                        ${this.addTextField('texts.eventCalendar', 'Event calendar label')}
                        ${this.addTextField('texts.eventStart', 'Event start label')}
                        ${this.addTextField('texts.eventEnd', 'Event end label')}
                        ${this.addTextField('texts.cancel', 'Cancel button')}
                        ${this.addTextField('texts.create', 'Create button')}
                        ${this.addTextField('texts.save', 'Save button')}
                        ${this.addTextField('texts.newEvent', 'New event title')}
                        ${this.addTextField('texts.editEventTitle', 'Edit event title')}
                    `
                )}
                ${this.addExpansionPanel(
                    'AI & Handwriting',
                    html`
                        <p style="margin: 0 0 8px 0; font-weight: 500;">✍️ Handwriting recognition</p>
                        ${this.addTextField('geminiApiKey', 'Google Gemini API key')}
                        ${this.addHint('Paste your key here to enable stylus handwriting in the quick-add area. Free key at aistudio.google.com/apikey')}
                        ${this.addTextField('geminiModel', 'Gemini model', 'text', 'gemini-2.0-flash')}
                        ${this.addTextField('claudeApiKey', 'Anthropic Claude API key (alternative)')}
                        ${this.addHint('Use Claude instead of Gemini. Key from console.anthropic.com')}
                        ${this.addTextField('claudeModel', 'Claude model', 'text', 'claude-opus-4-8')}
                        ${this.addHint('e.g. claude-haiku-4-5 for lower cost/latency')}
                        ${this.addSelectField('aiProvider', 'Handwriting provider', [
                            { value: 'gemini', label: 'Google Gemini' },
                            { value: 'claude', label: 'Anthropic Claude' },
                        ], true)}
                        ${this.addHint('Which model reads the handwriting (auto when only one key is set; Claude preferred if both)')}
                        <p style="margin: 16px 0 8px 0; font-weight: 500;">⚡ Text quick add (optional)</p>
                        ${this.addBooleanField('aiQuickAdd', 'Enable AI quick add')}
                        ${this.addHint('Adds an "Analyze with AI" button that turns a typed sentence into title + time via a Home Assistant ai_task entity. Not needed for handwriting — leave off and the entity below empty if you only want the pen.')}
                        ${this.addEntityPickerField('aiTaskEntity', 'AI Task entity', ['ai_task'])}
                        ${this.addHint('ai_task entity for the text quick add (auto-detected if empty)')}
                    `
                )}
                ${this.addExpansionPanel(
                    'Miscellaneous',
                    html`
                        ${this.addTextField('googleApiKey', 'Google Places API key')}
                        ${this.addHint('Enable location autocomplete in event forms. Without key, location is a simple text field.')}
                        ${this.addTextField('locationLink', 'Location link base URL')}
                        ${this.addHint('Base URL for the location map link (default: Google Maps search)')}
                        ${this.addTextField('updateInterval', 'Override update interval', 'number')}
                        ${this.addHint('Auto-refresh interval in seconds (default: 60)')}
                    `
                )}
            </div>
        `;
    }

    addHint(text) {
        return html`<p style="color: var(--secondary-text-color); font-size: 0.8em; margin: -4px 0 8px 0; padding: 0;">${text}</p>`;
    }

    addTextField(name, label, type, defaultValue) {
        return html`
            <ha-textfield
                name="${name}"
                label="${label ?? name}"
                type="${type ?? 'text'}"
                .value="${String(this.getConfigValue(name, defaultValue) ?? '')}"
                @change="${this._valueChanged}"
            ></ha-textfield>
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
        if (target.tagName === 'HA-TEXTFIELD' && target.getAttribute('type') === 'number'
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
