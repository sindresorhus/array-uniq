require('es6-set/implement');
const test = require('ava');
const requireUncached = require('require-uncached');

test('removes duplicates from an array', t => {
	const m = require('./');

	t.deepEqual(m([1, 2, 2, 3, 1, 2, 4]), [1, 2, 3, 4]);
	t.deepEqual(m(['a', 'a', 'b', 'a', 'c', 'a', 'd']), ['a', 'b', 'c', 'd']);
});

test('removes duplicates from an array using Set', t => {
	delete global.Set;
	const m = requireUncached('./');

	t.deepEqual(m([1, 2, 2, 3, 1, 2, 4]), [1, 2, 3, 4]);
	t.deepEqual(m(['a', 'a', 'b', 'a', 'c', 'a', 'd']), ['a', 'b', 'c', 'd']);
});

