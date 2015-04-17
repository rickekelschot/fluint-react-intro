/*global module, grunt, require, process*/
//
// Load Grunt task options
//
function loadConfig(path) {
    'use strict';

    var glob = require('glob'),
        object = {},
        key;

    glob.sync('*', {cwd: path}).forEach(function (option) {
        key = option.replace(/\.js$/, '');
        object[key] = require(path + option);
    });

    return object;
}

//
// Grunt configuration
//
module.exports = function (grunt) {
    'use strict';


    // Load grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('matchdep').filterDev('ahws-grunt-*').forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    // Register grunt tasks
    grunt.loadTasks('./grunt_tasks');

    // Set config
    grunt.initConfig(loadConfig('./grunt_tasks/options/'));
};

