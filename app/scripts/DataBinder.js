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
    _initializeCellsArray: function() {

    },
    _bindInputsToArray: function() {

    }
};
