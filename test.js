import test from 'ava';
import isSugar from '.';

test('is-sugar', async t => {
	t.is(await isSugar, false);
});
