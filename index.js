const age = 32;
const person = {
  name: "AA",
  age,
};

console.log(person);

const isAdmin5 = false;
const darkMode = true;

const setting = {
  isAdmin5,
  darkMode,
};

console.log(setting);


const sum = (a, b) => {
  console.log({a});
  console.log({b});
  let total = a + b;
  console.log(total);
  return total;
};

console.log(sum(1, 3));


const getUser = (id, name) => {
  return ({id, name});
};

console.log(getUser(2, "Sam"));


const getProduct = (a, b) => {
  console.log({a, b});
  let product = a * b;
  console.log({product});
  return product;
}
console.log(getProduct(2, 5));


const config = {
  id: 1,
  isAdmin: false,
  theme: {
    dark: false,
    accessibility: true,
  }
};



const {id, isAdmin, theme} = config;
console.log(id);
console.log(isAdmin);
console.log(theme);


const user2 = {
  id3: 1,
  name5: "aaaaaa",
  isAdmin3: true,
};
const {name5, isAdmin3 = false} = user2;
console.log(isAdmin3);

const name15 = "Document title";
const add = {
  id55: 1,
  name55: "qqqq",
  isAdmin55: true,
};

const {name55: userName, isAdmin55} = add;
console.log(userName);



const user66 = {
  id66: 1,
  name66: "rrrr",
  isAdmin66: true,
};

const {id66, name66, isAdmin66: admain66} = user66;
console.log(admain66);


const person50 = {
  name50: "zxzx",
  age50: 18
};

const person500 = {
  age500: 50,
  type: "admin",
};

const merg = {...person50, ...person500};
console.log(merg);

const getl = userlo => {
  const {lat1, lat2} = userlo;
  return `${lat1}   ${lat2}`;
};

const userlo = {
  lat1: 4555555555,
  lat2: 66666666666666666666
};

console.log(getl(userlo));


const per = {
  nameper: "AAAA",
  ageper: 35,
};

if ("nameper" in person){
  console.log(person.nameper);
}




