function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("ChickenFace", "asd", false);

//Default Parameters
function wee(person: string = "stranger") {
  return `Hi there, ${person}`;
}

//Return types
function wowo(person: string = "stranger"): string {
  return `Hi there, ${person}`;
}

const add = (x: number, y: number): number => {
  return x;
};

//Annonymous function
const colors = ["red", "orange", "yellow"];
colors.map((color) => {});

//Void (functions that dont return anything)
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  return "";
}

//Exception or loops use never
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("game running");
  }
}

function twoFer(person: string = "you"): string {
  return `One for ${person}, one for me`;
}

function isLeapyear(year: number): boolean {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  }
  return false;
}
