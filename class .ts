class Playerr {
  //   public readonly first: string;
  //   public readonly last: string;
  #score: number = 0;

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
}
