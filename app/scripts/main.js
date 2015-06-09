/* jshint devel:true */
'use strict';

function TableBuilder($table) {
    this.$table = $table;
}

TableBuilder.prototype = {
    build: function() {
        this.addHeaderRow();
        this.addDataRows();
    },
    addHeaderRow: function() {
        console.log('header');
    },
    addDataRows: function() {
        console.log('data');
    }
};

$(function startApplication() {
    (new TableBuilder()).build();
});
