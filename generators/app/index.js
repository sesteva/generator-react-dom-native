'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('applicationname', {
      desc: 'Name of the application to generate',
      required: true
    });
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    this.applicationname = capitalizeFirstLetter(this.applicationname);
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the grand ' + chalk.red('generator-react-dom-native') + ' generator!'
    ));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {

    // var copyFile = function (tplPath, componentPath){
    //   this.fs.copyTpl(
    //     this.templatePath(tplPath),
    //     this.destinationPath(this.applicationname + '/' + componentPath),
    //     { applicationname: this.applicationname }
    //   );
    // }.bind(this)

  },

  install: function () {
    this.installDependencies();
  }
});
