/* jshint devel:true */
(function () {
    'use strict';

    describe('DataBinder', function () {
        describe('_initializeCellsArray', function () {
            it('should create a cell array with the appropriate size', function () {
                var dataBinder = new DataBinder();

                dataBinder._initializeCellsArray(4, 7);

                expect(dataBinder.cells.length).toBe(4);
                expect(dataBinder.cells[0].length).toBe(7);
            });
        });
    });
})();
