import Daemon from '../../classes/daemon';

test('correct create daemon', () => {
  const person = new Daemon('bob', 'Daemon');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 10,
    _defense: 40,
    _name: 'bob',
    _type: 'Daemon',
  };

  expect(expected).toEqual(person);
});
