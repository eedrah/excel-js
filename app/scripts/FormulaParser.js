/* jshint devel:true */
'use strict';

function FormulaParser(fnToOtherCells) {
    this.fnToOtherCells = fnToOtherCells;
    this.isValid = false;
    this.value = null;
}

FormulaParser.prototype = {
    parse: function(formula) {
        this.compute(formula);
    },
    compute: function(formula) {
        try {
            var value = math.eval(formula);
            this.isValid = true;
            this.value = value;
        } catch (error) {
            // math.js error - generic error type
            // keep isValid == false
        }
    }
};
