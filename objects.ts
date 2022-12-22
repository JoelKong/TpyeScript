const dog = {
  name: "Elton",
  breed: "Australian Shepherd",
  age: 0.5,
};

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: "Thomas", last: "Jenkins" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: 2, y: 1 };
}

//Type Alias
type Point = {
  x: number;
  y: number;
};

let aaa: Point = { x: 34, y: 2 };

type myNum = number;
let age: myNum = 23234;

//Nested objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: String };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1234545,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

calculatePayout(mySong);
printSong(mySong);

//Optional Params
type bb = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };

//Read only
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 1233,
  username: "cat",
};

user.id = 123123;
