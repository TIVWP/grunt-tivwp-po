/*
 * grunt-tivwp-po
 * https://github.com/TIV.NET/grunt-tivwp-po
 *
 * Copyright (c) 2016 Gregory K
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('tivwp_po', 'Grunt TIVWP MO', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            punctuation: '.',
            separator  : ', '
        });

        this.files.forEach(function (f) {
            var potFile = 'tmp' + '/' + 'test' + '.pot';
            var execSync = require('child_process').execSync;
            // Concat specified files.
            var src = f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                }
                else {
                    grunt.log.writeln('Source file "' + filepath + '" found!');
                    execSync('msgmerge -v --backup=none --no-fuzzy-matching --update ' + filepath + ' ' + potFile);
                }
            });
        });
    });
};
