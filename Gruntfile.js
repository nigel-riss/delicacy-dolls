module.exports = function (grunt) {
    "use strict";

    require('load-grunt-tasks')(grunt);

    var config = {
        pkg: grunt.file.readJSON('package.json'),


        sass: {
            style: {
                expand: true,
                files: [{
                    'source/css/styles.css': 'source/sass/styles.scss'
                }]
            }
        },

        csscomb: {
            style: {
                expand: true,
                src: ['source/sass/**/*.scss', 'source/css/**/*.css']
            }
        },

        // livereload: {
        //     style: {

        //     }
        // },

        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "localhost",
                    //base: "source/**/*.*",
                    bases: ["source"],
                    livereload: true
                }
            }
        },

        watch: {
            style: {
                files: ['source/sass/**/*.scss'],
                tasks: ['sass', 'csscomb'],
                // tasks: ['sass', 'postcss'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    };

    grunt.initConfig(config);
    grunt.registerTask("server", ["express", "watch"]);
};