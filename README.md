Here it is. You'll need to configure some rules yourself, to wit:

```json
{
  "extends": [
    "stylelint-config-lostfictions"
  ],
  "rules": {
    "plugin/value-no-exposed-custom-properties": [
      true,
      {
        "importFrom": [
          "src/styles/vars.css"
        ]
      }
    ],
    "csstools/value-no-unknown-custom-properties": [
      true,
      {
        "importFrom": [
          "src/styles/vars.css"
        ]
      }
    ],
    "csstools/media-use-custom-media": [
      "always-known",
      {
        "importFrom": [
          "src/styles/vars.css"
        ]
      }
    ]
  }
}
```