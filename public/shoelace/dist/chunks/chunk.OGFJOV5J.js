import {
  l as l2
} from "./chunk.PDRHYLLG.js";
import {
  l
} from "./chunk.SJSINRNQ.js";
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
  emit
} from "./chunk.I4TE3TJV.js";
import {
  component_styles_default
} from "./chunk.G466JWVF.js";
import {
  e,
  i,
  n as n2,
  t
} from "./chunk.L2RLCVJQ.js";
import {
  n,
  r,
  y
} from "./chunk.X3WLUTHF.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// src/components/switch/switch.styles.ts
var switch_styles_default = r`
  ${component_styles_default}

  :host {
    --height: var(--sl-toggle-size);
    --thumb-size: calc(var(--sl-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: rgb(var(--sl-input-color));
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: rgb(var(--sl-color-neutral-400));
    border: solid var(--sl-input-border-width) rgb(var(--sl-color-neutral-400));
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: rgb(var(--sl-color-neutral-0));
    border-radius: 50%;
    border: solid var(--sl-input-border-width) rgb(var(--sl-color-neutral-400));
    transform: translateX(calc((var(--width) - var(--height)) / -2));
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: rgb(var(--sl-color-neutral-400));
    border-color: rgb(var(--sl-color-neutral-400));
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: rgb(var(--sl-color-neutral-0));
    border-color: rgb(var(--sl-color-neutral-400));
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input${focusVisibleSelector} ~ .switch__control {
    background-color: rgb(var(--sl-color-neutral-400));
    border-color: rgb(var(--sl-color-neutral-400));
  }

  .switch:not(.switch--checked):not(.switch--disabled)
    .switch__input${focusVisibleSelector}
    ~ .switch__control
    .switch__thumb {
    background-color: rgb(var(--sl-color-neutral-0));
    border-color: rgb(var(--sl-color-primary-600));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: rgb(var(--sl-color-neutral-0));
    border-color: rgb(var(--sl-color-primary-600));
    transform: translateX(calc((var(--width) - var(--height)) / 2));
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: rgb(var(--sl-color-neutral-0));
    border-color: rgb(var(--sl-color-primary-600));
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input${focusVisibleSelector} ~ .switch__control {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
  }

  .switch.switch--checked:not(.switch--disabled)
    .switch__input${focusVisibleSelector}
    ~ .switch__control
    .switch__thumb {
    background-color: rgb(var(--sl-color-neutral-0));
    border-color: rgb(var(--sl-color-primary-600));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    line-height: var(--height);
    margin-left: 0.5em;
    user-select: none;
  }
`;

// src/components/switch/switch.ts
var id = 0;
var SlSwitch = class extends n {
  constructor() {
    super(...arguments);
    this.switchId = `switch-${++id}`;
    this.labelId = `switch-label-${id}`;
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.invalid = false;
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }
  click() {
    this.input.click();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "sl-blur");
  }
  handleCheckedChange() {
    if (this.input) {
      this.input.checked = this.checked;
      this.invalid = !this.input.checkValidity();
    }
  }
  handleClick() {
    this.checked = !this.checked;
    emit(this, "sl-change");
  }
  handleDisabledChange() {
    if (this.input) {
      this.input.disabled = this.disabled;
      this.invalid = !this.input.checkValidity();
    }
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "sl-focus");
  }
  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      emit(this, "sl-change");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      emit(this, "sl-change");
    }
  }
  render() {
    return y`
      <label
        part="base"
        for=${this.switchId}
        class=${o({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus
    })}
      >
        <input
          id=${this.switchId}
          class="switch__input"
          type="checkbox"
          name=${l(this.name)}
          value=${l(this.value)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked ? "true" : "false"}
          aria-labelledby=${this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <span part="label" id=${this.labelId} class="switch__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
SlSwitch.styles = switch_styles_default;
__decorateClass([
  i('input[type="checkbox"]')
], SlSwitch.prototype, "input", 2);
__decorateClass([
  t()
], SlSwitch.prototype, "hasFocus", 2);
__decorateClass([
  e()
], SlSwitch.prototype, "name", 2);
__decorateClass([
  e()
], SlSwitch.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlSwitch.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlSwitch.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlSwitch.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlSwitch.prototype, "invalid", 2);
__decorateClass([
  watch("checked")
], SlSwitch.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], SlSwitch.prototype, "handleDisabledChange", 1);
SlSwitch = __decorateClass([
  n2("sl-switch")
], SlSwitch);
var switch_default = SlSwitch;

export {
  switch_default
};
