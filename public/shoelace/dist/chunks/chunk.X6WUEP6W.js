import {
  focusVisibleSelector
} from "./chunk.YTV73MAM.js";
import {
  o
} from "./chunk.JTSEMIY7.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  component_styles_default
} from "./chunk.G466JWVF.js";
import {
  e,
  i,
  n as n2
} from "./chunk.L2RLCVJQ.js";
import {
  n,
  r,
  y
} from "./chunk.X3WLUTHF.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// src/components/menu-item/menu-item.styles.ts
var menu_item_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    text-align: left;
    color: rgb(var(--sl-color-neutral-700));
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: rgb(var(--sl-color-neutral-400));
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-right: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-left: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${focusVisibleSelector}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .menu-item .menu-item__check {
    display: flex;
    position: absolute;
    left: 0.5em;
    top: calc(50% - 0.5em);
    visibility: hidden;
    align-items: center;
    font-size: inherit;
  }

  .menu-item--checked .menu-item__check {
    visibility: visible;
  }
`;

// src/components/menu-item/menu-item.ts
var SlMenuItem = class extends n {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.value = "";
    this.disabled = false;
  }
  firstUpdated() {
    this.setAttribute("role", "menuitem");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", String(this.checked));
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", String(this.disabled));
  }
  render() {
    return y`
      <div
        part="base"
        class=${o({
      "menu-item": true,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled
    })}
      >
        <sl-icon
          part="checked-icon"
          class="menu-item__check"
          name="check"
          library="system"
          aria-hidden="true"
        ></sl-icon>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `;
  }
};
SlMenuItem.styles = menu_item_styles_default;
__decorateClass([
  i(".menu-item")
], SlMenuItem.prototype, "menuItem", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "checked", 2);
__decorateClass([
  e()
], SlMenuItem.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], SlMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], SlMenuItem.prototype, "handleDisabledChange", 1);
SlMenuItem = __decorateClass([
  n2("sl-menu-item")
], SlMenuItem);
var menu_item_default = SlMenuItem;

export {
  menu_item_default
};
