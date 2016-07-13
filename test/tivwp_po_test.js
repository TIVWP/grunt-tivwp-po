'use strict';

var grunt = require('grunt');

exports.tivwp_po = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    all  : function (test) {
        var expected, actual;

        // Two assertions below.
        test.expect(2);

        actual = grunt.file.read('tmp/test-ru_RU.po');
        expected = grunt.file.read('test/expected/test-ru_RU.po');
        test.equal(actual, expected, 'Resulting PO file should be equal to the Expected.');

        actual = grunt.file.read('tmp/test-de_DE.po');
        expected = grunt.file.read('test/expected/test-de_DE.po');
        test.equal(actual, expected, 'Resulting PO file should be equal to the Expected.');

        test.done();
    }
};

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */
