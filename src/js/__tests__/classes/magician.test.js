import Magician from '../../classes/magician';

test('correct create magician', () => {
  const person = new Magician('bob', 'Magician');

  expect(person.level).toBe(1);
  expect(person.health).toBe(100);
  expect(person.attack).toBe(10);
  expect(person.defense).toBe(40);
  expect(person.name).toBe('bob');
  expect(person.type).toBe('Magician');
});
