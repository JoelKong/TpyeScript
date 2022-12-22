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
