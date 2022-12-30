class Player {
  static description = "Player In Our Game";
  #score = 0;
  numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }

  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }
  //const p2 = Player.randomPlayer()

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive!");
    }
    this.#score = newScore;
  }
  //   getScore() {
  //     return this.#score;
  //   }

  setScore(newScore) {
    this.#score = newScore;
  }

  taunt() {
    console.log("booyah");
  }

  loseLife() {
    this.numLives -= 1;
  }

  #secret() {
    console.log("fsdf");
  }
}

class AdminPlayer extends Player {
  isAdmin = true;
  constructor(first, last, powers) {
    super(first, last); //Reference to first constructor
    this.powers = powers;
  }
}

const player1 = new Player("blue", "steele");
player1.taunt();
