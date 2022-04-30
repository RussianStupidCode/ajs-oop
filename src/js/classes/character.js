export default class Character {
  constructor(name, type, attack = 0, defense = 0) {
    if (typeof name !== 'string' || typeof type !== 'string') {
      throw TypeError();
    }

    if (name.length < 2 || name.length > 10) {
      throw Error('name length should be between 2 and 10');
    }

    if (type !== this.constructor.name) {
      throw Error(`error type = ${type}`);
    }

    this._name = name;
    this._type = type;
    this._level = 1;
    this._health = 100;

    this._attack = attack;
    this._defense = defense;
  }

  get attack() {
    return this._attack;
  }

  get health() {
    return this._health;
  }

  get defense() {
    return this._defense;
  }

  get level() {
    return this._level;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  levelUp() {
    if (this.health < 1) {
      throw Error('lvlUp for dead character');
    }
    this._level += 1;
    this._attack *= 1.2;
    this._defense *= 1.2;
    this._health = 100;
  }

  damage(points) {
    this._health -= points * (1 - this.defense / 100);
    this._health = Math.max(0, this.health);
  }
}
