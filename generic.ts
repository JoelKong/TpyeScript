const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;

interface Cat {
  name: string;
  breed: string;
}

function identity<Type>(item: Type): Type {
  return item;
}

identity<number>(7);
identity<Cat>({});

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

getRandomElement(["a", "b"]);

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}
