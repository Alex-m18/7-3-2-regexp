import StonedCharacter from './StonedCharacter';

class Magician extends StonedCharacter {
  constructor(name, level = 1) {
    super(name, 'Magician');
    this.private.attack = 10;
    this.private.defence = 40;
    this.level = level;
  }
}

export default Magician;
