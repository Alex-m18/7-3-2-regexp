import Validator from '../Validator';

test('should validate usernames', () => {
  const validator = new Validator('vasya');
  expect(validator.validateUsername()).toBe(true);
  expect(validator.validateUsername('AR45ANGEL')).toBe(true);
  expect(validator.validateUsername('AL')).toBe(true);
  expect(validator.validateUsername('C3PO')).toBe(true);
  expect(validator.validateUsername('E-two-E-four')).toBe(true);
  expect(validator.validateUsername('OB-_-1-_-CannotB')).toBe(true);
  expect(validator.validateUsername('Kai10_00Ren')).toBe(true);
  expect(validator.validateUsername('e404pagen0tf0und')).toBe(true);
  expect(validator.validateUsername('ma573r')).toBe(true);
});

test('should not validate usernames', () => {
  const validator = new Validator('_vasya');
  expect(validator.validateUsername()).toBe(false);
  expect(validator.validateUsername('g_')).toBe(false);
  expect(validator.validateUsername('_Osip')).toBe(false);
  expect(validator.validateUsername('Zahar_')).toBe(false);
  expect(validator.validateUsername('pol-')).toBe(false);
  expect(validator.validateUsername('_E2_')).toBe(false);
  expect(validator.validateUsername('ЯюFY')).toBe(false);
  expect(validator.validateUsername('FYЯю')).toBe(false);
  expect(validator.validateUsername('R2D2')).toBe(false);
  expect(validator.validateUsername('2oleg')).toBe(false);
  expect(validator.validateUsername('ё')).toBe(false);
  expect(validator.validateUsername('Ё')).toBe(false);
  expect(validator.validateUsername('антон')).toBe(false);
  expect(validator.validateUsername('Kai1000Ren')).toBe(false);
  expect(validator.validateUsername('#8)')).toBe(false);
});
