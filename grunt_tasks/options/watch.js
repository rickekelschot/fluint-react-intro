/*globals module*/
module.exports = {
    options: {
        livereload: true
    },
    sass: {
        files: [
            'src/scss/**/*.scss'
        ],
        tasks: ['sass']
    },
    js: {
        files: [
            'src/js/**/*.js'
        ],
        tasks: ['jshint']
    }
};
