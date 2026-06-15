import { html, LitElement } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { guard } from 'lit-html/directives/guard.js';
import { DateTime, Settings as LuxonSettings, Info as LuxonInfo } from 'luxon';
import styles from './card.styles';
import clear_night from 'data-url:./icons/clear_night.png';
import cloudy from 'data-url:./icons/cloudy.png';
import fog from 'data-url:./icons/fog.png';
import lightning from 'data-url:./icons/lightning.png';
import storm from 'data-url:./icons/storm.png';
import storm_night from 'data-url:./icons/storm_night.png';
import mostly_cloudy from 'data-url:./icons/mostly_cloudy.png';
import mostly_cloudy_night from 'data-url:./icons/mostly_cloudy_night.png';
import heavy_rain from 'data-url:./icons/heavy_rain.png';
import rainy from 'data-url:./icons/rainy.png';
import snowy from 'data-url:./icons/snowy.png';
import mixed_rain from 'data-url:./icons/mixed_rain.png';
import sunny from 'data-url:./icons/sunny.png';
import windy from 'data-url:./icons/windy.svg';

const ICONS = {
  'clear-day': sunny,
  'clear-night': clear_night,
  cloudy,
  overcast: cloudy,
  fog,
  hail: mixed_rain,
  lightning,
  'lightning-rainy': storm,
  'partly-cloudy-day': mostly_cloudy,
  'partly-cloudy-night': mostly_cloudy_night,
  partlycloudy: mostly_cloudy,
  pouring: heavy_rain,
  rain: rainy,
  rainy,
  sleet: mixed_rain,
  snow: snowy,
  snowy,
  'snowy-rainy': mixed_rain,
  sunny,
  wind: windy,
  windy,
  'windy-variant': windy
};

const ICONS_NIGHT = {
  ...ICONS,
  sunny: clear_night,
  partlycloudy: mostly_cloudy_night,
  'lightning-rainy': storm_night
};

export class SkylightFamilyCalendarCard extends LitElement {
    static styles = styles;

    _initialized = false;
    _loading = 0;
    _events = {};
    _calendarEvents = {};
    _calendars;
    _numberOfDays;
    _numberOfDaysIsMonth;
    _updateInterval;
    _noCardBackground;
    _eventBackground;
    _compact;
    _theme;
    _language;
    _weather;
    _dateFormat;
    _timeFormat;
    _multiDayTimeFormat;
    _multiDayMode;
    _locationLink;
    _startDate;
    _hideWeekend;
    _startingDay;
    _startingDayOffset;
    _weatherForecast = null;
    _weatherUnsub = null;
    _showLocation;
    _hidePastEvents;
    _hideAllDayEvents;
    _hideDaysWithoutEvents;
    _hideTodayWithoutEvents;
    _filter;
    _filterText;
    _replaceTitleText;
    _combineSimilarEvents;
    _showLegend;
    _legendToggle;
    _actions;
    _columns;
    _loader;
    _showNavigation;
    _navigationOffset = 0;
    _updateEventsTimeouts = [];
    _calendarErrors = [];

    // Skylight-specific properties
    _calendarVisibility = {};
    _currentView = 'Week';
    _createDuration = '60';
    _createShowAdvanced = false;
    _createEndTouched = false;
    _createTitle = null;
    _createStartTime = null;
    _aiLoading = false;
    _aiError = null;
    _aiResult = null;
    _drawing = false;
    _hasDrawing = false;
    _canvasReady = false;
    _eraserMode = false;
    _createCalendar = null;
    _selectedDay = null;
    _clockInterval = null;
    _views;
    _showHeader;

    /**
     * Get config element
     *
     * @returns {HTMLElement}
     */
    static getConfigElement() {
        // Create and return an editor element
        return document.createElement("skylight-family-calendar-card-editor");
    }

    /**
     * Get stub config
     *
     * @returns {}
     */
    static getStubConfig() {
        return {
            title: 'Family Calendar',
            locale: 'en',
            defaultView: 'Week',
            startingDay: 'monday',
            showHeader: true,
            views: ['Today', 'Tomorrow', 'Week', 'Biweek', 'Month'],
            calendars: [
                { entity: 'calendar.family', name: 'Family', icon: 'mdi:calendar', color: '#4A90E2' },
            ],
            weather: {
                entity: 'weather.home',
                showCondition: true,
                showTemperature: true,
                showLowTemperature: true,
            },
        };
    }

    /**
     * Get properties
     *
     * @return {Object}
     */
    static get properties() {
        return {
            _days: { type: Array },
            _config: { type: Object },
            _error: { type: String },
            _currentEventDetails: { type: Object },
            _hideCalendars: { type: Array },
            _showCreateEventDialog: { type: Object },
            _showEditEventDialog: { type: Object },
            _editFormData: { type: Object },
            _currentView: { type: String },
            _calendarVisibility: { type: Object },
            _showRecurringConfirmDialog: { type: Object },
            _showDeleteRecurringDialog: { type: Object },
            _createRecurrenceType: { type: String },
            _createRecurrenceEndType: { type: String },
            _createDuration: { type: String },
            _createShowAdvanced: { type: Boolean },
            _createTitle: { type: String },
            _createStartTime: { type: String },
            _aiLoading: { type: Boolean },
            _aiError: { type: String },
            _aiResult: { type: String },
            _eraserMode: { type: Boolean },
            _dayEventsPopup: { type: Object }
            // _createCalendar is intentionally NOT reactive: selecting a calendar
            // in the handwriting overlay updates the active button via direct DOM
            // so it never triggers a (costly) re-render of the overlay/canvas.
        }
    }

    /**
     * Set configuration
     *
     * @param {Object} config
     */
    setConfig(config) {
        this._config = config;

        if (!config.calendars) {
            throw new Error('No calendars are configured');
        }

        this._numberOfDaysIsMonth = this._isNumberOfDaysMonth(config.days ?? 7);
        this._title = config.title ?? null;
        this._calendars = this._applyDefaultColors(config.calendars);
        this._defaultCalendar = config.defaultCalendar ?? null;
        this._weather = this._getWeatherConfig(config.weather);
        this._numberOfDays = this._getNumberOfDays(config.days ?? 7);
        this._hideWeekend = config.hideWeekend ?? false;
        this._showNavigation = config.showNavigation ?? true;
        this._startingDay = config.startingDay ?? 'today';
        this._startingDayOffset = config.startingDayOffset ?? 0;
        this._showWeekDayText = config.showWeekDayText ?? true;
        this._startDate = this._getStartDate();
        this._updateInterval = config.updateInterval ?? 60;
        this._slotStartHour = parseInt(config.slotStartHour) || 7;
        this._slotEndHour = parseInt(config.slotEndHour) || 22;
        this._aiTaskEntity = config.aiTaskEntity ?? null;
        this._aiQuickAdd = config.aiQuickAdd ?? null; // null = auto-detect an ai_task entity
        this._geminiApiKey = config.geminiApiKey ?? '';
        this._geminiModel = config.geminiModel ?? 'gemini-2.5-flash';
        this._claudeApiKey = config.claudeApiKey ?? '';
        this._claudeModel = config.claudeModel ?? 'claude-opus-4-8';
        this._aiProvider = config.aiProvider ?? null; // 'gemini' | 'claude' | null (auto)
        this._noCardBackground = config.noCardBackground ?? false;
        this._eventBackground = config.eventBackground ?? 'var(--card-background-color, inherit)';
        this._compact = config.compact ?? true;
        this._theme = config.theme ?? 'skylight';
        this._dayFormat = config.dayFormat ?? null;
        this._dateFormat = config.dateFormat ?? 'cccc d LLLL yyyy';
        this._timeFormat = config.timeFormat ?? 'HH:mm';
        this._multiDayTimeFormat = config.multiDayTimeFormat ?? 'd LLL HH:mm';
        this._multiDayMode = config.multiDayMode ?? 'banner';
        // Only accept an http(s) base — guards against a javascript:/data: URL in
        // the config landing in an <a href> (clickable script execution).
        const linkBase = config.locationLink ?? 'https://www.google.com/maps/search/?api=1&query=';
        this._locationLink = /^https?:\/\//i.test(linkBase) ? linkBase : 'https://www.google.com/maps/search/?api=1&query=';
        this._showTitle = config.showTitle ?? true;
        this._showEventTitle = config.showEventTitle ?? true;
        this._showHeaderDate = config.showHeaderDate ?? true;
        this._showHeaderClock = config.showHeaderClock ?? true;
        this._colorFullEvent = config.colorFullEvent ?? true;
        this._showDescription = config.showDescription ?? false;
        this._showLocation = config.showLocation ?? true;
        this._showLocationInForm = config.showLocationInForm ?? true;
        this._googleApiKey = config.googleApiKey ?? '';
        this._showTime = config.showTime ?? false;
        this._showDayName = config.showDayName ?? false;
        this._dayHeaderFontSize = config.dayHeaderFontSize ?? null;
        this._dayHeaderColor = config.dayHeaderColor ?? null;
        this._showDate = config.showDate ?? false;
        this._showCalendarName = config.showCalendarName ?? false;
        this._showWeather = config.showWeather ?? true;
        this._showCurrentWeather = config.showCurrentWeather ?? false;
        this._hidePastEvents = config.hidePastEvents ?? false;
        this._hideAllDayEvents = config.hideAllDayEvents ?? false;
        this._hideDaysWithoutEvents = config.hideDaysWithoutEvents ?? false;
        this._hideTodayWithoutEvents = config.hideTodayWithoutEvents ?? false;
        this._filter = config.filter ?? false;
        this._filterText = config.filterText ?? false;
        this._replaceTitleText = config.replaceTitleText ?? false;
        this._combineSimilarEvents = config.combineSimilarEvents ?? false;
        this._showLegend = config.showLegend ?? false;
        this._legendToggle = config.legendToggle ?? false;
        this._actions = config.actions ?? false;
        this._columns = config.columns ?? {};
        this._maxEvents = config.maxEvents ?? false;
        this._maxDayEvents = config.maxDayEvents ?? false;
        this._hideCalendars = (config.calendars || []).reduce((acc, calendar) => {
            if (calendar.initiallyHidden && calendar.entity) {
                acc.push(calendar.entity);
            }
            return acc;
        }, []);
        if (config.locale) {
            LuxonSettings.defaultLocale = config.locale;
        }
        const localeTexts = this.constructor.LOCALE_TEXTS[config.locale] ?? {};
        this._language = Object.assign(
            {},
            {
                fullDay: 'Entire day',
                noEvents: 'No events',
                moreEvents: 'More events',
                today: 'Today',
                tomorrow: 'Tomorrow',
                yesterday: 'Yesterday',
                sunday: LuxonInfo.weekdays('long')[6],
                monday: LuxonInfo.weekdays('long')[0],
                tuesday: LuxonInfo.weekdays('long')[1],
                wednesday: LuxonInfo.weekdays('long')[2],
                thursday: LuxonInfo.weekdays('long')[3],
                friday: LuxonInfo.weekdays('long')[4],
                saturday: LuxonInfo.weekdays('long')[5],
                editEvent: 'Edit',
                deleteEvent: 'Delete',
                eventTitle: 'Title',
                eventCalendar: 'Calendar',
                eventStart: 'Start',
                eventEnd: 'End',
                eventLocation: 'Location',
                cancel: 'Cancel',
                create: 'Create',
                newEvent: 'New event',
                save: 'Save',
                editEventTitle: 'Edit event',
                titleRequired: 'Title is required',
                week: 'Week',
                biweek: 'Biweek',
                month: 'Month',
                eventRecurrence: 'Repeat',
                recurrenceNone: 'No repeat',
                recurrenceDaily: 'Daily',
                recurrenceWeekly: 'Weekly',
                recurrenceMonthly: 'Monthly',
                recurrenceYearly: 'Yearly',
                editThisEvent: 'This event only',
                editAllEvents: 'All events',
                editRecurringTitle: 'Edit recurring event',
                deleteThisEvent: 'This event only',
                deleteAllEvents: 'All events',
                deleteRecurringTitle: 'Delete recurring event',
                recurrenceInterval: 'Repeat interval',
                recurrenceEnds: 'Ends',
                recurrenceEndsNever: 'Never',
                recurrenceEndsOnDate: 'On date',
                recurrenceEndsAfter: 'After',
                recurrenceOccurrences: 'occurrences',
                recurrenceDays: 'days',
                recurrenceWeeks: 'weeks',
                recurrenceMonths: 'months',
                recurrenceMonthlyOn: 'Monthly on day',
                eventNotify: 'Notification',
                eventDuration: 'Duration',
                eventDate: 'Date',
                advancedOptions: 'Advanced options',
                quickAdd: 'e.g. 9am dentist',
                aiAnalyze: 'Analyze with AI',
                handwriteHint: 'Write the event here (e.g. 9am dentist)',
                clearDrawing: 'Clear',
                eraser: 'Eraser', pen: 'Pen',
            },
            localeTexts,
            config.texts ?? {}
        );

        // Skylight-specific config
        this._showHeader = config.showHeader ?? true;
        this._fillHeight = config.fillHeight ?? false;
        const defaultViews = ['Today', 'Tomorrow', 'Week', 'Biweek', 'Month'];
        this._views = typeof config.views === 'string'
            ? config.views.split(',').map(v => v.trim()).filter(Boolean)
            : (config.views ?? defaultViews);
        const savedView = (() => { try { return localStorage.getItem('skylight-calendar-view'); } catch(e) { return null; } })();
        const configDefault = config.defaultView ?? 'Week';
        this._currentView = savedView && this._views.includes(savedView) ? savedView : configDefault;

        // Initialize calendar visibility
        const newVisibility = {};
        (config.calendars || []).forEach(cal => {
            newVisibility[cal.entity] = this._calendarVisibility?.hasOwnProperty(cal.entity)
                ? this._calendarVisibility[cal.entity]
                : true;
        });
        this._calendarVisibility = newVisibility;

        // Apply current view settings
        this._applyViewSettings();
    }

    _isNumberOfDaysMonth(numberOfDays) {
        return String(numberOfDays).toLowerCase().trim() === 'month';
    }

