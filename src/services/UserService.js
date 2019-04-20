import UtilService from "./UtilService";


// import UtilService from './UtilService.js'

export default {
  getUser,
  signUp,
  addMove,
  updateUser
};

// const users = [
//   {
//     name: "Ochoa Hyde",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Hallie Mclean",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Parsons Norris",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Rachel Lowe",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Dominique Soto",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Shana Pope",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Faulkner Flores",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Holder Bean",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Rosanne Shelton",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Pamela Nolan",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Roy Cantu",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Ollie Christian",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Nguyen Walls",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Glenna Santana",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Malone Clark",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Floyd Rutledge",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Grace James",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Tanner Gates",
//     coins: 100,
//     moves: []
//   },
//   {
//     name: "Lilly Conner",
//     coins: 100,
//     moves: []
//   }
// ];

const USER_KEY = 'User';

function getUser() {
  var user = UtilService.loadFromStorage(USER_KEY);
  return Promise.resolve(user);
}


function signUp(userName) {
  let user = _createUser(userName);
  UtilService.saveToStorage(USER_KEY, user);
  return Promise.resolve(user);
}

function updateUser(user) {
  return new Promise((resolve, reject) => {
    localStorage.removeItem(USER_KEY)
    resolve(user);
    UtilService.saveToStorage(USER_KEY, user)
  });
}

function _createUser(userName) {
  return {
    name: userName,
    coins: 100,
    moves: []
  }
}

function _createMove(contact, amount) {
  return {
    _id: _makeId(),
    to: contact.name,
    amount,
    createdAt: Date.now()
  }
}

function addMove(contact, amount) {
  let user = UtilService.loadFromStorage(USER_KEY);
  user.moves.push(_createMove(contact, amount));
  UtilService.saveToStorage(USER_KEY, user);
  return user;
}

function _makeId(length = 10) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}


