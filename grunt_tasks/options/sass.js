/*globals module*/
module.exports = {
    options: {
        cacheLocation: 'sass-cache',
        precision: 3
    },
    delivery: {
        files: {
            'target/css/style.css': 'src/scss/main.scss'
        }
    }
};