    static LOCALE_TEXTS = {
        fr: {
            fullDay: 'Toute la journ\u00e9e', noEvents: 'Aucun \u00e9v\u00e9nement', moreEvents: 'Plus d\'\u00e9v\u00e9nements',
            today: 'Aujourd\'hui', tomorrow: 'Demain', yesterday: 'Hier',
            editEvent: 'Modifier', deleteEvent: 'Supprimer', eventTitle: 'Titre',
            eventCalendar: 'Calendrier', eventStart: 'D\u00e9but', eventEnd: 'Fin', eventLocation: 'Lieu',
            cancel: 'Annuler', create: 'Cr\u00e9er', newEvent: 'Nouvel \u00e9v\u00e9nement',
            save: 'Enregistrer', editEventTitle: 'Modifier l\'\u00e9v\u00e9nement',
            titleRequired: 'Le titre est requis',
            week: 'Semaine', biweek: '2 Semaines', month: 'Mois',
            eventRecurrence: 'R\u00e9p\u00e9tition', recurrenceNone: 'Pas de r\u00e9p\u00e9tition', recurrenceDaily: 'Journalier',
            recurrenceWeekly: 'Hebdomadaire', recurrenceMonthly: 'Mensuelle', recurrenceYearly: 'Annuelle',
            editThisEvent: 'Cet \u00e9v\u00e9nement uniquement', editAllEvents: 'Tous les \u00e9v\u00e9nements',
            editRecurringTitle: 'Modifier l\'\u00e9v\u00e9nement r\u00e9current',
            deleteThisEvent: 'Cet \u00e9v\u00e9nement uniquement', deleteAllEvents: 'Tous les \u00e9v\u00e9nements',
            deleteRecurringTitle: 'Supprimer l\'\u00e9v\u00e9nement r\u00e9current',
            recurrenceInterval: 'Intervalle de r\u00e9p\u00e9tition',
            recurrenceEnds: 'Se termine',
            recurrenceEndsNever: 'Jamais',
            recurrenceEndsOnDate: '\u00c0 une date',
            recurrenceEndsAfter: 'Apr\u00e8s',
            recurrenceOccurrences: 'occurrences',
            recurrenceDays: 'jours',
            recurrenceWeeks: 'semaines',
            recurrenceMonths: 'mois',
            recurrenceMonthlyOn: 'Chaque mois le',
            eventNotify: 'Notification',
            eventDuration: 'Durée',
            eventDate: 'Date',
            advancedOptions: 'Options avancées',
            quickAdd: 'ex : 9h dentiste',
            aiAnalyze: 'Analyser avec l’IA',
            handwriteHint: 'Écrivez l’événement ici (ex : 9h dentiste)',
            clearDrawing: 'Effacer',
            eraser: 'Gomme', pen: 'Stylo',
        },
        de: {
            fullDay: 'Ganzt\u00e4gig', noEvents: 'Keine Termine', moreEvents: 'Mehr Termine',
            today: 'Heute', tomorrow: 'Morgen', yesterday: 'Gestern',
            editEvent: 'Bearbeiten', deleteEvent: 'L\u00f6schen', eventTitle: 'Titel',
            eventCalendar: 'Kalender', eventStart: 'Beginn', eventEnd: 'Ende', eventLocation: 'Ort',
            cancel: 'Abbrechen', create: 'Erstellen', newEvent: 'Neuer Termin',
            save: 'Speichern', editEventTitle: 'Termin bearbeiten',
            titleRequired: 'Titel ist erforderlich',
            week: 'Woche', biweek: '2 Wochen', month: 'Monat',
            eventRecurrence: 'Wiederholung', recurrenceNone: 'Keine Wiederholung', recurrenceDaily: 'T\u00e4glich',
            recurrenceWeekly: 'W\u00f6chentlich', recurrenceMonthly: 'Monatlich', recurrenceYearly: 'J\u00e4hrlich',
            editThisEvent: 'Nur dieses Ereignis', editAllEvents: 'Alle Ereignisse',
            editRecurringTitle: 'Wiederkehrendes Ereignis bearbeiten',
            deleteThisEvent: 'Nur dieses Ereignis', deleteAllEvents: 'Alle Ereignisse',
            deleteRecurringTitle: 'Wiederkehrendes Ereignis l\u00f6schen',
            recurrenceInterval: 'Wiederholungsintervall',
            recurrenceEnds: 'Endet',
            recurrenceEndsNever: 'Nie',
            recurrenceEndsOnDate: 'Am Datum',
            recurrenceEndsAfter: 'Nach',
            recurrenceOccurrences: 'Wiederholungen',
            recurrenceDays: 'Tagen',
            recurrenceWeeks: 'Wochen',
            recurrenceMonths: 'Monaten',
            recurrenceMonthlyOn: 'Monatlich am',
            eventNotify: 'Benachrichtigung',
            eventDuration: 'Dauer',
            eventDate: 'Datum',
            advancedOptions: 'Erweiterte Optionen',
            quickAdd: 'z. B. 9 Uhr Zahnarzt',
            aiAnalyze: 'Mit KI analysieren',
            handwriteHint: 'Termin hier schreiben (z. B. 9 Uhr Zahnarzt)',
            clearDrawing: 'Löschen',
            eraser: 'Radierer', pen: 'Stift',
        },
        es: {
            fullDay: 'Todo el d\u00eda', noEvents: 'Sin eventos', moreEvents: 'M\u00e1s eventos',
            today: 'Hoy', tomorrow: 'Ma\u00f1ana', yesterday: 'Ayer',
            editEvent: 'Editar', deleteEvent: 'Eliminar', eventTitle: 'T\u00edtulo',
            eventCalendar: 'Calendario', eventStart: 'Inicio', eventEnd: 'Fin', eventLocation: 'Ubicaci\u00f3n',
            cancel: 'Cancelar', create: 'Crear', newEvent: 'Nuevo evento',
            save: 'Guardar', editEventTitle: 'Editar evento',
            titleRequired: 'El t\u00edtulo es obligatorio',
            week: 'Semana', biweek: '2 Semanas', month: 'Mes',
            eventRecurrence: 'Repetici\u00f3n', recurrenceNone: 'Sin repetici\u00f3n', recurrenceDaily: 'Diario',
            recurrenceWeekly: 'Semanal', recurrenceMonthly: 'Mensual', recurrenceYearly: 'Anual',
            editThisEvent: 'Solo este evento', editAllEvents: 'Todos los eventos',
            editRecurringTitle: 'Editar evento recurrente',
            deleteThisEvent: 'Solo este evento', deleteAllEvents: 'Todos los eventos',
            deleteRecurringTitle: 'Eliminar evento recurrente',
            recurrenceInterval: 'Intervalo de repetici\u00f3n',
            recurrenceEnds: 'Termina',
            recurrenceEndsNever: 'Nunca',
            recurrenceEndsOnDate: 'En una fecha',
            recurrenceEndsAfter: 'Despu\u00e9s de',
            recurrenceOccurrences: 'ocurrencias',
            recurrenceDays: 'd\u00edas',
            recurrenceWeeks: 'semanas',
            recurrenceMonths: 'meses',
            recurrenceMonthlyOn: 'Cada mes el',
            eventNotify: 'Notificación',
            eventDuration: 'Duración',
            eventDate: 'Fecha',
            advancedOptions: 'Opciones avanzadas',
            quickAdd: 'ej.: 9h dentista',
            aiAnalyze: 'Analizar con IA',
            handwriteHint: 'Escribe el evento aquí (ej.: 9h dentista)',
            clearDrawing: 'Borrar',
            eraser: 'Goma', pen: 'Lápiz',
        },
        it: {
            fullDay: 'Tutto il giorno', noEvents: 'Nessun evento', moreEvents: 'Pi\u00f9 eventi',
            today: 'Oggi', tomorrow: 'Domani', yesterday: 'Ieri',
            editEvent: 'Modifica', deleteEvent: 'Elimina', eventTitle: 'Titolo',
            eventCalendar: 'Calendario', eventStart: 'Inizio', eventEnd: 'Fine', eventLocation: 'Luogo',
            cancel: 'Annulla', create: 'Crea', newEvent: 'Nuovo evento',
            save: 'Salva', editEventTitle: 'Modifica evento',
            titleRequired: 'Il titolo \u00e8 obbligatorio',
            week: 'Settimana', biweek: '2 Settimane', month: 'Mese',
            eventRecurrence: 'Ripetizione', recurrenceNone: 'Nessuna ripetizione', recurrenceDaily: 'Giornaliero',
            recurrenceWeekly: 'Settimanale', recurrenceMonthly: 'Mensile', recurrenceYearly: 'Annuale',
            editThisEvent: 'Solo questo evento', editAllEvents: 'Tutti gli eventi',
            editRecurringTitle: 'Modifica evento ricorrente',
            deleteThisEvent: 'Solo questo evento', deleteAllEvents: 'Tutti gli eventi',
            deleteRecurringTitle: 'Elimina evento ricorrente',
            recurrenceInterval: 'Intervallo di ripetizione',
            recurrenceEnds: 'Termina',
            recurrenceEndsNever: 'Mai',
            recurrenceEndsOnDate: 'In una data',
            recurrenceEndsAfter: 'Dopo',
            recurrenceOccurrences: 'occorrenze',
            recurrenceDays: 'giorni',
            recurrenceWeeks: 'settimane',
            recurrenceMonths: 'mesi',
            recurrenceMonthlyOn: 'Ogni mese il',
            eventNotify: 'Notifica',
            eventDuration: 'Durata',
            eventDate: 'Data',
            advancedOptions: 'Opzioni avanzate',
            quickAdd: 'es.: 9 dentista',
            aiAnalyze: 'Analizza con IA',
            handwriteHint: 'Scrivi qui l’evento (es.: 9 dentista)',
            clearDrawing: 'Cancella',
            eraser: 'Gomma', pen: 'Penna',
        },
        nl: {
            fullDay: 'Hele dag', noEvents: 'Geen evenementen', moreEvents: 'Meer evenementen',
            today: 'Vandaag', tomorrow: 'Morgen', yesterday: 'Gisteren',
            editEvent: 'Bewerken', deleteEvent: 'Verwijderen', eventTitle: 'Titel',
            eventCalendar: 'Agenda', eventStart: 'Begin', eventEnd: 'Einde', eventLocation: 'Locatie',
            cancel: 'Annuleren', create: 'Aanmaken', newEvent: 'Nieuw evenement',
            save: 'Opslaan', editEventTitle: 'Evenement bewerken',
            titleRequired: 'Titel is verplicht',
            week: 'Week', biweek: '2 Weken', month: 'Maand',
            eventRecurrence: 'Herhaling', recurrenceNone: 'Geen herhaling', recurrenceDaily: 'Dagelijks',
            recurrenceWeekly: 'Wekelijks', recurrenceMonthly: 'Maandelijks', recurrenceYearly: 'Jaarlijks',
            editThisEvent: 'Alleen dit evenement', editAllEvents: 'Alle evenementen',
            editRecurringTitle: 'Terugkerend evenement bewerken',
            deleteThisEvent: 'Alleen dit evenement', deleteAllEvents: 'Alle evenementen',
            deleteRecurringTitle: 'Terugkerend evenement verwijderen',
            recurrenceInterval: 'Herhalingsinterval',
            recurrenceEnds: 'Eindigt',
            recurrenceEndsNever: 'Nooit',
            recurrenceEndsOnDate: 'Op datum',
            recurrenceEndsAfter: 'Na',
            recurrenceOccurrences: 'herhalingen',
            recurrenceDays: 'dagen',
            recurrenceWeeks: 'weken',
            recurrenceMonths: 'maanden',
            recurrenceMonthlyOn: 'Maandelijks op',
            eventNotify: 'Melding',
            eventDuration: 'Duur',
            eventDate: 'Datum',
            advancedOptions: 'Geavanceerde opties',
            quickAdd: 'bijv.: 9u tandarts',
            aiAnalyze: 'Analyseren met AI',
            handwriteHint: 'Schrijf hier het evenement (bijv.: 9u tandarts)',
            clearDrawing: 'Wissen',
            eraser: 'Gum', pen: 'Pen',
        },
        pt: {
            fullDay: 'Dia inteiro', noEvents: 'Sem eventos', moreEvents: 'Mais eventos',
            today: 'Hoje', tomorrow: 'Amanh\u00e3', yesterday: 'Ontem',
            editEvent: 'Editar', deleteEvent: 'Excluir', eventTitle: 'T\u00edtulo',
            eventCalendar: 'Calend\u00e1rio', eventStart: 'In\u00edcio', eventEnd: 'Fim', eventLocation: 'Local',
            cancel: 'Cancelar', create: 'Criar', newEvent: 'Novo evento',
            save: 'Salvar', editEventTitle: 'Editar evento',
            titleRequired: 'O t\u00edtulo \u00e9 obrigat\u00f3rio',
            week: 'Semana', biweek: '2 Semanas', month: 'M\u00eas',
            eventRecurrence: 'Repeti\u00e7\u00e3o', recurrenceNone: 'Sem repeti\u00e7\u00e3o', recurrenceDaily: 'Di\u00e1rio',
            recurrenceWeekly: 'Semanal', recurrenceMonthly: 'Mensal', recurrenceYearly: 'Anual',
            editThisEvent: 'Apenas este evento', editAllEvents: 'Todos os eventos',
            editRecurringTitle: 'Editar evento recorrente',
            deleteThisEvent: 'Apenas este evento', deleteAllEvents: 'Todos os eventos',
            deleteRecurringTitle: 'Excluir evento recorrente',
            recurrenceInterval: 'Intervalo de repeti\u00e7\u00e3o',
            recurrenceEnds: 'Termina',
            recurrenceEndsNever: 'Nunca',
            recurrenceEndsOnDate: 'Em uma data',
            recurrenceEndsAfter: 'Ap\u00f3s',
            recurrenceOccurrences: 'ocorr\u00eancias',
            recurrenceDays: 'dias',
            recurrenceWeeks: 'semanas',
            recurrenceMonths: 'meses',
            recurrenceMonthlyOn: 'Todo m\u00eas no dia',
            eventNotify: 'Notifica\u00e7\u00e3o',
            eventDuration: 'Dura\u00e7\u00e3o',
            eventDate: 'Data',
            advancedOptions: 'Op\u00e7\u00f5es avan\u00e7adas',
            quickAdd: 'ex.: 9h dentista',
            aiAnalyze: 'Analisar com IA',
            handwriteHint: 'Escreva o evento aqui (ex.: 9h dentista)',
            clearDrawing: 'Limpar',
            eraser: 'Borracha', pen: 'Caneta',
        },
    };

    static DURATION_PRESETS = [30, 60, 90, 120];

    static PASTEL_COLORS = [
        '#7FC8F8', // soft blue
        '#FFB5A7', // soft coral
        '#B8E0D2', // soft mint
        '#E4C1F9', // soft lavender
        '#FFD6A5', // soft peach
        '#CAFFBF', // soft green
        '#FFC6FF', // soft pink
        '#A0C4FF', // soft periwinkle
        '#FDFFB6', // soft yellow
        '#BDB2FF', // soft violet
    ];

    _applyDefaultColors(calendars) {
        return calendars.map((cal, i) => {
            if (!cal.color) {
                return { ...cal, color: this.constructor.PASTEL_COLORS[i % this.constructor.PASTEL_COLORS.length] };
            }
            return cal;
        });
    }

    // Guaranteed real colour for an event slice. An event must NEVER use the CSS
    // keyword 'inherit': it would inherit the card background — invisible on a
    // light card, a solid black bar on a dark one. Fall back to a stable pastel
    // based on the calendar's position so colourless calendars stay visible.
    _calendarColor(calendar) {
        if (calendar && calendar.color) return calendar.color;
        const list = this._calendars || [];
        const idx = list.findIndex((c) => c.entity === (calendar && calendar.entity));
        const palette = this.constructor.PASTEL_COLORS;
        return palette[(idx >= 0 ? idx : 0) % palette.length];
    }

    _getWeatherConfig(weatherConfiguration) {
        if (
            !weatherConfiguration
            || typeof weatherConfiguration !== 'string'
            && typeof weatherConfiguration !== 'object'
        ) {
            return null;
        }

        let configuration = {
            entity: null,
            showCondition: true,
            showTemperature: false,
            showLowTemperature: false,
            roundTemperature: false,
        };
        if (typeof weatherConfiguration === 'string') {
            configuration.entity = weatherConfiguration;
        } else {
            Object.assign(configuration, weatherConfiguration);
        }

        // Auto-detect weather entity if none set or configured one doesn't exist
        if (!configuration.entity || (this.hass && !this.hass.states[configuration.entity])) {
            if (this.hass) {
                const weatherEntity = Object.keys(this.hass.states).find(k => k.startsWith('weather.'));
                if (weatherEntity) {
                    configuration.entity = weatherEntity;
                } else {
                    return null;
                }
            } else if (!configuration.entity) {
                return null;
            }
        }

        return configuration;
    }

    // ═══════════════════════════════════════════════════════════════
    // Skylight view/calendar methods
    // ═══════════════════════════════════════════════════════════════

    _applyViewSettings() {
        const startingDay = this._config.startingDay ?? 'monday';
        switch (this._currentView) {
            case 'Today':
                this._startingDay = 'today';
                this._numberOfDays = 1;
                this._numberOfDaysIsMonth = false;
                break;
            case 'Tomorrow':
                this._startingDay = 'tomorrow';
                this._numberOfDays = 1;
                this._numberOfDaysIsMonth = false;
                break;
            case 'Week':
                this._startingDay = startingDay;
                this._numberOfDays = 7;
                this._numberOfDaysIsMonth = false;
                break;
            case 'Biweek':
                this._startingDay = startingDay;
                this._numberOfDays = 14;
                this._numberOfDaysIsMonth = false;
                break;
            case 'Month':
                this._startingDay = startingDay;
                this._numberOfDaysIsMonth = true;
                this._numberOfDays = this._getNumberOfDays('month');
                break;
            default:
                this._startingDay = startingDay;
                this._numberOfDays = 7;
                this._numberOfDaysIsMonth = false;
        }
        this._startDate = this._getStartDate();
    }

    _setView(viewName) {
        this._currentView = viewName;
        this._navigationOffset = 0;
        try { localStorage.setItem('skylight-calendar-view', viewName); } catch(e) {}
        this._applyViewSettings();
        this._updateEvents();
    }

    _toggleCalendarVisibility(entity) {
        this._calendarVisibility = {
            ...this._calendarVisibility,
            [entity]: !this._calendarVisibility[entity]
        };
        // Sync with _hideCalendars
        const hideCalendars = [];
        for (const [ent, visible] of Object.entries(this._calendarVisibility)) {
            if (!visible) hideCalendars.push(ent);
        }
        this._hideCalendars = hideCalendars;
    }

    // ═══════════════════════════════════════════════════════════════
    // Clock methods
    // ═══════════════════════════════════════════════════════════════

