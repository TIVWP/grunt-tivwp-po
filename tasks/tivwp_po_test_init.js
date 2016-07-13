/*
 * grunt-tivwp-po
 * https://github.com/TIV.NET/grunt-tivwp-po
 *
 * Copyright (c) 2016 Gregory K
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('tivwp_po_test_init', 'Grunt TIVWP MO Test Init', function () {
        grunt.file.write('tmp/test.pot', grunt.file.read('test/fixtures/test.pot'));
        grunt.log.writeln('File "' + 'tmp/test.pot' + '" created.');
        grunt.file.write('tmp/test-ru_RU.po', grunt.file.read('test/fixtures/test-ru_RU.po'));
        grunt.log.writeln('File "' + 'tmp/test-ru_RU.po' + '" created.');
    });

};
