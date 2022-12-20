let movieTitle: string = "Amadeus";
movieTitle = "arrival";
movieTitle.toUpperCase();

let numCatLives: number = 9;

let gameOver: boolean = true;

//Type inference
let tvShow = "Olive blablabla";
tvShow = false;

//the any type
let thing: any = "hello";
thing = 1;
thing = false;
thing();

//infer as any
const movies = ["asad", "asdasqweq"];
let foundMovie: string;

for (let movie of movies) {
  if (movie === "asad") {
    foundMovie = "Amadeus";
  }
}
