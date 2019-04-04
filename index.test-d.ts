import {expectType} from 'tsd';
import arrayUniq = require('.');

expectType<number[]>(arrayUniq([1, 2, 3]));
