import { css } from 'lit';

export default css`
    @font-face {
        font-family: 'Ovo';
        src: url('data:font/woff2;base64,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') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    :host {
        --skylight-font: 'Ovo', serif;
        --skylight-bg: rgba(255, 255, 255, 0.6);
        --skylight-radius: 24px;
        --skylight-btn-radius: 20px;
        --skylight-accent: #03a9f4;
    }

    ha-card {
        --header-spacing: 15px;
        --legend-spacing: 15px;
        --legend-dot-size: 10px;
        --navigation-spacing: 5px;
        --navigation-month-font-size: 2em;
        --days-columns: 7;
        --days-spacing: 15px;
        --day-date-number-font-size: 3.5em;
        --day-date-number-line-height: 1.2em;
        --day-date-text-font-size: 1.25em;
        --events-margin-top: 10px;
        --event-spacing: 5px;
        --event-padding: 10px;
        --event-border-width: 5px;
        --event-border-radius: 5px;
        --event-font-size: 1em;
        --event-line-height: 1.2em;
        --event-icon-size: 18px;
        --weather-icon-size: 30px;
        --weather-temperature-separator: ' / ';
        --weather-temperature-font-size: 1em;
        background: var(--skylight-bg) !important;
        border-radius: var(--skylight-radius) !important;
        box-shadow: none !important;
        border: none !important;
        overflow: hidden;
        font-family: var(--skylight-font);
    }

    ha-card.nobackground {
        border: none !important;
        background-color: transparent !important;
        box-shadow: none !important;
    }

    ha-card.compact {
        --days-spacing: 5px;
        --day-date-number-font-size: 1.5em;
        --day-date-text-font-size: 1em;
        --events-margin-top: 5px;
        --event-spacing: 2px;
        --event-padding: 2px 5px;
        --event-border-width: 2px;
        --event-font-size: .9em;
        --event-line-height: 1.1em;
        --weather-icon-size: 20px;
        --weather-temperature-font-size: 0.8em;
    }

    /* ── Skylight Shell ───────────────── */

    .skylight-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px 8px;
    }

    .date-section {
        display: flex;
        flex-direction: column;
    }

    .day-name {
        font-size: 1.1em;
        text-transform: capitalize;
        color: var(--primary-text-color, #333);
    }

    .full-date {
        font-size: 1.4em;
        text-transform: capitalize;
        color: var(--primary-text-color, #333);
    }

    .clock {
        font-size: 3.5em;
        font-weight: 400;
        color: var(--primary-text-color, #333);
        line-height: 1.1;
        margin-top: 4px;
    }

    .weather-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        cursor: pointer;
    }

    .weather-section ha-icon {
        --mdc-icon-size: 48px;
        color: var(--primary-text-color, #333);
    }

    .weather-temp {
        font-size: 1.5em;
        color: var(--primary-text-color, #333);
    }

    .controls {
        padding: 8px 24px 12px;
    }

    .title-row {
        margin-bottom: 8px;
    }

    .calendar-title {
        font-size: 1.6em;
        color: var(--primary-text-color, #333);
    }

    .buttons-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    }

    .calendar-filters {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }

    .view-selector {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }

    .filter-btn {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 6px 14px;
        border: 2px solid var(--cal-color, #888);
        border-radius: var(--skylight-btn-radius);
        background: transparent;
        color: var(--primary-text-color, #333);
        cursor: pointer;
        font-family: var(--skylight-font);
        font-size: 0.9em;
        transition: background 0.2s, color 0.2s;
        white-space: nowrap;
    }

    .filter-btn:hover {
        background: color-mix(in srgb, var(--cal-color, #888) 20%, transparent);
    }

    .filter-btn.active {
        background: var(--cal-color, #888);
        color: white;
    }

    .filter-btn ha-icon {
        --mdc-icon-size: 18px;
    }

    .view-btn {
        padding: 5px 12px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.5);
        color: var(--primary-text-color, #333);
        cursor: pointer;
        font-family: var(--skylight-font);
        font-size: 0.85em;
        transition: background 0.2s, color 0.2s, border-color 0.2s;
        white-space: nowrap;
    }

    .view-btn:hover {
        background: rgba(255, 255, 255, 0.8);
    }

    .view-btn.active {
        background: var(--skylight-accent);
        color: white;
        border-color: var(--skylight-accent);
    }

    /* Hide icons in Skylight theme (text only) */
    .view-btn .view-icon {
        display: none;
    }

    .calendar-container {
        padding: 0 8px 8px;
        min-height: 300px;
    }

    .calendar-container > * {
        width: 100%;
    }

    /* ── Calendar Card Content ────────── */

    .card-header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .card-header-row .card-title {
        margin: 0;
    }

    .current-weather {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: var(--weather-temperature-font-size);
    }

    .current-weather .icon {
        display: inline-block;
        vertical-align: middle;
        background-size: cover;
        width: var(--weather-icon-size);
        height: var(--weather-icon-size);
    }

    .current-weather .icon img {
        max-width: var(--weather-icon-size);
        max-height: var(--weather-icon-size);
    }

    .errors {
        white-space: pre-line;
    }

    .container {
        container-name: weekplanner;
        container-type: inline-size;
        display: flex;
        flex-wrap: wrap;
        gap: var(--days-spacing);
        /* Let vertical scrolling through but keep horizontal gestures
           (swipe navigation) for the card — required on Windows touch
           devices where the browser would otherwise consume them */
        touch-action: pan-y;
        -webkit-user-select: none;
        user-select: none;
    }

    .container.hasActions {
        cursor: pointer;
    }

    .container .header {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: var(--header-spacing);
    }

    .container .legend {
        display: flex;
        align-items: center;
    }

    .container .legend ul {
        display: flex;
        flex-wrap: wrap;
        gap: var(--legend-spacing);
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .container .legend ul li {
        display: block;
        --mdc-icon-size: 16px;
    }

    .container .legend ul li.hasToggle {
        cursor: pointer;
    }

    .container .legend ul li.hidden {
        opacity: .5;
    }

    .container .legend ul li ha-icon {
        color: var(--legend-calendar-color, var(--divider-color, #ffffff));
    }

    .container .legend ul li.hidden ha-icon {
        color: var(--divider-color, #ffffff);
    }

    .container .legend ul li.noIcon:before {
        content: '';
        display: inline-block;
        width: var(--legend-dot-size);
        height: var(--legend-dot-size);
        background-color: var(--legend-calendar-color, var(--divider-color, #ffffff));
        border-radius: 50%;
        margin: 0 5px 0 0;
        vertical-align: middle;
    }

    .container .legend ul li.hidden.noIcon:before {
        background-color: var(--divider-color, #ffffff);
    }

    .container .navigation {
        display: flex;
        gap: var(--navigation-spacing);
        align-items: center;
    }

    .container .navigation .month {
        font-size: var(--navigation-month-font-size);
    }

    .container .navigation ul {
        display: flex;
        flex-wrap: wrap;
        gap: var(--navigation-spacing);
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .container .navigation ul li {
        display: block;
        cursor: pointer;
    }

    .container .day {
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: calc((100% - (var(--days-columns) - 1) * var(--days-spacing)) / var(--days-columns));
        margin: 0 0 var(--days-spacing) 0;
        border-right: 1px solid var(--divider-color, rgba(0,0,0,0.08));
        border-bottom: 1px solid var(--divider-color, rgba(0,0,0,0.08));
    }

    .container .day.today .date .number {
        background-color: #f0a030;
        color: #fff;
        font-weight: bold;
        border-radius: 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 1.4em;
        padding: 2px 6px;
    }

    .container .day .day-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container .day .date {
        position: relative;
        z-index: 1;
        min-width: 0;
    }

    .container .day .date .number {
        font-size: var(--day-date-number-font-size);
        line-height: var(--day-date-number-line-height);
    }

    .container .day .date .text {
        font-size: var(--day-date-text-font-size);
    }

    .container .day .date .text.mobile-only {
        display: none;
    }

    .container .day.header .date .text {
        font-size: var(--day-header-font-size, var(--day-date-text-font-size));
        color: var(--day-header-color, var(--primary-text-color));
        font-weight: bold;
        text-transform: capitalize;
    }

    .container .day.header .date .text-short {
        display: none;
    }

    .container .day .add-event {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.3;
        transition: opacity 0.2s;
        color: var(--primary-text-color);
        --mdc-icon-size: 18px;
        flex-shrink: 0;
        margin: 0;
        padding: 0;
    }

    .container .day .add-event:hover {
        opacity: 0.8;
    }

    /* Event dots (visible only in mobile month view) */
    .container .day .event-dots {
        display: none;
    }

    /* Selected day events panel (visible only in mobile month view) */
    .selected-day-events {
        display: none;
    }

    .container .day .weather {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        flex: 1;
        font-size: var(--weather-temperature-font-size);
        cursor: pointer;
        white-space: nowrap;
    }

    .container .day .weather .icon {
        display: inline-block;
        vertical-align: middle;
        background-size: cover;
        width: var(--weather-icon-size);
        height: var(--weather-icon-size);
    }

    .container .day .weather .icon img {
        max-width: var(--weather-icon-size);
        max-height: var(--weather-icon-size);
    }

    .container .day .weather div.temperature {
        display: inline-block;
        margin: 0 5px 0 0;
        vertical-align: middle;
    }

    .container .day .weather .temperature:has(.high) .low:before {
        content: var(--weather-temperature-separator);
    }

    .container .day .events {
        margin-top: var(--events-margin-top);
    }

    .container .day .events .none,
    .container .day .events .more,
    .container .day .events .event {
        margin-bottom: var(--event-spacing);
        background-color: var(--event-background-color);
        border-radius: var(--event-border-radius);
        font-size: var(--event-font-size);
        line-height: var(--event-line-height);
    }

    .container .day .events .none,
    .container .day .events .more {
        padding: var(--event-padding);
        border-radius: var(--event-border-radius);
    }

    .container .day .events .event {
        display: flex;
        border-left: var(--event-border-width) solid var(--border-color, var(--divider-color, #ffffff));
        cursor: pointer;
    }

    /* ── Multi-day banner events: continuous strip across day columns ── */
    .container .day .events .event.banner {
        position: relative;
        z-index: 1;
    }

    /* Bleed over the column gap and the day border to join the next slice */
    .container .day .events .event.banner-start,
    .container .day .events .event.banner-middle {
        margin-right: calc(-1 * var(--days-spacing) - 1px);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .container .day .events .event.banner-middle,
    .container .day .events .event.banner-end {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left-width: 0 !important;
    }

    /* Slices carrying the label paint above the following empty slices so
       the text can overflow across the band */
    .container .day .events .event.banner-start,
    .container .day .events .event.banner-rowstart {
        z-index: 2;
    }

    .container .day .events .event.banner .inner {
        overflow: visible;
        min-width: 0;
    }

    .container .day .events .event.banner .title {
        white-space: nowrap;
        overflow: visible;
    }

    .container .day .events .event .additionalColor {
        width: var(--event-border-width);
        background-color: var(--event-additional-color);
    }

    .container .day .events .event .icon {
        padding: var(--event-padding);
    }

    .container .day .events .event .inner {
        flex-grow: 1;
        padding: var(--event-padding);
    }

    .container .day .events .event .time {
        color: var(--primary-text-color, #333);
        margin: 0 0 3px 0;
        font-weight: bold;
    }

    .container .day .events .event .location {
        margin: 3px 0 0 0;
        --mdc-icon-size: var(--event-icon-size);
        color: var(--primary-text-color, #333);
    }

    .loader {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 40px;
        height: 40px;
    }

    .loader:after {
        content: " ";
        display: block;
        width: 24px;
        height: 24px;
        margin: 4px;
        border-radius: 50%;
        border: 3px solid var(--primary-text-color);
        border-color: var(--primary-text-color) transparent var(--primary-text-color) transparent;
        animation: loader 1.2s linear infinite;
    }

    ha-dialog .calendar,
    ha-dialog .datetime,
    ha-dialog .location {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }

    ha-dialog .calendar ha-icon,
    ha-dialog .datetime ha-icon,
    ha-dialog .location ha-icon {
        margin-right: 8px;
    }

    ha-dialog .location .info a {
        color: var(--primary-text-color);
    }

    ha-dialog .description {
        border-top: 1px solid var(--primary-text-color);
        margin-top: 16px;
        padding-top: 16px;
    }

    ha-dialog .event-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    ha-dialog .event-actions .btn {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
        --mdc-icon-size: 16px;
    }

    ha-dialog .event-actions .btn-edit {
        background-color: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
    }

    ha-dialog .event-actions .btn-delete {
        background-color: var(--error-color, #db4437);
        color: #fff;
    }

    ha-dialog .event-actions .btn:hover {
        opacity: 0.9;
    }

    .create-event-form {
        padding: 8px 0;
    }

    .create-event-form .form-row {
        margin-bottom: 12px;
    }

    .create-event-form .form-row label {
        display: block;
        margin-bottom: 4px;
        font-size: 0.9em;
        color: var(--secondary-text-color, #aaaaaa);
    }

    .create-event-form .form-input {
        width: 100%;
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        background-color: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 1em;
        box-sizing: border-box;
    }

    .create-event-form .form-input:focus {
        outline: none;
        border-color: var(--primary-color, #03a9f4);
    }

    .create-event-form .location-row {
        position: relative;
    }

    .create-event-form .advanced-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        width: 100%;
        margin: 4px 0 12px;
        padding: 8px 0;
        background: none;
        border: none;
        border-top: 1px solid var(--divider-color, #e0e0e0);
        color: var(--secondary-text-color, #aaaaaa);
        font-size: 0.9em;
        cursor: pointer;
    }

    .create-event-form .advanced-toggle ha-icon {
        --mdc-icon-size: 18px;
    }

    .create-event-form .advanced-toggle:hover {
        color: var(--primary-color, #03a9f4);
    }

    .create-event-form .notify-row .notify-label {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 0;
        cursor: pointer;
        font-size: 1em;
        color: var(--primary-text-color);
    }

    .create-event-form .notify-row input[type="checkbox"] {
        width: 18px;
        height: 18px;
        margin: 0;
        accent-color: var(--primary-color, #03a9f4);
        cursor: pointer;
    }

    .create-event-form .location-suggestions {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 10;
        list-style: none;
        margin: 0;
        padding: 0;
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        max-height: 200px;
        overflow-y: auto;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }

    .create-event-form .location-suggestions li {
        padding: 8px 12px;
        cursor: pointer;
        font-size: 0.85em;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        color: var(--primary-text-color);
    }

    .create-event-form .location-suggestions li:last-child {
        border-bottom: none;
    }

    .create-event-form .location-suggestions li:hover {
        background-color: var(--primary-color, #03a9f4);
        color: #fff;
    }

    .create-event-form .location-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
    }

    .create-event-form .location-input-wrapper .form-input {
        flex: 1;
        padding-right: 44px;
    }
    /* When the Maps shortcut is present, leave room for both it and ✕ */
    .create-event-form .location-input-wrapper.has-maps .form-input {
        padding-right: 80px;
    }
    .create-event-form .location-input-wrapper.has-maps .location-maps-icon {
        right: 44px;
    }

    .create-event-form .location-maps-icon {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        color: var(--primary-color, #03a9f4);
        text-decoration: none;
        cursor: pointer;
        border-radius: 4px;
    }

    .create-event-form .location-maps-icon:hover {
        background: rgba(3, 169, 244, 0.1);
    }

    .create-event-form .location-maps-icon ha-icon {
        --mdc-icon-size: 20px;
    }

    .create-event-form .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 16px;
    }

    .create-event-form .btn {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
    }

    .create-event-form .btn-delete {
        display: flex;
        align-items: center;
        gap: 4px;
        background-color: var(--error-color, #db4437);
        color: #fff;
        margin-right: auto;
        --mdc-icon-size: 16px;
    }

    .create-event-form .btn-delete:hover {
        opacity: 0.9;
    }

    .create-event-form .btn-cancel {
        background-color: transparent;
        color: var(--primary-text-color);
    }

    .create-event-form .btn-submit {
        background-color: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
    }

    .create-event-form .btn-submit:hover {
        opacity: 0.9;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @container weekplanner (width <= 1920px) {
        ha-card .container .day {
            --days-columns: var(--days-columns-lg, 7);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-lg, 7);
        }
    }

    @container weekplanner (width <= 1280px) {
        ha-card .container .day {
            --days-columns: var(--days-columns-md, 5);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-md, 7);
        }
    }

    @container weekplanner (width <= 1024px) {
        ha-card .container .header .legend,
        ha-card .container .header .navigation {
            width: 100%;
        }
        ha-card .container .day {
            --days-columns: var(--days-columns-sm, 3);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-sm, 4);
        }
        /* Hide weekday headers when columns < 7 (makes no sense) */
        ha-card .container .day.header {
            display: none;
        }
        /* Show inline day name as fallback */
        ha-card .container .day .date .text.mobile-only {
            display: inline;
        }
    }

    @container weekplanner (width <= 640px) {
        ha-card .container .day {
            --days-columns: var(--days-columns-xs, 1);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-xs, 2);
        }

        /* Hide weather on small screens */
        ha-card .container .day .weather {
            display: none;
        }

        /* ── Month view: mini-calendar with 7 columns ── */
        ha-card .container.month-view .day {
            --days-columns: 7;
            --days-spacing: 2px;
            min-height: auto;
            padding: 4px 2px;
            align-items: center;
            justify-content: center;
        }
        ha-card .container.month-view .day .events,
        ha-card .container.month-view .day .weather,
        ha-card .container.month-view .day .add-event,
        ha-card .container.month-view .day .day-header .add-event {
            display: none;
        }
        ha-card .container.month-view .day .day-header {
            justify-content: center;
        }
        ha-card .container.month-view .day .date .number {
            font-size: 0.9em;
            line-height: 1.1em;
            text-align: center;
        }
        ha-card .container.month-view .day .date .text {
            display: none;
        }
        /* Re-show weekday headers in month view (7 cols restored) */
        ha-card .container.month-view .day.header {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        ha-card .container.month-view .day.header .date .text {
            display: none;
        }
        ha-card .container.month-view .day.header .date .text-short {
            display: block;
            font-size: 0.7em;
            font-weight: bold;
            text-align: center;
            color: var(--day-header-color, var(--primary-text-color));
        }

        /* ── Event dots in month view ── */
        ha-card .container.month-view .day .event-dots {
            display: flex;
            justify-content: center;
            gap: 2px;
            margin-top: 2px;
        }
        ha-card .container.month-view .day .event-dots .dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            flex-shrink: 0;
        }

        /* ── Day clickable in month view ── */
        ha-card .container.month-view .day:not(.header):not(.outside) {
            cursor: pointer;
        }

        /* ── Selected day highlight ── */
        ha-card .container.month-view .day.selected .date .number {
            background-color: var(--primary-color, #03a9f4);
            color: var(--text-primary-color, #fff);
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 1.6em;
            height: 1.6em;
        }

        /* ── Selected day events panel ── */
        .selected-day-events {
            display: block;
            width: 100%;
            padding: 12px 16px;
            box-sizing: border-box;
            border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        }
        .selected-day-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .selected-day-date {
            font-size: 1.1em;
            font-weight: bold;
            color: var(--primary-text-color);
            text-transform: capitalize;
        }
        .selected-day-events .add-event {
            opacity: 0.5;
        }
        .selected-day-list {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .selected-day-list .none {
            color: var(--secondary-text-color, rgba(0, 0, 0, 0.5));
            font-style: italic;
        }
    }

    /* ── Skylight Responsive ──────────── */

    @media (max-width: 768px) {
        .skylight-header {
            padding: 12px 16px 4px;
        }
        .clock {
            font-size: 2.5em;
        }
        .full-date {
            font-size: 1.1em;
        }
        .controls {
            padding: 6px 16px 8px;
        }
        .calendar-title {
            font-size: 1.3em;
        }
        .filter-btn {
            padding: 4px 10px;
            font-size: 0.8em;
        }
        .view-btn {
            padding: 4px 8px;
            font-size: 0.75em;
        }
        .weather-section ha-icon {
            --mdc-icon-size: 36px;
        }
        .weather-temp {
            font-size: 1.2em;
        }
    }

    @media (max-width: 480px) {
        .skylight-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
        }
        .weather-section {
            flex-direction: row;
            gap: 8px;
        }
        .buttons-row {
            flex-direction: column;
            align-items: flex-start;
        }
        .clock {
            font-size: 2em;
        }

        /* ── Hide Month & Biweek views on mobile ── */
        .view-btn[data-view="month"],
        .view-btn[data-view="biweek"] {
            display: none;
        }

        /* ── Mobile spacing & typography ── */
        ha-card {
            --days-spacing: 6px;
            --day-date-number-font-size: 2em;
            --day-date-number-line-height: 1.1em;
            --day-date-text-font-size: 0.9em;
            --navigation-month-font-size: 1.5em;
            --event-font-size: 0.85em;
            --event-line-height: 1.1em;
            --event-padding: 6px 8px;
            --weather-icon-size: 22px;
            --weather-temperature-font-size: 0.85em;
        }
        ha-card.compact {
            --days-spacing: 3px;
            --day-date-number-font-size: 1.3em;
        }

        /* ── Touch-friendly targets ── */
        .container .navigation ul li {
            padding: 8px;
            --mdc-icon-size: 24px;
        }
        .container .day .add-event {
            width: 36px;
            height: 36px;
            opacity: 0.5;
            --mdc-icon-size: 22px;
        }
        .filter-btn {
            min-height: 36px;
        }
        .view-btn {
            min-height: 36px;
        }

        /* ── Horizontal scroll for filter buttons ── */
        .calendar-filters {
            overflow-x: auto;
            flex-wrap: nowrap;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
        }
        .calendar-filters::-webkit-scrollbar {
            display: none;
        }
    }

    @media (max-width: 360px) {
        ha-card {
            --skylight-radius: 16px;
            --days-spacing: 4px;
            --day-date-number-font-size: 1.8em;
            --navigation-month-font-size: 1.3em;
        }
        .skylight-header {
            padding: 8px 12px 4px;
        }
        .controls {
            padding: 4px 12px 6px;
        }
        .clock {
            font-size: 1.8em;
        }
    }

    /* ── HA theme-adaptive overrides ──────────────── */
    /* Uses HA CSS variables so card adapts to any theme (light or dark) */

    :host {
        --skylight-bg: var(--card-background-color, rgba(255, 255, 255, 0.6));
    }

    .view-btn {
        border-color: var(--divider-color, rgba(0, 0, 0, 0.15));
        color: var(--primary-text-color, #333);
    }

    .filter-btn {
        color: var(--primary-text-color, #333);
    }

    .container .day .events .none,
    .container .day .events .more {
        color: var(--secondary-text-color, rgba(0, 0, 0, 0.5));
    }

    .container .day .events .event .time {
        color: var(--primary-text-color, #333);
        font-weight: bold;
    }

    .container .day .events .event .title {
        color: var(--primary-text-color, #333);
        font-size: 1.15em;
        font-weight: 600;
    }

    .container .day .add-event {
        color: var(--secondary-text-color, rgba(0, 0, 0, 0.3));
    }

    .create-event-form .form-input {
        background-color: var(--primary-background-color, #fff);
        border-color: var(--divider-color, rgba(0, 0, 0, 0.12));
        color: var(--primary-text-color, #333);
    }
    .create-event-form .form-input:focus {
        border-color: var(--skylight-accent);
    }

    .create-event-form .location-suggestions {
        background: var(--card-background-color, #fff);
        border-color: var(--divider-color, rgba(0, 0, 0, 0.12));
    }
    .create-event-form .location-suggestions li {
        border-bottom-color: var(--divider-color, rgba(0, 0, 0, 0.06));
        color: var(--primary-text-color, #333);
    }
    .create-event-form .location-suggestions li:hover {
        background-color: var(--skylight-accent);
        color: #fff;
    }

    ha-dialog .description {
        border-top-color: var(--divider-color, rgba(0, 0, 0, 0.12));
    }
    ha-dialog .event-actions {
        border-top-color: var(--divider-color, rgba(0, 0, 0, 0.12));
    }

    .datetime-row {
        display: flex;
        gap: 8px;
    }
    .datetime-row .form-input {
        flex: 1;
        min-width: 0;
    }

    .recurrence-inline {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .recurrence-number {
        width: 70px !important;
        text-align: center;
    }
    .recurrence-unit {
        font-size: 0.9em;
        color: var(--secondary-text-color, #666);
        white-space: nowrap;
    }
    .day-picker,
    .duration-picker {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }
    .day-btn,
    .duration-btn {
        padding: 6px 10px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.15));
        border-radius: 4px;
        background: transparent;
        color: var(--primary-text-color, #333);
        cursor: pointer;
        font-size: 0.85em;
        font-family: var(--skylight-font);
    }
    .day-btn.active,
    .duration-btn.active {
        background-color: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
        border-color: var(--primary-color, #03a9f4);
    }
    .duration-btn {
        flex: 1;
        min-height: 36px;
        white-space: nowrap;
    }

    /* ══════════════════════════════════════════════════════
       HOME ASSISTANT THEME
       Applied when config.theme === 'homeassistant'.
       Changes: card shell, font, grid layout, buttons, today.
       Does NOT change: skylight header, event cards, dialogs.
       ══════════════════════════════════════════════════════ */

    /* ── Card Shell ── */
    ha-card.theme-homeassistant {
        font-family: var(--ha-card-header-font-family, inherit);
        background: var(--ha-card-background, var(--card-background-color, #fff)) !important;
        border-radius: var(--ha-card-border-radius, 12px) !important;
        box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.1)) !important;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12)) !important;
    }

    ha-card.theme-homeassistant.nobackground {
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
    }

    /* ── Skylight Header keeps Ovo font ── */
    ha-card.theme-homeassistant .skylight-header {
        font-family: var(--skylight-font);
    }
    ha-card.theme-homeassistant .clock {
        font-family: var(--skylight-font);
    }

    /* ── Calendar Title ── */
    ha-card.theme-homeassistant .calendar-title {
        font-family: var(--ha-card-header-font-family, inherit);
    }

    /* ── Filter Buttons ── */
    ha-card.theme-homeassistant .filter-btn {
        font-family: var(--ha-card-header-font-family, inherit);
        border-radius: 8px;
        padding: 6px 12px;
        border-width: 1px;
        font-size: 0.85em;
    }

    /* ── View Selector: Segmented Icon Buttons ── */
    ha-card.theme-homeassistant .view-selector {
        display: flex;
        gap: 0;
        background: var(--primary-background-color, #f0f0f0);
        border-radius: 10px;
        padding: 3px;
    }
    ha-card.theme-homeassistant .view-btn {
        font-family: var(--ha-card-header-font-family, inherit);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 8px;
        background: transparent;
        color: var(--primary-text-color, #333);
        padding: 6px 10px;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
    }
    ha-card.theme-homeassistant .view-btn:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    }
    ha-card.theme-homeassistant .view-btn.active {
        background: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
    }
    /* Show icons, hide text labels */
    ha-card.theme-homeassistant .view-btn .view-icon {
        display: inline-flex;
        --mdc-icon-size: 20px;
    }
    ha-card.theme-homeassistant .view-btn .view-label {
        display: none;
    }

    /* ── Calendar Grid: Table Style with full grid lines ── */
    ha-card.theme-homeassistant .container {
        --days-spacing: 0px;
        gap: 0;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-left: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    }
    ha-card.theme-homeassistant .container .day {
        border-right: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-left: none;
        border-top: none;
        padding: 4px 6px;
        margin: 0;
        min-height: 80px;
    }

    /* ── Day Header Row (Mon, Tue...) ── */
    ha-card.theme-homeassistant .container .day.header {
        background: var(--primary-background-color, #f5f5f5);
        border-bottom: 2px solid var(--divider-color, rgba(0, 0, 0, 0.15));
        padding: 6px 4px;
        min-height: auto;
    }
    ha-card.theme-homeassistant .container .day.header .date .text {
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--day-header-font-size, 0.85em);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    /* ── Day Number ── */
    ha-card.theme-homeassistant .container .day .date .number {
        font-family: var(--ha-card-header-font-family, inherit);
    }

    /* ── Today Highlight: use HA primary color ── */
    ha-card.theme-homeassistant .container .day.today .date .number {
        background-color: var(--primary-color, #03a9f4);
        border-radius: 6px;
    }

    /* ── Navigation ── */
    ha-card.theme-homeassistant .container .navigation .month {
        font-family: var(--ha-card-header-font-family, inherit);
    }

    /* ── Day Picker / Duration Buttons ── */
    ha-card.theme-homeassistant .day-btn,
    ha-card.theme-homeassistant .duration-btn {
        font-family: var(--ha-card-header-font-family, inherit);
        border-radius: 4px;
    }

    /* ── Responsive: hide day headers at small widths (HA theme) ── */
    @container weekplanner (width <= 1024px) {
        ha-card.theme-homeassistant .container .day.header {
            display: none;
        }
    }
    @container weekplanner (width <= 640px) {
        ha-card.theme-homeassistant .container.month-view .day.header {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    /* ── Clearable text input (tap the ✕ to empty the field) ── */
    .create-event-form .input-clear-wrapper {
        position: relative;
        display: flex;
        align-items: center;
    }
    .create-event-form .input-clear-wrapper .form-input {
        flex: 1;
        padding-right: 44px;
    }
    .create-event-form .input-clear {
        position: absolute;
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        padding: 0;
        border: none;
        background: none;
        color: var(--secondary-text-color, #888);
        cursor: pointer;
        border-radius: 50%;
        --mdc-icon-size: 22px;
    }
    .create-event-form .input-clear:hover {
        background: var(--divider-color, rgba(0,0,0,0.08));
        color: var(--primary-text-color);
    }

    /* ── Leading field icon (replaces the text label on the main fields) ── */
    .create-event-form .field-icon {
        color: var(--secondary-text-color, #888);
        --mdc-icon-size: 22px;
        flex-shrink: 0;
    }
    .create-event-form .with-icon {
        position: relative;
    }
    .create-event-form .with-icon > .field-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
    }
    .create-event-form .with-icon .form-input {
        padding-left: 40px;
    }
    .create-event-form .field-row-icon {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .create-event-form .field-row-icon .duration-picker {
        flex: 1;
    }

    /* ── Touch devices: taller form inputs for comfortable pen
       handwriting directly in the fields (Windows Ink) ── */
    @media (any-pointer: coarse) {
        .create-event-form .form-input {
            min-height: 52px;
            font-size: 1.05em;
        }
        .create-event-form .field-icon {
            --mdc-icon-size: 26px;
        }
        .create-event-form .with-icon .form-input {
            padding-left: 46px;
        }
        .create-event-form .with-icon > .field-icon {
            left: 12px;
        }
        /* Text fields you handwrite into need extra vertical room */
        .create-event-form input[type="text"].form-input {
            min-height: 68px;
            font-size: 1.2em;
        }
        .create-event-form .input-clear {
            width: 44px;
            height: 44px;
            --mdc-icon-size: 26px;
        }
        .create-event-form .input-clear-wrapper .form-input {
            padding-right: 52px;
        }
        .create-event-form .duration-btn {
            min-height: 48px;
        }
    }

    /* ── Small touch screens (phones): hide navigation arrows, swipe
       replaces them. Larger touch devices (Windows tablets, wall-mounted
       displays) keep the arrows alongside swipe/pen navigation. ── */
    @media (any-pointer: coarse) and (max-width: 768px) {
        .container .navigation ul li:first-child,
        .container .navigation ul li:last-child {
            display: none;
        }
    }
`;
