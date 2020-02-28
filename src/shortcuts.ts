import tippy, { delegate, hideAll } from "tippy.js";
import {
  Placement,
  Instance as TippyInstance,
  Props as TippyProps
} from "tippy.js";

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

type TippyElement = Element & { _tippy: TippyInstance };

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
    ignoreAttributes: true,
    multiple: true
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
      ...tippy_config_for_shortcut(shortcut),
      target: shortcut.selector,
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
    if (keydown || event.key != "Alt") return;
    keydown = true;
    show_overlay();
  });

  document.addEventListener("keyup", () => {
    keydown = false;
    hideAll();
  });

  function show_overlay(): void {
    show_esc_tooltip_if_needed();
    for (const shortcut of shortcuts) {
      const elements = get_elements_for_shortcut(shortcut);
      const element = elements[elements.length - 1]; // Take the last one because it usually give better positionning

      if (!element) {
        continue;
      } else if (element._tippy) {
        element._tippy.show();
      } else {
        const tippy_config = {
          ...tippy_config_for_shortcut(shortcut),
          showOnCreate: true,
          trigger: "manual"
        };
        tippy(element, tippy_config);
      }
    }
  }

  function show_esc_tooltip_if_needed(): void {
    const text_zone_selector = 'input, textarea, [contenteditable="true"]';
    if (document.activeElement.matches(text_zone_selector)) {
      esc_tippy_instance.show();
    }
  }
}

/* Internal functions */

function tippy_config_for_shortcut(shortcut: Shortcut): Partial<TippyProps> {
  return {
    content: shortcut.keys,
    placement: shortcut.placement || "top"
  };
}

function get_elements_for_shortcut(
  shortcut: Shortcut
): NodeListOf<TippyElement> {
  return document.querySelectorAll(shortcut.selector);
}

function create_window_tootlitp(content: string): TippyInstance {
  return tippy(document.body, {
    content: content,
    arrow: false,
    animation: "shift-toward-extreme",
    placement: "bottom",
    trigger: "manual",
    theme: "overlayinfo"
  });
}

export { init_lts };
