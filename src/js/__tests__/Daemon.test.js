import Daemon from '../Daemon';

test('should return Daemon', () => {
  const expected = {
    name: 'vasya',
    private: {
      type: 'Daemon',
      level: 1,
      health: 100,
      attack: 10,
      defence: 40,
    },
  };
  expect(new Daemon('vasya')).toMatchObject(expected);
});

test('should not be stoned', () => {
  const character = new Daemon('vasya');
  expect(character.stoned).toBe(false);
  expect(character.attack()).toBe(10.0);
  expect(character.attack(5)).toBe(6.0);
});

test('should be stoned', () => {
  const character = new Daemon('vasya');
  character.stoned = true;
  expect(character.stoned).toBe(true);
  expect(character.attack(2)).toBe(4.0);
  expect(character.attack(4)).toBe(0.0);
});
