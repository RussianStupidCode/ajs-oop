import Swordsman from '../../classes/swordsman';

test('correct create swordsman', () => {
  const person = new Swordsman('bob', 'Swordsman');

  expect(person.level).toBe(1);
  expect(person.health).toBe(100);
  expect(person.attack).toBe(40);
  expect(person.defense).toBe(10);
  expect(person.name).toBe('bob');
  expect(person.type).toBe('Swordsman');
});
