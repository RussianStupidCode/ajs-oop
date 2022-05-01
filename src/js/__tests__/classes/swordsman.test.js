import Swordsman from '../../classes/swordsman';

test('correct create swordsman', () => {
  const person = new Swordsman('bob', 'Swordsman');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 40,
    _defense: 10,
    _name: 'bob',
    _type: 'Swordsman',
  };

  expect(expected).toEqual(person);
});
