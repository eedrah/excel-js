/* jshint devel:true */
'use strict';

function DataBinder() {
    this.cells = [];
}

DataBinder.prototype = {
    initialize: function ($table) {
        var rows = 100;
        var columns = 100;
        this.$table = $table;
        this.inputs = $table.find('input');
        this._initializeCellsArray(rows, columns);
        this._bindInputsToArray();
        this._bindRefreshButton();
    },
    _initializeCellsArray: function (rows, columns) {
        for (var row0Indexed = 0; row0Indexed < rows; row0Indexed++) {
            var row = [];
            for (var col0Indexed = 0; col0Indexed < columns; col0Indexed++) {
                var notificationCallback = this.createNotificationCallback(row0Indexed, col0Indexed);
                row.push(new Cell(row0Indexed, col0Indexed, notificationCallback));
            }
            this.cells.push(row);
        }
    },
    _bindInputsToArray: function () {
        this.inputs.change(this, function notifyCellOfChange(event) {
            var dataBinder = event.data;
            var $this = $(this);
            var row1Indexed = $this.closest('tr').index();
            var column1Indexed = $this.closest('td').index();
            dataBinder.cells[row1Indexed - 1][column1Indexed - 1].notifyInputChange($this.val());
        });
    },
    _bindRefreshButton: function () {
        $('#refreshTable').click(this.refreshAllCells.bind(this));
    },
    refreshAllCells: function () {
        this.inputs.val('');
        this.cells.forEach(function refreshRow(row) {
            row.forEach(function refreshCell(cell) {
                cell.broadcastValue();
            });
        });
    },
    createNotificationCallback: function (row0Indexed, col0Indexed) {
        return function (value) {
            this._notifyCellChange(row0Indexed, col0Indexed, value);
        }.bind(this);
    },
    _notifyCellChange: function (row0Indexed, col0Indexed, value) {
        this.inputs.eq(row0Indexed * 100 + col0Indexed).val(value);
    },
    getCellAt: function (row1Indexed, col1Indexed) {
        return this.cells[row1Indexed - 1][col1Indexed - 1];
    }
};
