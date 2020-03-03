import Character from './Character';

class Bowman extends Character {
  constructor(name, level = 1) {
    super(name, 'Bowman');
    this.private.attack = 25;
    this.private.defence = 25;
    this.level = level;
  }
}

export default Bowman;
