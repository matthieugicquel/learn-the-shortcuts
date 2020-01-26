import tippy, { delegate, hideAll } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/shift-toward-extreme.css";

/* Shared config and init */
function init_lts(shortcuts_list) {
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

  feature_show_tooltips_on_hover(shortcuts_list);
  feature_overlay_info();
  feature_shortcuts_overlay(shortcuts_list);
  // NOT READY feature_block_clicks();
}

/* Features */

function feature_show_tooltips_on_hover(shortcuts) {
  for (const shortcut_item of shortcuts) {
    const tippy_config = {
      target: shortcut_item.selector,
      content: shortcut_item.shortcut,
      placement: shortcut_item.placement || "top",
      multiple: true,
      onShow() {
        document.dispatchEvent(new CustomEvent("tooltipshow"));
      }
    };
    delegate("body", tippy_config);
  }
}

function feature_overlay_info() {
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
  let timer = false;
  document.addEventListener("tooltipshow", event => {
    if (!tippy_instance.state.isShown) tippy_instance.show();
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      tippy_instance.hide();
      timer = false;
    }, 2000);
  });
}

function feature_shortcuts_overlay(shortcuts) {
  let keydown = false; // onkeydown fires multiple times

  document.addEventListener("keydown", event => {
    if (keydown) return;
    if (event.key != "Alt") return;
    keydown = true;
    document.dispatchEvent(new CustomEvent("tooltipshow"));

    for (const shortcut_item of shortcuts) {
      const elements = document.querySelectorAll(shortcut_item.selector);
      const element = elements[elements.length - 1];
      if (!element) continue;
      if (element && element._tippy) {
        element._tippy.show();
      } else {
        const tippy_config = {
          content: shortcut_item.shortcut,
          placement: shortcut_item.placement || "top",
          showOnCreate: true,
          trigger: "manual"
        };
        const instance = tippy(element, tippy_config);
      }
    }
  });

  document.addEventListener("keyup", event => {
    keydown = false;
    hideAll();
  });
}

// function feature_block_clicks() {
//   function generate_stylesheet() {
//     const style_element = document.createElement("style");
//     document.head.appendChild(style_element);
//     const stylesheet = style_element.sheet;

//     for (const shortcut_item of shortcuts) {
//       console.log(shortcut_item.selector + ":active { pointer-events: none; }");
//       stylesheet.insertRule(
//         shortcut_item.selector + ":active { pointer-events: none; }"
//       );
//       stylesheet.insertRule(
//         shortcut_item.selector + " * { cursor: not-allowed; }"
//       );
//     }
//   }
//   // Will only generate the style rule once, the first time they are neeeded
//   document.addEventListener(
//     "tooltipshow",
//     () => {
//       generate_stylesheet();
//     },
//     { once: true }
//   );
// }

export { init_lts };
