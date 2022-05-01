import Zombie from '../../classes/zombie';

test('correct create Zombie', () => {
  const person = new Zombie('Rob', 'Zombie');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 40,
    _defense: 10,
    _name: 'Rob',
    _type: 'Zombie',
  };

  expect(expected).toEqual(person);
});
