const assert = require('assert');
const concatString = require('.');
console.log(concatString);

describe('concatString', function() {
  it('empty arguments', function() {
    const result = concatString();
    assert.equal('', result);
  });
  it('simple concat', function() {
    const result = concatString('test1', 'test2');
    assert.equal('test1 test2', result);
  });
  it('space before', function() {
    const result = concatString(' test1', 'test2');
    assert.equal('test1 test2', result);
  });
  it('space before', function() {
    const result = concatString('test1', 'test2 ');
    assert.equal('test1 test2', result);
  });
  it('space inside', function() {
    const result = concatString('test1', ' test2');
    assert.equal('test1 test2', result);
  });
  it('empty argument inside', function() {
    const result = concatString('test1', '', 'test2');
    assert.equal('test1 test2', result);
  });
  it('empty argument before', function() {
    const result = concatString('', 'test1', 'test2');
    assert.equal('test1 test2', result);
  });
  it('empty argument after', function() {
    const result = concatString('test1', 'test2', '');
    assert.equal('test1 test2', result);
  });
  it('space argument inside', function() {
    const result = concatString('test1', ' ', 'test2');
    assert.equal('test1 test2', result);
  });
  it('space argument before', function() {
    const result = concatString(' ', 'test1', 'test2');
    assert.equal('test1 test2', result);
  });
  it('space argument after', function() {
    const result = concatString('test1', 'test2', ' ');
    assert.equal('test1 test2', result);
  });
  it('null argument', function() {
    const result = concatString('test1', 'test2', null);
    assert.equal('test1 test2', result);
  });
  it('undefined argument', function() {
    const result = concatString('test1', 'test2', undefined);
    assert.equal('test1 test2', result);
  });
  it('array', function() {
    const result = concatString(['test1', 'test2']);
    assert.equal('test1 test2', result);
  });
  it('array and space argument', function() {
    let result = concatString(['test1', 'test2'], ' ');
    assert.equal('test1 test2', result);
    result = concatString(['test1', ' '], 'test2');
    assert.equal('test1 test2', result);
  });
  it('include array', function() {
    const result = concatString(['test1', ['test2', 'test3']]);
    assert.equal('test1 test2 test3', result);
  });
});
