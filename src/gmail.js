import { init_lts } from "./shortcuts.js";

init_lts([
  /* Actions toolbar for messages */
  {
    selector: 'div[act="19"]',
    shortcut: "u",
    comment: "Go back to list"
  },
  {
    selector: 'div[act="9"]',
    shortcut: "!",
    comment: "Spam"
  },
  {
    selector: 'div[act="7"]',
    shortcut: "e",
    comment: "Archive"
  },
  {
    selector: 'div[act="10"]',
    shortcut: "#",
    comment: "Delete"
  },
  {
    selector: 'div[act="2"]',
    shortcut: "_",
    comment: "Mark as not read"
  },
  {
    selector: 'div[act="290"]',
    shortcut: "b",
    comment: "Postpone"
  },
  {
    selector: "div.G-tF > :nth-child(4) > :nth-child(1)",
    shortcut: "v",
    comment: "Move to"
  },
  {
    selector: "div.G-tF > :nth-child(4) > :nth-child(2)",
    shortcut: "l",
    comment: "Labels"
  },
  {
    selector: "div.G-tF > :nth-child(5) > :nth-child(1)",
    shortcut: ".",
    comment: "Other actions"
  },
  {
    selector: "div.adF .h0 > :nth-child(2)",
    shortcut: "k",
    comment: "Previous conversation"
  },
  {
    selector: "div.adF .h0 > :nth-child(3)",
    shortcut: "j",
    comment: "Next conversation"
  },
  {
    selector: "div.G-tF > :nth-child(5) > :nth-child(1)",
    shortcut: ".",
    comment: "Other actions"
  },

  /* Left panel (navigation) */
  {
    selector: "div.T-I-KE",
    shortcut: "c",
    comment: "New message",
    placement: "top"
  },
  {
    selector: '[role="navigation"].ajl .aHS-bnt',
    shortcut: "g i",
    placement: "right",
    comment: "Inbox"
  },
  {
    selector: '[role="navigation"].ajl .aHS-bnw',
    shortcut: "g s",
    placement: "right",
    comment: "Followed messages"
  },
  {
    selector: '[role="navigation"].ajl .aHS-bnu',
    shortcut: "g t",
    placement: "right",
    comment: "Sent"
  },
  {
    selector: '[role="navigation"].ajl .aHS-bnq',
    shortcut: "g d",
    placement: "right",
    comment: "Drafts"
  },
  {
    selector: '[role="navigation"].ajl .aHS-aHO',
    shortcut: "g a",
    placement: "right",
    comment: "All Mail"
  },

  /* Misc */
  {
    selector: 'form[role="search"]',
    shortcut: "/",
    placement: "right",
    comment: "Search"
  },
  {
    selector: '[role="grid"] [role="checkbox"]',
    shortcut: "x",
    placement: "left",
    comment: "Message checkbox"
  },
  {
    selector: ".aXw.T-KT",
    shortcut: "s",
    placement: "right",
    comment: "Star/unstar (list view)"
  },
  {
    selector: ".acZ .T-KT",
    shortcut: "s",
    placement: "top",
    comment: "Star/unstar (message view)"
  },
  {
    selector: ".aaq",
    shortcut: "r",
    placement: "top",
    comment: "Answer (message view)"
  },
  {
    selector: ".bkH",
    shortcut: "r",
    placement: "top",
    comment: "Answer (bottom of conversation)"
  },
  {
    selector: ".bkI",
    shortcut: "a",
    placement: "top",
    comment: "Answer all (bottom of conversation)"
  },
  {
    selector: ".bkG",
    shortcut: "f",
    placement: "top",
    comment: "Forward (bottom of conversation)"
  }
]);
