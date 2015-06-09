﻿/* jshint devel:true */
/* global ReferenceHelper:true */
/* jshint unused: false */
'use strict';

var ReferenceHelper = (function () {
    var letterArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function numericToAlpha(number) {
        if (number === 0) {
            return '';
        }
        var zeroIndexed = number - 1;
        var lastLetter = letterArray[zeroIndexed % letterArray.length];
        var remainder = Math.floor(zeroIndexed / 26);
        var otherLetters = numericToAlpha(remainder);
        return otherLetters + lastLetter;
    }

    return { NumericToAlpha: numericToAlpha };
})();