/* jshint devel:true */
'use strict';

$(function startApplication() {
    var $table = $('table');
    (new TableBuilder($table)).build();
    var dataBinder = new DataBinder($table);
    dataBinder.Initialize();
});
