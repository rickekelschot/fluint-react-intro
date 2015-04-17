/*globals module, grunt*/
module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('compile', '', [
        'clean',
        'sass',
        'copy'
    ]);
};
