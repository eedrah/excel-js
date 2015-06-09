/* jshint devel:true */
'use strict';

function Cell(rowNumber, columnNumber, notificationCallback) {
    this.row = rowNumber;
    this.column = columnNumber;
    this.notificationCallback = notificationCallback;

    // this is terrible, but time is running out
    this.fnToOtherCells = dataBinder.getCellAt.bind(dataBinder);

    this._formula = '';
    this._value = '';
}

Cell.prototype = {
    notifyInputChange: function (newEntry) {
        if (newEntry[0] === '=') {
            this.setFormula(newEntry.slice(1));
        } else {
            this.setValue(newEntry);
        }
    },
    setValue: function (newValue) {
        if (newValue !== this._value) {
            this._value = newValue;
            this.broadcastValue();
        }
    },
    broadcastValue: function () {
        this.notificationCallback(this._value);
    },
    setFormula: function (newFormula) {
        var parser = new FormulaParser(this.fnToOtherCells);
        parser.parse(newFormula);
        if (parser.isValid) {
            this.setValue(parser.value);
        } else {
            this.setValue('#Error');
        }
    },
    getValue: function() {
        return this._value;
    }
};
