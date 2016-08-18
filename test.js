import test from 'ava';
import isSugar from './';

test('is-sugar', t => {
	return isSugar().then(data => {
		t.false(data);
	});
});
