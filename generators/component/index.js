'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('componentname', {
      desc: 'Name of the element to generate',
      required: true
    });
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    this.componentname = capitalizeFirstLetter(this.componentname);
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the grand ' + chalk.red('generator-react-dom-native Component') + ' generator!'
    ));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {

    var copyFile = function(tplPath, componentPath){
      this.fs.copyTpl(
        this.templatePath(tplPath),
        this.destinationPath(this.componentname + '/' + componentPath),
        { componentName: this.componentname }
      );
    }.bind(this);

    copyFile('Component.native.js', this.componentname + '.native.js');
    copyFile('Component.web.js', this.componentname + '.web.js');
    copyFile('ComponentLogic.js', this.componentname + 'Logic.js');
    copyFile('ComponentRender.android.js', this.componentname + 'Render.android.js');
    copyFile('ComponentRender.ios.js', this.componentname + 'Render.ios.js');
    copyFile('ComponentRender.native.js', this.componentname + 'Render.native.js');
    copyFile('ComponentRender.web.js', this.componentname + 'Render.web.js');
    copyFile('ComponentRender.native.test.js', '__tests_/' + this.componentname + 'Render.native.test.js');
    copyFile('ComponentRender.web.test.js', '__tests_/' + this.componentname + 'Render.web.test.js');
    copyFile('ComponentLogic.test.js', '__tests_/' + this.componentname + 'Logic.test.js');
  },

  install: function () {

  }
});
