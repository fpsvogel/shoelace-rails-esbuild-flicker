import { LitElement } from 'lit';
export default class SlFormatNumber extends LitElement {
    value: number;
    locale: string;
    type: 'currency' | 'decimal' | 'percent';
    noGrouping: boolean;
    currency: string;
    currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name';
    minimumIntegerDigits: number;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
    minimumSignificantDigits: number;
    maximumSignificantDigits: number;
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-format-number': SlFormatNumber;
    }
}
