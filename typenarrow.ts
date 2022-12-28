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