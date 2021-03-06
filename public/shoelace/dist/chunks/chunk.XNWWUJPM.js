import {
  dialog_default
} from "./chunk.S437OBPC.js";

// src/react/dialog/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var dialog_default2 = createComponent(React, "sl-dialog", dialog_default, {
  onSlShow: "sl-show",
  onSlAfterShow: "sl-after-show",
  onSlHide: "sl-hide",
  onSlAfterHide: "sl-after-hide",
  onSlInitialFocus: "sl-initial-focus",
  onSlRequestClose: "sl-request-close"
});

export {
  dialog_default2 as dialog_default
};
