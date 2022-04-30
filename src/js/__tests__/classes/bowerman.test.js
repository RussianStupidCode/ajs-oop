import Bowerman from '../../classes/bowerman';

test('correct create bowerman', () => {
  const person = new Bowerman('john', 'Bowerman');

  expect(person.level).toBe(1);
  expect(person.health).toBe(100);
  expect(person.attack).toBe(25);
  expect(person.defense).toBe(25);
  expect(person.name).toBe('john');
  expect(person.type).toBe('Bowerman');
});
