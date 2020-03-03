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
  expect(character.attack()).toBe(10.0);
  expect(character.attack(5)).toBe(6.0);
});

test('should be stoned', () => {
  const character = new Magician('vasya');
  character.stoned = true;
  expect(character.stoned).toBe(true);
  expect(character.attack(2)).toBe(4.0);
  expect(character.attack(4)).toBe(0.0);
});
