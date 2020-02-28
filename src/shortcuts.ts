import tippy, { delegate, hideAll, Placement, Instance } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/shift-toward-extreme.css";

export interface Shortcut {
  selector: string;
  keys: string;
  comment: string;
  placement?: Placement;
}

type TippyElement = Element & { _tippy: Instance };

/* Shared config and init */
function init_lts(shortcuts_list: Array<Shortcut>): void {
  tippy.setDefaultProps({
    // Appearance
    theme: "red",
    flip: false,
    animation: "shift-away",

    // Technical
    trigger: "mouseenter", // With the default you see the shortcut when you use it
    appendTo: document.body,
    boundary: "viewport",
    ignoreAttributes: true
  });

  adapt_shortcuts_to_os(shortcuts_list);

  feature_show_tooltips_on_hover(shortcuts_list);
  feature_overlay_info();
  feature_shortcuts_overlay(shortcuts_list);
}

// Has side-effects
function adapt_shortcuts_to_os(shortcuts_list: Array<Shortcut>): void {
  const os_key = window.navigator.platform.includes("Mac") ? "⌘" : "ctrl";

  for (let i = 0; i < shortcuts_list.length; i++) {
    const keys = shortcuts_list[i].keys;
    if (keys.includes("meta")) {
      shortcuts_list[i].keys = keys.replace("meta", os_key);
    }
  }
}

/* Features */

function feature_show_tooltips_on_hover(shortcuts: Array<Shortcut>): void {
  for (const shortcut of shortcuts) {
    const tippy_config = {
      target: shortcut.selector,
      content: shortcut.keys,
      placement: shortcut.placement || "top",
      multiple: true,
      onShow(): void {
        document.dispatchEvent(new CustomEvent("tooltipshow"));
      }
    };
    delegate("body", tippy_config);
  }
}

function feature_overlay_info(): void {
  const tippy_instance = tippy(document.body, {
    content: "Press & hold <b>alt</b> to see the available shortcuts",
    arrow: false,
    animation: "shift-toward-extreme",
    placement: "bottom",
    trigger: "manual",
    theme: "overlayinfo",
    multiple: true
  });

  // Auto show with any other tooltip
  let timer = null;
  document.addEventListener("tooltipshow", () => {
    if (!tippy_instance.state.isShown) tippy_instance.show();
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      tippy_instance.hide();
      timer = null;
    }, 2000);
  });
}

function feature_shortcuts_overlay(shortcuts: Array<Shortcut>): void {
  let keydown = false; // onkeydown fires multiple times

  document.addEventListener("keydown", event => {
    if (keydown) return;
    if (event.key != "Alt") return;
    keydown = true;
    document.dispatchEvent(new CustomEvent("tooltipshow"));

    for (const shortcut of shortcuts) {
      const elements: NodeListOf<TippyElement> = document.querySelectorAll(
        shortcut.selector
      );
      const element = elements[elements.length - 1];
      if (!element) continue;
      if (element && element._tippy) {
        element._tippy.show();
      } else {
        const tippy_config = {
          content: shortcut.keys,
          placement: shortcut.placement || "top",
          showOnCreate: true,
          trigger: "manual"
        };
        tippy(element, tippy_config);
      }
    }
  });

  document.addEventListener("keyup", () => {
    keydown = false;
    hideAll();
  });
}

export { init_lts };
