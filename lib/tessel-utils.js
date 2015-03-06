/*
 ~ Copyright (c) 2015 George Norman.
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ --------------------------------------------------------------
 ~ tessel-utils
 ~ --------------------------------------------------------------
 */

var generalUtils = require("./general-utils");

/**
 * Specialized utility functions (useful for Tessel app development).
 */
module.exports = (function( ) {
  "use strict";

  // cache arguments
  var argMap = {};
  var args = process.argv.slice(2);

  if (args != null && args.length > 0) {
    var numArgs = args.length;

    for (var i = 0; i < numArgs; i++) {
      var keyValue = args[i];
      var key = keyValue.substr(0,keyValue.indexOf('='));
      var value = keyValue.substr(keyValue.indexOf('=')+1);

      argMap[key] = value;
    }
    args = null;
  }

  // return the generalUtils module.
  return {
    validPorts: ["A", "B", "C", "D"],

    isValidPort: function(port) {
      var result = this.validPorts.indexOf(port) >= 0;

      return result;
    },

    /** tessel run app/app.js climatePort=A foo=1.23 bar=qwerty */
    getArgumentValue: function(argumentName, defaultValue) {
      var result = argMap[argumentName];

      if (generalUtils.isEmpty(result) && generalUtils.isNotEmpty(defaultValue)) {
        if (typeof defaultValue === 'object') {
          result = defaultValue[argumentName];
        } else {
          result = defaultValue;
        }
      }

      return result;
    }
  };

}( ));
