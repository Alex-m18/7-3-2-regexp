import Character from './Character';

class StonedCharacter extends Character {
  constructor(name, type, level) {
    super(name, type, level);
    this.private.stoned = false;
  }

  get stoned() {
    return this.private.stoned;
  }

  set stoned(value) {
    this.private.stoned = value;
  }

  attack(distance = 1) {
    let resultAttack = (this.private.attack * (1.1 - 0.1 * distance)); // .toFixed(2);
    if (this.private.stoned) resultAttack -= (Math.log2(distance) * 5); // .toFixed(2);
    if (resultAttack < 0) return 0;
    return Number(resultAttack.toFixed(2));
  }
}

export default StonedCharacter;
