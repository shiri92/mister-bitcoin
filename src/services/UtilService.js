function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
  localStorage[key] = JSON.stringify(val);
}

export default {
  getRandomInt,
  loadFromStorage,
  saveToStorage
};
