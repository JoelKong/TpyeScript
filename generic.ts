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

function merge<T, U>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
