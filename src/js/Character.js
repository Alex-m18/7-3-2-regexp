/**
 * Creates new Character
 * @class
 *
 * @param {string} name Character name (2...10 symbols)
 * @param {string} type Character type (see characterTypes)
 *
 * @throws Will throw an error if the name length is wrong
 */
class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Error in Character: wrong name length');
    }

    this.name = name;
    this.private = {
      type,
      level: 1,
      health: 100,
      attack: 1,
      defence: 1,
      powerModeAttacks: 0,
      powerModeUsed: false,
    };
  }

  get type() {
    return this.private.type;
  }

  get level() {
    return this.private.level;
  }

  set level(value) {
    if (this.level > value) throw new Error("Can't decrease level");
    while (this.level < value) this.levelUp();
  }

  get powerModeEnabled() {
    if (this.private.powerModeAttacks) return true;
    return false;
  }

  enablePowerMode() {
    if (this.private.powerModeUsed) return false;
    this.private.powerModeAttacks = 3;
    this.private.powerModeUsed = true;
    return true;
  }

  get attack() {
    if (this.private.powerModeAttacks) {
      this.private.powerModeAttacks -= 1;
      return this.private.attack * 2;
    }
    return this.private.attack;
  }

  // set attack(value) { this.private.attack = value; }

  get health() {
    if (this.private.powerModeAttacks) return this.private.health * 2;
    return this.private.health;
  }

  // set health(value) { this.private.health = value; }

  get defence() {
    if (this.private.powerModeAttacks) return this.private.defence * 2;
    return this.private.defence;
  }

  // set defence(value) { this.private.defence = value; }

  damage(points) {
    this.private.health -= points * (1 - this.defence / 100);
    if (this.health < 0) this.private.health = 0;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("Can't level up dead character");
    }
    this.private.level += 1;
    this.private.attack *= 1.2;
    this.private.defence *= 1.2;
    this.private.health = 100;
  }
}

export default Character;
