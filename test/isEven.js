const isEven = require('../isEven.js');

QUnit.module('isEven');

/** #1 num = 2 */
QUnit.test('isEven', assert => {
    assert.equal(isEven(2), true, '2 % 2');
});
/** #2 num = 1 */
QUnit.test('isEven', assert => {
    assert.equal(isEven(1), false, '1 % 2');
});
/** #3 num = 0 */
QUnit.test('isEven', assert => {
    assert.equal(isEven(0), true, '0 % 2');
});
/** #4 num = -1 */
QUnit.test('isEven', assert => {
    assert.equal(isEven(-1), false, '-1 % ');
});
/** #5 num = -2 */
QUnit.test('isEven', assert => {
    assert.equal(isEven(-2), true, '-2 % 2');
});
/** #6 num = "string" */
QUnit.test('isEven', assert => {
    assert.equal(isEven("string"), false, ' "string" % 2');
});
/** #7 num = undefined */
QUnit.test('isEven', assert => {
    assert.equal(isEven(undefined), false, 'undefined % 2');
});
/** #8 num = null */
QUnit.test('isEven', assert => {
    assert.equal(isEven(null), true, 'null % 2');
});
/** #9 num = NaN */
QUnit.test('isEven', assert => {
    assert.equal(isEven(NaN), false, 'NaN % 2');
});
/** #10 num = isNaN(NaN) */
QUnit.test('isEven', assert => {
    assert.equal(isEven(isNaN(NaN)), false, 'isNaN(NaN) % 2');
});
/** #11 num = false */
QUnit.test('isEven', assert => {
    assert.equal(isEven(false), true, 'false % 2');
});
/** #12 num = true */
QUnit.test('isEven', assert => {
    assert.equal(isEven(true), false, 'true % 2');
});
/** #13 num = Object */
QUnit.test('isEven', assert => {
    assert.equal(isEven(Object), false, 'Object % 2');
});
/** #14 num = Infinity */
QUnit.test('isEven', assert => {
    assert.equal(isEven(Infinity), false, 'Infinity % 2');
});
/** #15 num = 2.2*/
QUnit.test('isEven', assert => {
    assert.equal(isEven(2.2), false, '2.2 % 2');
});
/** #16 num = "2"*/
QUnit.test('isEven', assert => {
    assert.equal(isEven("2"), true, '"2" % 2');
});