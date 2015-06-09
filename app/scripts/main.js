/* jshint devel:true */
'use strict';

var ReferenceHelper = (function () {
    var letterArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function NumericToAlpha(number) {
        if (number === 0){return ""}
        var zeroIndexed = number - 1;
        var lastLetter = letterArray[zeroIndexed % letterArray.length];
        var remainder = Math.floor(zeroIndexed / 26);
        var otherLetters = NumericToAlpha(remainder);
        return otherLetters + lastLetter;
    }

    return { NumericToAlpha: NumericToAlpha };
})();

function TableBuilder($table) {
    this.$table = $table;
}

TableBuilder.prototype = {
    build: function() {
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
    addDataRows: function() {
        console.log('data');
    },
    addColumnHeaderCell: function($row, rowNumber) {
        var rowLetter = ReferenceHelper.NumericToAlpha(rowNumber);
        var $th = $('<th>');
        $th.text(rowLetter);
        $row.append($th);
    }
};

$(function startApplication() {
    (new TableBuilder($('table'))).build();
});
