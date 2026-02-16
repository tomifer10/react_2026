function greet(name: string): string {
  return `Hola ${name}`;
}

const greetTwo = (name: string): string => {
  return `Hola ${name}`;
};

const greetThree = (name: string): string => `Hola ${name}`;

const message = greet("Goku");
const messageTwo = greetTwo("Vegeta");
const messageThree = greetThree("Kakaroto");

console.log(message);
console.log(messageTwo);
console.log(messageThree);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: "ABC - 123",
    username: "El_Papi23",
  };
}

const getUserTwo = () => {
  return {
    uid: "Abc - Flecha",
    username: "El_flecha",
  };
};

const getUserThree = () => ({
  uid: "abc -three",
  username: "Flechca_tres",
});

const user = getUser();
console.log(user);

console.log(getUserTwo);
