export default {
  getUser
};

const users = [
  {
    name: "Ochoa Hyde",
    coins: 100,
    moves: []
  },
  {
    name: "Hallie Mclean",
    coins: 100,
    moves: []
  },
  {
    name: "Parsons Norris",
    coins: 100,
    moves: []
  },
  {
    name: "Rachel Lowe",
    coins: 100,
    moves: []
  },
  {
    name: "Dominique Soto",
    coins: 100,
    moves: []
  },
  {
    name: "Shana Pope",
    coins: 100,
    moves: []
  },
  {
    name: "Faulkner Flores",
    coins: 100,
    moves: []
  },
  {
    name: "Holder Bean",
    coins: 100,
    moves: []
  },
  {
    name: "Rosanne Shelton",
    coins: 100,
    moves: []
  },
  {
    name: "Pamela Nolan",
    coins: 100,
    moves: []
  },
  {
    name: "Roy Cantu",
    coins: 100,
    moves: []
  },
  {
    name: "Ollie Christian",
    coins: 100,
    moves: []
  },
  {
    name: "Nguyen Walls",
    coins: 100,
    moves: []
  },
  {
    name: "Glenna Santana",
    coins: 100,
    moves: []
  },
  {
    name: "Malone Clark",
    coins: 100,
    moves: []
  },
  {
    name: "Floyd Rutledge",
    coins: 100,
    moves: []
  },
  {
    name: "Grace James",
    coins: 100,
    moves: []
  },
  {
    name: "Tanner Gates",
    coins: 100,
    moves: []
  },
  {
    name: "Lilly Conner",
    coins: 100,
    moves: []
  }
];

function getUser() {
  return Promise.resolve(users[0]);
}
