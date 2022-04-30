import Daemon from '../../classes/daemon';

test('correct create daemon', () => {
  const person = new Daemon('bob', 'Daemon');

  expect(person.level).toBe(1);
  expect(person.health).toBe(100);
  expect(person.attack).toBe(10);
  expect(person.defense).toBe(40);
  expect(person.name).toBe('bob');
  expect(person.type).toBe('Daemon');
});
