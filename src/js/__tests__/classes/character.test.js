import Character from '../../classes/character';

test('short name', () => {
  let errorMessage = 'empty';
  try {
    const person = new Character('o', 'type');
    expect(person.health).toBe(100);
  } catch (error) {
    errorMessage = error.toString();
  }
  expect(errorMessage).toBe('Error: name length should be between 2 and 10');
});

test('long name', () => {
  let errorMessage = 'empty';
  try {
    const person = new Character('o', 'type');
    expect(person.health).toBe(100);
  } catch (error) {
    errorMessage = error.toString();
  }
  expect(errorMessage).toBe('Error: name length should be between 2 and 10');
});

test('uncorrect type', () => {
  let errorMessage = 'empty';
  const type = 'carrot';
  try {
    const person = new Character('o2', type);
    expect(person.health).toBe(100);
  } catch (error) {
    errorMessage = error.toString();
  }
  expect(errorMessage).toBe(`Error: error type = ${type}`);
});

test('uncorrect arguments type', () => {
  let errorMessage = 'empty';
  try {
    const person = new Character(33, 22);
    expect(person.health).toBe(100);
  } catch (error) {
    errorMessage = error.toString();
  }
  expect(errorMessage).toBe('TypeError');
});

test('lvl up for dead person', () => {
  const person = new Character('npc', 'Character');

  person._health = 0;
  let errorMessage = 'empty';
  try {
    person.levelUp();
  } catch (error) {
    errorMessage = error.toString();
  }

  expect(errorMessage).toBe('Error: lvlUp for dead character');
});

test('succesful lvlup', () => {
  const person = new Character('npc', 'Character', 10, 10);

  person._health = 15;
  person.levelUp();

  expect(person.level).toBe(2);
  expect(person.attack).toBeCloseTo(12);
  expect(person.defense).toBeCloseTo(12);
  expect(person.health).toBeCloseTo(100);
});

test('damage', () => {
  const person = new Character('npc', 'Character', 10, 10);

  const points = 10;
  person.damage(points);

  expect(person.health).toBeCloseTo(100 - points * (1 - person.defense / 100));
});
