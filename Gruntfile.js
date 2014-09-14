module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    nodewebkit: {
      
      buildOsx : {
        options: {
          platforms: ['osx'],
          buildType: 'versioned', // [appName] -v[appVersion]
          // macCredits: 'false',
          // macIcns: 'false',
          // macZip: 'true',
          buildDir: './Build', // Where the build version of my node-webkit app is saved
        },
        src: ['./App/**/*'] // Your node-webkit app
      },

      buildWin : {
        options: {
          platforms: ['win'],
          buildType: 'versioned', // [appName] -v[appVersion]
          // winIco: 'null',
          buildDir: './Build', // Where the build version of my node-webkit app is saved
        },
        src: ['./App/**/*'] // Your node-webkit app
      },

      buildLin32 : {
        options: {
          platforms: ['linux32'],
          buildType: 'versioned', // [appName] -v[appVersion]
          buildDir: './Build', // Where the build version of my node-webkit app is saved
        },
        src: ['./App/**/*'] // Your node-webkit app
      },

      buildLin64 : {
        options: {
          platforms: ['linux64'],
          buildType: 'versioned', // [appName] -v[appVersion]
          buildDir: './Build', // Where the build version of my node-webkit app is saved
        },
        src: ['./App/**/*'] // Your node-webkit app
      }

    }

  });

  // Load the plugin that provides the "nodewebkit" task.
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  // Default task(s).
  grunt.registerTask('default', ['nodewebkit:buildOsx', 'nodewebkit:buildWin', 'nodewebkit:buildLin32', 'nodewebkit:buildLin64']);
  grunt.registerTask('osx', ['nodewebkit:buildOsx']);
  grunt.registerTask('win', ['nodewebkit:buildWin']);
  grunt.registerTask('lin32', ['nodewebkit:buildLin32']);
  grunt.registerTask('lin64', ['nodewebkit:buildLin64']);

};