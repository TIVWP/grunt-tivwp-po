/*
 * grunt-tivwp-po
 * https://github.com/TIVWP/grunt-tivwp-po
 *
 * Copyright (c) 2016 Gregory Karpinsky
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all    : [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        tivwp_po_test_init: {
            all: {}
        },

        // Configuration to be run (and then tested).
        tivwp_po    : {
            all: {
                options: {
                    pot_file: "tmp/test.pot",
                    do_mo: true
                },
                files: [{
                    expand: true,
                    cwd   : "tmp/",
                    src   : ["*.po"]
                }]
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'tivwp_po_test_init', 'tivwp_po', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test', 'clean']);

};
