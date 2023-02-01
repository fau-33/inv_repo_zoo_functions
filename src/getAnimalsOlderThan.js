const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const species = data.species.find(({ name }) => name === animal).residents;
  return species.every((specie) => specie.age > age);
};

module.exports = getAnimalsOlderThan;
