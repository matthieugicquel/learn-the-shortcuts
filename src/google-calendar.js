import { init_lts } from "./shortcuts.js";

/* Official shortcuts reference for Google Calendar
 * https://support.google.com/calendar/answer/37034
 */

// prettier-ignore
init_lts([
  /* Navigation */
  { selector: 'header .A7iFUc', shortcut: "k", placement: "bottom", comment: "Previous period" },
  { selector: 'header .xEq6pc', shortcut: "j", placement: "bottom", comment: "Next period" },
  { selector: 'header .GXlaye', shortcut: "t", placement: "bottom", comment: "Today" },
  // No button / No tooltip: "g" Go to date

  /* TODO: Views */

  /* Actions */
  { selector: '.kBIr7e', shortcut: "c", placement: "right", comment: "Create event" },
  { selector: '.pPTZAe div:first-child .d29e1c', shortcut: "e", comment: "Edit event" },
  { selector: '.pPTZAe div:nth-child(2) .d29e1c', shortcut: "del", comment: "Delete event" },
  { selector: '.M30cEf', shortcut: "esc", comment: "Close event popup" },
  { selector: '#xCancelBu', shortcut: "esc", placement: "bottom", comment: "Close event page" },
  // TODO : make something nice for Cmd/Ctrl shortcuts
  // { selector: '#xSaveBu', shortcut: "Cmd/Ctrl + s", placement: "bottom", comment: "Save event" },
  // No button / No tooltip: "z" Undo last action

  /* Application */
  { selector: 'header .M9Bg4d', shortcut: "/", placement: "bottom", comment: "Search" },
  { selector: '.RDPZE', shortcut: "+", placement: "right", comment: "Add calendar" }
]);
