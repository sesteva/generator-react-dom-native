'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-react-dom-native:component', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['MyComponent'])
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'MyComponent/MyComponent.native.js',
      'MyComponent/MyComponent.web.js',
      'MyComponent/MyComponentLogic.js',
      'MyComponent/MyComponentRender.native.js',
      'MyComponent/MyComponentRender.ios.js',
      'MyComponent/MyComponentRender.android.js',
      'MyComponent/MyComponentRender.web.js',
      'MyComponent/__tests_/MyComponentRender.web.test.js',
      'MyComponent/__tests_/MyComponentRender.native.test.js',
      'MyComponent/__tests_/MyComponentLogic.test.js',
    ]);
  });
});
