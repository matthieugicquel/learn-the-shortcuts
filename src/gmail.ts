import { init_lts } from "./shortcuts.js";

// prettier-ignore
init_lts([
  /* Actions toolbar for messages */
  { selector: 'div[act="19"]', keys: "u", comment: "Go back to list" },
  { selector: 'div[act="9"]', keys: "!", comment: "Spam" },
  { selector: 'div[act="7"]', keys: "e", comment: "Archive" },
  { selector: 'div[act="10"]', keys: "#", comment: "Delete" },
  { selector: 'div[act="2"]', keys: "_", comment: "Mark as not read" },
  { selector: 'div[act="290"]', keys: "b", comment: "Postpone" },
  { selector: "div.G-tF > :nth-child(4) > :nth-child(1)", keys: "v", comment: "Move to" },
  { selector: "div.G-tF > :nth-child(4) > :nth-child(2)", keys: "l", comment: "Labels" },
  { selector: "div.G-tF .nf", keys: ".", comment: "Other actions" },
  { selector: "div.adF .h0 > :nth-child(2)", keys: "k", comment: "Previous conversation" },
  { selector: "div.adF .h0 > :nth-child(3)", keys: "j", comment: "Next conversation" },

  /* Left panel (navigation) */
  { selector: "div.T-I-KE", keys: "c", placement: "top", comment: "New message" },
  { selector: '[role="navigation"].ajl .aHS-bnt', keys: "g i", placement: "right", comment: "Inbox" },
  { selector: '[role="navigation"].ajl .aHS-bnw', keys: "g s", placement: "right", comment: "Followed messages" },
  { selector: '[role="navigation"].ajl .aHS-bnu', keys: "g t", placement: "right", comment: "Sent" },
  { selector: '[role="navigation"].ajl .aHS-bnq', keys: "g d", placement: "right", comment: "Drafts" },
  { selector: '[role="navigation"].ajl .aHS-aHO', keys: "g a", placement: "right", comment: "All Mail" },

  /* Message list */
  { selector: '[role="grid"] .btb', keys: "↓j ↑k ↩", placement: "inside", comment: "List navigation" },
  { selector: '[role="grid"] .btb .aXw.T-KT', keys: "s", placement: "right", comment: "Star/unstar (list view)" },
  { selector: '[role="grid"] .btb [role="checkbox"]', keys: "x", placement: "left", comment: "Message checkbox" },
  // TODO : Disabled until one stops covering the other
  // { selector: '.G-as3 .T-Jo:not(.T-Jo-Jp):not(.T-Jo-ayH)', keys: "* a", comment: "Select all messages" },
  // { selector: '.G-as3 .T-Jo-ayH, .G-as3 .T-Jo-Jp', keys: "* n", comment: "Deselect all messages" },

  /* Message view */
  { selector: ".acZ .T-KT", keys: "s", placement: "top", comment: "Star/unstar (message view)" },
  { selector: ".aaq", keys: "r", placement: "top", comment: "Answer (message view)" },
  { selector: ".bkH", keys: "r", placement: "top", comment: "Answer (bottom of conversation)" },
  { selector: ".bkI", keys: "a", placement: "top", comment: "Answer all (bottom of conversation)" },
  { selector: ".bkG", keys: "f", placement: "top", comment: "Forward (bottom of conversation)" },

  /* Message composition */
  { selector: ".pE", keys:"meta ⇧ c", placement: "left", comment: "Add Cc recipients" },
  { selector: ".pB", keys:"meta ⇧ b", placement: "right", comment: "Add Bcc recipients" },
  { selector: ".og", keys: "meta ⇧ d", comment: "Discard Draft" },
  { selector: ".aoO", keys: "meta ↩", comment: "Send" },
  { selector: ".Hl ~ .Ha", keys: "esc", comment: "Save & close" },

  /* Misc */
  { selector: 'form[role="search"] .gb_uf', keys: "/", placement: "right", comment: "Search" },
]);
