/* jshint devel:true */
'use strict';

function DataBinder($table) {
    this.$table = $table;
    this.cells = [];
    this.inputs = $table.find('input');
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
    _bindInputsToArray: function () {
        this.inputs.change(this, function notifyCellOfChange(event) {
            var dataBinder = event.data;
            var $this = $(this);
            var row = $this.closest('tr').index();
            var column = $this.closest('td').index();
            dataBinder.cells[row][column].notifyChange($this.val());
        });
    }
};

function Cell() {
    
}

Cell.prototype = {
    notifyChange: function(newValue) {
        console.log(newValue);
    }
}