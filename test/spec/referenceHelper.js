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

        describe('AlphaToNumeric', function () {
            it('should return 1 when given A', function () {
                var actual = ReferenceHelper.AlphaToNumeric('A');
                expect(actual).toBe(1);
            });

            it('should return 2 when given B', function () {
                var actual = ReferenceHelper.AlphaToNumeric('B');
                expect(actual).toBe(2);
            });

            it('should return 3 when given C', function () {
                var actual = ReferenceHelper.AlphaToNumeric('C');
                expect(actual).toBe(3);
            });

            it('should return 26 when given Z', function () {
                var actual = ReferenceHelper.AlphaToNumeric('Z');
                expect(actual).toBe(26);
            });

            it('should return 27 when given AA', function () {
                var actual = ReferenceHelper.AlphaToNumeric('AA');
                expect(actual).toBe(27);
            });

            it('should return 28 when given AB', function () {
                var actual = ReferenceHelper.AlphaToNumeric('AB');
                expect(actual).toBe(28);
            });

            it('should return 52 when given AZ', function () {
                var actual = ReferenceHelper.AlphaToNumeric('AZ');
                expect(actual).toBe(52);
            });

            it('should return 53 when given BA', function () {
                var actual = ReferenceHelper.AlphaToNumeric('BA');
                expect(actual).toBe(53);
            });
        });
    });
})();
