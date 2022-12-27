class Player {
  #score = 0;
  numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }

  get fullName() {
    return `${this.first} ${this.last}`;
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

const player1 = new Player("blue", "steele");
player1.taunt();
