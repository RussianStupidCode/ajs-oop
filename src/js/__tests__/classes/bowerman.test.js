import Bowerman from '../../classes/bowerman';

test('correct create bowerman', () => {
  const person = new Bowerman('john', 'Bowerman');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 25,
    _defense: 25,
    _name: 'john',
    _type: 'Bowerman',
  };

  expect(expected).toEqual(person);
});
