import { init_lts } from "./shortcuts.js";

/* Official shortcuts reference for Trello
 * https://trello.com/shortcuts
 */

// prettier-ignore
init_lts([
  /* General & appearance */
  { selector: 'body:not(.window-up) [data-test-id="header-boards-menu-button"]', keys: "b", placement: "bottom", comment: "Boards menu" },
  { selector: 'body:not(.window-up) [data-test-id="header-boards-menu-pin"]', keys: "w", placement: "right", comment: "Keep boards menu open" },
  { selector: 'body:not(.window-up) [data-test-id="header-search-input"]', keys: "/", placement: "right", comment: "Search" },
  { selector: '.js-open-card-filter', keys: "f", placement: "left", comment: "Cards filter" },
  { selector: '.js-filter-card-clear', keys: "x", placement: "top", comment: "Clear card filter" },
  { selector: 'body:not(.window-up) .js-open-card-composer', keys: "n", placement: "bottom", comment: "Add new card" },
  // TODO: target the right button for "n" when using the overlay
  // No button / No tooltip: ";" Enable/disable label names
  // No button / No tooltip: "q" My cards
  // No button / No tooltip: "Space" Attribute to myself

  /* TODO: Navigation & card moving */

  /* Cards actions */
  { selector: '.js-archive, .js-archive-card', keys: "c", placement: "right", comment: "Archive" },
  { selector: '.js-edit-due-date, .js-add-due-date', keys: "d", placement: "right", comment: "Edit due date" },
  { selector: '.js-add-checklist-menu', keys: "-", placement: "right", comment: "Add Checklist" },
  { selector: '.active-card .js-card-menu', keys: "e", placement: "right", comment: "Fast Edit" },
  { selector: '.js-edit-labels', keys: "l", placement: "right", comment: "Edit labels" },
  { selector: '.js-edit-members, .js-change-card-members', keys: "m", placement: "right", comment: "Edit members" },
  { selector: '.js-card-detail-title-input', keys: "t", placement: "left", comment: "Change title" },
  { selector: '.js-subscribe', keys: "s", placement: "right", comment: "Subscribe" },
  { selector: '.js-vote', keys: "v", placement: "right", comment: "Vote" },
  { selector: '.js-close-window', keys: "esc", placement: "top", comment: "Close window" },
  { selector: '.js-add-comment', keys: "meta + Enter", placement: "bottom", comment: "Add comment" },

  /* Card label codes */
  { selector: '.js-select-label[data-color="green"]', keys: "1", placement: "left", comment: "Add green label" },
  { selector: '.js-select-label[data-color="yellow"]', keys: "2", placement: "left", comment: "Add yellow label" },
  { selector: '.js-select-label[data-color="orange"]', keys: "3", placement: "left", comment: "Add orange label" },
  { selector: '.js-select-label[data-color="red"]', keys: "4", placement: "left", comment: "Add red label" },
  { selector: '.js-select-label[data-color="purple"]', keys: "5", placement: "left", comment: "Add purple label" },
  { selector: '.js-select-label[data-color="blue"]', keys: "6", placement: "left", comment: "Add blue label" },
  { selector: '.js-select-label[data-color="sky"]', keys: "7", placement: "left", comment: "Add sky label" },
  { selector: '.js-select-label[data-color="lime"]', keys: "8", placement: "left", comment: "Add lime label" },
  { selector: '.js-select-label[data-color="pink"]', keys: "9", placement: "left", comment: "Add pink label" },
  { selector: '.js-select-label[data-color="black"]', keys: "0", placement: "left", comment: "Add black label" }
]);
