import { init_lts } from "./shortcuts.js";

/* Official shortcuts reference for Google Calendar
 * https://support.google.com/calendar/answer/37034
 */

// prettier-ignore
init_lts([
  /* Navigation */
  { selector: 'header .A7iFUc', keys: "k", placement: "bottom", comment: "Previous period" },
  { selector: 'header .xEq6pc', keys: "j", placement: "bottom", comment: "Next period" },
  { selector: 'header .GXlaye', keys: "t", placement: "bottom", comment: "Today" },
  // No button / No tooltip: "g" Go to date

  /* TODO: Views */

  /* Actions */
  { selector: '.kBIr7e', keys: "c", placement: "right", comment: "Create event" },
  { selector: '.pPTZAe div:first-child .d29e1c', keys: "e", comment: "Edit event" },
  { selector: '.pPTZAe div:nth-child(2) .d29e1c', keys: "del", comment: "Delete event" },
  { selector: '.M30cEf', keys: "esc", comment: "Close event popup" },
  { selector: '#xCancelBu', keys: "esc", placement: "bottom", comment: "Close event page" },
  { selector: '#xSaveBu', keys: "meta + s", placement: "bottom", comment: "Save event" },
  // No button / No tooltip: "z" Undo last action

  /* Application */
  { selector: 'header .d6McF', keys: "/", placement: "bottom", comment: "Search" },
  { selector: '.RDPZE', keys: "+", placement: "right", comment: "Add calendar" }
]);
