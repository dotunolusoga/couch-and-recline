'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'styles/main.css': 'styles/main.scss'
				}
			}
		},
		connect: {
			options: {
				port: 8000,
				base: '.',
				hostname: 'localhost',
				useAvailablePort: true,
				open: true
			},
			server: {
				options: {
					livereload: true
				}
			}
		},

		watch: {

      configFiles: {
				files: ['Gruntfile.js', 'bower.json', 'package.json'],
				options: {
					reload: true
				}
			},
			livereload: {
				options: {
					livereload: true
				},

			files: ['*.{html,css,js}']

			},

			sass: {
				files: ['styles/{,*/}*.{scss,sass}'],
				tasks: ['sass']
      }
		}

	});


  grunt.registerTask('build', ['sass']);
  grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
  grunt.registerTask('default', []);
};
