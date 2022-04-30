import Character from './character';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type, 10, 40);
  }
}
