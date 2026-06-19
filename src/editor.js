import { html, LitElement } from "lit";
import styles from './editor.styles';

export class SkylightFamilyCalendarCardEditor extends LitElement {
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
            console.warn("Skylight Family Calendar: editor component preload failed", e);
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
                            { value: 'familial', label: 'Familial' },
                        ], true, 'skylight')}
                        ${this.addHint('Visual style of the calendar card')}
                        ${this.addBooleanField('materialSymbols', 'Use Material Symbols icons')}
                        ${this.addHint('Requires the "Material Symbols" integration. When on, calendars use their Material Symbols icon and categories show their icon instead of the emoji (the emoji is still saved in the event title).')}
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
                                        ${this.addColorField('calendars.' + index + '.color', 'Color')}
                                        ${this.addHint('Pick a colour, or "A" (Auto) to let the card assign one')}
                                        ${this.addIconPickerField('calendars.' + index + '.icon', 'Icon')}
                                        ${this.addIconPickerField('calendars.' + index + '.iconMaterial', 'Material Symbols icon')}
                                        ${this.addHint('Used instead of the icon above when "Use Material Symbols icons" is on (e.g. m3rf:home)')}
                                        ${this.addBooleanField('calendars.' + index + '.initiallyHidden', 'Initially hide calendar events')}
                                        ${this.addHint('Events hidden by default, toggle via filter buttons')}
                                        ${this.addBooleanField('calendars.' + index + '.allDayOnly', 'Info calendar (all-day only)')}
                                        ${this.addHint('Creates title-only all-day events (no time/duration), e.g. birthdays')}
                                        ${this.addEmojiField('calendars.' + index + '.titleEmoji', 'Title emoji')}
                                        ${this.addHint('Shown before every event title of this calendar (display only), e.g. 🎂. With "Use Material Symbols icons" on, the calendar\'s Material Symbols icon above is shown instead.')}
                                        ${index > 0 ? this.addButton('Move up', 'mdi:arrow-up', () => this._moveCalendar(index, -1)) : ''}
                                        ${index < this.getConfigValue('calendars').length - 1 ? this.addButton('Move down', 'mdi:arrow-down', () => this._moveCalendar(index, 1)) : ''}
                                        ${(index > 0 || index < this.getConfigValue('calendars').length - 1) ? this.addHint('Reorder this calendar (affects the legend / filter buttons / event order)') : ''}
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
                    'Event categories',
                    html`
                        ${this.addHint('Picking a category in the event form prepends its emoji to the event title. Expand a row below to change its icon or name, remove it, or add your own.')}
                        ${this._effectiveCategories().map((cat, index) => html`
                            ${this.addExpansionPanel(
                                `${(cat && cat.emoji) || ''} ${(cat && cat.label) || ('Category ' + (index + 1))}`,
                                html`
                                    ${this._renderEmojiPicker(cat && cat.emoji, (v) => this._writeCategories((arr) => {
                                        if (!arr[index]) arr[index] = { emoji: '', label: '' };
                                        arr[index].emoji = v;
                                    }), 'Emoji (saved in the event title)')}
                                    <div class="sk-field">
                                        <label class="sk-label">Label</label>
                                        <input class="sk-input" type="text"
                                            .value="${(cat && cat.label) || ''}"
                                            @change="${(e) => this._writeCategories((arr) => {
                                                if (!arr[index]) arr[index] = { emoji: '', label: '' };
                                                arr[index].label = e.target.value;
                                            })}" />
                                    </div>
                                    <ha-icon-picker
                                        .hass="${this.hass}"
                                        label="Material Symbols icon"
                                        .value="${(cat && cat.icon) || ''}"
                                        @value-changed="${(e) => this._writeCategories((arr) => {
                                            if (!arr[index]) arr[index] = { emoji: '', label: '' };
                                            arr[index].icon = e.detail.value;
                                        })}"
                                    ></ha-icon-picker>
                                    ${this.addHint('Shown instead of the emoji when "Use Material Symbols icons" is on, e.g. m3rf:directions-run')}
                                    ${this.addButton('Remove category', 'mdi:trash-can', () => this._writeCategories((arr) => {
                                        arr.splice(index, 1);
                                    }))}
                                `
                            )}
                        `)}
                        ${this.addButton('Add category', 'mdi:plus', () => this._writeCategories((arr) => {
                            arr.push({ emoji: '', label: '' });
                        }))}
                        ${this.addButton('Reset to default categories', 'mdi:restore', () => {
                            const config = JSON.parse(JSON.stringify(this._config));
                            config.eventCategories = this._defaultCategories();
                            this._config = config;
                            this.dispatchConfigChangedEvent();
                        })}
                    `
                )}
                ${this.addExpansionPanel(
                    'Days',
                    html`
                        ${this.addBooleanField('showWeekDayText', 'Show week day text', true)}
                        ${this.addHint('Display day names (Mon, Tue...) above columns')}
                        ${this.addBooleanField('hideWeekend', 'Hide weekend')}
                        ${this.addBooleanField('highlightWeekend', 'Highlight weekend')}
                        ${this.addHint('Tints the weekend day cells')}
                        ${this._renderWeekendDayPicker()}
                        ${this.addHint('Which days count as weekend (default Sat + Sun)')}
                        ${this.addColorField('weekendColor', 'Weekend color')}
                        ${this.addHint('Leave on "A" (Auto) for a shade that adapts to light/dark')}
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
                    'Appearance',
                    html`
                        ${this.addBooleanField('colorFullEvent', 'Color full event background', true)}
                        ${this.addHint('Color entire event block with calendar color instead of left border only')}
                        ${this.addBooleanField('noCardBackground', 'No card background')}
                        ${this.addHint('Make the card background transparent')}
                        ${this.addBooleanField('compact', 'Compact mode')}
                        ${this.addHint('Reduce spacing and padding for smaller displays')}
                        ${this.addBooleanField('fillHeight', 'Fill available height')}
                        ${this.addHint('Stretch the day rows so the calendar fills the screen height (best in a panel / full-height view, e.g. a wall tablet)')}
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
                    'AI & Handwriting',
                    html`
                        <p style="margin: 0 0 8px 0; font-weight: 500;">✍️ Handwriting recognition</p>
                        ${this.addTextField('geminiApiKey', 'Google Gemini API key', 'password')}
                        ${this.addHint('Paste your key here to enable stylus handwriting in the quick-add area. Free key at aistudio.google.com/apikey')}
                        ${this.addTextField('geminiModel', 'Gemini model', 'text', 'gemini-2.5-flash')}
                        ${this.addTextField('claudeApiKey', 'Anthropic Claude API key (alternative)', 'password')}
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
                    'Location autocomplete',
                    html`
                        ${this.addTextField('googleApiKey', 'Google Places API key', 'password')}
                        ${this.addHint('Enable location autocomplete in event forms. Without key, location is a simple text field.')}
                    `
                )}
            </div>
        `;
    }

    addHint(text) {
        return html`<p style="color: var(--secondary-text-color); font-size: 0.8em; margin: -4px 0 8px 0; padding: 0;">${text}</p>`;
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
                        title="Auto" @click="${() => this.setConfigValue(name, '')}">A</button>
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
            { emoji: '💼', label: 'Travail', icon: 'm3rf:work' },
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
                <label class="sk-label">Weekend days</label>
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
