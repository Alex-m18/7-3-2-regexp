/**
 * ErrorRepository class. Stores error codes and descriptions
 * @class
 */
class ErrorRepository { }

ErrorRepository.errors = new Map([
  [1, 'Error description 1'],
  [2, 'Error description 2'],
  [3, 'Error description 3'],
]);

ErrorRepository.translate = (code) => ErrorRepository.errors.get(code) || 'Unknown error';

export default ErrorRepository;
