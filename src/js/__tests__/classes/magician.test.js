import Magician from '../../classes/magician';

test('correct create magician', () => {
  const person = new Magician('bob', 'Magician');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 10,
    _defense: 40,
    _name: 'bob',
    _type: 'Magician',
  };

  expect(expected).toEqual(person);
});
