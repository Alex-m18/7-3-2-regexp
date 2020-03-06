import Magician from '../Magician';

test('should return Magician', () => {
  const expected = {
    name: 'vasya',
    private: {
      type: 'Magician',
      level: 1,
      health: 100,
      attack: 10,
      defence: 40,
    },
  };
  expect(new Magician('vasya')).toMatchObject(expected);
});

test('should not be stoned', () => {
  const character = new Magician('vasya');
  expect(character.stoned).toBe(false);
  expect(character.attack()).toBeCloseTo(10.0, 2);
  expect(character.attack(5)).toBeCloseTo(6.0, 2);
});

test('should be stoned', () => {
  const character = new Magician('vasya');
  character.stoned = true;
  expect(character.stoned).toBe(true);
  expect(character.attack(2)).toBeCloseTo(4.0, 2);
  expect(character.attack(4)).toBeCloseTo(0.0, 2);
});
