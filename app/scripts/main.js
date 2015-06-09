/* jshint devel:true */
'use strict';

var dataBinder = new DataBinder();

$(function startApplication() {
    var $table = $('table');
    (new TableBuilder($table)).build();
    dataBinder.initialize($table);

    var formatter = new Formatter();
    formatter.bindButtons();
    formatter.trackSelectedCell();
});
