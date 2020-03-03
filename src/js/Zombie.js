import Character from './Character';

class Zombie extends Character {
  constructor(name, level = 1) {
    super(name, 'Zombie');
    this.private.attack = 40;
    this.private.defence = 10;
    this.level = level;
  }
}

export default Zombie;
