interface Person {
  firstName: string;
  lastName: string;
  age: number;
  adress: Adress;
}

interface Adress {
  postalCode: string;
  city: string;
}
const ironman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  adress: {
    postalCode: "ABC123",
    city: "New York",
  },
};

/* const spiderman: Person = {
  firstName: "Peter",
  lastName: "Parker",
  age: 22,
}; */

console.log(ironman);

/* const spiderman = { ...ironman };

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";

console.log(ironman, spiderman); */
