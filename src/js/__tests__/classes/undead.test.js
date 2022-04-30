import Undead from '../../classes/undead';

test('correct create Undead', () => {
  const person = new Undead('dracula', 'Undead');

  expect(person.level).toBe(1);
  expect(person.health).toBe(100);
  expect(person.attack).toBe(25);
  expect(person.defense).toBe(25);
  expect(person.name).toBe('dracula');
  expect(person.type).toBe('Undead');
});
