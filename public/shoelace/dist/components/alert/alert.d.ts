import { LitElement } from 'lit';
import '../icon-button/icon-button';
export default class SlAlert extends LitElement {
    static styles: import("lit").CSSResult;
    private autoHideTimeout;
    base: HTMLElement;
    open: boolean;
    closable: boolean;
    type: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    duration: number;
    firstUpdated(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    toast(): Promise<void>;
    restartAutoHide(): void;
    handleCloseClick(): void;
    handleMouseMove(): void;
    handleOpenChange(): Promise<void>;
    handleDurationChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-alert': SlAlert;
    }
}
