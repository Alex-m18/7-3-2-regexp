import ErrorRepository from '../ErrorRepository';

test('Should correctly work with ErrorRepository', () => {
  expect(ErrorRepository.translate(1)).toBe('Error description 1');
  expect(ErrorRepository.translate(2)).toBe('Error description 2');
  expect(ErrorRepository.translate(3)).toBe('Error description 3');
  expect(ErrorRepository.translate(4)).toBe('Unknown error');
});
