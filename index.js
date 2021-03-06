/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
 
var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");
var name = "lightweightThemes.selectedThemeID";
var selectedThemeID = require("sdk/preferences/service").get(name);

var panel = panels.Panel({
  width: 140,
  height: 100,
  contentURL: 'about:blank',
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}

var button = ToggleButton({
  id: "snic",
  label: "Snic",
  icon: {
    "16": selectedThemeID === "firefox-devedition@mozilla.org" ? 
          "./icondev16.svg" : "./icon16.svg",
    "32": "./icon32.svg",
    "64": "./icon64.svg"
  },
  onChange: handleChange
});
