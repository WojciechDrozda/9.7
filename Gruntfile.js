module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	// pass in options to plugins, references to files
	sass: { 
		options: { 
			sourceMap: true 
		}, 
		dist: { 
			files: { 
				'css/style.css': 'sass/style.sass' 
			} 
		} 
	},

	watch: { 
		scripts: { 
			files: ['sass/*.sass', 'css/*.css', '*.html'], 
			tasks: ['sass'], 
			options: { 
				spawn: false, 
			}
		} 
	} //,
    jshint: {
      all: ['js/*.js']
    }
	 });
	// Load the plugins tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// Default task(s).
	grunt.registerTask('default', ['jshint', 'watch']);
};