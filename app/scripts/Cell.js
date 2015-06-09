/* jshint devel:true */
'use strict';

function Cell(rowNumber, columnNumber, notificationCallback) {
    this.row = rowNumber;
    this.column = columnNumber;
    this.notificationCallback = notificationCallback;

    this._formula = '';
    this._value = '';
}

Cell.prototype = {
    notifyInputChange: function (newValue) {
        this.setValue(newValue);
    },
    setValue: function(newValue) {
        if (newValue !== this._value) {
            this._value = newValue;
            this.broadcastValue();
        }
    },
    broadcastValue: function() {
        this.notificationCallback(this._value);
    }
}