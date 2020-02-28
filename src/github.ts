import { init_lts } from "./shortcuts.js";

/* Official shortcuts reference for Github
 * https://help.github.com/en/github/getting-started-with-github/keyboard-shortcuts
 */

// prettier-ignore
init_lts([
  /* Site wide shortcuts */
  { selector: 'header [data-hotkey="g d"]', shortcut: "g d", placement: "bottom", comment: "Home" },
  { selector: 'header [data-hotkey="s,/"]', shortcut: "s or /", placement: "bottom", comment: "Search" },
  // Disabled until made "smart" (it gets overriden by repo shortcuts)
  // { selector: 'header [data-hotkey="g p"]', shortcut: "g p", placement: "bottom", comment: "Pull requests" },
  // { selector: 'header [data-hotkey="g i"]', shortcut: "g i", placement: "bottom", comment: "Issues" },
  { selector: 'header [data-hotkey="g n"]', shortcut: "g n", placement: "bottom", comment: "Notifications" },

  /* Repository */
  { selector: '.reponav [data-hotkey="g c"]', shortcut: "g c", comment: "Code" },
  { selector: '.reponav [data-hotkey="g i"]', shortcut: "g i", comment: "Issues"},
  { selector: '.reponav [data-hotkey="g p"]', shortcut: "g p", comment: "Pull requests"},
  { selector: '.reponav [data-hotkey="g b"]', shortcut: "g b", comment: "Projects" },
  { selector: '.reponav [data-hotkey="g w"][data-selected-links^="repo_wiki"]', shortcut: "g w", comment: "Wiki" },

  /* TODO: Source code editing */

  /* Source code browsing */
  { selector: '[data-hotkey="t"]', shortcut: "t", comment: "Find file" },
  { selector: '[data-hotkey="w"]', shortcut: "w", comment: "Branches/tags" },
  { selector: '[data-hotkey="b"]', shortcut: "b", comment: "Blame"},
  // These shortcuts have no button
  // TODO: add a way to show shortcuts that are not linked to a UI element
  // { selector: '', shortcut: "l", comment: "Jump to line" },
  // { selector: '', shortcut: "y", comment: "Expand url to canonical form" },
  // { selector: '', shortcut: "i", comment: "Show/hide comment on diff" },

  /* TODO: Comments */

  /* Issue and pull request lists */
  { selector: '.btn[data-hotkey="c"]', shortcut: "c", comment: "Create new"},
  { selector: '[data-hotkey="Control+/,Meta+/]"', shortcut: "meta + /", comment: "Focus on issue/PR search"},
  { selector: '[data-hotkey="u"]', shortcut: "u", comment: "Filter by author"},
  { selector: '[data-hotkey="l"]', shortcut: "l", comment: "Filter by label"},
  { selector: '[data-hotkey="m"]', shortcut: "m", comment: "Filter by milestone"},
  { selector: '[data-hotkey="a"]', shortcut: "a", comment: "Filter by assignee"},
  // TODO : No way to explain this one for now
  // { selector: '', shortcut: "alt + click", comment: "Exclude label"},

  /* TODO: Issues and pull requests */
  /* TODO: Changes in pull requests - These shortcuts don't seem to be working */
  /* TODO: Project boards */

  /* TODO: Notifications - in beta, will do when stabilized */
  /* TODO: Network graph */
]);