    connectedCallback() {
        super.connectedCallback();
        this._startClock();
        if (!this._onResize) {
            this._onResize = () => this._applyFillHeight();
        }
        window.addEventListener('resize', this._onResize);
        if (this._initialized) {
            this._waitForHassAndConfig();
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._stopClock();
        this._clearUpdateEventsTimeouts();
        clearTimeout(this._locationSearchTimeout);
        if (this._onResize) {
            window.removeEventListener('resize', this._onResize);
        }
        if (this._weatherUnsub) {
            this._weatherUnsub.then((unsub) => unsub()).catch(() => {});
            this._weatherUnsub = null;
            this._weatherForecast = null;
        }
    }

    updated() {
        // Initialise the handwriting canvas once the create overlay is open. The
        // tablet edit overlay no longer has a canvas (title is read-only there).
        const overlayOpen = this._showCreateEventDialog && this._showHandwritingCanvas();
        if (overlayOpen) {
            if (!this._canvasReady && this.shadowRoot?.querySelector('#quick-canvas')) {
                // Wait one frame so the full-screen overlay is laid out before
                // sizing the canvas bitmap to its displayed box.
                this._canvasReady = true;
                requestAnimationFrame(() => this._initCanvas());
            }
        } else if (this._canvasReady) {
            this._canvasReady = false;
        }
        this._applyFillHeight();
    }

    // When fillHeight is on, make the day rows grow so the grid fills the card.
    // Only the day rows stretch (the weekday-header / navigation rows keep their
    // natural height), so we compute the per-cell height in JS rather than using
    // align-content/grid stretch which would also inflate the header rows.
    _applyFillHeight() {
        const grid = this.shadowRoot?.querySelector('.container');
        if (!grid) return;
        if (!this._fillHeight) {
            grid.style.removeProperty('--day-fill-height');
            this._fillSig = null;
            this._fillEventCap = 0;
            return;
        }
        const container = this.shadowRoot?.querySelector('.calendar-container');
        const dayCells = grid ? [...grid.querySelectorAll('.day:not(.header)')] : [];
        if (!container || dayCells.length === 0) return;
        // Only run the layout-reading measurement when an input that affects the
        // fill changed (viewport height, view, month, cell count) — not on every
        // re-render (e.g. the clock tick), which would force a needless reflow.
        const sig = window.innerHeight + ':' + dayCells.length + ':' + this._currentView + ':' + (this._startDate ? this._startDate.toISODate() : '');
        if (sig === this._fillSig) return;
        this._fillSig = sig;
        requestAnimationFrame(() => {
            const contRect = container.getBoundingClientRect();
            // Distinct vertical positions = number of visual week rows.
            const tops = dayCells.map((c) => Math.round(c.getBoundingClientRect().top - contRect.top));
            const rows = new Set(tops).size || 1;
            const firstTop = Math.min(...tops);
            const gap = parseFloat(getComputedStyle(grid).rowGap) || 0;
            // Available height = from the first day-cell row down to the bottom of
            // the viewport. Using the viewport (not the card's own height) makes it
            // fill in any view type — masonry / sections, not just a panel view.
            const bottomMargin = 12;
            const firstCellViewportTop = contRect.top + firstTop;
            const avail = window.innerHeight - firstCellViewportTop - bottomMargin - gap * (rows - 1);
            const per = Math.floor(avail / rows);
            // Only size cells when there is real space to fill (avail large enough).
            if (per > 40) {
                grid.style.setProperty('--day-fill-height', per + 'px');
                // Compute how many events fit per cell → cap with a "+N" chip.
                // Measure a sample cell's header + one event (CSS clip is the
                // safety net if the estimate is slightly off).
                const sample = dayCells.find((c) => c.querySelector('.events .event'));
                const headerEl = (sample || dayCells[0]).querySelector('.day-header');
                const eventEl = sample && sample.querySelector('.events .event');
                const headerH = headerEl ? headerEl.offsetHeight : 36;
                const eventH = eventEl
                    ? eventEl.offsetHeight + (parseFloat(getComputedStyle(eventEl).marginBottom) || 0)
                    : 30;
                // Reserve ~20px for the "+N" chip so it isn't clipped.
                const cap = Math.max(1, Math.floor((per - headerH - 20) / Math.max(18, eventH)));
                if (cap !== this._fillEventCap) {
                    this._fillEventCap = cap;
                    this.requestUpdate();
                }
            } else {
                grid.style.removeProperty('--day-fill-height');
                this._fillEventCap = 0;
            }
        });
    }

    _startClock() {
        this._stopClock();
        // The header clock only shows HH:MM, so a 60s tick is enough — halves the
        // periodic full re-render churn on an always-on wall tablet.
        this._clockInterval = setInterval(() => this.requestUpdate(), 60000);
    }

    _stopClock() {
        if (this._clockInterval) {
            clearInterval(this._clockInterval);
            this._clockInterval = null;
        }
    }

    // ═══════════════════════════════════════════════════════════════
    // Render
    // ═══════════════════════════════════════════════════════════════

    /**
     * Render
     *
     * @return {Object}
     */
    render() {
        if (!this._loader) {
            this._loader = this._getLoader();
        }

        if (!this._initialized) {
            this._initialized = true;
            this._waitForHassAndConfig();
        }

        let cardClasses = [];
        if (this._noCardBackground) {
            cardClasses.push('nobackground');
        }
        if (this._compact) {
            cardClasses.push('compact');
        }
        if (this._fillHeight) {
            cardClasses.push('fill-height');
        }
        cardClasses.push('theme-' + this._theme);

        const cardStyles = [
            '--event-background-color: ' + this._eventBackground + ';'
        ];
        if (this._columns.extraLarge) {
            cardStyles.push('--days-columns: ' + this._columns.extraLarge + ';');
        }
        if (this._columns.large) {
            cardStyles.push('--days-columns-lg: ' + this._columns.large + ';');
        }
        if (this._columns.medium) {
            cardStyles.push('--days-columns-md: ' + this._columns.medium + ';');
        }
        if (this._columns.small) {
            cardStyles.push('--days-columns-sm: ' + this._columns.small + ';');
        }
        if (this._columns.extraSmall) {
            cardStyles.push('--days-columns-xs: ' + this._columns.extraSmall + ';');
        }

        const locale = this._config?.locale || 'en';
        const now = new Date();

        return html`
            <ha-card class="${cardClasses.join(' ')}" style="${cardStyles.join(' ')}">
                <div class="card-content skylight">
                    ${this._error ?
                        html`<div class="errors"><ha-alert alert-type="error">${this._error}</ha-alert></div>` :
                        ''
                    }
                    ${this._showHeader ? html`
                        <div class="skylight-header">
                            <div class="date-section">
                                ${this._showHeaderDate ? html`
                                    <div class="day-name">${now.toLocaleDateString(locale, { weekday: 'long' })}</div>
                                    <div class="full-date">${now.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                                ` : ''}
                                ${this._showHeaderClock ? html`
                                    <div class="clock">${now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}</div>
                                ` : ''}
                            </div>
                            ${this._showCurrentWeather ? this._renderHeaderWeather() : ''}
                        </div>
                    ` : ''}
                    <div class="controls">
                        ${this._title && this._showTitle ? html`
                            <div class="title-row">
                                <span class="calendar-title">${this._title}</span>
                            </div>
                        ` : ''}
                        <div class="buttons-row">
                            <div class="calendar-filters">
                                ${this._calendars.map(cal => html`
                                    <button
                                        class="filter-btn ${this._calendarVisibility[cal.entity] !== false ? 'active' : ''}"
                                        style="--cal-color: ${cal.color || '#888'}"
                                        @click="${() => this._toggleCalendarVisibility(cal.entity)}"
                                    >
                                        ${cal.icon ? html`<ha-icon icon="${cal.icon}"></ha-icon>` : ''}
                                        <span>${this._getCalendarDisplayName(cal)}</span>
                                    </button>
                                `)}
                            </div>
                            <div class="view-selector">
                                ${this._views.map(view => html`
                                    <button
                                        class="view-btn ${view === this._currentView ? 'active' : ''}"
                                        data-view="${view.toLowerCase()}"
                                        @click="${() => this._setView(view)}"
                                        title="${this._getViewLabel(view)}"
                                    >
                                        <ha-icon class="view-icon" icon="${this._getViewIcon(view)}"></ha-icon>
                                        <span class="view-label">${this._getViewLabel(view)}</span>
                                    </button>
                                `)}
                            </div>
                        </div>
                    </div>
                    <div class="calendar-container">
                        <div class="container${this._actions ? ' hasActions' : ''}${this._numberOfDaysIsMonth ? ' month-view' : ''}" style="${this._dayHeaderFontSize ? '--day-header-font-size: ' + this._dayHeaderFontSize + ';' : ''}${this._dayHeaderColor ? '--day-header-color: ' + this._dayHeaderColor + ';' : ''}" @click="${this._handleContainerClick}" @pointerdown="${this._handlePointerDown}" @pointerup="${this._handlePointerUp}" @pointercancel="${this._handlePointerCancel}">
                            ${this._fullscreenOverlayOpen() ? '' : html`
                                ${this._renderHeader()}
                                ${this._renderWeekDays()}
                                ${this._renderDays()}
                                ${this._numberOfDaysIsMonth && this._selectedDay ? this._renderSelectedDayEvents() : ''}
                            `}
                        </div>
                    </div>
                    ${this._renderEventDetailsDialog()}
                    ${this._renderCreateEventDialog()}
                    ${this._renderEditEventDialog()}
                    ${this._renderRecurringConfirmDialog()}
                    ${this._renderDeleteRecurringDialog()}
                    ${this._dayEventsPopup ? this._renderDayEventsPopup() : ''}
                    ${this._loader}
                </div>
            </ha-card>
        `;
    }

    _renderHeaderWeather() {
        if (!this._weather || !this.hass) return html``;

        const weatherState = this.hass.states[this._weather.entity];
        if (!weatherState) return html``;

        const condition = weatherState.state;
        const temperature = this._weather.roundTemperature
            ? Math.round(weatherState.attributes.temperature)
            : weatherState.attributes.temperature;
        const unit = weatherState.attributes.temperature_unit || '°C';

        const isNight = this.hass.states['sun.sun']?.state === 'below_horizon';

        return html`
            <div class="weather-section" @click="${this._handleWeatherClick}">
                ${this._getWeatherIcon(condition, this.hass.formatEntityState(weatherState), isNight)}
                <div class="weather-temp">${isNaN(temperature) ? '' : Math.round(temperature) + unit}</div>
            </div>
        `;
    }

    _renderHeader() {
        if (!this._showLegend && !this._showNavigation) {
            return html``;
        }

        return html`
            <div class="header">
                ${this._renderNavigation()}
                ${this._renderLegend()}
            </div>
        `;
    }

    _renderLegend() {
        if (!this._showLegend) {
            return html``;
        }

        return html`
            <div class="legend">
                <ul>
                    ${this._calendars.map((calendar) => {
                        if (!calendar.hideInLegend) {
                            return html`
                                <li class="${calendar.icon ? 'icon' : 'noIcon'}${this._legendToggle ? ' hasToggle' : ''}${this._hideCalendars.indexOf(calendar.entity) === -1 ? '' : ' hidden'}" style="--legend-calendar-color: ${calendar.color ?? 'inherit'}" @click="${() => {
                                    this._handleLegendClick(calendar)
                                }}">
                                    ${calendar.icon ?
                                        html`<ha-icon icon="${calendar.icon}"></ha-icon>` :
                                        ''
                                    }
                                    ${this._getCalendarDisplayName(calendar)}
                                </li>
                            `;
                        }
                    })}
                </ul>
            </div>
        `;
    }

    _renderNavigation() {
        if (!this._showNavigation) {
            return html``;
        }

        return html`
            <div class="navigation">
                <ul>
                    <li @click="${this._handleNavigationPreviousClick}"><ha-icon icon="mdi:arrow-left"></ha-icon></li>
                    <li @click="${this._handleNavigationOriginalClick}"><ha-icon icon="mdi:circle-medium"></ha-icon></li>
                    <li @click="${this._handleNavigationNextClick}"><ha-icon icon="mdi:arrow-right"></ha-icon></li>
                </ul>
                <div class="month">${this._startDate.toFormat('MMMM yyyy')}</div>
            </div>
        `;
    }

    _renderWeekDays() {
        if (!this._showWeekDayText || !this._days) {
            return html``;
        }

        if (!this._numberOfDaysIsMonth && this._numberOfDays < 7) {
            return html``;
        }

        const days = this._days.slice(0, 7);
        const weekDays = [
            this._language.sunday,
            this._language.monday,
            this._language.tuesday,
            this._language.wednesday,
            this._language.thursday,
            this._language.friday,
            this._language.saturday,
            this._language.sunday,
        ];

        return html`
            ${days.map((day) => {
                const fullName = weekDays[day.date.weekday];
                const shortName = fullName?.substring(0, 3).toUpperCase() ?? '';
                return html`
                    <div class="day header">
                        <div class="date">
                            <span class="text">${fullName}</span>
                            <span class="text-short">${shortName}</span>
                        </div>
                    </div>
                `
            })}
        `;
    }

    _renderDays() {
        if (!this._days) {
            return html``;
        }

        return html`
            ${this._days.map((day) => {
                if (day.isOutsideMonth) {
                    return html`<div class="day ${day.class}"></div>`;
                }

                if (this._hideDaysWithoutEvents && day.events.length === 0 && (this._hideTodayWithoutEvents || !this._isToday(day.date))) {
                    return html``;
                }
                const isSelected = this._selectedDay && this._selectedDay.date.day === day.date.day && this._selectedDay.date.month === day.date.month && this._selectedDay.date.year === day.date.year;
                return html`
                    <div class="day ${day.class}${isSelected ? ' selected' : ''}" data-date="${day.date.day}" data-weekday="${day.date.weekday}" data-month="${day.date.month}" data-year="${day.date.year}" data-week="${day.date.weekNumber}" @click="${(e) => { if (this._numberOfDaysIsMonth) { e.stopPropagation(); this._selectDay(day); } }}">
                        <div class="day-header">
                            <div class="date">
                                ${this._dayFormat ?
                                    unsafeHTML(day.date.toFormat(this._dayFormat)) :
                                    html`
                                        <span class="number">${day.date.day}</span>
                                        ${this._showDayName || (this._showWeekDayText && !this._numberOfDaysIsMonth && this._numberOfDays < 7) ?
                                            html`<span class="text">${this._getWeekDayText(day.date)}</span>` :
                                            html`<span class="text mobile-only">${this._getWeekDayText(day.date)}</span>`
                                        }
                                    `
                                }
                            </div>
                            ${this._showWeather && day.weather ?
                                html`
                                    <div class="weather" @click="${this._handleWeatherClick}">
                                        ${this._weather?.showTemperature || this._weather?.showLowTemperature ?
                                            html`
                                                <div class="temperature">
                                                    ${this._weather?.showTemperature ?
                                                        html`
                                                            <span class="high">${day.weather.temperature}</span>
                                                        ` :
                                                        ''
                                                    }
                                                    ${this._weather?.showLowTemperature ?
                                                        html`
                                                                <span class="low">${day.weather.templow}</span>
                                                        ` :
                                                        ''
                                                    }
                                                </div>
                                            ` :
                                            ''
                                        }
                                        ${this._weather?.showCondition ?
                                            this._getWeatherIcon(day.weather.state, day.weather.condition) :
                                            ''
                                        }
                                    </div>
                                ` :
                                ''
                            }
                            <div class="add-event" @click="${(e) => { e.stopPropagation(); this._handleAddEventClick(e, day); }}">
                                <ha-icon icon="mdi:plus"></ha-icon>
                            </div>
                        </div>
                        <div class="event-dots">
                            ${day.events
                                .map(eventKey => this._calendarEvents?.[eventKey])
                                .filter(ev => ev && !ev.calendars.every(c => this._hideCalendars.indexOf(c) > -1))
                                .slice(0, 4)
                                .map(ev => {
                                    const visibleIndex = ev.calendars.findIndex(c => this._hideCalendars.indexOf(c) === -1);
                                    return html`<span class="dot" style="background:${ev.colors[visibleIndex] ?? ev.colors[0]}"></span>`;
                                })}
                        </div>
                        <div class="events">
                            ${this._renderEvents(day)}
                        </div>
                    </div>
                `
            })}
        `;
    }

    _renderSelectedDayEvents() {
        if (!this._selectedDay) return html``;
        return html`
            <div class="selected-day-events">
                <div class="selected-day-header">
                    <span class="selected-day-date">${this._selectedDay.date.toFormat('d MMMM')}</span>
                    <div class="add-event" @click="${(e) => this._handleAddEventClick(e, this._selectedDay)}">
                        <ha-icon icon="mdi:plus"></ha-icon>
                    </div>
                </div>
                <div class="selected-day-list">
                    ${this._renderEvents(this._selectedDay, true)}
                </div>
            </div>
        `;
    }

    // Popup listing every event of a day — opened by tapping the "+N" chip on a
    // cell whose events were clipped to keep the month on one page.
    _renderDayEventsPopup() {
        const day = this._dayEventsPopup;
        if (!day) return html``;
        return html`
            <div class="hw-overlay" @click="${(e) => { if (e.target === e.currentTarget) this._dayEventsPopup = null; }}">
                <div class="hw-modal day-events-modal">
                    <div class="hw-modal-header">
                        <span>${day.date.toFormat('cccc d LLLL')}</span>
                        <button type="button" class="hw-close" @click="${() => { this._dayEventsPopup = null; }}">
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    </div>
                    <div class="hw-edit-scroll">
                        ${this._renderEvents(day, true)}
                    </div>
                </div>
            </div>
        `;
    }

    _renderEvents(day, plain = false) {
        const dayEvents = [];
        day.events.map((eventKey) => {
            if (!this._calendarEvents[eventKey]) {
                return;
            }

            const event = Object.assign({}, this._calendarEvents[eventKey]);

            // Remove events and colors for calendars that are hidden
            const eventCalendars = [...event.calendars];
            const colors = [...event.colors];
            let i = 0;
            while (i < eventCalendars.length) {
                if (this._hideCalendars.indexOf(eventCalendars[i]) > -1) {
                    eventCalendars.splice(i, 1);
                    colors.splice(i, 1);
                } else {
                    i++;
                }
            }

            if (eventCalendars.length === 0) {
                return;
            }

            event.calendars = eventCalendars;
            event.colors = colors;

            dayEvents.push(event);
        });

        if (dayEvents.length === 0) {
            // In multi-day grids (week / biweek / month) an empty cell stays
            // empty. The "no events" placeholder is a .none box whose background
            // is the card colour — harmless in light mode but a dark bar in dark
            // mode — so only show it in the single-day (Today/Tomorrow) view.
            return this._numberOfDays > 1 ? html`` : this._renderNoEvents();
        }

        // Cap the events shown in a grid cell so the cell can't overflow: the
        // fill-height cap (how many fit, computed from the cell height) takes
        // precedence, else the configured maxDayEvents. Never cap the plain list
        // (the day-events popup / single-day view shows everything).
        let moreCount = 0;
        const eventLimit = plain ? 0
            : (this._fillHeight && this._fillEventCap ? this._fillEventCap : (this._maxDayEvents || 0));
        if (eventLimit > 0 && dayEvents.length > eventLimit) {
            moreCount = dayEvents.length - eventLimit;
            dayEvents.splice(eventLimit);
        }

        // Row boundaries of the grid: a banner band is "joined" to a neighbour
        // only within the same visual week row (so it gets rounded ends at the
        // row edges and at the event's real start/end).
        const rowStartWd = (this._days && this._days[0]) ? this._days[0].date.weekday
            : (this._startDate ? this._startDate.weekday : 1);
        const rowEndWd = ((rowStartWd + 5) % 7) + 1;
        const isRowStart = day.date.weekday === rowStartWd;
        const isRowEnd = day.date.weekday === rowEndWd;

        return html`
            ${dayEvents.map((event) => {
                const doneColors = [event.colors[0]];
                const banner = !plain && this._multiDayMode === 'banner' && event.multiDay;
                const pos = event.multiDayPosition ?? 'middle';
                const leftJoin = banner && pos !== 'start' && !isRowStart;
                const rightJoin = banner && pos !== 'end' && !isRowEnd;
                const bannerClasses = banner
                    ? ' banner' + (leftJoin ? ' ljoin' : '') + (rightJoin ? ' rjoin' : '')
                    : '';
                const showBannerText = !banner || pos === 'start' || isRowStart;
                return html`
                    <div
                        class="event ${event.class}${bannerClasses}"
                        data-entity="${event.calendars[0]}"
                        data-additional-entities="${event.calendars.join(',')}"
                        data-summary="${event.summary}"
                        data-location="${event.location ?? ''}"
                        data-start-hour="${event.start.toFormat('H')}"
                        data-start-minute="${event.start.toFormat('mm')}"
                        data-end-hour="${event.end.toFormat('H')}"
                        data-end-minute="${event.end.toFormat('mm')}"
                        style="--border-color: ${event.colors[0]}${this._colorFullEvent ? '; background-color: ' + event.colors[0] + '; color: #fff; border-left-width: 0' : ''}"
                        @click="${() => {
                            this._handleEventClick(event)
                        }}"
                    >
                        ${event.colors.map((color) => {
                            if (doneColors.indexOf(color) > -1) {
                                return '';
                            }
                            doneColors.push(color);
                            return html`
                                <div
                                    class="additionalColor"
                                    style="--event-additional-color: ${color}"
                                ></div>
                            `
                        })}
                        ${banner ? html`
                            <div class="inner">
                                <div class="title">${showBannerText && this._showEventTitle ? event.summary : html` `}</div>
                            </div>
                        ` : html`
                        <div class="inner">
                            ${this._showTime ?
                                html`<div class="time">
                                    ${this._renderEventTime(event)}
                                </div>` :
                                ''
                            }
                            ${this._showEventTitle ? html`<div class="title">
                                ${event.summary}
                            </div>` : ''}
                            ${this._showDescription ?
                                html`
                                    <div class="description">
                                        ${event.description}
                                    </div>
                                ` :
                                ''
                            }
                            ${this._showLocation && event.location ?
                                html`
                                    <div class="location">
                                        <ha-icon icon="mdi:map-marker"></ha-icon>
                                        ${event.location}
                                    </div>
                                ` :
                                ''
                            }
                        </div>
                        `}
                        ${event.icon && (!banner || showBannerText) ?
                            html`
                                <div class="icon">
                                    <ha-icon icon="${event.icon}"></ha-icon>
                                </div>
                            ` :
                            ''
                        }
                    </div>
                `
            })}
            ${moreCount > 0 ?
                html`
                    <div class="more" @click="${(e) => { e.stopPropagation(); this._dayEventsPopup = day; }}"
                        title="${this._language.moreEvents}">
                        +${moreCount}
                    </div>
                ` :
                ''
            }
        `;
    }

    _renderEventTime(event) {
        // True all-day events (no time on the original dates), including
        // multi-day vacations: show the "entire day" label, not 00:00 times
        if (event.fullDay && this._isFullDay(event.originalStart, event.originalEnd, true)) {
            return html`${this._language.fullDay}`;
        }
        if (event.multiDay && this._multiDayMode !== 'default') {
            return html`
                ${event.originalStart ? event.originalStart.toFormat(this._multiDayTimeFormat) : ''}
                ${event.originalEnd ? ' - ' + event.originalEnd.toFormat(this._multiDayTimeFormat) : ''}
            `;
        } else if (event.fullDay) {
            return html`${this._language.fullDay}`;
        } else {
            return html`
                ${event.start.toFormat(this._timeFormat)}
                ${event.end ? ' - ' + event.end.toFormat(this._timeFormat) : ''}
            `;
        }
    }

    _renderNoEvents() {
        return html`
            <div class="none">
                ${this._language.noEvents}
            </div>
        `;
    }

    _renderEventDetailsDialog() {
        if (!this._currentEventDetails) {
            return html``;
        }

        return html`
            <ha-dialog
                open
                @closed="${this._closeDialog}"
                .heading="${this._renderEventDetailsDialogHeading()}"
            >
                <div class="content">
                    ${this._showCalendarName ?
                        html`<div class="calendar">
                            <ha-icon icon="mdi:calendar-account"></ha-icon>
                            <div class="info">
                                ${this._currentEventDetails.calendarNames.join(', ')}
                            </div>
                        </div>` :
                        ''
                    }
                    ${this._showDate ?
                        html`<div class="datetime">
                            <ha-icon icon="mdi:calendar-clock"></ha-icon>
                            <div class="info">
                                ${this._renderEventDetailsDate()}
                            </div>
                        </div>` :
                        ''
                    }
                    ${this._currentEventDetails.location ?
                        html`
                            <div class="location">
                                <ha-icon icon="mdi:map-marker"></ha-icon>
                                <div class="info">
                                    <a href="${this._locationLink}${encodeURIComponent(this._currentEventDetails.location)}" target="_blank" rel="noopener noreferrer">${this._currentEventDetails.location}</a>
                                </div>
                            </div>
                        ` :
                        ''
                    }
                    ${this._currentEventDetails.description ?
                        html`
                            <div class="description">
                                ${this._currentEventDetails.description}
                            </div>
                        ` :
                        ''
                    }
                    ${this._currentEventDetails.uid ?
                        html`
                            <div class="event-actions">
                                <button class="btn btn-edit" @click="${this._handleEditEventClick}">
                                    <ha-icon icon="mdi:pencil"></ha-icon> ${this._language.editEvent}
                                </button>
                                <button class="btn btn-delete" @click="${this._handleDeleteEvent}">
                                    <ha-icon icon="mdi:delete"></ha-icon> ${this._language.deleteEvent}
                                </button>
                            </div>
                        ` :
                        ''
                    }
                </div>
            </ha-dialog>
        `;
    }

    _renderEventDetailsDialogHeading() {
        return html`
            <div class="header_title">
                <span>${this._currentEventDetails.summary}</span>
                <ha-icon-button
                    .label="${this.hass?.localize('ui.dialogs.generic.close') ?? 'Close'}"
                    dialogAction="close"
                    class="header_button"
                ><ha-icon icon="mdi:close"></ha-icon></ha-icon-button>
            </div>
        `;
    }

    _renderEventDetailsDate() {
        const start = this._currentEventDetails.originalStart;
        const end = this._currentEventDetails.originalEnd ?? null;

        if (end === null) {
            return html`
                ${start.toFormat(this._dateFormat + ' ' + this._timeFormat)}
            `;
        } else if (this._isFullDay(start, end, true)) {
            if (Math.abs(start.diff(end, 'hours').toObject().hours) <= 24) {
                return html`
                    ${start.toFormat(this._dateFormat)}
                `;
            } else {
                // End is midnight on the next day, so remove 1 second to get the correct end date
                const endMinusOneSecond = end.minus({ seconds: 1 });
                return html`
                    ${start.toFormat(this._dateFormat)} - ${endMinusOneSecond.toFormat(this._dateFormat)}
                `;
            }
        } else if (this._isSameDay(start, end)) {
            return html`
                ${start.toFormat(this._dateFormat + ' ' + this._timeFormat) + ' - ' + end.toFormat(this._timeFormat)}
            `;
        }

        return html`
            ${start.toFormat(this._dateFormat + ' ' + this._timeFormat)} - ${end.toFormat(this._dateFormat + ' ' + this._timeFormat)}
        `;
    }

    _renderCreateEventDialog() {
        if (!this._showCreateEventDialog) {
            return html``;
        }

        // Tablet: minimal handwriting-only dialog (write → Create → AI + create
        // run in the background). Desktop/phone get the full keyboard form below.
        if (this._showHandwritingCanvas()) {
            return this._renderHandwritingCreateDialog();
        }

        const dayDate = this._showCreateEventDialog.date;
        const now = DateTime.now();
        const defaultStart = dayDate.set({
            hour: Math.min(now.hour + 1, 23),
            minute: 0,
            second: 0,
            millisecond: 0,
        });
        const isAllDay = this._createDuration === 'allday';
        const durationMinutes = isAllDay ? 0 : (parseInt(this._createDuration) || 60);
        const defaultEnd = defaultStart.plus({ minutes: durationMinutes });
        const startDateValue = defaultStart.toFormat("yyyy-MM-dd");
        const startTimeValue = defaultStart.toFormat("HH:mm");
        const endDateValue = defaultEnd.toFormat("yyyy-MM-dd");
        const endTimeValue = defaultEnd.toFormat("HH:mm");

        return html`
            <ha-dialog
                open
                @closed="${this._closeCreateEventDialog}"
                .heading="${this._renderCreateEventDialogHeading()}"
            >
                <div class="create-event-form">
                    <div class="form-row">
                        <div class="input-clear-wrapper with-icon">
                            <ha-icon class="field-icon" icon="mdi:format-title"></ha-icon>
                            <input type="text" id="event-title" class="form-input" required placeholder="${this._language.eventTitle}"
                                .value="${this._createTitle ?? ''}"
                                @input="${(e) => { this._createTitle = e.target.value; }}" />
                            <button type="button" class="input-clear" @click="${() => { this._createTitle = ''; this._clearInput('event-title'); }}" title="${this._language.cancel}">
                                <ha-icon icon="mdi:close-circle"></ha-icon>
                            </button>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:calendar"></ha-icon>
                            <select id="event-calendar" class="form-input cal-select">
                                ${this._calendars.map((calendar) => html`
                                    <option value="${calendar.entity}" ?selected="${calendar.entity === this._defaultCalendar}">${this._getCalendarDisplayName(calendar)}</option>
                                `)}
                            </select>
                        </div>
                    </div>
                    <div class="form-row" style="${isAllDay ? 'display: none' : ''}">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:clock-outline"></ha-icon>
                            ${this._renderTimeDropdowns(this._createStartTime ?? startTimeValue, false)}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:timer-outline"></ha-icon>
                            <div class="duration-picker">
                                ${this.constructor.DURATION_PRESETS.map((minutes) => html`
                                    <button type="button" class="duration-btn ${String(minutes) === this._createDuration ? 'active' : ''}"
                                        @click="${() => { this._createDuration = String(minutes); this._createEndTouched = false; }}">${this._formatDuration(minutes)}</button>
                                `)}
                                <button type="button" class="duration-btn ${isAllDay ? 'active' : ''}"
                                    @click="${() => { this._createDuration = 'allday'; this._createEndTouched = false; }}">${this._language.fullDay}</button>
                            </div>
                        </div>
                    </div>
                    ${this._showLocationInForm ? html`
                    <div class="form-row location-row">
                        <div class="input-clear-wrapper with-icon">
                            <ha-icon class="field-icon" icon="mdi:map-marker"></ha-icon>
                            <input type="text" id="event-location" class="form-input" placeholder="${this._language.eventLocation ?? 'Location'}"
                                @input="${this._handleLocationInput}" autocomplete="off" />
                            <button type="button" class="input-clear" @click="${() => this._clearInput('event-location')}" title="${this._language.cancel}">
                                <ha-icon icon="mdi:close-circle"></ha-icon>
                            </button>
                        </div>
                        <ul class="location-suggestions" id="event-location-suggestions"></ul>
                    </div>
                    ` : ''}
                    <details class="advanced-details">
                    <summary class="advanced-toggle">
                        <ha-icon class="adv-chevron" icon="mdi:chevron-down"></ha-icon>
                        <span>${this._language.advancedOptions}</span>
                    </summary>
                    <div class="advanced-section">
                    <div class="form-row">
                        <label for="event-start-date">${this._language.eventDate}</label>
                        <input type="date" id="event-start-date" class="form-input" .value="${startDateValue}" required />
                    </div>
                    <div class="form-row">
                        <label for="event-end-date">${this._language.eventEnd}</label>
                        <div class="datetime-row">
                            <input type="date" id="event-end-date" class="form-input" .value="${endDateValue}"
                                @input="${() => { this._createEndTouched = true; }}" />
                            <input type="time" id="event-end-time" class="form-input" style="${isAllDay ? 'display: none' : ''}" .value="${endTimeValue}"
                                @input="${() => { this._createEndTouched = true; }}" />
                        </div>
                    </div>
                    <div class="form-row">
                        <label for="event-recurrence">${this._language.eventRecurrence}</label>
                        <select id="event-recurrence" class="form-input"
                            @change="${(e) => { this._createRecurrenceType = e.target.value || null; this._createRecurrenceEndType = 'never'; }}">
                            <option value="">${this._language.recurrenceNone}</option>
                            <option value="FREQ=DAILY">${this._language.recurrenceDaily}</option>
                            <option value="FREQ=WEEKLY">${this._language.recurrenceWeekly}</option>
                            <option value="FREQ=MONTHLY">${this._language.recurrenceMonthly}</option>
                            <option value="FREQ=YEARLY">${this._language.recurrenceYearly}</option>
                        </select>
                    </div>
                    ${this._createRecurrenceType ? html`
                        ${this._createRecurrenceType !== 'FREQ=YEARLY' ? html`
                        <div class="form-row recurrence-inline">
                            <label>${this._language.recurrenceInterval}</label>
                            <input type="number" id="event-recurrence-interval" class="form-input recurrence-number" min="1" value="1" />
                            <span class="recurrence-unit">${
                                this._createRecurrenceType === 'FREQ=DAILY' ? this._language.recurrenceDays :
                                this._createRecurrenceType === 'FREQ=WEEKLY' ? this._language.recurrenceWeeks :
                                this._language.recurrenceMonths
                            }</span>
                        </div>
                        ` : ''}
                        ${this._createRecurrenceType === 'FREQ=WEEKLY' ? html`
                        <div class="form-row">
                            <div class="day-picker" id="event-day-picker">
                                ${['MO','TU','WE','TH','FR','SA','SU'].map(d => html`
                                    <button type="button" class="day-btn" data-day="${d}"
                                        @click="${this._toggleDayBtn}">${this._dayLabel(d)}</button>
                                `)}
                            </div>
                        </div>
                        ` : ''}
                        ${this._createRecurrenceType === 'FREQ=MONTHLY' ? html`
                        <div class="form-row recurrence-inline">
                            <label>${this._language.recurrenceMonthlyOn}</label>
                            <input type="number" id="event-recurrence-monthday" class="form-input recurrence-number"
                                min="1" max="31" value="${this._getDefaultMonthDay()}" />
                        </div>
                        ` : ''}
                        <div class="form-row">
                            <label>${this._language.recurrenceEnds}</label>
                            <select id="event-recurrence-end" class="form-input"
                                @change="${(e) => { this._createRecurrenceEndType = e.target.value; }}">
                                <option value="never">${this._language.recurrenceEndsNever}</option>
                                <option value="date">${this._language.recurrenceEndsOnDate}</option>
                                <option value="count">${this._language.recurrenceEndsAfter}</option>
                            </select>
                        </div>
                        ${this._createRecurrenceEndType === 'date' ? html`
                        <div class="form-row">
                            <input type="date" id="event-recurrence-end-date" class="form-input" />
                        </div>
                        ` : ''}
                        ${this._createRecurrenceEndType === 'count' ? html`
                        <div class="form-row recurrence-inline">
                            <input type="number" id="event-recurrence-end-count" class="form-input recurrence-number"
                                min="1" value="10" />
                            <span class="recurrence-unit">${this._language.recurrenceOccurrences}</span>
                        </div>
                        ` : ''}
                    ` : ''}
                    <div class="form-row notify-row">
                        <label class="notify-label" for="event-notify">
                            <input type="checkbox" id="event-notify" />
                            <span>\u{1F514} ${this._language.eventNotify}</span>
                        </label>
                    </div>
                    </div>
                    </details>
                    <div class="form-actions">
                        <button class="btn btn-cancel" @click="${this._closeCreateEventDialog}">${this._language.cancel}</button>
                        <button class="btn btn-submit" @click="${this._handleCreateEvent}">${this._language.create}</button>
                    </div>
                </div>
            </ha-dialog>
        `;
    }

    // Tablet-only: a full-screen custom overlay (not ha-dialog, whose width
    // can't be overridden in some HA builds). We control the size entirely.
    _renderHandwritingCreateDialog() {
        const date = this._showCreateEventDialog?.date;
        return html`
            <div class="hw-overlay" @click="${(e) => { if (e.target === e.currentTarget) this._closeCreateEventDialog(); }}">
                <div class="hw-modal create-event-form">
                    <div class="hw-modal-header">
                        <span>${this._language.newEvent}${date ? ' — ' + date.toFormat('cccc d LLLL') : ''}</span>
                        <button type="button" class="hw-close" @click="${this._closeCreateEventDialog}">
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    </div>
                    ${this._calendars && this._calendars.length > 1 ? html`
                    <div class="hw-cal-picker">
                        ${this._calendars.map((cal) => html`
                            <button type="button" class="hw-cal-btn ${this._createCalendar === cal.entity ? 'active' : ''}"
                                style="--cal-color: ${cal.color || '#888'}"
                                @click="${(e) => this._selectCreateCalendar(e, cal.entity)}">
                                <span class="hw-cal-dot" style="background: ${cal.color || '#888'}"></span>
                                ${this._getCalendarDisplayName(cal)}
                            </button>
                        `)}
                    </div>
                    ` : ''}
                    <div class="hw-zone">
                        ${guard([], () => html`<canvas id="quick-canvas" class="hw-canvas" width="640" height="200"
                            @pointerdown="${this._canvasPointerDown}"
                            @pointermove="${this._canvasPointerMove}"
                            @pointerup="${this._canvasPointerUp}"
                            @pointerleave="${this._canvasPointerUp}"></canvas>`)}
                        <div class="hw-hint">${this._language.handwriteHint}</div>
                    </div>
                    ${this._aiError ? html`<div class="hw-error">${this._aiError}</div>` : ''}
                    <div class="hw-modal-actions">
                        <button type="button" class="hw-clear hw-pen ${!this._eraserMode ? 'active' : ''}" @click="${this._usePen}">
                            <ha-icon icon="mdi:pencil"></ha-icon> ${this._language.pen}
                        </button>
                        <button type="button" class="hw-clear hw-eraser ${this._eraserMode ? 'active' : ''}" @click="${this._useEraser}">
                            <ha-icon icon="mdi:eraser"></ha-icon> ${this._language.eraser}
                        </button>
                        <button type="button" class="hw-clear" @click="${this._clearCanvas}">
                            <ha-icon icon="mdi:delete-outline"></ha-icon> ${this._language.clearDrawing}
                        </button>
                        <span style="flex:1"></span>
                        <button class="btn btn-cancel" @click="${this._closeCreateEventDialog}">${this._language.cancel}</button>
                        <button class="btn btn-submit" @click="${this._handleHandwritingCreate}">${this._language.create}</button>
                    </div>
                </div>
            </div>
        `;
    }

    _renderCreateEventDialogHeading() {
        const date = this._showCreateEventDialog?.date;
        return html`
            <div class="header_title">
                <span>${this._language.newEvent}${date ? ' — ' + date.toFormat('cccc d LLLL') : ''}</span>
                <ha-icon-button
                    .label="${this.hass?.localize('ui.dialogs.generic.close') ?? 'Close'}"
                    dialogAction="close"
                    class="header_button"
                ><ha-icon icon="mdi:close"></ha-icon></ha-icon-button>
            </div>
        `;
    }

    _renderEditEventDialog() {
        if (!this._showEditEventDialog || !this._editFormData) {
            return html``;
        }

        // Tablet: big touch overlay (rewrite title with the pen). Desktop/phone
        // keep the full keyboard ha-dialog form below.
        if (this._showHandwritingCanvas()) {
            return this._renderEditOverlay();
        }

        const form = this._editFormData;
        const duration = this._getFormDuration(form);

        return html`
            <ha-dialog
                open
                @closed="${this._closeEditEventDialog}"
                .heading="${this._renderEditEventDialogHeading()}"
            >
                <div class="create-event-form">
                    <div class="form-row">
                        <div class="input-clear-wrapper with-icon">
                            <ha-icon class="field-icon" icon="mdi:format-title"></ha-icon>
                            <input type="text" id="edit-event-title" class="form-input" required
                                .value="${form.title}"
                                @input="${(e) => { this._editFormData = { ...this._editFormData, title: e.target.value }; }}" />
                            <button type="button" class="input-clear" @click="${() => { this._editFormData = { ...this._editFormData, title: '' }; this._clearInput('edit-event-title'); }}" title="${this._language.cancel}">
                                <ha-icon icon="mdi:close-circle"></ha-icon>
                            </button>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:calendar"></ha-icon>
                            <select id="edit-event-calendar" class="form-input cal-select"
                                @change="${(e) => { this._editFormData = { ...this._editFormData, calendar: e.target.value }; }}">
                                ${this._calendars.map((calendar) => html`
                                    <option value="${calendar.entity}" ?selected="${calendar.entity === form.calendar}">${this._getCalendarDisplayName(calendar)}</option>
                                `)}
                            </select>
                        </div>
                    </div>
                    <div class="form-row" style="${form.allDay ? 'display: none' : ''}">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:clock-outline"></ha-icon>
                            ${this._renderTimeDropdowns(form.startTime, true)}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:timer-outline"></ha-icon>
                            <div class="duration-picker">
                                ${this.constructor.DURATION_PRESETS.map((minutes) => html`
                                    <button type="button" class="duration-btn ${String(minutes) === duration ? 'active' : ''}"
                                        @click="${() => this._setEditDuration(String(minutes))}">${this._formatDuration(minutes)}</button>
                                `)}
                                <button type="button" class="duration-btn ${duration === 'allday' ? 'active' : ''}"
                                    @click="${() => this._setEditDuration('allday')}">${this._language.fullDay}</button>
                            </div>
                        </div>
                    </div>
                    ${this._showLocationInForm ? html`
                    <div class="form-row location-row">
                        <div class="location-input-wrapper with-icon${form.location ? ' has-maps' : ''}">
                            <ha-icon class="field-icon" icon="mdi:map-marker"></ha-icon>
                            <input type="text" id="edit-event-location" class="form-input" placeholder="${this._language.eventLocation ?? 'Location'}"
                                .value="${form.location ?? ''}"
                                @input="${(e) => { this._editFormData = { ...this._editFormData, location: e.target.value }; this._handleLocationInput(e); }}"
                                autocomplete="off" />
                            ${form.location ? html`
                            <a class="location-maps-icon" href="${this._locationLink}${encodeURIComponent(form.location)}" target="_blank" rel="noopener noreferrer" title="${this._language.openInMaps ?? 'Google Maps'}">
                                <ha-icon icon="mdi:open-in-new"></ha-icon>
                            </a>
                            ` : ''}
                            <button type="button" class="input-clear" @click="${() => { this._editFormData = { ...this._editFormData, location: '' }; this._clearInput('edit-event-location'); }}" title="${this._language.cancel}">
                                <ha-icon icon="mdi:close-circle"></ha-icon>
                            </button>
                        </div>
                        <ul class="location-suggestions" id="edit-event-location-suggestions"></ul>
                    </div>
                    ` : ''}
                    ${this._renderEditAdvanced(form, true)}
                    <div class="form-actions">
                        <button class="btn btn-delete" @click="${this._handleDeleteEventFromEdit}">
                            <ha-icon icon="mdi:delete"></ha-icon> ${this._language.deleteEvent}
                        </button>
                        <button class="btn btn-cancel" @click="${this._closeEditEventDialog}">${this._language.cancel}</button>
                        <button class="btn btn-submit" @click="${this._handleUpdateEvent}">${this._language.save}</button>
                    </div>
                </div>
            </ha-dialog>
        `;
    }

    // Advanced "drawer" shared by the desktop edit dialog and the tablet edit
    // overlay. includeCalendar=false on tablet (calendar picked via buttons).
    _renderEditAdvanced(form, includeCalendar) {
        return html`
            <details class="advanced-details">
            <summary class="advanced-toggle">
                <ha-icon class="adv-chevron" icon="mdi:chevron-down"></ha-icon>
                <span>${this._language.advancedOptions}</span>
            </summary>
            <div class="advanced-section">
                <div class="form-row">
                    <label for="edit-event-start-date">${this._language.eventDate}</label>
                    <input type="date" id="edit-event-start-date" class="form-input" required
                        .value="${form.startDate}"
                        @input="${(e) => this._updateEditStart({ startDate: e.target.value })}" />
                </div>
                <div class="form-row">
                    <label for="edit-event-end-date">${this._language.eventEnd}</label>
                    <div class="datetime-row">
                        <input type="date" id="edit-event-end-date" class="form-input"
                            .value="${form.endDate}"
                            @input="${(e) => { this._editFormData = { ...this._editFormData, endDate: e.target.value }; }}" />
                        <input type="time" id="edit-event-end-time" class="form-input" style="${form.allDay ? 'display: none' : ''}"
                            .value="${form.endTime}"
                            @input="${(e) => { this._editFormData = { ...this._editFormData, endTime: e.target.value }; }}" />
                    </div>
                </div>
                <div class="form-row">
                    <label for="edit-event-recurrence">${this._language.eventRecurrence}</label>
                    <select id="edit-event-recurrence" class="form-input"
                        .value="${form.recurrence || ''}"
                        @change="${(e) => { this._editFormData = { ...this._editFormData, recurrence: e.target.value, recurrenceByDay: [], recurrenceEndType: 'never' }; }}">
                        <option value="" ?selected="${!form.recurrence}">${this._language.recurrenceNone}</option>
                        <option value="FREQ=DAILY" ?selected="${form.recurrence === 'FREQ=DAILY'}">${this._language.recurrenceDaily}</option>
                        <option value="FREQ=WEEKLY" ?selected="${form.recurrence === 'FREQ=WEEKLY'}">${this._language.recurrenceWeekly}</option>
                        <option value="FREQ=MONTHLY" ?selected="${form.recurrence === 'FREQ=MONTHLY'}">${this._language.recurrenceMonthly}</option>
                        <option value="FREQ=YEARLY" ?selected="${form.recurrence === 'FREQ=YEARLY'}">${this._language.recurrenceYearly}</option>
                    </select>
                </div>
                ${form.recurrence ? html`
                    ${form.recurrence !== 'FREQ=YEARLY' ? html`
                    <div class="form-row recurrence-inline">
                        <label>${this._language.recurrenceInterval}</label>
                        <input type="number" id="edit-event-recurrence-interval" class="form-input recurrence-number" min="1"
                            .value="${String(form.recurrenceInterval || 1)}"
                            @input="${(e) => { this._editFormData = { ...this._editFormData, recurrenceInterval: parseInt(e.target.value) || 1 }; }}" />
                        <span class="recurrence-unit">${
                            form.recurrence === 'FREQ=DAILY' ? this._language.recurrenceDays :
                            form.recurrence === 'FREQ=WEEKLY' ? this._language.recurrenceWeeks :
                            this._language.recurrenceMonths
                        }</span>
                    </div>
                    ` : ''}
                    ${form.recurrence === 'FREQ=WEEKLY' ? html`
                    <div class="form-row">
                        <div class="day-picker" id="edit-event-day-picker">
                            ${['MO','TU','WE','TH','FR','SA','SU'].map(d => html`
                                <button type="button" class="day-btn ${(form.recurrenceByDay || []).includes(d) ? 'active' : ''}" data-day="${d}"
                                    @click="${(e) => this._toggleEditDayBtn(e, d)}">${this._dayLabel(d)}</button>
                            `)}
                        </div>
                    </div>
                    ` : ''}
                    ${form.recurrence === 'FREQ=MONTHLY' ? html`
                    <div class="form-row recurrence-inline">
                        <label>${this._language.recurrenceMonthlyOn}</label>
                        <input type="number" id="edit-event-recurrence-monthday" class="form-input recurrence-number"
                            min="1" max="31" .value="${String(form.recurrenceByMonthDay || 1)}"
                            @input="${(e) => { this._editFormData = { ...this._editFormData, recurrenceByMonthDay: parseInt(e.target.value) || 1 }; }}" />
                    </div>
                    ` : ''}
                    <div class="form-row">
                        <label>${this._language.recurrenceEnds}</label>
                        <select id="edit-event-recurrence-end" class="form-input"
                            @change="${(e) => { this._editFormData = { ...this._editFormData, recurrenceEndType: e.target.value }; }}">
                            <option value="never" ?selected="${form.recurrenceEndType === 'never'}">${this._language.recurrenceEndsNever}</option>
                            <option value="date" ?selected="${form.recurrenceEndType === 'date'}">${this._language.recurrenceEndsOnDate}</option>
                            <option value="count" ?selected="${form.recurrenceEndType === 'count'}">${this._language.recurrenceEndsAfter}</option>
                        </select>
                    </div>
                    ${form.recurrenceEndType === 'date' ? html`
                    <div class="form-row">
                        <input type="date" id="edit-event-recurrence-end-date" class="form-input"
                            .value="${form.recurrenceEndDate || ''}"
                            @input="${(e) => { this._editFormData = { ...this._editFormData, recurrenceEndDate: e.target.value }; }}" />
                    </div>
                    ` : ''}
                    ${form.recurrenceEndType === 'count' ? html`
                    <div class="form-row recurrence-inline">
                        <input type="number" id="edit-event-recurrence-end-count" class="form-input recurrence-number"
                            min="1" .value="${String(form.recurrenceEndCount || 10)}"
                            @input="${(e) => { this._editFormData = { ...this._editFormData, recurrenceEndCount: parseInt(e.target.value) || 10 }; }}" />
                        <span class="recurrence-unit">${this._language.recurrenceOccurrences}</span>
                    </div>
                    ` : ''}
                ` : ''}
                <div class="form-row notify-row">
                    <label class="notify-label" for="edit-event-notify">
                        <input type="checkbox" id="edit-event-notify" .checked="${form.notify ?? false}"
                            @change="${(e) => { this._editFormData = { ...this._editFormData, notify: e.target.checked }; }}" />
                        <span>\u{1F514} ${this._language.eventNotify}</span>
                    </label>
                </div>
            </div>
            </details>
        `;
    }

    // Tablet edit overlay: full-screen, touch buttons (calendar/time/duration),
    // optional pen rewrite of the title, advanced drawer, delete/save.
    _renderEditOverlay() {
        const form = this._editFormData;
        const duration = this._getFormDuration(form);
        const date = form.startDate ? DateTime.fromISO(form.startDate) : null;
        return html`
            <div class="hw-overlay" @click="${(e) => { if (e.target === e.currentTarget) this._closeEditEventDialog(); }}">
                <div class="hw-modal create-event-form">
                    <div class="hw-modal-header">
                        <span>${this._language.editEventTitle}${date && date.isValid ? ' — ' + date.toFormat('cccc d LLLL') : ''}</span>
                        <button type="button" class="hw-close" @click="${this._closeEditEventDialog}">
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    </div>
                    <div class="hw-edit-scroll">
                        ${this._calendars && this._calendars.length > 1 ? html`
                        <div class="hw-cal-picker">
                            ${this._calendars.map((cal) => html`
                                <button type="button" class="hw-cal-btn ${form.calendar === cal.entity ? 'active' : ''}"
                                    style="--cal-color: ${cal.color || '#888'}"
                                    @click="${() => { this._editFormData = { ...this._editFormData, calendar: cal.entity }; }}">
                                    <span class="hw-cal-dot" style="background: ${cal.color || '#888'}"></span>
                                    ${this._getCalendarDisplayName(cal)}
                                </button>
                            `)}
                        </div>
                        ` : ''}
                        <div class="form-row" style="${form.allDay ? 'display: none' : ''}">
                            <div class="field-row-icon slots">
                                <ha-icon class="field-icon" icon="mdi:clock-outline"></ha-icon>
                                ${this._renderTimeSlots(form.startTime, true)}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="field-row-icon">
                                <ha-icon class="field-icon" icon="mdi:timer-outline"></ha-icon>
                                <div class="duration-picker">
                                    ${this.constructor.DURATION_PRESETS.map((m) => html`
                                        <button type="button" class="duration-btn ${String(m) === duration ? 'active' : ''}"
                                            @click="${() => this._setEditDuration(String(m))}">${this._formatDuration(m)}</button>
                                    `)}
                                    <button type="button" class="duration-btn ${duration === 'allday' ? 'active' : ''}"
                                        @click="${() => this._setEditDuration('allday')}">${this._language.fullDay}</button>
                                </div>
                            </div>
                        </div>
                        <div class="hw-current-title">
                            <ha-icon icon="mdi:format-title"></ha-icon>
                            <span>${form.title || '—'}</span>
                        </div>
                        ${this._renderEditAdvanced(form, false)}
                    </div>
                    <div class="hw-modal-actions">
                        <button class="btn btn-delete" @click="${this._handleDeleteEventFromEdit}">
                            <ha-icon icon="mdi:delete"></ha-icon> ${this._language.deleteEvent}
                        </button>
                        <span style="flex:1"></span>
                        <button class="btn btn-cancel" @click="${this._closeEditEventDialog}">${this._language.cancel}</button>
                        <button class="btn btn-submit" ?disabled="${this._aiLoading}" @click="${this._handleEditOverlaySave}">
                            ${this._aiLoading ? html`<ha-icon class="spin" icon="mdi:loading"></ha-icon> ` : ''}${this._language.save}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Tablet edit save: the event title is read-only on tablet (no handwriting
    // rewrite), so just run the normal update (which handles recurrence).
    _handleEditOverlaySave() {
        this._handleUpdateEvent();
    }

    _renderEditEventDialogHeading() {
        const date = this._editFormData?.startDate ? DateTime.fromISO(this._editFormData.startDate) : null;
        return html`
            <div class="header_title">
                <span>${this._language.editEventTitle}${date?.isValid ? ' — ' + date.toFormat('cccc d LLLL') : ''}</span>
                <ha-icon-button
                    .label="${this.hass?.localize('ui.dialogs.generic.close') ?? 'Close'}"
                    dialogAction="close"
                    class="header_button"
                ><ha-icon icon="mdi:close"></ha-icon></ha-icon-button>
            </div>
        `;
    }

    _renderRecurringConfirmDialog() {
        if (!this._showRecurringConfirmDialog) return html``;
        return html`
            <ha-dialog open @closed="${() => { this._showRecurringConfirmDialog = null; }}">
                <div class="create-event-form">
                    <h3 style="margin: 0 0 16px 0; font-size: 1.1em;">${this._language.editRecurringTitle}</h3>
                    <div class="form-actions" style="justify-content: center; gap: 8px;">
                        <button class="btn btn-cancel" @click="${this._handleUpdateThisEvent}">${this._language.editThisEvent}</button>
                        <button class="btn btn-submit" @click="${this._handleUpdateAllEvents}">${this._language.editAllEvents}</button>
                    </div>
                </div>
            </ha-dialog>
        `;
    }

    _renderDeleteRecurringDialog() {
        if (!this._showDeleteRecurringDialog) return html``;
        return html`
            <ha-dialog open @closed="${() => { this._showDeleteRecurringDialog = null; }}">
                <div class="create-event-form">
                    <h3 style="margin: 0 0 16px 0; font-size: 1.1em;">${this._language.deleteRecurringTitle}</h3>
                    <div class="form-actions" style="justify-content: center; gap: 8px;">
                        <button class="btn btn-cancel" @click="${this._handleDeleteThisEvent}">${this._language.deleteThisEvent}</button>
                        <button class="btn btn-delete" @click="${this._handleDeleteAllEvents}">
                            <ha-icon icon="mdi:delete"></ha-icon> ${this._language.deleteAllEvents}
                        </button>
                    </div>
                </div>
            </ha-dialog>
        `;
    }

    _getLoader() {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.style.display = 'none';
        return loader;
    }

    _updateLoader() {
        if (this._loading > 0) {
            this._loader.style.display = 'inherit';
        } else {
            this._loader.style.display = 'none';
        }
    }

    _getWeatherIcon(state, condition, night = false) {
        if (!state) {
            return null;
        }

        // Cache the (config-static) custom icon lookup — getComputedStyle is a
        // forced style resolution and this runs once per day cell per render.
        this._weatherIconCache ??= {};
        let customWeatherIcon = this._weatherIconCache[state];
        if (customWeatherIcon === undefined) {
            customWeatherIcon = getComputedStyle(this).getPropertyValue('--weather-icon-' + state).trim();
            this._weatherIconCache[state] = customWeatherIcon;
        }
        if (customWeatherIcon !== null && ['', 'none', 'inherit'].indexOf(customWeatherIcon) === -1) {
            return html`<div class="icon" style="background-image: var(--weather-icon-${state})"></div>`;
        }

        const iconSrc = (night ? ICONS_NIGHT[state] : ICONS[state]) ?? ICONS[state];
        if (!iconSrc) {
            return null;
        }

        return html`
                <div class="icon">
                    <img src="${iconSrc}" alt="${condition}">
                </div>
            `;
    }

    _waitForHassAndConfig() {
        if (!this.isConnected) {
            return;
        }

        if (!this.hass || !this._calendars) {
            window.setTimeout(() => {
                this._waitForHassAndConfig();
            }, 50)
            return;
        }

        this._updateEvents(false);
    }

    _subscribeToWeatherForecast() {
        if (!this._weather?.entity || !this.hass.states[this._weather.entity]) {
            this._weatherForecast = [];
            return;
        }
        // Guard against a second subscribe while one is already in flight — that
        // would overwrite _weatherUnsub and leak the first subscription.
        if (this._weatherUnsub) {
            return;
        }
        this._loading++;
        this._updateLoader();
        let loadingWeather = true;
        this._weatherUnsub = this.hass.connection.subscribeMessage((event) => {
            this._weatherForecast = event.forecast ?? [];
            if (loadingWeather) {
                this._loading--;
                loadingWeather = false;
            }
        }, {
            type: 'weather/subscribe_forecast',
            forecast_type: this._weather.useTwiceDaily ? 'twice_daily' : 'daily',
            entity_id: this._weather.entity
        });
        this._weatherUnsub.catch(() => {
            this._weatherUnsub = null;
            this._weatherForecast = [];
            if (loadingWeather) {
                this._loading--;
                loadingWeather = false;
            }
        });
    }

    async _updateEvents(force = true) {
        // In-flight guard uses a dedicated boolean (reliably reset below), NOT the
        // shared _loading spinner counter — that counter can desync (weather sub,
        // races) and would otherwise block every refresh, so a created/edited
        // event only appeared at the next 60s auto-refresh. A forced refresh
        // (user action) queues one re-run if a fetch is already in flight, so it
        // is never lost; the periodic/initial refresh just skips when busy.
        if (this._eventsLoading) {
            if (force) this._refreshAgain = true;
            return;
        }
        this._eventsLoading = true;
        this._loading++;
        this._updateLoader();

        this._clearUpdateEventsTimeouts();

        this._events = {};
        this._calendarEvents = {};

        this._startDate = this._getStartDate();
        if (this._numberOfDaysIsMonth) {
            this._numberOfDays = this._startDate.daysInMonth;
        }
        const startDate = this._startDate;
        const endDate = this._startDate.plus({ days: this._numberOfDays });
        const now = DateTime.now();
        const runStartdate = this._startDate.toISO();

        if (this._weather && this._weatherForecast === null) {
            this._subscribeToWeatherForecast();
        }

        const fetches = [];
        let calendarNumber = 0;
        this._calendars.forEach(calendar => {
            if (!calendar.entity || !this.hass.states[calendar.entity]) {
                return;
            }
            let cal = calendar;
            if (!cal.name) {
                cal = { ...cal, name: this.hass.formatEntityAttributeValue(this.hass.states[cal.entity], 'friendly_name') };
            }
            if (!cal.sorting) {
                cal = { ...cal, sorting: calendarNumber };
            }
            const currentCalendarNumber = calendarNumber;
            fetches.push(
                this.hass.callApi(
                    'get',
                    'calendars/' + cal.entity + '?start=' + encodeURIComponent(startDate.toISO()) + '&end=' + encodeURIComponent(endDate.toISO())
                ).then(response => {
                    if (this._startDate.toISO() !== runStartdate) {
                        return;
                    }
                    this._calendarErrors[currentCalendarNumber] = '';
                    response.forEach(event => {
                        if (this._isFilterEvent(event, cal.filter ?? '')) {
                            return;
                        }
                        const evStart = this._convertApiDate(event.start);
                        const evEnd = this._convertApiDate(event.end);
                        if (this._hidePastEvents && evEnd < now) {
                            return;
                        }
                        const fullDay = this._isFullDay(evStart, evEnd);
                        if (!fullDay && !this._isSameDay(evStart, evEnd)) {
                            this._handleMultiDayEvent(event, evStart, evEnd, cal);
                        } else {
                            this._addEvent(event, evStart, evEnd, fullDay, cal);
                        }
                    });
                }).catch(error => {
                    this._calendarErrors[currentCalendarNumber] = 'Error while fetching calendar "' + cal.entity + '": ' + (error.error ?? 'Unknown error');
                })
            );
            calendarNumber++;
        });

        try {
            await Promise.allSettled(fetches);
            // Skip painting if a newer run (navigation) has superseded this one.
            if (this._startDate.toISO() === runStartdate) {
                this._updateCard();
            }
        } finally {
            // Always release the guard — if _updateCard threw, leaving it set
            // would freeze every future refresh (created/edited events would
            // never appear).
            this._loading = Math.max(0, this._loading - 1);
            this._updateLoader();
            this._eventsLoading = false;
        }

        if (this._refreshAgain) {
            this._refreshAgain = false;
            this._updateEvents(true);
            return;
        }

        if (this.isConnected) {
            this._updateEventsTimeouts.push(
                window.setTimeout(() => this._updateEvents(false), this._updateInterval * 1000)
            );
        }
    }

    _clearUpdateEventsTimeouts() {
        this._updateEventsTimeouts.forEach(timeout => {
            clearTimeout(timeout);
        });
        this._updateEventsTimeouts = [];
    }

    _isFilterEvent(event, calendarFilter) {
        const summary = event.summary ?? '';
        return this._filter && summary.match(this._filter)
            || calendarFilter && summary.match(calendarFilter);
    }

    _addEvent(event, startDate, endDate, fullDay, calendar, multiDay, multiDayPosition) {
        multiDay = multiDay ?? false;

        if (
            this._hideWeekend && startDate.weekday >= 6
            || fullDay && this._hideAllDayEvents
        ) {
            return;
        }

        const dateKey = startDate.toISODate();
        if (!this._events.hasOwnProperty(dateKey)) {
            this._events[dateKey] = [];
        }

        const title = this._filterEventSummary(event, calendar);

        let eventKey = startDate.toISO() + '-' + endDate.toISO() + '-' + title;
        if (!this._combineSimilarEvents) {
            eventKey = startDate.toISO() + '-' + endDate.toISO() + '-' + title + '-' + calendar.entity;
        }

        if (this._calendarEvents.hasOwnProperty(eventKey)) {
            this._calendarEvents[eventKey].calendars.push(calendar.entity);
            this._calendarEvents[eventKey].colors.push(this._calendarColor(calendar))
            if (calendar.name && this._calendarEvents[eventKey].calendarNames.indexOf(calendar.name) === -1) {
                this._calendarEvents[eventKey].calendarNames.push(calendar.name);
            }
            if (calendar.sorting < this._calendarEvents[eventKey].calendarSorting) {
                this._calendarEvents[eventKey].calendarSorting = calendar.sorting;
            }
        } else {
            this._calendarEvents[eventKey] = {
                summary: title,
                description: event.description ?? null,
                location: event.location ?? null,
                start: startDate,
                originalStart: this._convertApiDate(event.start),
                end: endDate,
                originalEnd: this._convertApiDate(event.end),
                fullDay: fullDay,
                multiDay: multiDay,
                multiDayPosition: multiDayPosition ?? null,
                colors: [this._calendarColor(calendar)],
                icon: calendar.icon ?? null,
                calendars: [calendar.entity],
                calendarSorting: calendar.sorting,
                calendarNames: [calendar.name],
                class: this._getEventClass(startDate, endDate, fullDay, multiDay),
                uid: event.uid ?? null,
                recurrence_id: event.recurrence_id ?? null,
                rrule: event.rrule ?? null,
            }
            this._events[dateKey].push(eventKey);
        }
    }

    _filterEventSummary(event, calendar) {
        let summary = calendar.eventTitleField ? event[calendar.eventTitleField] : event.summary;

        if (!summary) {
            return '';
        }

        if (calendar.filterText) {
            summary = summary.replace(new RegExp(calendar.filterText), '');
        }

        if (this._filterText) {
            summary = summary.replace(new RegExp(this._filterText), '');
        }

        if (calendar.replaceTitleText) {
            for (const search in calendar.replaceTitleText) {
                const replace = calendar.replaceTitleText[search];
                summary = summary.replace(search, replace);
            }
        }

        if (this._replaceTitleText) {
            for (const search in this._replaceTitleText) {
                const replace = this._replaceTitleText[search];
                summary = summary.replace(search, replace);
            }
        }

        return summary;
    }

    _getEventClass(startDate, endDate, fullDay, multiDay) {
        let classes = [];
        let now = DateTime.now();
        if (fullDay) {
            classes.push('fullday');
        }
        if (multiDay) {
            classes.push('multiday');
        }
        if (endDate < now) {
            classes.push('past');
        } else if (startDate <= now && endDate > now) {
            classes.push('ongoing');
        } else {
            classes.push('future');
        }
        return classes.join(' ');
    }

    _getDayClass(startDate) {
        let classes = [];
        if (this._isToday(startDate)) {
            classes.push('today');
        } else if (this._isTomorrow(startDate)) {
            classes.push('tomorrow');
            classes.push('future');
        } else if (this._isYesterday(startDate)) {
            classes.push('yesterday');
            classes.push('past');
        } else {
            let now = DateTime.now();
            if (startDate > now) {
                classes.push('future');
            } else {
                classes.push('past');
            }
        }
        classes.push([
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday'
        ][startDate.weekday]);
        return classes.join(' ');
    }

    _handleMultiDayEvent(event, startDate, endDate, calendar) {
        const originalStart = startDate;
        while (startDate < endDate) {
            let eventStartDate = startDate;
            startDate = startDate.plus({ days: 1 }).startOf('day');
            let eventEndDate = startDate < endDate ? startDate : endDate;

            let position = 'middle';
            if (eventStartDate.toMillis() === originalStart.toMillis()) {
                position = 'start';
            } else if (eventEndDate.toMillis() === endDate.toMillis()) {
                position = 'end';
            }

            this._addEvent(event, eventStartDate, eventEndDate, this._isFullDay(eventStartDate, eventEndDate), calendar, true, position);

            if (this._multiDayMode === 'single' && eventStartDate >= this._startDate) {
                break;
            }
        }
    }

    _updateCard() {
        this._error = this._calendarErrors.join("\n").trim();

        let days = [];

        const weatherState = this._weather ? this.hass.states[this._weather.entity] : null;
        let weatherForecast = {};
        this._weatherForecast?.forEach((forecast) => {
            // Only use day time forecasts
            if (forecast.hasOwnProperty('is_daytime') && forecast.is_daytime === false) {
                return;
            }

            const dateKey = DateTime.fromISO(forecast.datetime).toISODate();
            const temperature = this._weather.roundTemperature ? Math.round(forecast.temperature) : forecast.temperature;
            const templow = this._weather.roundTemperature ? Math.round(forecast.templow) : forecast.templow;
            weatherForecast[dateKey] = {
                state: forecast.condition,
                condition: this.hass.formatEntityState(weatherState, forecast.condition),
                temperature: this.hass.formatEntityAttributeValue(weatherState, 'temperature', temperature),
                templow: this.hass.formatEntityAttributeValue(weatherState, 'templow', templow)
            };
        });

        let startDate = this._startDate;
        let endDate = this._startDate.plus({ days: this._numberOfDays });

        let targetMonth = null;
        const startingDay = String(this._startingDay).toLowerCase().trim();

        if (this._numberOfDaysIsMonth && ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].includes(startingDay)) {
            targetMonth = startDate.plus({ days: 7 }).month;

            const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            const startWeekday = weekdays.indexOf(startingDay) + 1;
            startDate = this._getWeekDayDate(startDate, startWeekday);

            const monthEnd = this._startDate.endOf('month');
            endDate = startDate;
            while (endDate <= monthEnd) {
                endDate = endDate.plus({ days: 7 });
            }
        }

        let numberOfEvents = 0;
        while (startDate < endDate) {
            if (!this._hideWeekend || startDate.weekday < 6) {
                let events = [];
                const isOutsideMonth = targetMonth !== null && startDate.month !== targetMonth;

                const dateKey = startDate.toISODate();
                if (this._events.hasOwnProperty(dateKey) && !isOutsideMonth) {
                    events = this._events[dateKey].sort((event1, event2) => {
                        const e1 = this._calendarEvents[event1];
                        const e2 = this._calendarEvents[event2];
                        if (!e1 || !e2) return 0;

                        // Banner mode: multi-day bands always on top so they
                        // align across days, ordered by their original start
                        if (this._multiDayMode === 'banner' && e1.multiDay !== e2.multiDay) {
                            return e1.multiDay ? -1 : 1;
                        }
                        if (this._multiDayMode === 'banner' && e1.multiDay && e2.multiDay) {
                            const s1 = e1.originalStart?.toISO() ?? '';
                            const s2 = e2.originalStart?.toISO() ?? '';
                            if (s1 !== s2) {
                                return s1 > s2 ? 1 : -1;
                            }
                            return e1.summary > e2.summary ? 1 : (e1.summary < e2.summary ? -1 : 0);
                        }

                        if (e1.start.toMillis() === e2.start.toMillis()) {
                            return e1.calendarSorting < e2.calendarSorting ? 1 : (e1.calendarSorting > e2.calendarSorting) ? -1 : 0;
                        }

                        return e1.start > e2.start ? 1 : -1;
                    });

                    const previousNumberOfEvents = numberOfEvents;
                    numberOfEvents += events.length;

                    if (this._maxEvents > 0 && numberOfEvents > this._maxEvents) {
                        // Keep only what fits under the global cap. Use the count
                        // BEFORE this day (previousNumberOfEvents), and slice a copy
                        // so the cached _events[dateKey] array is never truncated.
                        events = events.slice(0, Math.max(0, this._maxEvents - previousNumberOfEvents));
                    }
                }

                days.push({
                    date: startDate,
                    events: events,
                    weather: isOutsideMonth ? null : (weatherForecast[dateKey] ?? null),
                    class: this._getDayClass(startDate) + (isOutsideMonth ? ' outside-month' : ''),
                    isOutsideMonth: isOutsideMonth
                });

                if (this._maxEvents > 0 && numberOfEvents >= this._maxEvents) {
                    break;
                }
            }

            startDate = startDate.plus({ days: 1 });
        }

        this._days = days;

        // Auto-select today (or first day) in month view
        if (this._numberOfDaysIsMonth) {
            const now = DateTime.now();
            const firstDay = days.find(d => !d.isOutsideMonth);
            // Only auto-select if no day selected yet, or month changed
            if (!this._selectedDay || this._selectedDay.date.month !== firstDay?.date.month || this._selectedDay.date.year !== firstDay?.date.year) {
                const todayDay = days.find(d => !d.isOutsideMonth && d.date.day === now.day && d.date.month === now.month && d.date.year === now.year);
                this._selectedDay = todayDay ?? firstDay ?? null;
            } else {
                // Update reference to match new days array (for fresh event data)
                const updated = days.find(d => !d.isOutsideMonth && d.date.day === this._selectedDay.date.day && d.date.month === this._selectedDay.date.month);
                if (updated) this._selectedDay = updated;
            }
        }
    }

    _getWeekDayText(date) {
        if (this._language.today && this._isToday(date)) {
            return this._language.today;
        } else if (this._language.tomorrow && this._isTomorrow(date)) {
            return this._language.tomorrow;
        } else if (this._language.yesterday && this._isYesterday(date)) {
            return this._language.yesterday;
        } else {
            const weekDays = [
                this._language.sunday,
                this._language.monday,
                this._language.tuesday,
                this._language.wednesday,
                this._language.thursday,
                this._language.friday,
                this._language.saturday,
                this._language.sunday,
            ];
            const weekDay = date.weekday;
            return weekDays[weekDay];
        }
    }

    _handleContainerClick(e) {
        if (!this._actions) {
            return;
        }

        const event = new Event(
            'hass-action', {
                bubbles: true,
                composed: true,
            }
        );
        event.detail = {
            config: this._actions,
            action: 'tap',
        }
        this.dispatchEvent(event);

        e.stopImmediatePropagation();
    }

    _handleEventClick(event) {
        if (this._actions) {
            return;
        }
        if (event.uid) {
            this._openEditEventDialog(event);
        } else {
            this._currentEventDetails = event;
        }
    }

    _closeDialog() {
        this._currentEventDetails = null;
    }

    _handleAddEventClick(e, day) {
        e.stopImmediatePropagation();
        this._createDuration = '60';
        this._createShowAdvanced = false;
        this._createEndTouched = false;
        this._createTitle = null;
        this._aiLoading = false;
        this._aiError = null;
        this._aiResult = null;
        this._drawing = false;
        this._hasDrawing = false;
        this._canvasReady = false;
        this._eraserMode = false;
        this._createCalendar = this._defaultCalendar || (this._calendars && this._calendars[0] && this._calendars[0].entity) || null;
        const now = DateTime.now();
        this._createStartTime = String(Math.min(now.hour + 1, 23)).padStart(2, '0') + ':00';
        this._showCreateEventDialog = { date: day.date };
    }

    _closeCreateEventDialog() {
        this._showCreateEventDialog = null;
        this._createRecurrenceType = null;
        this._createRecurrenceEndType = 'never';
        this._createDuration = '60';
        this._createShowAdvanced = false;
        this._createEndTouched = false;
        this._createTitle = null;
        this._createStartTime = null;
        this._aiLoading = false;
        this._aiError = null;
        this._aiResult = null;
        this._drawing = false;
        this._hasDrawing = false;
        this._canvasReady = false;
        this._eraserMode = false;
    }

    // Keyboard quick-add (desktop / phone). The tablet handwriting canvas is a
    // separate minimal dialog (_renderHandwritingCreateDialog).
    _renderQuickAdd() {
        return html`
            <div class="form-row">
                <div class="input-clear-wrapper with-icon quick-add-row">
                    <ha-icon class="field-icon" icon="mdi:flash-outline"></ha-icon>
                    <input type="text" id="event-quick" class="form-input" placeholder="${this._language.quickAdd}"
                        @change="${(e) => this._handleQuickAdd(e.target.value)}" />
                    <button type="button" class="input-clear" @click="${() => this._clearInput('event-quick')}" title="${this._language.cancel}">
                        <ha-icon icon="mdi:close-circle"></ha-icon>
                    </button>
                </div>
                ${this._isAiQuickAddAvailable() ? html`
                <button type="button" class="ai-analyze-btn" ?disabled="${this._aiLoading}" @click="${this._runAiQuickAdd}">
                    <ha-icon class="${this._aiLoading ? 'spin' : ''}" icon="${this._aiLoading ? 'mdi:loading' : 'mdi:auto-fix'}"></ha-icon>
                    <span>${this._language.aiAnalyze}</span>
                </button>
                ` : ''}
            </div>
        `;
    }

    _initCanvas() {
        const canvas = this.shadowRoot?.querySelector('#quick-canvas');
        if (!canvas) return;
        // Render the bitmap at 2.5x the displayed size so the image sent to the
        // model is crisp — this is the biggest lever for handwriting accuracy.
        const scale = 2.5;
        this._canvasScale = scale;
        canvas.width = Math.round((canvas.clientWidth || 640) * scale);
        canvas.height = Math.round((canvas.clientHeight || 200) * scale);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this._hasDrawing = false;
    }

    _clearCanvas() {
        this._initCanvas();
        this._aiError = null;
        this._aiResult = null;
        const hint = this.shadowRoot?.querySelector('.hw-hint');
        if (hint) hint.style.display = '';
    }

    _canvasCoords(e, canvas) {
        const r = canvas.getBoundingClientRect();
        return {
            x: (e.clientX - r.left) * (canvas.width / r.width),
            y: (e.clientY - r.top) * (canvas.height / r.height),
        };
    }

    _canvasPointerDown(e) {
        if (!e.isPrimary) return;
        e.preventDefault();
        const canvas = e.currentTarget;
        const p = this._canvasCoords(e, canvas);
        this._drawing = true;
        this._hasDrawing = true;
        this._lastX = p.x;
        this._lastY = p.y;
        const hint = this.shadowRoot?.querySelector('.hw-hint');
        if (hint) hint.style.display = 'none';
        try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    }

    _canvasPointerMove(e) {
        if (!this._drawing || !e.isPrimary) return;
        e.preventDefault();
        const canvas = e.currentTarget;
        const p = this._canvasCoords(e, canvas);
        const ctx = canvas.getContext('2d');
        const scale = this._canvasScale || 1;
        // Eraser paints the white background over the ink (keeps a solid white
        // page for the model, unlike destination-out which leaves transparency)
        ctx.strokeStyle = this._eraserMode ? '#ffffff' : '#111111';
        ctx.lineWidth = (this._eraserMode ? 24 : 2.5) * scale;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(this._lastX, this._lastY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        this._lastX = p.x;
        this._lastY = p.y;
    }

    _canvasPointerUp(e) {
        this._drawing = false;
    }

    _usePen() {
        this._eraserMode = false;
    }

    _useEraser() {
        this._eraserMode = true;
    }

    _handwritingEnabled() {
        return !!(this._geminiApiKey || this._claudeApiKey);
    }

    // Handwriting canvas only on a touch device with a large screen (tablet).
    // Desktop (mouse) and phones (small screen) keep 100% keyboard entry.
    _isHandwritingDevice() {
        try {
            return window.matchMedia('(any-pointer: coarse)').matches && window.innerWidth >= 768;
        } catch (_) {
            return false;
        }
    }

    _showHandwritingCanvas() {
        return this._handwritingEnabled() && this._isHandwritingDevice();
    }

    // A full-screen tablet overlay (handwriting create / edit) is covering the
    // calendar grid — used to skip rendering the heavy 42-cell grid behind it,
    // so interacting with the overlay (e.g. picking a calendar) doesn't re-render
    // the whole month each time.
    _fullscreenOverlayOpen() {
        return (this._showCreateEventDialog || this._showEditEventDialog) && this._showHandwritingCanvas();
    }

    // Calendar selection in the handwriting create overlay: update the active
    // button directly (no reactive write → no re-render of the overlay/canvas,
    // which was making selection laggy on the tablet).
    _selectCreateCalendar(e, entity) {
        this._createCalendar = entity;
        const btn = e.currentTarget;
        const picker = btn.closest('.hw-cal-picker');
        if (picker) {
            picker.querySelectorAll('.hw-cal-btn').forEach((b) => b.classList.toggle('active', b === btn));
        }
    }

    _resolveAiProvider() {
        if (this._aiProvider === 'claude' && this._claudeApiKey) return 'claude';
        if (this._aiProvider === 'gemini' && this._geminiApiKey) return 'gemini';
        if (this._claudeApiKey) return 'claude';
        if (this._geminiApiKey) return 'gemini';
        return null;
    }

    _handwritingPrompt() {
        return 'This image is a short handwritten calendar note: usually a title plus a start time. '
            + 'Times are written like "9h", "9 h", "14h30", "9:00" or "20h". '
            + 'Read the digits very carefully — handwritten 9 can look like "g", 1 like "l" or "I", '
            + '0 like "o", 7 like "/", 4 like "y". A token that is a number (optionally followed by '
            + '"h" or ":" and minutes) is the START TIME, not part of the title. '
            + 'Extract a JSON object with: '
            + 'raw (the verbatim text you read, exactly as written, including the time token), '
            + 'title (the subject only, without the time or date), '
            + 'time (start time as HH:MM in 24-hour format if a time is present, otherwise an empty string), '
            + 'duration_minutes (integer; default 60 if unspecified, 0 for an all-day event). '
            + 'Keep the title in its original language.';
    }

    // Tolerant JSON extraction (handles bare JSON or ```json fenced output)
    _extractJson(text) {
        if (!text) return null;
        let t = String(text).trim();
        const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
        if (fence) t = fence[1].trim();
        try { return JSON.parse(t); } catch (_) {}
        const m = t.match(/\{[\s\S]*\}/);
        if (m) { try { return JSON.parse(m[0]); } catch (_) {} }
        return null;
    }

    // Tablet "Create": capture the drawing, close the form, then analyze and
    // create the event in the background. Errors surface as an HA toast.
    _handleHandwritingCreate() {
        const canvas = this.shadowRoot?.querySelector('#quick-canvas');
        if (!canvas || !this._hasDrawing) {
            this._aiError = this._language.handwriteHint ?? 'Write something first';
            return;
        }
        const provider = this._resolveAiProvider();
        if (!provider) {
            this._aiError = 'No AI key configured';
            return;
        }
        const base64 = canvas.toDataURL('image/png').split(',')[1];
        const date = this._showCreateEventDialog?.date;
        const calendar = this._createCalendar || this._defaultCalendar
            || (this._calendars && this._calendars[0] && this._calendars[0].entity);
        this._closeCreateEventDialog();
        this._backgroundCreateFromImage(provider, base64, date, calendar);
    }

    async _backgroundCreateFromImage(provider, base64, date, calendar) {
        try {
            if (!date || !calendar) throw new Error('No date or calendar');
            const data = provider === 'claude'
                ? await this._analyzeWithClaude(base64)
                : await this._analyzeWithGemini(base64);
            const { title, time, durationMin } = this._parseAiResult(data);
            if (!title) {
                this._notify(this._language.aiAnalyze + ' — ' + (this._language.titleRequired ?? 'nothing read'));
                return;
            }
            const summary = title;
            let eventData;
            if (time) {
                const [h, mn] = time.split(':').map(Number);
                const start = date.set({ hour: h, minute: mn, second: 0, millisecond: 0 });
                const dur = (durationMin && durationMin > 0) ? durationMin : 60;
                const end = start.plus({ minutes: dur });
                eventData = {
                    summary,
                    dtstart: start.toFormat("yyyy-MM-dd'T'HH:mm:ss"),
                    dtend: end.toFormat("yyyy-MM-dd'T'HH:mm:ss"),
                };
            } else {
                eventData = {
                    summary,
                    dtstart: date.toISODate(),
                    dtend: date.plus({ days: 1 }).toISODate(),
                };
            }
            await this.hass.callWS({
                type: 'calendar/event/create',
                entity_id: calendar,
                event: eventData,
            });
            this._updateEvents();
        } catch (e) {
            console.error('Skylight Family Calendar: background create failed', e);
            this._notify('⚠️ ' + ((e && e.message) ? e.message : String(e)));
        }
    }

    // Parse the model's structured result, recovering the time from the raw
    // transcription if it wasn't routed into the time field.
    _parseAiResult(data) {
        let title = (data && data.title && String(data.title).trim()) ? String(data.title).trim() : null;
        let time = (data && data.time) ? this._parseTime(String(data.time)) : null;
        const raw = data && data.raw ? String(data.raw) : '';
        if (!time && raw) {
            const m = raw.match(/(\d{1,2})\s*[hH:]\s*(\d{2})?/);
            if (m) {
                time = this._parseTime(m[0]);
                if (!title) {
                    title = (raw.slice(0, m.index) + raw.slice(m.index + m[0].length))
                        .replace(/\s{2,}/g, ' ').replace(/^[-–,:\s]+|[-–,:\s]+$/g, '').trim();
                }
            } else if (!title) {
                title = raw.trim();
            }
        }
        let durationMin = parseInt(data && data.duration_minutes);
        if (isNaN(durationMin)) durationMin = null;
        return { title, time, durationMin };
    }

    _notify(message) {
        this.dispatchEvent(new CustomEvent('hass-notification', {
            detail: { message },
            bubbles: true,
            composed: true,
        }));
    }

    async _analyzeWithGemini(base64) {
        const model = this._geminiModel || 'gemini-2.5-flash';
        // Key must go in the URL query string: the Gemini REST API does not allow
        // the x-goog-api-key header in a cross-origin (browser) request — adding a
        // custom header triggers a CORS preflight that Google rejects, so the call
        // fails from the card. ?key= is the documented browser form.
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(this._geminiApiKey)}`;
        const resp = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: this._handwritingPrompt() },
                        { inlineData: { mimeType: 'image/png', data: base64 } },
                    ],
                }],
                generationConfig: {
                    responseMimeType: 'application/json',
                    responseSchema: {
                        type: 'OBJECT',
                        properties: {
                            raw: { type: 'STRING' },
                            title: { type: 'STRING' },
                            time: { type: 'STRING' },
                            duration_minutes: { type: 'INTEGER' },
                        },
                        required: ['title'],
                    },
                },
            }),
        });
        const json = await resp.json();
        if (!resp.ok) throw new Error(json?.error?.message || ('HTTP ' + resp.status));
        return this._extractJson(json.candidates?.[0]?.content?.parts?.[0]?.text);
    }

    // Anthropic Messages API — direct browser call (anthropic-dangerous-direct-browser-access)
    async _analyzeWithClaude(base64) {
        const model = this._claudeModel || 'claude-opus-4-8';
        const resp = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-api-key': this._claudeApiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true',
            },
            body: JSON.stringify({
                model,
                max_tokens: 256,
                messages: [{
                    role: 'user',
                    content: [
                        { type: 'image', source: { type: 'base64', media_type: 'image/png', data: base64 } },
                        { type: 'text', text: this._handwritingPrompt() + ' Respond with only the JSON object.' },
                    ],
                }],
                output_config: {
                    format: {
                        type: 'json_schema',
                        schema: {
                            type: 'object',
                            properties: {
                                raw: { type: 'string' },
                                title: { type: 'string' },
                                time: { type: 'string' },
                                duration_minutes: { type: 'integer' },
                            },
                            required: ['raw', 'title', 'time', 'duration_minutes'],
                            additionalProperties: false,
                        },
                    },
                },
            }),
        });
        const json = await resp.json();
        if (!resp.ok) throw new Error(json?.error?.message || ('HTTP ' + resp.status));
        const textBlock = (json.content || []).find(b => b.type === 'text');
        return this._extractJson(textBlock?.text);
    }

    _getAiTaskEntity() {
        if (this._aiTaskEntity) return this._aiTaskEntity;
        if (!this.hass) return null;
        return Object.keys(this.hass.states).find(e => e.startsWith('ai_task.')) ?? null;
    }

    _isAiQuickAddAvailable() {
        return this._aiQuickAdd !== false && !!this._getAiTaskEntity();
    }

    // Ask the HA-configured LLM (ai_task) to parse the quick-add text into a
    // structured {title, time, duration}. Falls back to the local regex parser.
    async _runAiQuickAdd() {
        const text = this.shadowRoot.querySelector('#event-quick')?.value?.trim();
        if (!text || this._aiLoading) return;
        const entity = this._getAiTaskEntity();
        if (!entity) { this._handleQuickAdd(text); return; }

        this._aiLoading = true;
        try {
            const res = await this.hass.callWS({
                type: 'call_service',
                domain: 'ai_task',
                service: 'generate_data',
                service_data: {
                    task_name: 'quick_add_calendar_event',
                    entity_id: entity,
                    instructions: `Extract a single calendar event from this text written by a user: "${text}".\n`
                        + `- title: the subject only, without any time or date words.\n`
                        + `- time: the start time in 24-hour HH:MM format if a clock time is mentioned, otherwise an empty string.\n`
                        + `- duration_minutes: the duration in minutes (default 60 when unspecified; use 0 for an all-day event).\n`
                        + `Keep the title in the same language as the input. Do not invent a time that is not present.`,
                    structure: {
                        title: { selector: { text: {} }, description: 'Event title, without the time', required: true },
                        time: { selector: { text: {} }, description: 'Start time HH:MM (24h), or empty if none' },
                        duration_minutes: { selector: { number: {} }, description: 'Duration in minutes, 0 means all-day' },
                    },
                },
                return_response: true,
            });
            const data = res?.response?.data ?? res?.response ?? {};
            this._applyAiQuickAdd(data);
        } catch (e) {
            console.error('Skylight Family Calendar: AI quick-add failed, using local parser', e);
            this._handleQuickAdd(text);
        } finally {
            this._aiLoading = false;
        }
    }

    _applyAiQuickAdd(data) {
        const { title, time, durationMin } = this._parseAiResult(data);
        if (title) {
            this._createTitle = title;
        }
        if (time) {
            this._createStartTime = time;
            if (durationMin && durationMin > 0) {
                this._createDuration = String(durationMin);
            } else if (this._createDuration === 'allday') {
                this._createDuration = '60';
            }
        } else {
            // No clock time → all-day event (matches the manual quick-add rule)
            this._createDuration = 'allday';
        }
        return { title: this._createTitle, time };
    }

    // Quick add: from one handwritten string, extract the start time (token
    // with h or :) and use the rest as the title. No time → all-day event.
    _handleQuickAdd(text) {
        if (!text || !text.trim()) return;
        const raw = text.trim();
        const m = raw.match(/(\d{1,2})\s*[hH:]\s*(\d{2})?/);
        let title = raw;
        let time = null;
        if (m) {
            time = this._parseTime(m[0]);
            if (time) {
                title = (raw.slice(0, m.index) + raw.slice(m.index + m[0].length));
            }
        }
        title = title.replace(/\s{2,}/g, ' ').replace(/^[-–,:\s]+|[-–,:\s]+$/g, '').trim();

        this._createTitle = title;
        if (time) {
            this._createStartTime = time;
            if (this._createDuration === 'allday') this._createDuration = '60';
        } else {
            this._createDuration = 'allday';
        }
    }

    _clearInput(id) {
        const input = this.shadowRoot?.querySelector('#' + id);
        if (input) {
            input.value = '';
            if (id.endsWith('location')) {
                this._clearLocationSuggestions(input);
            }
            input.focus();
        }
    }

    _handleLocationInput(e) {
        if (!this._googleApiKey) return;
        if (this._locationSelected) { this._locationSelected = false; return; }
        const value = e.target.value?.trim();
        const input = e.target;
        clearTimeout(this._locationSearchTimeout);
        if (!value || value.length < 3) {
            this._clearLocationSuggestions(input);
            return;
        }
        this._locationSearchTimeout = setTimeout(() => this._searchLocation(value, input), 400);
    }

    async _searchLocation(query, input) {
        try {
            const response = await fetch(
                `https://places.googleapis.com/v1/places:autocomplete`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Goog-Api-Key': this._googleApiKey,
                    },
                    body: JSON.stringify({
                        input: query,
                        languageCode: this._config?.locale || 'en',
                    }),
                }
            );
            const data = await response.json();
            const results = (data.suggestions || [])
                .filter(s => s.placePrediction)
                .map(s => ({
                    name: s.placePrediction.structuredFormat?.mainText?.text || '',
                    address: s.placePrediction.structuredFormat?.secondaryText?.text || '',
                    fullText: s.placePrediction.text?.text || '',
                }));
            this._showLocationSuggestions(results, input);
        } catch (e) {
            console.error('Location search failed:', e);
        }
    }

    _showLocationSuggestions(results, input) {
        const list = input.closest('.location-row').querySelector('.location-suggestions');
        if (!list) return;
        list.innerHTML = '';
        if (results.length === 0) {
            list.style.display = 'none';
            return;
        }
        results.forEach(result => {
            const li = document.createElement('li');
            const name = document.createElement('strong');
            name.textContent = result.name;
            const address = document.createElement('span');
            address.style.cssText = 'color: var(--secondary-text-color); font-size: 0.85em;';
            address.textContent = result.address;
            li.appendChild(name);
            li.appendChild(document.createTextNode(' '));
            li.appendChild(address);
            li.addEventListener('click', () => {
                this._locationSelected = true;
                input.value = result.fullText;
                input.dispatchEvent(new Event('input', { bubbles: true }));
                if (this._editFormData) {
                    this._editFormData = { ...this._editFormData, location: result.fullText };
                }
                list.style.display = 'none';
            });
            list.appendChild(li);
        });
        list.style.display = 'block';
    }

    _clearLocationSuggestions(input) {
        const list = input.closest('.location-row').querySelector('.location-suggestions');
        if (list) {
            list.innerHTML = '';
            list.style.display = 'none';
        }
    }

    async _handleCreateEvent() {
        const title = (this._createTitle ?? this.shadowRoot.querySelector('#event-title')?.value ?? '').trim();
        const calendar = this.shadowRoot.querySelector('#event-calendar')?.value;
        const startDate = this.shadowRoot.querySelector('#event-start-date')?.value;
        const startTime = this._parseTime(this._createStartTime ?? '09:00');
        const endDate = this.shadowRoot.querySelector('#event-end-date')?.value;
        const endTime = this.shadowRoot.querySelector('#event-end-time')?.value;
        const startInput = (startDate && startTime) ? `${startDate}T${startTime}` : '';
        const endInput = (endDate && endTime) ? `${endDate}T${endTime}` : '';
        const location = this.shadowRoot.querySelector('#event-location')?.value?.trim();
        const freq = this.shadowRoot.querySelector('#event-recurrence')?.value;
        const notify = this.shadowRoot.querySelector('#event-notify')?.checked ?? false;
        const durationValue = this._createDuration || '60';
        const allDay = durationValue === 'allday';

        if (!title) {
            return;
        }

        if (!startDate || (!allDay && !startInput)) {
            return;
        }

        let dtstart, dtend;
        if (allDay) {
            const startDay = DateTime.fromISO(startDate);
            if (!startDay.isValid) {
                return;
            }
            // End date input is inclusive; the calendar API expects an exclusive end
            let endDay = this._createEndTouched && endDate ? DateTime.fromISO(endDate) : startDay;
            if (!endDay.isValid || endDay < startDay) {
                endDay = startDay;
            }
            dtstart = startDay.toISODate();
            dtend = endDay.plus({ days: 1 }).toISODate();
        } else {
            const start = DateTime.fromISO(startInput);
            if (!start.isValid) {
                return;
            }
            let end = this._createEndTouched && endInput
                ? DateTime.fromISO(endInput)
                : start.plus({ minutes: parseInt(durationValue) || 60 });
            if (!end.isValid || end <= start) {
                end = start.plus({ hours: 1 });
            }
            dtstart = start.toFormat("yyyy-MM-dd'T'HH:mm:ss");
            dtend = end.toFormat("yyyy-MM-dd'T'HH:mm:ss");
        }

        let rrule = '';
        if (freq) {
            const interval = parseInt(this.shadowRoot.querySelector('#event-recurrence-interval')?.value) || 1;
            let byDay = [];
            if (freq === 'FREQ=WEEKLY') {
                byDay = [...this.shadowRoot.querySelectorAll('#event-day-picker .day-btn.active')]
                    .map(btn => btn.dataset.day);
            }
            const byMonthDay = freq === 'FREQ=MONTHLY'
                ? parseInt(this.shadowRoot.querySelector('#event-recurrence-monthday')?.value)
                : null;
            const endType = this.shadowRoot.querySelector('#event-recurrence-end')?.value || 'never';
            const endDate = this.shadowRoot.querySelector('#event-recurrence-end-date')?.value || '';
            const endCount = parseInt(this.shadowRoot.querySelector('#event-recurrence-end-count')?.value) || 10;
            rrule = this._buildRrule(freq, interval, byDay, byMonthDay, endType, endDate, endCount);
        }

        const eventData = {
            summary: notify ? '\u{1F514} ' + title : title,
            dtstart: dtstart,
            dtend: dtend,
        };
        if (location) eventData.location = location;
        if (rrule) eventData.rrule = rrule;

        try {
            await this.hass.callWS({
                type: 'calendar/event/create',
                entity_id: calendar,
                event: eventData,
            });

            this._closeCreateEventDialog();
            this._updateEvents();
        } catch (e) {
            // Surface the failure (e.g. an expired Google Calendar token) instead
            // of swallowing it — otherwise the Create button just looks dead.
            console.error('Failed to create event:', e);
            this._notify('⚠️ ' + (e?.message || e?.code || this._language.create));
        }
    }

    async _handleDeleteEvent() {
        const event = this._currentEventDetails;
        if (!event || !event.uid) {
            return;
        }

        // If recurring event, show delete confirmation dialog
        if (event.recurrence_id) {
            this._showDeleteRecurringDialog = { event, source: 'details' };
            return;
        }

        try {
            const wsData = {
                type: 'calendar/event/delete',
                entity_id: event.calendars[0],
                uid: event.uid,
            };

            await this.hass.callWS(wsData);
            this._currentEventDetails = null;
            this._updateEvents();
        } catch (e) {
            console.error('Failed to delete event:', e);
            this._notify('⚠️ ' + (e?.message || e?.code || this._language.deleteEvent));
        }
    }

    _handleEditEventClick() {
        const event = this._currentEventDetails;
        this._currentEventDetails = null;
        this._openEditEventDialog(event);
    }

    _openEditEventDialog(event) {
        // Reset the pen canvas state (shared with the create overlay)
        this._aiError = null;
        this._aiLoading = false;
        this._drawing = false;
        this._hasDrawing = false;
        this._canvasReady = false;
        this._eraserMode = false;
        // Extract recurrence rule from event if available
        let rruleStr = '';
        if (event.rrule) {
            rruleStr = event.rrule;
        } else if (event.recurrence_rule) {
            rruleStr = event.recurrence_rule;
        }
        const parsed = this._parseRrule(rruleStr);
        const rawTitle = event.summary || '';
        const notify = rawTitle.startsWith('\u{1F514}');
        // Detect on the original dates: the per-day slice fullDay flag is also
        // set on middle slices of timed multi-day events
        const allDay = this._isFullDay(event.originalStart, event.originalEnd, true);
        // All-day end dates are exclusive in the API; show them inclusive
        const displayEnd = event.originalEnd
            ? (allDay ? event.originalEnd.minus({ days: 1 }) : event.originalEnd)
            : null;
        this._editFormData = {
            title: notify ? rawTitle.replace(/^\u{1F514}\s*/u, '') : rawTitle,
            notify: notify,
            allDay: allDay,
            showAdvanced: !!parsed.freq,
            calendar: event.calendars[0] || '',
            startDate: event.originalStart ? event.originalStart.toFormat("yyyy-MM-dd") : '',
            startTime: event.originalStart ? event.originalStart.toFormat("HH:mm") : '',
            endDate: displayEnd ? displayEnd.toFormat("yyyy-MM-dd") : '',
            endTime: displayEnd ? displayEnd.toFormat("HH:mm") : '',
            location: event.location || '',
            recurrence: parsed.freq,
            recurrenceInterval: parsed.interval,
            recurrenceByDay: parsed.byDay,
            recurrenceByMonthDay: parsed.byMonthDay ?? (event.originalStart ? event.originalStart.day : DateTime.now().day),
            recurrenceEndType: parsed.endType,
            recurrenceEndDate: parsed.endDate,
            recurrenceEndCount: parsed.endCount,
        };
        this._showEditEventDialog = event;
    }

    _closeEditEventDialog() {
        this._showEditEventDialog = null;
        this._editFormData = null;
        this._aiError = null;
        this._aiLoading = false;
        this._drawing = false;
        this._hasDrawing = false;
        this._canvasReady = false;
        this._eraserMode = false;
    }

    async _handleDeleteEventFromEdit() {
        const event = this._showEditEventDialog;
        if (!event || !event.uid) {
            return;
        }

        // If recurring event, show delete confirmation dialog
        if (event.recurrence_id) {
            this._showDeleteRecurringDialog = { event, source: 'edit' };
            return;
        }

        try {
            const wsData = {
                type: 'calendar/event/delete',
                entity_id: event.calendars[0],
                uid: event.uid,
            };

            await this.hass.callWS(wsData);
            this._showEditEventDialog = null;
            this._editFormData = null;
            this._updateEvents();
        } catch (e) {
            console.error('Skylight Family Calendar: Failed to delete event:', e);
        }
    }

    async _handleDeleteThisEvent() {
        const ctx = this._showDeleteRecurringDialog;
        if (!ctx) return;
        const event = ctx.event;
        this._showDeleteRecurringDialog = null;

        try {
            const wsData = {
                type: 'calendar/event/delete',
                entity_id: event.calendars[0],
                uid: event.uid,
                recurrence_id: event.recurrence_id,
            };

            await this.hass.callWS(wsData);
            if (ctx.source === 'edit') {
                this._showEditEventDialog = null;
                this._editFormData = null;
            } else {
                this._currentEventDetails = null;
            }
            this._updateEvents();
        } catch (e) {
            console.error('Skylight Family Calendar: Failed to delete single event:', e);
        }
    }

    async _handleDeleteAllEvents() {
        const ctx = this._showDeleteRecurringDialog;
        if (!ctx) return;
        const event = ctx.event;
        this._showDeleteRecurringDialog = null;

        try {
            const wsData = {
                type: 'calendar/event/delete',
                entity_id: event.calendars[0],
                uid: event.uid,
            };
            // No recurrence_id → deletes the entire series

            await this.hass.callWS(wsData);
            if (ctx.source === 'edit') {
                this._showEditEventDialog = null;
                this._editFormData = null;
            } else {
                this._currentEventDetails = null;
            }
            this._updateEvents();
        } catch (e) {
            console.error('Skylight Family Calendar: Failed to delete all events:', e);
        }
    }

    async _handleUpdateEvent() {
        const event = this._showEditEventDialog;
        const form = this._editFormData;

        if (!event || !form) {
            console.error('Skylight Family Calendar: No event or form data for update');
            return;
        }

        // If recurring event, show confirmation dialog
        if (event.recurrence_id) {
            this._showRecurringConfirmDialog = { event, form: { ...form } };
            return;
        }

        // Non-recurring: save directly
        await this._performUpdateEvent(event, form, null);
    }

    async _handleUpdateThisEvent() {
        const ctx = this._showRecurringConfirmDialog;
        if (!ctx) return;
        this._showRecurringConfirmDialog = null;
        // Update this event only: send recurrence_id without recurrence_range
        await this._performUpdateEvent(ctx.event, ctx.form, 'this');
    }

    async _handleUpdateAllEvents() {
        const ctx = this._showRecurringConfirmDialog;
        if (!ctx) return;
        this._showRecurringConfirmDialog = null;
        // Update all events: send without recurrence_id
        await this._performUpdateEvent(ctx.event, ctx.form, 'all');
    }

    async _performUpdateEvent(event, form, recurringMode) {
        const title = form.title?.trim();
        const calendar = form.calendar;
        const startInput = (form.startDate && form.startTime) ? `${form.startDate}T${form.startTime}` : '';
        const endInput = (form.endDate && form.endTime) ? `${form.endDate}T${form.endTime}` : '';
        const location = form.location?.trim() ?? '';
        const recurrence = this._buildRrule(
            form.recurrence, form.recurrenceInterval, form.recurrenceByDay,
            form.recurrenceByMonthDay, form.recurrenceEndType,
            form.recurrenceEndDate, form.recurrenceEndCount
        );

        if (!title || !startInput) {
            console.error('Skylight Family Calendar: Missing required fields', { title, startInput });
            return;
        }

        const summary = form.notify ? '\u{1F514} ' + title : title;
        let dtstart, dtend;
        if (form.allDay) {
            const startDay = DateTime.fromISO(form.startDate);
            if (!startDay.isValid) {
                console.error('Skylight Family Calendar: Invalid start date', { startDate: form.startDate });
                return;
            }
            // Form end date is inclusive; the calendar API expects an exclusive end
            let endDay = form.endDate ? DateTime.fromISO(form.endDate) : startDay;
            if (!endDay.isValid || endDay < startDay) {
                endDay = startDay;
            }
            dtstart = startDay.toISODate();
            dtend = endDay.plus({ days: 1 }).toISODate();
        } else {
            const start = DateTime.fromISO(startInput);
            if (!start.isValid) {
                console.error('Skylight Family Calendar: Invalid start date', { startInput });
                return;
            }
            let end = endInput ? DateTime.fromISO(endInput) : start.plus({ hours: 1 });
            if (!end.isValid || end <= start) {
                end = start.plus({ hours: 1 });
            }
            dtstart = start.toFormat("yyyy-MM-dd'T'HH:mm:ss");
            dtend = end.toFormat("yyyy-MM-dd'T'HH:mm:ss");
        }

        const originalEntity = event.calendars[0];
        const targetEntity = calendar || originalEntity;
        // HA's update can't move an event to a different calendar entity. If the
        // calendar was changed, sending an update to the new calendar (which does
        // not hold the event's UID) hangs until the WS call times out (~60s). So
        // a calendar change is done as delete-from-original + create-in-target.
        const movedCalendar = !!event.uid && targetEntity !== originalEntity;

        const buildEventData = () => {
            const data = { summary: summary, dtstart: dtstart, dtend: dtend };
            if (location) data.location = location;
            if (recurrence) data.rrule = recurrence;
            return data;
        };
        const deleteOriginal = async () => {
            const deleteData = {
                type: 'calendar/event/delete',
                entity_id: originalEntity,
                uid: event.uid,
            };
            if (recurringMode === 'this') {
                deleteData.recurrence_id = event.recurrence_id;
            } else if (recurringMode === 'all') {
                // No recurrence_id
            } else if (event.recurrence_id) {
                deleteData.recurrence_id = event.recurrence_id;
                deleteData.recurrence_range = 'THISANDFUTURE';
            }
            await this.hass.callWS(deleteData);
        };

        try {
            if (movedCalendar) {
                // Move between calendars: delete here, recreate there.
                await deleteOriginal();
                await this.hass.callWS({
                    type: 'calendar/event/create',
                    entity_id: targetEntity,
                    event: buildEventData(),
                });
            } else if (event.uid) {
                // Same calendar: native update on the entity that holds the event.
                const wsData = {
                    type: 'calendar/event/update',
                    entity_id: originalEntity,
                    uid: event.uid,
                    event: buildEventData(),
                };
                if (recurringMode === 'this') {
                    // This event only: send recurrence_id without recurrence_range
                    wsData.recurrence_id = event.recurrence_id;
                } else if (recurringMode === 'all') {
                    // All events: don't send recurrence_id at all
                } else if (event.recurrence_id) {
                    // Default fallback (shouldn't happen with new flow)
                    wsData.recurrence_id = event.recurrence_id;
                    wsData.recurrence_range = 'THISANDFUTURE';
                }
                await this.hass.callWS(wsData);
            }

            this._showEditEventDialog = null;
            this._editFormData = null;
            this._updateEvents();
        } catch (e) {
            // Fallback: delete + recreate in the SAME calendar if update isn't supported.
            if (e.code === 'not_supported' && event.uid && !movedCalendar) {
                try {
                    await deleteOriginal();
                    await this.hass.callWS({
                        type: 'calendar/event/create',
                        entity_id: originalEntity,
                        event: buildEventData(),
                    });
                    this._showEditEventDialog = null;
                    this._editFormData = null;
                    this._updateEvents();
                } catch (fallbackError) {
                    console.error('Skylight Family Calendar: Failed to update event (fallback):', fallbackError);
                }
            } else {
                console.error('Skylight Family Calendar: Failed to update event:', e);
                this._notify('⚠️ ' + (e?.message || e?.code || this._language.save));
            }
        }
    }

    _toggleDayBtn(e) {
        e.target.classList.toggle('active');
    }

    _toggleEditDayBtn(e, day) {
        const byDay = [...(this._editFormData.recurrenceByDay || [])];
        const idx = byDay.indexOf(day);
        if (idx >= 0) {
            byDay.splice(idx, 1);
        } else {
            byDay.push(day);
        }
        this._editFormData = { ...this._editFormData, recurrenceByDay: byDay };
    }

    _dayLabel(code) {
        const map = { MO: 0, TU: 1, WE: 2, TH: 3, FR: 4, SA: 5, SU: 6 };
        const weekdays = LuxonInfo.weekdays('short');
        return weekdays[map[code]] ?? code;
    }

    _getDefaultMonthDay() {
        const startInput = this.shadowRoot?.querySelector('#event-start-date')?.value;
        if (startInput) return DateTime.fromISO(startInput).day;
        return DateTime.now().day;
    }

    // Tap-only time picker: hour grid + minute row, no handwriting needed
    // Hour + minute dropdowns for the desktop / phone keyboard forms. The tablet
    // keeps the touch-friendly button grid (_renderTimeSlots) for the stylus.
    _renderTimeDropdowns(selected, isEdit) {
        const parts = String(selected || '09:00').split(':');
        const selH = parseInt(parts[0]);
        const selM = parseInt(parts[1]);
        const hours = [];
        for (let h = this._slotStartHour; h <= this._slotEndHour; h++) hours.push(h);
        // Keep the event's own hour selectable even if it falls outside the
        // configured slot range (e.g. an early-morning event being edited).
        if (!hours.includes(selH)) { hours.push(selH); hours.sort((a, b) => a - b); }
        const minutes = [0, 15, 30, 45];
        if (!minutes.includes(selM)) { minutes.push(selM); minutes.sort((a, b) => a - b); }
        const onH = (e) => { const h = parseInt(e.target.value); isEdit ? this._setEditTime(h, null) : this._setCreateTime(h, null); };
        const onM = (e) => { const m = parseInt(e.target.value); isEdit ? this._setEditTime(null, m) : this._setCreateTime(null, m); };
        return html`
            <div class="time-dropdowns">
                <select class="form-input time-select" @change="${onH}">
                    ${hours.map((h) => html`<option value="${h}" ?selected="${h === selH}">${String(h).padStart(2, '0')} h</option>`)}
                </select>
                <span class="time-sep">:</span>
                <select class="form-input time-select" @change="${onM}">
                    ${minutes.map((m) => html`<option value="${m}" ?selected="${m === selM}">${String(m).padStart(2, '0')}</option>`)}
                </select>
            </div>
        `;
    }

    _renderTimeSlots(selected, isEdit) {
        const parts = String(selected || '09:00').split(':');
        const selH = parseInt(parts[0]);
        const selM = parseInt(parts[1]);
        const hours = [];
        for (let h = this._slotStartHour; h <= this._slotEndHour; h++) hours.push(h);
        const pickH = (h) => isEdit ? this._setEditTime(h, null) : this._setCreateTime(h, null);
        const pickM = (m) => isEdit ? this._setEditTime(null, m) : this._setCreateTime(null, m);
        return html`
            <div class="time-slot-picker">
                <div class="slot-grid">
                    ${hours.map(h => html`
                        <button type="button" class="slot-btn ${h === selH ? 'active' : ''}"
                            @click="${() => pickH(h)}">${h}h</button>
                    `)}
                </div>
                <div class="slot-grid minutes">
                    ${[0, 15, 30, 45].map(m => html`
                        <button type="button" class="slot-btn ${m === selM ? 'active' : ''}"
                            @click="${() => pickM(m)}">${String(m).padStart(2, '0')}</button>
                    `)}
                </div>
            </div>
        `;
    }

    _setCreateTime(h, m) {
        const cur = String(this._createStartTime || '09:00').split(':').map(Number);
        const nh = h ?? cur[0];
        const nm = m ?? cur[1];
        this._createStartTime = String(nh).padStart(2, '0') + ':' + String(nm).padStart(2, '0');
        if (this._createDuration === 'allday') this._createDuration = '60';
    }

    _setEditTime(h, m) {
        const form = this._editFormData;
        const cur = String(form.startTime || '09:00').split(':').map(Number);
        const nh = h ?? cur[0];
        const nm = m ?? cur[1];
        const newStart = String(nh).padStart(2, '0') + ':' + String(nm).padStart(2, '0');
        if (form.allDay) {
            // Switching from all-day to a timed event: default to a 1 h slot
            const start = DateTime.fromISO(`${form.startDate}T${newStart}`);
            const end = start.plus({ minutes: 60 });
            this._editFormData = {
                ...form, allDay: false, startTime: newStart,
                endDate: end.toFormat('yyyy-MM-dd'), endTime: end.toFormat('HH:mm'),
            };
        } else {
            this._updateEditStart({ startTime: newStart });
        }
    }

    // Lenient handwriting-friendly time parser: accepts "14h30", "14:30",
    // "14.30", "1430", "930", "14h", "9" → returns "HH:MM" or null
    _parseTime(str) {
        if (!str) return null;
        let s = String(str).trim().toLowerCase().replace(/\s+/g, '');
        let h, m;
        const sep = s.match(/^(\d{1,2})[h:.,](\d{0,2})$/);
        if (sep) {
            h = parseInt(sep[1]);
            m = sep[2] === '' ? 0 : parseInt(sep[2]);
        } else if (/^\d{3,4}$/.test(s)) {
            const p = s.padStart(4, '0');
            h = parseInt(p.slice(0, 2));
            m = parseInt(p.slice(2));
        } else if (/^\d{1,2}$/.test(s)) {
            h = parseInt(s);
            m = 0;
        } else {
            return null;
        }
        if (isNaN(h) || isNaN(m) || h > 23 || m > 59) return null;
        return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
    }

    _formatDuration(minutes) {
        minutes = parseInt(minutes);
        if (minutes < 60) {
            return minutes + ' min';
        }
        const hours = Math.floor(minutes / 60);
        const rest = minutes % 60;
        return rest === 0 ? hours + ' h' : hours + ' h ' + String(rest).padStart(2, '0');
    }

    _getFormDuration(form) {
        if (form.allDay) {
            return 'allday';
        }
        const start = DateTime.fromISO(`${form.startDate}T${form.startTime || '00:00'}`);
        const end = DateTime.fromISO(`${form.endDate}T${form.endTime || '00:00'}`);
        if (!start.isValid || !end.isValid) {
            return '60';
        }
        const minutes = Math.round(end.diff(start, 'minutes').minutes);
        return minutes > 0 ? String(minutes) : '60';
    }

    // Shift the end along with the start so the duration is preserved
    _updateEditStart(patch) {
        const form = this._editFormData;
        const next = { ...form, ...patch };
        const oldStart = DateTime.fromISO(`${form.startDate}T${form.startTime || '00:00'}`);
        const oldEnd = DateTime.fromISO(`${form.endDate}T${form.endTime || '00:00'}`);
        const newStart = DateTime.fromISO(`${next.startDate}T${next.startTime || '00:00'}`);
        if (oldStart.isValid && oldEnd.isValid && newStart.isValid && oldEnd >= oldStart) {
            const minutes = Math.round(oldEnd.diff(oldStart, 'minutes').minutes);
            const newEnd = newStart.plus({ minutes });
            next.endDate = newEnd.toFormat('yyyy-MM-dd');
            next.endTime = newEnd.toFormat('HH:mm');
        }
        this._editFormData = next;
    }

    _setEditDuration(value) {
        const form = this._editFormData;
        if (value === 'allday') {
            this._editFormData = {
                ...form,
                allDay: true,
                startTime: '00:00',
                endTime: '00:00',
                endDate: form.startDate,
            };
            return;
        }
        const startTime = form.allDay ? '09:00' : (form.startTime || '09:00');
        const start = DateTime.fromISO(`${form.startDate}T${startTime}`);
        if (!start.isValid) {
            this._editFormData = { ...form, allDay: false, startTime: startTime };
            return;
        }
        const end = start.plus({ minutes: parseInt(value) || 60 });
        this._editFormData = {
            ...form,
            allDay: false,
            startTime: startTime,
            endDate: end.toFormat('yyyy-MM-dd'),
            endTime: end.toFormat('HH:mm'),
        };
    }

    _buildRrule(freq, interval, byDay, byMonthDay, endType, endDate, endCount) {
        if (!freq) return '';
        let rrule = freq;
        if (interval && interval > 1) rrule += ';INTERVAL=' + interval;
        if (freq === 'FREQ=WEEKLY' && byDay && byDay.length > 0) {
            rrule += ';BYDAY=' + byDay.join(',');
        }
        if (freq === 'FREQ=MONTHLY' && byMonthDay) {
            rrule += ';BYMONTHDAY=' + byMonthDay;
        }
        if (endType === 'date' && endDate) {
            // RFC 5545: UNTIL must be UTC (Z suffix) for a TZ/UTC DTSTART, else
            // the last occurrence can be dropped/added depending on the timezone.
            const dt = DateTime.fromISO(endDate).endOf('day').toUTC();
            rrule += ';UNTIL=' + dt.toFormat("yyyyMMdd'T'HHmmss'Z'");
        } else if (endType === 'count' && endCount > 0) {
            rrule += ';COUNT=' + endCount;
        }
        return rrule;
    }

    _parseRrule(rruleStr) {
        const result = {
            freq: '', interval: 1, byDay: [], byMonthDay: null,
            endType: 'never', endDate: '', endCount: 10
        };
        if (!rruleStr) return result;
        const parts = rruleStr.split(';');
        for (const part of parts) {
            const [rawKey, rawVal] = part.split('=');
            // RRULE keys/values are case-insensitive (RFC 5545); some calendar
            // backends emit lower/mixed case. Normalise so editing never silently
            // drops the recurrence.
            const key = (rawKey || '').toUpperCase();
            const val = rawVal || '';
            switch(key) {
                case 'FREQ': result.freq = 'FREQ=' + val.toUpperCase(); break;
                case 'INTERVAL': result.interval = parseInt(val) || 1; break;
                case 'BYDAY': result.byDay = val.toUpperCase().split(','); break;
                case 'BYMONTHDAY': result.byMonthDay = parseInt(val); break;
                case 'UNTIL': {
                    result.endType = 'date';
                    // Handle both UTC (…Z) and legacy floating local values.
                    const isUtc = /z$/i.test(val);
                    const clean = val.replace(/[zZ]$/, '');
                    const parsed = DateTime.fromFormat(clean, "yyyyMMdd'T'HHmmss", isUtc ? { zone: 'utc' } : {});
                    result.endDate = (parsed.isValid ? parsed : DateTime.fromISO(val)).toLocal().toFormat('yyyy-MM-dd');
                    break;
                }
                case 'COUNT':
                    result.endType = 'count';
                    result.endCount = parseInt(val) || 10;
                    break;
            }
        }
        return result;
    }

    _getViewLabel(view) {
        const key = view.toLowerCase();
        return this._language[key] ?? view;
    }

    _getViewIcon(view) {
        const icons = {
            'Today': 'mdi:calendar-today',
            'Tomorrow': 'mdi:calendar-arrow-right',
            'Week': 'mdi:view-week',
            'Biweek': 'mdi:view-sequential',
            'Month': 'mdi:view-grid',
        };
        return icons[view] ?? 'mdi:calendar';
    }

    _getCalendarDisplayName(calendar) {
        if (calendar.name) return calendar.name;
        if (this.hass && calendar.entity && this.hass.states[calendar.entity]) {
            const friendly = this.hass.states[calendar.entity].attributes?.friendly_name;
            if (friendly) return friendly;
        }
        return calendar.entity?.replace('calendar.', '') ?? '';
    }

    _handleLegendClick(calendar) {
        if (!this._legendToggle) {
            return;
        }

        const hideIndex = this._hideCalendars.indexOf(calendar.entity);
        const hideCalendars = [...this._hideCalendars];
        if (hideIndex > -1) {
            hideCalendars.splice(hideIndex, 1);
        } else {
            hideCalendars.push(calendar.entity);
        }
        this._hideCalendars = hideCalendars;
    }

    _handleNavigationOriginalClick() {
        this._navigationOffset = 0;
        this._updateEvents();
    }

    _handleNavigationNextClick(event) {
        this._navigationOffset++;
        this._updateEvents();
    }

    _handleNavigationPreviousClick(event) {
        this._navigationOffset--;
        this._updateEvents();
    }

    _selectDay(day) {
        if (this._selectedDay?.date?.day === day.date.day && this._selectedDay?.date?.month === day.date.month) return;
        this._selectedDay = day;
        this.requestUpdate();
    }

    // Pointer events unify finger, stylus and mouse input. Windows tablets
    // (and pens in general) do not fire touch events, only pointer events.
    _handlePointerDown(e) {
        if (!e.isPrimary) return;
        this._touchStartX = e.clientX;
        this._touchStartY = e.clientY;
        this._touchPointerType = e.pointerType;
    }

    _handlePointerCancel() {
        this._touchStartX = undefined;
        this._touchStartY = undefined;
    }

    _handlePointerUp(e) {
        if (!e.isPrimary || this._touchStartX === undefined) return;
        const deltaX = e.clientX - this._touchStartX;
        const deltaY = e.clientY - this._touchStartY;
        const pointerType = this._touchPointerType;
        this._touchStartX = undefined;
        this._touchStartY = undefined;

        // Swipe: horizontal movement > 50px and more horizontal than vertical.
        // Mouse drags are excluded so desktop text selection keeps working.
        if (pointerType !== 'mouse' && Math.abs(deltaX) >= 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0) {
                this._navigationOffset++;
            } else {
                this._navigationOffset--;
            }
            this._updateEvents();
            return;
        }

        // Tap in month view: select the tapped day
        if (this._numberOfDaysIsMonth && pointerType !== 'mouse') {
            const target = e.target.closest?.('.day');
            if (target && !target.classList.contains('header') && !target.classList.contains('outside')) {
                const dayNum = parseInt(target.dataset.date);
                const month = parseInt(target.dataset.month);
                const year = parseInt(target.dataset.year);
                if (dayNum && this._days) {
                    const tappedDay = this._days.find(d => !d.isOutsideMonth && d.date.day === dayNum && d.date.month === month && d.date.year === year);
                    if (tappedDay) {
                        this._selectDay(tappedDay);
                    }
                }
            }
        }
    }

    _handleWeatherClick(e) {
        const event = new Event(
            'hass-more-info', {
                bubbles: true,
                composed: true,
            }
        );
        event.detail = {
            entityId: this._weather.entity
        }
        this.dispatchEvent(event);

        e.stopImmediatePropagation();
    }

    _getNumberOfDays(numberOfDays) {
        if (this._numberOfDaysIsMonth) {
            numberOfDays = DateTime.now().daysInMonth;
        }

        return numberOfDays;
    }

    _getStartDate(alternativeStartingDay) {
        let startDate = DateTime.now();

        if (this._navigationOffset !== 0) {
            if (this._numberOfDaysIsMonth) {
                startDate = startDate.plus({ months: this._navigationOffset })
            } else {
                startDate = startDate.plus({ days: this._numberOfDays * this._navigationOffset })
            }
        }

        const startingDay = String(alternativeStartingDay ?? this._startingDay).toLowerCase().trim();

        const isMonthViewWithWeekdayStart = this._numberOfDaysIsMonth && ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].includes(startingDay);

        if (isMonthViewWithWeekdayStart) {
            startDate = startDate.startOf('month');
        }

        switch (startingDay) {
            case 'yesterday':
                startDate = startDate.minus({ days: 1 })
                break;
            case 'tomorrow':
                startDate = startDate.plus({ days: 1 })
                break;
            case 'sunday':
                if (!isMonthViewWithWeekdayStart) {
                    startDate = this._getWeekDayDate(startDate, 7);
                }
                break;
            case 'monday':
                if (!isMonthViewWithWeekdayStart) {
                    startDate = this._getWeekDayDate(startDate, 1);
                }
                break;
            case 'tuesday':
                if (!isMonthViewWithWeekdayStart) {
                    startDate = this._getWeekDayDate(startDate, 2);
                }
                break;
            case 'wednesday':
                if (!isMonthViewWithWeekdayStart) {
                    startDate = this._getWeekDayDate(startDate, 3);
                }
                break;
            case 'thursday':
                if (!isMonthViewWithWeekdayStart) {
                    startDate = this._getWeekDayDate(startDate, 4);
                }
                break;
            case 'friday':
                if (!isMonthViewWithWeekdayStart) {
                    startDate = this._getWeekDayDate(startDate, 5);
                }
                break;
            case 'saturday':
                if (!isMonthViewWithWeekdayStart) {
                    startDate = this._getWeekDayDate(startDate, 6);
                }
                break;
            case 'month':
                startDate = startDate.startOf('month');
                break;
        }

        if (this._startingDayOffset !== 0 && !isMonthViewWithWeekdayStart) {
            startDate = startDate.plus({ days: this._startingDayOffset });
        }

        if (this._hideWeekend && startDate.weekday >= 6) {
            startDate = this._getStartDate('monday');
        }
        return startDate.startOf('day');
    }

    _getWeekDayDate(currentDate, weekday) {
        const currentWeekDay = currentDate.weekday;
        if (currentWeekDay > weekday) {
            return currentDate.minus({ days: currentWeekDay - weekday })
        }
        if (currentWeekDay < weekday) {
            return currentDate.minus({ days: 7 - weekday + currentWeekDay })
        }

        return currentDate;
    }

    _convertApiDate(apiDate) {
        let date = null;

        if (apiDate) {
            if (apiDate.dateTime) {
                date = DateTime.fromISO(apiDate.dateTime);
            } else if (apiDate.date) {
                date = DateTime.fromISO(apiDate.date);
            }
        }

        return date;
    }

    _isFullDay(startDate, endDate, multiDay) {
        if (
            startDate === null
            || endDate === null
            || startDate.hour > 0
            || startDate.minute > 0
            || startDate.second > 0
            || endDate.hour > 0
            || endDate.minute > 0
            || endDate.second > 0
        ) {
            return false;
        }

        // Compare calendar days, not elapsed duration: on a DST-transition night
        // the diff is 23h/25h (≠ exactly 1), which would mis-flag an all-day event.
        return multiDay || Math.round(endDate.startOf('day').diff(startDate.startOf('day'), 'days').days) === 1;
    }

    _isSameDay(date1, date2) {
        if (date1 === null && date2 === null) {
            return true;
        }

        if (date1 === null || date2 === null) {
            return false;
        }

        return date1.day === date2.day
            && date1.month === date2.month
            && date1.year === date2.year
    }

    _isToday(date) {
        const today = DateTime.now().startOf('day');
        return this._isSameDay(date, today);
    }

    _isTomorrow(date) {
        const tomorrow = DateTime.now().startOf('day').plus({ days: 1 });
        return this._isSameDay(date, tomorrow);
    }

    _isYesterday(date) {
        const yesterday = DateTime.now().startOf('day').minus({ days: 1 });
        return this._isSameDay(date, yesterday);
    }
}
