let agee: number | string | boolean = 21;
agee = 23;
agee = "24";

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

//Type narrowing
function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = price.replace("$", "");
    return parseFloat(price) * tax;
  } else {
    price * tax;
  }
}
