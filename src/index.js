import { SkylightFamilyCalendarCard } from './card';
import { SkylightFamilyCalendarCardEditor } from "./editor";
import { version } from '../package.json';

customElements.define(
    'skylight-family-calendar-card',
    SkylightFamilyCalendarCard
);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'skylight-family-calendar-card',
    name: 'Skylight Family Calendar Card',
    description: 'A Skylight-inspired family calendar card with weather, event management, and touchscreen-friendly UI.',
    // Adds a help link in the frontend card editor.
    documentationURL: 'https://github.com/tienou/ha-skylight-family-calendar-card',
    // Suggest this card when the user picks a calendar.* entity in the card picker.
    getEntitySuggestion: (hass, entityId) => {
        if (entityId.split('.')[0] !== 'calendar') {
            return null;
        }
        return {
            config: {
                type: 'custom:skylight-family-calendar-card',
                calendars: [{ entity: entityId }],
            },
        };
    },
});

customElements.define(
    'skylight-family-calendar-card-editor',
    SkylightFamilyCalendarCardEditor
);

console.info(
    `%c SKYLIGHT-FAMILY-CALENDAR %c v${version} `,
    'color: white; background: #4A90E2; font-weight: 700;',
    'color: #4A90E2; background: white; font-weight: 700;',
);
