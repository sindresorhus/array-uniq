import test from 'ava';
import arrayUniq from './index.js';

test('main', t => {
	t.deepEqual(arrayUniq([1, 2, 2, 3, 1, 2, 4]), [1, 2, 3, 4]);
	t.deepEqual(arrayUniq(['a', 'a', 'b', 'a', 'c', 'a', 'd']), ['a', 'b', 'c', 'd']);
});
