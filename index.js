'use strict';

function uniq(arr) {
	var ret = [];

	for (var i = 0; i < arr.length; i++) {
		if (ret.indexOf(arr[i]) === -1) {
			ret.push(arr[i]);
		}
	}

	return ret;
}

function uniqSet(arr) {
	var seen = new Set;
	return arr.filter(function(item){
		if (!seen.has(item)) {
			seen.add(item);
			return true;
		}
	});
}

module.exports = 'Set' in global ? uniqSet : uniq;
