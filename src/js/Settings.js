class Settings {
  constructor() {
    this.userSettings = new Map();
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.availableSettings = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);
  }

  setUserSetting(name, value) {
    if (!this.defaultSettings.get(name)) throw new Error('Wrong setting name');
    if (!this.availableSettings.get(name).includes(value)) throw new Error('Wrong setting value');
    if (this.defaultSettings.get(name) === value) this.userSettings.delete(name);
    else this.userSettings.set(name, value);
  }

  get settings() {
    const returningSettings = new Map();
    for (const defaultSetting of this.defaultSettings) {
      returningSettings.set(defaultSetting[0], defaultSetting[1]);
    }
    for (const userSetting of this.userSettings) {
      returningSettings.set(userSetting[0], userSetting[1]);
    }
    return returningSettings;
  }
}

export default Settings;
