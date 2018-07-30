import substr from '../substr';

test('substr', () => {
  expect(substr('')).toEqual('');
  expect(substr('abba', 4, -10)).toEqual('');
  expect(substr('abba')).toEqual('abba');
  expect(substr('abba', 1, 0)).toEqual('');
  expect(substr('abba', 0, 1)).toEqual('a');
  expect(substr('abba', 1, 2)).toEqual('bb');
  expect(substr('abba', -10, 2)).toEqual('ab');
  expect(substr('abba', -1, 100)).toEqual('abba');
  expect(substr('abba', -1, -1)).toEqual('a');
  expect(substr('abba', 1, -10)).toEqual('b');
  expect(substr('abba', 1, 10)).toEqual('bba');
});
