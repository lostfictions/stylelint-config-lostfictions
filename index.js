"use strict";

// prettier-ignore
module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-prettier"
  ],
  "plugins": [
    "stylelint-value-no-exposed-custom-properties",
    "stylelint-value-no-unknown-custom-properties",
    "stylelint-media-use-custom-media",
    "./packages/stylelint-css-modules"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "block-no-empty": null,
    "no-missing-end-of-source-newline": null,
    "shorthand-property-no-redundant-values": true,
    "declaration-empty-line-before": null,
    "no-descending-specificity": null,
    "comment-empty-line-before": null,
    "selector-nested-pattern": "^&",
    "css-modules/composed-class-names": true
  }
}
