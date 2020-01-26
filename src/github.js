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
  { selector: '.reponav [data-hotkey="g c"]', shortcut: "g c", comment: "Code" },
  { selector: '.reponav [data-hotkey="g i"]', shortcut: "g i", comment: "Issues"},
  { selector: '.reponav [data-hotkey="g p"]', shortcut: "g p", comment: "Pull requests"},
  { selector: '.reponav [data-hotkey="g w"]', shortcut: "g w", comment: "Wiki" },
  { selector: '.reponav [data-hotkey="g b"]', shortcut: "g b", comment: "Projects" },
  { selector: '[data-hotkey="w"]', shortcut: "w", comment: "Branches/tags" },
  { selector: '[data-hotkey="t"]', shortcut: "t", comment: "Find file" },

  /* File view */
  { selector: '[data-hotkey="b"]', shortcut: "b", comment: "Blame"},

  /* Issues and PR list views */
  { selector: '.btn[data-hotkey="c"]', shortcut: "c", comment: "Create new"},
  { selector: '[data-hotkey="u"]', shortcut: "u", comment: "Filter by author"},
  { selector: '[data-hotkey="l"]', shortcut: "l", comment: "Filter by label"},
  { selector: '[data-hotkey="m"]', shortcut: "l", comment: "Filter by milestone"},
  { selector: '[data-hotkey="a"]', shortcut: "l", comment: "Filter by assignee"},

  /* PR view */
  /* The shortcuts don't seem to be working currently */
]);
