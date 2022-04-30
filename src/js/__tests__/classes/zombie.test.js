import Zombie from '../../classes/zombie';

test('correct create Zombie', () => {
  const person = new Zombie('Rob', 'Zombie');

  expect(person.level).toBe(1);
  expect(person.health).toBe(100);
  expect(person.attack).toBe(40);
  expect(person.defense).toBe(10);
  expect(person.name).toBe('Rob');
  expect(person.type).toBe('Zombie');
});
