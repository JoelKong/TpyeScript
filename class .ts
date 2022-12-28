class Playerr {
  //   public readonly first: string;
  //   public readonly last: string;
  //   private _score: number = 0;
  protected _score = 0;

  //   constructor(first: string, last: string) {
  //     this.first = first;
  //     this.last = last;
  //     this.secretMethod();
  //   }

  //Shortcut for parameter properties
  constructor(public first: string, public last: string) {}

  //error when called outside class but still can compile to JS so #private variable still better
  private secretMethod(): void {
    console.log("asd");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative!");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Playerr {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999;
  }
}

interface Colorful {
  color: string;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}
