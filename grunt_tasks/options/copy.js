/*global module*/
module.exports = {
    js: {
        expand: true,
        cwd: 'src/js/',
        src: ['**'],
        dest: 'target/js'
    },

    bowerComponents: {
        expand: true,
        cwd: 'bower_components/',
        src: ['**'],
        dest: 'target/js/vendor/'
    }
};
