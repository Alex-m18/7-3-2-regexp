import Character from './Character';

class Undead extends Character {
  constructor(name, level = 1) {
    super(name, 'Undead');
    this.private.attack = 25;
    this.private.defence = 25;
    this.level = level;
  }
}

export default Undead;
