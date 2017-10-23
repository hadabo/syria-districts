const uniqueRandomArray = require('unique-random-array')
const syriaDistrictsNames = require('./syria-districts.json')

const getRandomItem = uniqueRandomArray(syriaDistrictsNames)

function random (number) {
  if (number === undefined) {
    return getRandomItem()
  }
  const randomItems = []
  for (let i = 0; i < number; i++) {
    randomItems.push(getRandomItem())
  }
  return randomItems
}

module.exports = {
  all: syriaDistrictsNames,
  random
}
