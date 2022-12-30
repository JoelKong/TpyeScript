function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

//Truthiness guard
const el = document.getElementById("#idk");
if (el) {
}


const printLetters = (word?: string) {
    if(word) {
        for(let char of word) {
            console.log(char)
        }
    } else {
        console.log('sdfds')
    }
}

//Equality Narrowing (less common)
function someDemo(x:string | number, y: string | boolean) {
    if (x === y) {
        x
        y
    }
}

//in operation narrowing
interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration
    }
    return media.duration
}
getRuntime({title: 'amadues',duration: 140})


//instanceof Narrowing
function printFullDate(date: string | Date) {
    if(date instanceof Date) {
        console.log(date.toUTCString())
    } else {
        new Date(date).toUTCString()
    }
}

class User {
    constructor(public username: string){}
}
class Company {
    constructor(public name: string) {}
}
function printName(entity: User | Company) {
    if (entity instanceof User) {
        entity
    }
}

//Type Predicates
interface Cat {
    name: string,
    numLives: number
}
interface Dog {
    name: string,
    breed: string
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined
}
function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)) {
        animal
    } 
}

//Discriminated Unions
interface Rooster {
    name:string,
    weight:number,
    age:number
    kind: "rooster"
}
interface Cow {
    name:string,
    weight:number,
    age:number
    kind: "cow"
}
interface Pig {
    name: string,
    weight: number,
    age:number
    kind: "pig"
}

type FarmAnimal = Pig | Rooster | Cow

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.kind) {
        case("pig"):
        return "oink!"
        case("cow"):
        animal
        default:
            const shouldNeverGetHere: never = animal
    }
}

