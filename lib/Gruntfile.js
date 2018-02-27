module.exports = function (grunt) {

    grunt.initConfig({

        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['../*.*html', '../**/*.*html']
            },
            cs: {
                files: ['../**/**/*.cs']
            }
        }
    });

    //require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', [ 'watch']);
    grunt.loadNpmTasks('grunt-contrib-watch');
};