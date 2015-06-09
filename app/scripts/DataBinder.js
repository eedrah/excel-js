/* jshint devel:true */
'use strict';

function DataBinder($table) {
    this.$table = $table;
    this.cells = [];
    this.inputs = $table.find('input');
}

DataBinder.prototype = {
    initialize: function() {
        var rows = 100;
        var columns = 100;
        this._initializeCellsArray(rows, columns);
        this._bindInputsToArray();
        this._bindRefreshButton();
    },
    _initializeCellsArray: function(rows, columns) {
        for (var r = 0; r < rows; r++) {
            var row = [];
            for (var c = 0; c < columns; c++) {
                var notificationCallback = this.createNotificationCallback(r, c);
                row.push(new Cell(r, c, notificationCallback));
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
            dataBinder.cells[row][column].notifyInputChange($this.val());
        });
    },
    _bindRefreshButton: function() {
        $('#refreshTable').click(this.refreshAllCells.bind(this));
    },
    refreshAllCells: function() {
        this.inputs.val('');
        this.cells.forEach(function refreshRow(row) {
            row.forEach(function refreshCell(cell) {
                cell.broadcastValue();
            });
        });
    },
    createNotificationCallback: function(rowNumber, columnNumber) {
        return function(value) {
            this._notifyCellChange(rowNumber, columnNumber, value);
        }.bind(this);
    },
    _notifyCellChange: function(rowNumber, columnNumber, value) {
        this.inputs.eq((rowNumber - 1) * 100 + columnNumber - 1).val(value);
    }
};
