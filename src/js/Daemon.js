import StonedCharacter from './StonedCharacter';

class Daemon extends StonedCharacter {
  constructor(name, level = 1) {
    super(name, 'Daemon');
    this.private.attack = 10;
    this.private.defence = 40;
    this.level = level;
  }
}

export default Daemon;
