import Settings from '../Settings';

test('Should correctly work with Settings', () => {
  const settingsManager = new Settings();
  expect(settingsManager.defaultSettings.get('theme')).toBe('dark');
  expect(settingsManager.defaultSettings.get('music')).toBe('trance');
  expect(settingsManager.defaultSettings.get('difficulty')).toBe('easy');

  expect(() => settingsManager.setUserSetting('nick', 'vasya')).toThrow();
  expect(() => settingsManager.setUserSetting('theme', 'green')).toThrow();
  expect(() => settingsManager.setUserSetting('theme', 'gray')).not.toThrow();
  expect(() => settingsManager.setUserSetting('music', 'off')).not.toThrow();

  const expected = ['gray', 'off', 'easy'];
  expect([...settingsManager.settings.values()]).toEqual(expected);

  expect(() => settingsManager.setUserSetting('music', 'trance')).not.toThrow();
  expect([...settingsManager.userSettings.values()]).toEqual(['gray']);
});
