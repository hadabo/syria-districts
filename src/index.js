const uniqueRandomArray = require('unique-random-array');
const syriaDistrictsNames = require('./syria-districts.json');

module.exports = {
  all: syriaDistrictsNames,
  random: uniqueRandomArray(syriaDistrictsNames)
};