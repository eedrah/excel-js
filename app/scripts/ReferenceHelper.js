/* jshint devel:true */
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

    function alphaToNumeric(alpha) {
        var total = letterArray.indexOf(alpha.slice(-1)) + 1;
        if (alpha.length > 1) {
            total += 26 * alphaToNumeric(alpha.slice(0, -1));
        }
        return total;
    }

    function a1ToRc(cellReference) {
        var digits = /(\d+)/;
        var lettersAndDigits = cellReference.split(digits);
        return {
            row: lettersAndDigits[1],
            column: alphaToNumeric(lettersAndDigits[0])
        };
    }

    return {
        NumericToAlpha: numericToAlpha,
        A1ToRC: a1ToRc,
        AlphaToNumeric: alphaToNumeric
    };
})();
