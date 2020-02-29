import tippy, { delegate, hideAll } from "tippy.js";
import {
  Placement,
  Instance as TippyInstance,
  Props as TippyProps
} from "tippy.js";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/shift-toward-extreme.css";

/* Types */

interface Shortcut {
  selector: string;
  keys: string;
  comment: string;
  placement?: Placement;
  usable?: "always" | "whenTyping" | "whenNotTyping";
}
type ShortcutsList = Array<Shortcut>;
type TippyElement = Element & { _tippy: TippyInstance };

/* Shared config and init */

function init_lts(shortcuts: ShortcutsList): void {
  configure_tippy();
  set_default_usable_values(shortcuts);
  adapt_shortcuts_to_os(shortcuts);

  feature_overlay_info();
  feature_overlay(shortcuts);
  feature_show_tooltips_on_hover(shortcuts);
  feature_grey_disabled_shortcuts();
}

function configure_tippy(): void {
  tippy.setDefaultProps({
    theme: "red",
    animation: "shift-away",
    trigger: "mouseenter",
    ignoreAttributes: true,
    allowHTML: true
  });
}

function set_default_usable_values(shortcuts: ShortcutsList): void {
  for (const shortcut of shortcuts) {
    if (shortcut.usable) continue;
    const keys = shortcut.keys;
    if (
      !keys.includes("meta") &&
      !keys.includes("ctrl") &&
      !keys.includes("esc")
    )
      shortcut.usable = "whenNotTyping";
  }
}

function adapt_shortcuts_to_os(shortcuts: ShortcutsList): void {
  const os_key = window.navigator.platform.includes("Mac") ? "⌘" : "ctrl";
  for (const shortcut of shortcuts) {
    if (!shortcut.keys.includes("meta")) continue;
    shortcut.keys = shortcut.keys.replace("meta", os_key);
  }
}

/* Features */

function feature_show_tooltips_on_hover(shortcuts: ShortcutsList): void {
  for (const shortcut of shortcuts) {
    const tippy_config = {
      ...tippy_config_for_shortcut(shortcut),
      target: shortcut.selector
    };
    delegate("body", tippy_config);
  }
}

function feature_overlay_info(): void {
  const text = "Press & hold <b>alt</b> to see the available shortcuts";
  const tippy_instance = create_window_tootlitp(text);

  tippy_instance.show();
  setTimeout(tippy_instance.hide, 2000);
}

function feature_overlay(shortcuts: ShortcutsList): void {
  let keydown = false; // onkeydown fires multiple times

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
      const elements = elements_for_shortcut(shortcut);
      const element = elements[elements.length - 1]; // Take the last one because it usually give better positionning

      if (!element) {
        continue;
      } else if (element._tippy) {
        element._tippy.show();
      } else {
        const tippy_config = {
          ...tippy_config_for_shortcut(shortcut),
          showOnCreate: true
        };
        tippy(element, tippy_config);
      }
    }
  }

  const esc_text = "Press <b>esc</b> to leave this text zone";
  const esc_tippy_instance = create_window_tootlitp(esc_text);
  const text_zone_selector = 'input, textarea, [contenteditable="true"]';

  function show_esc_tooltip_if_needed(): void {
    if (!document.activeElement.matches(text_zone_selector)) return;
    esc_tippy_instance.show();
  }
}

function feature_grey_disabled_shortcuts(): void {
  document.addEventListener("focusin", on_focus_change);
  document.addEventListener("focusout", on_focus_change);
  document.addEventListener("keypress", event => {
    if (event.key === "Escape") on_focus_change();
  });

  function on_focus_change(): void {
    const text_zone_selector = 'input, textarea, [contenteditable="true"]';
    const focused_element = document.activeElement;
    if (focused_element.matches(text_zone_selector)) {
      document.body.classList.add("lts-typing");
    } else document.body.classList.remove("lts-typing");
  }
}

/* Internal functions */

function tippy_config_for_shortcut(shortcut: Shortcut): Partial<TippyProps> {
  const themes = ["red"];
  if (shortcut.usable === "whenNotTyping") themes.push("disable-when-typing");
  if (shortcut.usable === "whenTyping") themes.push("disable-when-not-typing");

  return {
    content: shortcut.keys,
    placement: shortcut.placement || "top",
    theme: themes.join(" ")
  };
}

function elements_for_shortcut(shortcut: Shortcut): NodeListOf<TippyElement> {
  return document.querySelectorAll(shortcut.selector);
}

function create_window_tootlitp(content: string): TippyInstance {
  return tippy(document.body, {
    content: content,
    theme: "window",
    animation: "shift-toward-extreme",
    arrow: false,
    duration: [300, 1500],
    placement: "bottom",
    trigger: "manual",
    offset: [0, -50] // HACK : did not find proper solution to show tooltip *inside* element
  });
}

export { init_lts };
