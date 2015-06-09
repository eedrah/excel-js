/* jshint devel:true */
'use strict';

function Cell(rowNumber, columnNumber, notificationCallback) {
    this.row = rowNumber;
    this.column = columnNumber;
    this.notificationCallback = notificationCallback;

    // this is terrible, but time is running out
    this.fnToOtherCells = dataBinder.getCellAt.bind(dataBinder);

    this.precedents = [];
    this.descendants = [];

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
            this._formula = newValue;
            this.releaseCurrentPrecedents();
            this.broadcastValue();
        }
    },
    broadcastValue: function () {
        this.notificationCallback(this._value);
        this.notifyDescendants();
    },
    setFormula: function (newFormula) {
        var parser = new FormulaParser(this.fnToOtherCells);
        parser.parse(newFormula);
        if (parser.isValid) {
            this.setValue(parser.value);
            this.updatePrecedents(parser.precedents);
            this._formula = newFormula;
            this.notifyDescendants();
        } else {
            this.setValue('#Error');
        }
    },
    getValue: function () {
        return this._value;
    },
    recalculateFormula: function () {
        this.setFormula(this._formula);
    },
    updatePrecedents: function (newPrecedents) {
        this.releaseCurrentPrecedents();
        this.precedents = newPrecedents;
        this.precedents.forEach(function (p) {
            p.addDescendant(this);
        }.bind(this));
    },
    releaseCurrentPrecedents: function () {
        this.precedents.forEach(function (p) {
            p.removeDescendant(this);
        }.bind(this));
        this.precedents = [];
    },
    addDescendant: function (descendant) {
        this.descendants.push(descendant);
    },
    removeDescendant: function (descendant) {
        this.descendants.splice(this.descendants.indexOf(descendant), 1);
    },
    notifyDescendants: function () {
        this.descendants.forEach(function (d) {
            d.recalculateFormula();
        });
    }
};
