import tippy, { delegate, hideAll } from "tippy.js";
import type {
  Placement,
  Instance as TippyInstance,
  Props as TippyProps,
} from "tippy.js";

import "./style.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/shift-toward-extreme.css";

/* Types */

interface Shortcut {
  selector: string;
  keys: string;
  comment: string;
  placement?: Placement | "inside";
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
    delay: [500, null],
    ignoreAttributes: true,
    allowHTML: true,
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
    if (shortcut.placement === "inside") continue;
    const tippy_config = {
      ...tippy_config_for_shortcut(shortcut),
      target: shortcut.selector,
    };
    delegate("body", tippy_config);
  }
}

function feature_overlay_info(): void {
  if (is_same_domain(document.referrer, document.location.href)) return;

  const text = "Press & hold <b>alt</b> to see the available shortcuts";
  const tippy_instance = create_window_tootlitp(text);

  tippy_instance.show();
  setTimeout(tippy_instance.hide, 2000);
}

function feature_overlay(shortcuts: ShortcutsList): void {
  let keydown = false; // onkeydown fires multiple times
  add_document_event_listener("keydown", (event: KeyboardEvent) => {
    if (keydown || event.key != "Alt") return;
    keydown = true;
    show_overlay();
  });

  add_document_event_listener("keyup", () => {
    keydown = false;
    hideAll();
  });

  function show_overlay(): void {
    // TODO: Replace this with something that gives accurate information
    // show_esc_tooltip_if_needed();
    for (const shortcut of shortcuts) {
      const elements = elements_for_shortcut(shortcut);
      const element = elements[elements.length - 1]; // Take the last one because it usually give better positionning

      if (!element) {
        continue;
      } else if (!is_element_on_top(element)) {
        continue;
      } else if (element._tippy) {
        element._tippy.show();
      } else {
        const tippy_config = {
          ...tippy_config_for_shortcut(shortcut),
          showOnCreate: true,
        };
        tippy(element, tippy_config);
      }
    }
  }

  // const esc_text = "Press <b>esc</b> to leave this text zone";
  // const esc_tippy_instance = create_window_tootlitp(esc_text);

  // function show_esc_tooltip_if_needed(): void {
  //   if (!document.body.classList.contains("lts-typing")) return;
  //   esc_tippy_instance.show();
  // }
}

function feature_grey_disabled_shortcuts(): void {
  add_document_event_listener("focusin", on_focus_change);
  add_document_event_listener("focusout", on_focus_change);
  add_document_event_listener("keypress", (event: KeyboardEvent) => {
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
    theme: themes.join(" "),
    ...tippy_config_for_placement(shortcut),
  };
}

function tippy_config_for_placement(shortcut: Shortcut): Partial<TippyProps> {
  if (shortcut.placement !== "inside") {
    return { placement: shortcut.placement || "top" };
  } else {
    return {
      placement: "top",
      trigger: "manual", // do not show inside shortcuts on mouseover
      arrow: false,
      offset: ({ popper, reference }): [number, number] => {
        const y = -(reference.height + popper.height) / 2;
        return [0, y];
      },
    };
  }
}

function elements_for_shortcut(shortcut: Shortcut): NodeListOf<TippyElement> {
  return document.querySelectorAll(shortcut.selector);
}

function is_element_on_top(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  const x = rect.x + rect.width / 2;
  const y = rect.y + rect.height / 2;
  const element_on_top = document.elementFromPoint(x, y);
  return element.contains(element_on_top);
}

function add_document_event_listener(
  type: string,
  callback: EventListenerOrEventListenerObject
): void {
  document.addEventListener(type, callback, { capture: true, passive: true });
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
    // HACK : did not find proper solution to show tooltip *inside* element
    getReferenceClientRect: () => ({
      width: window.innerWidth,
      height: window.innerHeight - 60,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }),
    popperOptions: { strategy: "fixed" },
  });
}

function is_same_domain(url1: string, url2: string): boolean {
  return url1.split("/")[2] === url2.split("/")[2];
}

export { init_lts };
