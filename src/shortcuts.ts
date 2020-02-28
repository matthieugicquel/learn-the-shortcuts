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
type ShortcutsList = Array<Shortcut>;

type TippyElement = Element & { _tippy: Instance };

/* Shared config and init */
function init_lts(shortcuts: ShortcutsList): void {
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

  adapt_shortcuts_to_os(shortcuts);

  feature_show_tooltips_on_hover(shortcuts);
  feature_overlay_info();
  feature_shortcuts_overlay(shortcuts);
}

// Has side-effects
function adapt_shortcuts_to_os(shortcuts: ShortcutsList): void {
  const os_key = window.navigator.platform.includes("Mac") ? "⌘" : "ctrl";

  for (let i = 0; i < shortcuts.length; i++) {
    const keys = shortcuts[i].keys;
    if (keys.includes("meta")) {
      shortcuts[i].keys = keys.replace("meta", os_key);
    }
  }
}

/* Features */

function feature_show_tooltips_on_hover(shortcuts: ShortcutsList): void {
  for (const shortcut of shortcuts) {
    const tippy_config = {
      target: shortcut.selector,
      content: shortcut.keys,
      placement: shortcut.placement || "top",
      multiple: true,
      delay: 300 // Delay prevents showing tooltip when just passing through target
    };
    delegate("body", tippy_config);
  }
}

function feature_overlay_info(): void {
  const text = "Press & hold <b>alt</b> to see the available shortcuts";
  const tippy_instance = create_window_tootlitp(text);

  tippy_instance.show();
  setTimeout(() => tippy_instance.hide(2000), 2000);
}

function feature_shortcuts_overlay(shortcuts: ShortcutsList): void {
  let keydown = false; // onkeydown fires multiple times

  const esc_text = "Press <b>esc</b> to leave this text zone";
  const esc_tippy_instance = create_window_tootlitp(esc_text);

  document.addEventListener("keydown", event => {
    if (keydown) return;
    if (event.key != "Alt") return;
    keydown = true;

    const text_zone_selector = 'input, textarea, [contenteditable="true"]';
    if (document.activeElement.matches(text_zone_selector)) {
      esc_tippy_instance.show();
    }

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

/* Internal functions */

function create_window_tootlitp(content: string): Instance {
  return tippy(document.body, {
    content: content,
    arrow: false,
    animation: "shift-toward-extreme",
    placement: "bottom",
    trigger: "manual",
    theme: "overlayinfo",
    multiple: true
  });
}

export { init_lts };
