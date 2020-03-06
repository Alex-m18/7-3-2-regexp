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
  expect(character.attack()).toBeCloseTo(10.0, 2);
  expect(character.attack(5)).toBeCloseTo(6.0, 2);
});

test('should be stoned', () => {
  const character = new Daemon('vasya');
  character.stoned = true;
  expect(character.stoned).toBe(true);
  expect(character.attack(2)).toBeCloseTo(4.0, 2);
  expect(character.attack(4)).toBeCloseTo(0.0, 2);
});
