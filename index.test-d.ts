import {expectType} from 'tsd';
import arrayUniq from './index.js';

expectType<number[]>(arrayUniq([1, 2, 3]));
