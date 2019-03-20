import {expectType} from 'tsd';
import arrayUniq from '.';

expectType<number[]>(arrayUniq([1, 2, 3]));
