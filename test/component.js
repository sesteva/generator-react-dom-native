'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-react-dom-native:component', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['myComponent'])
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'myComponent/myComponent.native.js',
      'myComponent/myComponent.web.js',
      'myComponent/myComponentLogic.js',
      'myComponent/myComponentRender.native.js',
      'myComponent/myComponentRender.ios.js',
      'myComponent/myComponentRender.android.js',
      'myComponent/myComponentRender.web.js',
      'myComponent/__tests__/myComponentRender.web.test.js',
      'myComponent/__tests__/myComponentRender.native.test.js',
      'myComponent/__tests__/myComponentLogic.test.js',
    ]);
  });
});
