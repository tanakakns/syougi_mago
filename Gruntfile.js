'use strict';

module.exports = function(grunt) {

  // initConfigの中で各タスクを設定
  grunt.initConfig({
    // package.jsonに設定されている内容を取得
    // バージョンや名称などの情報を外部ファイルで共通化できる
    pkg: grunt.file.readJSON("package.json"),
    
    // cleanタスク（grunt-contrib-clean）の設定
    clean: ["dest/*"],
    
    // coffeeタスク（grunt-contrib-coffee）の設定
    // coffee: {
    //   compile: {
    //     expand: true,
    //     cwd: 'src/coffee/',
    //     src: '*.coffee',
    //     dest: 'dest/assets/js',
    //     ext: '.js'
    //   }
    // },
    
    // copyタスク（grunt-contrib-copy）の設定
    copy: {
      img: {
        expand: true,
        cwd: 'src/',
        src: 'img/**',
        dest: 'dest/assets'
      },
      vendor_js: {
        files: [
          {expand: true, cwd: 'bower_components/jquery/dist/', src: '**/*.min.js', dest: 'dest/assets/js/vendor'},
          {expand: true, cwd: 'bower_components/bootstrap/dist/js/', src: '**/*.min.js', dest: 'dest/assets/js/vendor'}
        ]
      },
      vendor_css: {
        files: [
          {expand: true, cwd: 'bower_components/bootstrap/dist/css/', src: '**/*.min.css', dest: 'dest/assets/css/vendor'}
        ]
      }
    },
    
    // jadeタスク（grunt-contrib-jade）の設定
    jade: {
      options: {
        pretty: true
      },
      compile: {
        expand: true,
        cwd: 'src/jade/',
        src: '*.jade',
        dest: 'dest/',
        ext: '.html'
      }
    },
    
    // sassタスク（grunt-contrib-sass）の設定
    sass: {
      compile: {
        expand: true,
        cwd: 'src/scss/',
        src: ['*.scss'],
        dest: 'dest/assets/css',
        ext: '.css'
      }
    },
    
    // connectタスク（grunt-contrib-connect）の設定
    connect: {
      local: {
        options: {
          port: 80,
          hostname: '127.0.0.1',
          base: 'dest/',
          keepalive: true
        }
      }
    }
  });

  // プラグインをロード
  // grunt.loadNpmTasks('プラグイン名');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // gruntコマンドのデフォルトタスクにcleanを追加
  // grunt.registerTask(<タスク名>, [<タスクの説明>,] <タスク内容>);
  // grunt.registerTask('default', ['clean']);
  grunt.registerTask('build', ['clean', 'copy', 'jade', 'sass']);
};