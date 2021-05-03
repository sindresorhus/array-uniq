/**
Create an array without duplicates.

@param array - The array to remove duplicates from.

@example
```
import arrayUniq from 'array-uniq';

arrayUniq([1, 1, 2, 3, 3]);
//=> [1, 2, 3]

arrayUniq(['foo', 'foo', 'bar', 'foo']);
//=> ['foo', 'bar']
```
*/
export default function arrayUniq<ValueType>(array: readonly ValueType[]): ValueType[];
