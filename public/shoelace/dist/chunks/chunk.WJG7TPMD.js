import {
  i
} from "./chunk.LYXFR7WN.js";
import {
  l
} from "./chunk.SJSINRNQ.js";
import {
  o
} from "./chunk.JTSEMIY7.js";
import {
  component_styles_default
} from "./chunk.G466JWVF.js";
import {
  e,
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

// src/components/progress-bar/progress-bar.styles.ts
var progress_bar_styles_default = r`
  ${component_styles_default}

  :host {
    --height: 1rem;
    --track-color: rgb(var(--sl-color-neutral-500) / 20%);
    --indicator-color: rgb(var(--sl-color-primary-600));
    --label-color: rgb(var(--sl-color-neutral-0));

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }
`;

// src/components/progress-bar/progress-bar.ts
var SlProgressBar = class extends n {
  constructor() {
    super(...arguments);
    this.value = 0;
    this.indeterminate = false;
    this.label = "Progress";
  }
  render() {
    return y`
      <div
        part="base"
        class=${o({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate
    })}
        role="progressbar"
        title=${l(this.title)}
        aria-label=${l(this.label)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${i({ width: this.value + "%" })}>
          ${!this.indeterminate ? y`
                <span part="label" class="progress-bar__label">
                  <slot>${this.label}</slot>
                </span>
              ` : ""}
        </div>
      </div>
    `;
  }
};
SlProgressBar.styles = progress_bar_styles_default;
__decorateClass([
  e({ type: Number, reflect: true })
], SlProgressBar.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  e()
], SlProgressBar.prototype, "label", 2);
SlProgressBar = __decorateClass([
  n2("sl-progress-bar")
], SlProgressBar);
var progress_bar_default = SlProgressBar;

export {
  progress_bar_default
};
