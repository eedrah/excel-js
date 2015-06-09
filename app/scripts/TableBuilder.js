/* jshint devel:true */
'use strict';

function TableBuilder($table) {
    this.$table = $table;
}

TableBuilder.prototype = {
    build: function () {
        this.addHeaderRow();
        this.addDataRows();
    },
    addHeaderRow: function () {
        var $tr = $('<tr>');
        $tr.append($('<th>'));
        for (var i = 1; i <= 100; i++) {
            this.addColumnHeaderCell($tr, i);
        }
        this.$table.append($tr);
    },
    addColumnHeaderCell: function ($row, columnNumber) {
        var columnLetter = ReferenceHelper.NumericToAlpha(columnNumber);
        var $th = $('<th>');
        $th.text(columnLetter);
        $row.append($th);
    },
    addDataRows: function () {
        for (var i = 1; i <= 100; i++) {
            this.addDataRow(i);
        }
    },
    addDataRow: function (rowNumber) {
        var $tr = $('<tr>');
        var $th = $('<th>').text(rowNumber);
        $tr.append($th);
        for (var i = 1; i <= 100; i++) {
            var $td = $('<td>').append($('<input type="text">'));
            $tr.append($td);
        }
        this.$table.append($tr);
    }
};