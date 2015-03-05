/*!
 ~ Copyright (c) 2015 George Norman.
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ --------------------------------------------------------------
 ~ log-helper
 ~ --------------------------------------------------------------
 */

var generalUtils = require("./general-utils");

// @-@:p0 need to support enable/disable logging - for standalone mode
module.exports = (function() {

  return {
    msg: function(msg) {
      doLog(msg);
    },

    /**
     * Log a level-1 heading.
     *
     * @param heading
     */
    heading1: function(heading) {
      doLog('###################################################################');
      doLog("# " + heading);
      doLog('###################################################################');
    },

    divider1: function() {
      doLog('###################################################################');
    },

    /**
     * Log a level-2 heading.
     *
     * @param heading
     */
    heading2: function(heading) {
      doLog('===================================================================');
      doLog("= " + heading);
      doLog('===================================================================');
    },

    divider2: function() {
      doLog('===================================================================');
    },

    /**
     * Log a level-3 heading.
     *
     * @param heading
     */
    heading3: function(heading) {
      doLog('-------------------------------------------------------------------');
      doLog("- " + heading);
      doLog('-------------------------------------------------------------------');
    },

    divider3: function() {
      doLog('-------------------------------------------------------------------');
    },


    listProperties: function(obj) {
      doLog(generalUtils.getProperties(obj));
    },

    /**
     * Log an error message.
     */
    error: function(errMsg, err) {
      this.newline();
      doLog('*******************************************************************');
      doLog('* ERROR                                                           *');
      doLog('*******************************************************************');

      if (generalUtils.isEmpty(err)) {
        doLog(errMsg);
      } else {
        doLogError(errMsg, err);
      }
      this.newline();
    },

    newline: function() {
      doLog("");
    }
  };

  function doLog(msg) {
    console.log(msg);
  }

  function doLogError(msg, err) {
    console.log(msg, err);
  }
})();

