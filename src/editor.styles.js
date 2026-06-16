import { css } from 'lit';

export default css`
    ha-textfield,
    ha-select,
    ha-formfield,
    ha-expansion-panel,
    ha-button,
    ha-entity-picker,
    ha-icon-picker {
      margin: 8px 0;
    }

    .sk-field {
      display: flex;
      flex-direction: column;
      margin: 8px 0;
    }
    .sk-label {
      font-size: 0.8em;
      color: var(--secondary-text-color, #888);
      margin-bottom: 4px;
    }
    .sk-input {
      width: 100%;
      box-sizing: border-box;
      min-height: 42px;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #212121);
      font-size: 1em;
      font-family: inherit;
    }
    .sk-input:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }

    .sk-swatches {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .sk-swatch {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2px solid transparent;
      padding: 0;
      cursor: pointer;
      box-shadow: 0 0 0 1px var(--divider-color, rgba(0, 0, 0, 0.2));
      transition: transform 0.1s ease;
    }
    .sk-swatch:hover {
      transform: scale(1.12);
    }
    .sk-swatch.selected {
      box-shadow: 0 0 0 2px var(--card-background-color, #fff),
        0 0 0 4px var(--primary-color, #03a9f4);
    }
    .sk-swatch-auto {
      background: var(--card-background-color, #fff);
      color: var(--secondary-text-color, #888);
      font-size: 0.8em;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .sk-emoji-swatch {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      font-size: 1.25em;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .sk-day-picker {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .sk-day-btn {
      min-width: 40px;
      padding: 6px 8px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #333);
      cursor: pointer;
      font-size: 0.85em;
    }
    .sk-day-btn.selected {
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color, #03a9f4);
    }
`;
