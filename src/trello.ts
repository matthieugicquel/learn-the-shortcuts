import { init_lts } from "./shortcuts.js";

/* Official shortcuts reference for Trello
 * https://trello.com/shortcuts
 */

// prettier-ignore
init_lts([
  /* General & appearance */
  { selector: 'body:not(.window-up) [data-test-id="header-boards-menu-button"]', shortcut: "b", placement: "bottom", comment: "Boards menu" },
  { selector: 'body:not(.window-up) [data-test-id="header-boards-menu-pin"]', shortcut: "w", placement: "right", comment: "Keep boards menu open" },
  { selector: 'body:not(.window-up) [data-test-id="header-search-input"]', shortcut: "/", placement: "right", comment: "Search" },
  { selector: '.js-open-card-filter', shortcut: "f", placement: "left", comment: "Cards filter" },
  { selector: '.js-filter-card-clear', shortcut: "x", placement: "top", comment: "Clear card filter" },
  { selector: 'body:not(.window-up) .js-open-card-composer', shortcut: "n", placement: "bottom", comment: "Add new card" },
  // TODO: target the right button for "n" when using the overlay
  // No button / No tooltip: ";" Enable/disable label names
  // No button / No tooltip: "q" My cards
  // No button / No tooltip: "Space" Attribute to myself

  /* TODO: Navigation & card moving */

  /* Cards actions */
  { selector: '.js-archive, .js-archive-card', shortcut: "c", placement: "right", comment: "Archive" },
  { selector: '.js-edit-due-date, .js-add-due-date', shortcut: "d", placement: "right", comment: "Edit due date" },
  { selector: '.js-add-checklist-menu', shortcut: "-", placement: "right", comment: "Add Checklist" },
  { selector: '.active-card .js-card-menu', shortcut: "e", placement: "right", comment: "Fast Edit" },
  { selector: '.js-edit-labels', shortcut: "l", placement: "right", comment: "Edit labels" },
  { selector: '.js-edit-members, .js-change-card-members', shortcut: "m", placement: "right", comment: "Edit members" },
  { selector: '.js-card-detail-title-input', shortcut: "t", placement: "left", comment: "Change title" },
  { selector: '.js-subscribe', shortcut: "s", placement: "right", comment: "Subscribe" },
  { selector: '.js-vote', shortcut: "v", placement: "right", comment: "Vote" },
  { selector: '.js-close-window', shortcut: "esc", placement: "top", comment: "Close window" },
  { selector: '.js-add-comment', shortcut: "meta + Enter" },

  /* Card label codes */
  { selector: '.js-select-label[data-color="green"]', shortcut: "1", placement: "left", comment: "Add green label" },
  { selector: '.js-select-label[data-color="yellow"]', shortcut: "2", placement: "left", comment: "Add yellow label" },
  { selector: '.js-select-label[data-color="orange"]', shortcut: "3", placement: "left", comment: "Add orange label" },
  { selector: '.js-select-label[data-color="red"]', shortcut: "4", placement: "left", comment: "Add red label" },
  { selector: '.js-select-label[data-color="purple"]', shortcut: "5", placement: "left", comment: "Add purple label" },
  { selector: '.js-select-label[data-color="blue"]', shortcut: "6", placement: "left", comment: "Add blue label" },
  { selector: '.js-select-label[data-color="sky"]', shortcut: "7", placement: "left", comment: "Add sky label" },
  { selector: '.js-select-label[data-color="lime"]', shortcut: "8", placement: "left", comment: "Add lime label" },
  { selector: '.js-select-label[data-color="pink"]', shortcut: "9", placement: "left", comment: "Add pink label" },
  { selector: '.js-select-label[data-color="black"]', shortcut: "0", placement: "left", comment: "Add black label" }
]);
