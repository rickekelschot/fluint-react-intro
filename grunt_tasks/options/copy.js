/*global module*/
module.exports = {
    js: {
        expand: true,
        cwd: 'src/js/',
        src: ['*.js'],
        dest: 'target/js'
    },

    html: {
        expand: true,
        cwd: 'src/',
        src: ['*.html'],
        dest: 'target'
    }
};
