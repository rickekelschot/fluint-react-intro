/*globals module, grunt*/
module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('default', 'Build in debug mode and start a server plus open browser to localhost', [
        'compile',
        'connect',
        'jshint',
        'open',
        'watch'
    ]);
};
