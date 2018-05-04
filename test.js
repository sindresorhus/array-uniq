import test from 'ava';
import m from '.';

test('main', t => {
	t.deepEqual(m([1, 2, 2, 3, 1, 2, 4]), [1, 2, 3, 4]);
	t.deepEqual(m(['a', 'a', 'b', 'a', 'c', 'a', 'd']), ['a', 'b', 'c', 'd']);
});
