/* jshint devel:true */
'use strict';

function DataBinder($table) {
    this.$table = $table;
    this.cells = [];
}

DataBinder.prototype = {
    Initialize: function() {
        var rows = 100;
        var columns = 100;
        this._initializeCellsArray(rows, columns);
        this._bindInputsToArray();
    },
    _initializeCellsArray: function(rows, columns) {
        for (var i = 0; i < rows; i++) {
            var row = [];
            for (var j = 0; j < columns; j++) {
                row.push(new Cell());
            }
            this.cells.push(row);
        }
    },
    _bindInputsToArray: function() {

    }
};

function Cell() {
    
}