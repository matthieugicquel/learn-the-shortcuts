import { init_lts } from "./shortcuts.js";

// prettier-ignore
init_lts([
  /* Top bar */
  { selector: 'header [data-hotkey="g d"]', shortcut: "g d", placement: "bottom", comment: "Home" },
  { selector: 'header [data-hotkey="s,/"]', shortcut: "s or /", placement: "bottom", comment: "Search" },
  { selector: 'header [data-hotkey="g p"]', shortcut: "g p", placement: "bottom", comment: "Pull requests" },
  { selector: 'header [data-hotkey="g i"]', shortcut: "g i", placement: "bottom", comment: "Issues" },
  { selector: 'header [data-hotkey="g n"]', shortcut: "g n", placement: "bottom", comment: "Notifications" },

  /* Repository */
  { selector: 'nav [data-hotkey="g c"]', shortcut: "g c", comment: "Code" },
  { selector: 'nav [data-hotkey="g i"]', shortcut: "g i", comment: "Issues"},
  { selector: 'nav [data-hotkey="g p"]', shortcut: "g p", comment: "Pull requests"},
  { selector: 'nav [data-hotkey="g w"]', shortcut: "g w", comment: "Wiki" },
  { selector: 'nav [data-hotkey="g b"]', shortcut: "g b", comment: "Projects" },
  { selector: '[data-hotkey="w"]', shortcut: "w", comment: "Branches/tags" },
  { selector: '[data-hotkey="t"]', shortcut: "t", comment: "Find file" }
]);
