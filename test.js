'use strict';
require('es6-set/implement');
var assert = require('assert');
var requireUncached = require('require-uncached');

it('should remove duplicates from an array', function () {
	var arrayUniq = require('./');
	assert.deepEqual(arrayUniq([1, 2, 2, 3, 1, 2, 4]), [1, 2, 3, 4]);
	assert.deepEqual(arrayUniq(['a', 'a', 'b', 'a', 'c', 'a', 'd']), ['a', 'b', 'c', 'd']);
});

it('should remove duplicates from an array using Set', function () {
	delete global.Set;
	var arrayUniq = requireUncached('./');
	assert.deepEqual(arrayUniq([1, 2, 2, 3, 1, 2, 4]), [1, 2, 3, 4]);
	assert.deepEqual(arrayUniq(['a', 'a', 'b', 'a', 'c', 'a', 'd']), ['a', 'b', 'c', 'd']);
});

