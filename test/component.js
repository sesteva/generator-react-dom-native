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

  it('generates proper naming conventions for Component.native', function(){
    assert.fileContent('myComponent/myComponent.native.js', /import Render from '\.\/myComponentRender'/)
    assert.fileContent('myComponent/myComponent.native.js', /import Logic from '\.\/myComponentLogic'/)
    assert.fileContent('myComponent/myComponent.native.js', /class MyComponent extends Component/)
  });

  it('generates proper naming conventions for Component.web', function(){
    assert.fileContent('myComponent/myComponent.web.js', /import Render from '\.\/myComponentRender.web'/)
    assert.fileContent('myComponent/myComponent.web.js', /import Logic from '\.\/myComponentLogic'/)
    assert.fileContent('myComponent/myComponent.web.js', /class MyComponent extends Component/)
  });

  it('generates proper naming conventions for ComponentRender.android', function(){
    assert.fileContent('myComponent/myComponentRender.android.js', /import NativeRender from '\.\/myComponentRender.native';/ )
  });

  it('generates proper naming conventions for ComponentRender.ios', function(){
    assert.fileContent('myComponent/myComponentRender.ios.js', /import NativeRender from '\.\/myComponentRender.native';/ )
  });

  it('generates proper naming conventions for ComponentLogic.test', function(){
    assert.fileContent('myComponent/__tests__/myComponentLogic.test.js', /const MyComponent = require\.requireActual\('\.\.\/myComponentLogic'\)/ )
  });

  it('generates proper naming conventions for ComponentRender.native.test', function(){
    assert.fileContent('myComponent/__tests__/myComponentRender.native.test.js', /const MyComponent = require\.requireActual\('\.\.\/myComponentRender.native'\)/ )
  });

  it('generates proper naming conventions for ComponentRender.web.test', function(){
    assert.fileContent('myComponent/__tests__/myComponentRender.web.test.js', /const MyComponent = require\.requireActual\('\.\.\/myComponentRender.web'\)/ )
  });
});
