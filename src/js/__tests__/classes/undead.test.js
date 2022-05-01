import Undead from '../../classes/undead';

test('correct create Undead', () => {
  const person = new Undead('dracula', 'Undead');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 25,
    _defense: 25,
    _name: 'dracula',
    _type: 'Undead',
  };

  expect(expected).toEqual(person);
});
