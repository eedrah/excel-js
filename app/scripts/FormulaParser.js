/* jshint devel:true */
'use strict';

function FormulaParser(fnToOtherCells) {
    this.fnToOtherCells = fnToOtherCells;
    this.isValid = false;
    this.value = null;
}

FormulaParser.prototype = {
    parse: function (formula) {
        formula = this._replaceCellReferences(formula);
        this._compute(formula);
    },
    _compute: function (formula) {
        try {
            var value = math.eval(formula);
            this.isValid = true;
            this.value = value;
        } catch (error) {
            // math.js error - generic error type
            // keep isValid == false
        }
    },
    _replaceCellReferences: function (formula) {
        return formula;
    }
};
