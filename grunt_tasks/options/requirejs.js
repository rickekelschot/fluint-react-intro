/*global module*/
module.exports = {
    options: {
        baseUrl: './js',
        mainConfigFile: './js/config.js',
        name: 'config',
        useStrict: true,
        skipDirOptimize: true,
        out: '<%= pkg.warFolder %><%= pkg.jsFolder %>/<%= pkg.name %>.min.js',
        include: '<%= pkg.requirejs.include %>',
        excludeShallow: '<%= pkg.requirejs.excludeShallow %>',
        paths: '<%= pkg.requirejs.paths %>',
        shim: '<%= pkg.requirejs.shim %>'
    },
    development: {
        options: {
            optimize: 'none',
            preserveLicenseComments: false,
            sourceMap: true,
            buildCSS: false
        }
    },
    delivery: {
        options: {
            optimize: '<%= pkg.requirejs.optimize %>',
            preserveLicenseComments: true,
            sourceMap: false,
            buildCSS: '<%= pkg.requirejs.buildCss %>'
        }
    }
};
