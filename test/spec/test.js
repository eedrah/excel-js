/* jshint devel:true */
(function () {
    'use strict';

    describe('ReferenceHelper', function () {
        describe('NumericToAlpha', function () {
            it('should return A when given 1', function () {
                var actual = ReferenceHelper.NumericToAlpha(1);
                expect(actual).toBe('A');
            });

            it('should return B when given 2', function () {
                var actual = ReferenceHelper.NumericToAlpha(2);
                expect(actual).toBe('B');
            });

            it('should return C when given 3', function () {
                var actual = ReferenceHelper.NumericToAlpha(3);
                expect(actual).toBe('C');
            });

            it('should return Z when given 26', function () {
                var actual = ReferenceHelper.NumericToAlpha(26);
                expect(actual).toBe('Z');
            });

            it('should return AA when given 27', function () {
                var actual = ReferenceHelper.NumericToAlpha(27);
                expect(actual).toBe('AA');
            });

            it('should return AB when given 28', function () {
                var actual = ReferenceHelper.NumericToAlpha(28);
                expect(actual).toBe('AB');
            });

            it('should return AZ when given 52', function () {
                var actual = ReferenceHelper.NumericToAlpha(52);
                expect(actual).toBe('AZ');
            });

            it('should return BA when given 53', function () {
                var actual = ReferenceHelper.NumericToAlpha(53);
                expect(actual).toBe('BA');
            });
        });
    });
})();
