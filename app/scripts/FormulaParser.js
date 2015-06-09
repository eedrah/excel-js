/* jshint devel:true */
'use strict';

function FormulaParser(fnToOtherCells) {
    this.fnToOtherCells = fnToOtherCells;
    this.isValid = false;
    this.isDetermined = false;
    this.value = null;
    this.precedents = [];
}

FormulaParser.prototype = {
    parse: function (formula) {
        formula = this._replaceCellReferences(formula);
        if (this.isDetermined !== true) {
            this._compute(formula);
        }
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
        var cellReference = /\b([A-Z]+[0-9]+)\b/gi;
        var dividedFormula = formula.split(cellReference);
        for (var i = 1; i < dividedFormula.length; i += 2) {
            dividedFormula[i] = this._replaceCellReference(dividedFormula[i]);
        }
        return dividedFormula.join('');
    },
    _replaceCellReference: function (cellReference) {
        cellReference = cellReference.toUpperCase();
        var rowColumn = ReferenceHelper.A1ToRC(cellReference);
        var cell = this.fnToOtherCells(rowColumn.row, rowColumn.column);
        this.precedents.push(cell);
        return cell.getValue();
    }
};
