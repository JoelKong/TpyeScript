interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 123 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  saybye(): string;
}

const thomas: Person = {
  first: "thomas",
  last: "hardy",
  id: 12123,
  sayHi: () => {
    return "hello";
  },
  saybye: () => {
    return "bye";
  },
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "asd",
  price: 100,
  applyDiscount(amount: number) {
    return 2;
  },
};

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "eltron",
  age: 0.5,
  breed: "asdasd",
  bark() {
    return "woof";
  },
};

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "chewt",
  age: 4.5,
  breed: "lab",
  bark() {
    return "bark";
  },
  job: "drug sniffer",
};

interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}
