module.exports = function (grunt) {
  grunt.initConfig({
    
    // Build LESS
    less: {
      development: {
        files: {
          './css/markup-makeup.css': './less/markup-makeup.less'
        }
      }
    },

    // Run tasks when files change
    watch: {
      less: {
        files: './less/*.less',
        tasks: ['less'],
        options: {
          // don't reload since the css files changes are monitored
        }
      },
      css: {
        files: './css/*.css',
        options: {
          livereload: true
        }
      },
      html: {
        files: './*.html',
        options: {
          livereload: true
        }
      }
    }
  });

  // Load the tasks
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Speficty the default task
  grunt.registerTask('default', ['less']);
};
