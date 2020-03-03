import Bowman from '../Bowman';

test('should return Bowman', () => {
  const expected = {
    name: 'vasya',
    private: {
      type: 'Bowman',
      level: 1,
      health: 100,
      attack: 25,
      defence: 25,
    },
  };
  const character = new Bowman('vasya');
  expect(character).toMatchObject(expected);
  expect(character.name).toBe('vasya');
  expect(character.type).toBe('Bowman');
});

test('should throw', () => {
  expect(() => new Bowman('v')).toThrow();
  expect(() => new Bowman('v1234567890')).toThrow();
});

test('should damage', () => {
  const character = new Bowman('vasya');
  character.damage(100);
  expect(character.health).toBe(25);
  character.damage(10);
  expect(character.health).toBe(17.5);
  character.damage(100);
  expect(character.health).toBe(0);
});

test('should levelUp', () => {
  const character = new Bowman('vasya');
  character.damage(100);
  character.levelUp();
  const expected = {
    name: 'vasya',
    private: {
      type: 'Bowman',
      level: 2,
      health: 100,
      attack: 30,
      defence: 30,
    },
  };
  expect(character).toMatchObject(expected);
});

test('should throw on levelUp', () => {
  const character = new Bowman('vasya');
  character.damage(1000);
  expect(() => character.levelUp()).toThrow();
  expect(character.level).toBe(1);
});

test('should use powerMode', () => {
  const character = new Bowman('vasya');

  character.enablePowerMode();
  expect(character.health).toBe(200);
  expect(character.defence).toBe(50);
  expect(character.attack).toBe(50);
  expect(character.powerModeEnabled).toBe(true);

  expect(character.attack).toBe(50);
  expect(character.powerModeEnabled).toBe(true);

  expect(character.attack).toBe(50);
  expect(character.powerModeEnabled).toBe(false);

  character.enablePowerMode();
  expect(character.powerModeEnabled).toBe(false);
  expect(character.health).toBe(100);
  expect(character.defence).toBe(25);
  expect(character.attack).toBe(25);
});

test('should create levelUpped Bowman', () => {
  const character = new Bowman('vasya', 5);
  expect(character.level).toBe(5);
  expect(character.defence).toBe(51.84);
  expect(character.attack).toBe(51.84);
});

test('should throw on decreasing level', () => {
  const character = new Bowman('vasya', 5);
  expect(() => { character.level = 2; }).toThrow();
});
