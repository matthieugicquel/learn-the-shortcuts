import { init_lts } from "./shortcuts.js";

/* Official shortcuts reference for Github
 * https://help.github.com/en/github/getting-started-with-github/keyboard-shortcuts
 */

// prettier-ignore
init_lts([
  /* Site wide shortcuts */
  { selector: 'header [data-hotkey="g d"]', keys: "g d", placement: "bottom", comment: "Home" },
  { selector: 'header [data-hotkey="s,/"]', keys: "/", placement: "bottom", comment: "Search" },
  // Disabled until made "smart" (it gets overriden by repo keys)
  // { selector: 'header [data-hotkey="g p"]', keys: "g p", placement: "bottom", comment: "Pull requests" },
  // { selector: 'header [data-hotkey="g i"]', keys: "g i", placement: "bottom", comment: "Issues" },
  { selector: 'header [data-hotkey="g n"]', keys: "g n", placement: "left", comment: "Notifications" },

  /* Repository */
  { selector: '.js-repo-nav [data-hotkey="g c"]', keys: "g c", comment: "Code" },
  { selector: '.js-repo-nav [data-hotkey="g i"]', keys: "g i", comment: "Issues" },
  { selector: '.js-repo-nav [data-hotkey="g p"]', keys: "g p", comment: "Pull requests" },
  { selector: '.js-repo-nav [data-hotkey="g b"]', keys: "g b", comment: "Projects" },
  { selector: '.js-repo-nav [data-hotkey="g w"][data-selected-links^="repo_wiki"]', keys: "g w", comment: "Wiki" },

  /* TODO: Source code editing */

  /* Source code browsing */
  { selector: '[data-hotkey="t"]', keys: "t", comment: "Find file" },
  { selector: '[data-hotkey="w"]', keys: "w", comment: "Branches/tags" },
  { selector: '[data-hotkey="b"]', keys: "b", comment: "Blame" },
  // These shortcuts have no button
  // TODO: add a way to show shortcuts that are not linked to a UI element
  // { selector: '', keys: "l", comment: "Jump to line" },
  // { selector: '', keys: "y", comment: "Expand url to canonical form" },
  // { selector: '', keys: "i", comment: "Show/hide comment on diff" },

  /* Issues, PRs & Comments composers */
  { selector: '.composer button[type="submit"]', keys: "meta ↩", placement: "bottom", usable: "whenTyping", comment: "Submit issue" },
  { selector: '.js-new-comment-form button[type="submit"]', keys: "ctrl ↩", placement: "bottom", usable: "whenTyping", comment: "Submit comment" },
  { selector: '.tabnav-tabs', keys: "meta ⇧ p", placement: "left", comment: "Switch between edit & preview" },

  /* Issue and pull request lists */
  { selector: '.btn[data-hotkey="c"]', keys: "c", comment: "Create new" },
  { selector: '[data-hotkey="Control+/,Meta+/"]', keys: "meta /", comment: "Focus on issue/PR search" },
  { selector: '[data-hotkey="u"]', keys: "u", comment: "Filter by author" },
  { selector: '[data-hotkey="l"]', keys: "l", comment: "Filter by label" },
  { selector: '[data-hotkey="m"]', keys: "m", comment: "Filter by milestone" },
  { selector: '[data-hotkey="a"]', keys: "a", comment: "Filter by assignee" },
  { selector: '.js-navigation-item.navigation-focus [type="checkbox"]', keys: "x", placement: "left", comment: "Check item" },
  { selector: '.js-navigation-item.navigation-focus', keys: "↓j ↑k ↩", placement: "inside", comment: "List navigation" },
  // TODO: No way to explain this one for now
  // { selector: '', keys: "alt + click", comment: "Exclude label"},

  /* TODO: Changes in pull requests - These shortcuts don't seem to be working */
  /* TODO: Project boards */

  /* TODO: Notifications - in beta, will do when stabilized */
  /* TODO: Network graph */
]);
