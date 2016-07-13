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
        var potFile, options, execSync;

        // Merge task-specific and/or target-specific options with these defaults.
        options = this.options({
            pot_file: "",
            do_mo   : true
        });

        potFile = options.pot_file;

        if (!potFile || !grunt.file.exists(potFile)) {
            grunt.fail.fatal('POT file not found: "' + potFile + '"');
        }

        execSync = require('child_process').execSync;

        this.files.forEach(function (f) {
            // Concat specified files.
            f.src.filter(function (poFile) {
                // Warn on invalid source files.
                if (!grunt.file.exists(poFile)) {
                    grunt.log.warn('PO file "' + poFile + '" not found.');
                } else {
                    grunt.log.writeln("Making PO: " + poFile.cyan);
                    execSync('msgmerge -v --backup=none --no-fuzzy-matching --update ' + poFile + ' ' + potFile);
                    if (options.do_mo) {
                        var moFile = poFile.replace(/\.po$/, '.mo');
                        grunt.log.writeln("Making MO: " + moFile.yellow);
                        execSync('msgfmt -v -o ' + moFile + ' ' + poFile);
                    }
                }
            });
        });
    });
};
