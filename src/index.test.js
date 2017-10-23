const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const syriaDistricts = require('./index')

describe('syria-districts', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      function isArrayOfStrings (array) {
        return array.every(item => typeof item === 'string')
      }

      expect(syriaDistricts.all).to.satisfy(isArrayOfStrings)
    })

    it('should contain `Damascus`', () => {
      expect(syriaDistricts.all).to.include('Damascus')
    })
  })

  describe('random', () => {
    it('should return a random item from the syriaDistricts.all', () => {
      const randomItem = syriaDistricts.random()
      expect(syriaDistricts.all).to.include(randomItem)
    })

    it('should return an array of random items if passed a number', () => {
      const randomItems = syriaDistricts.random(3)
      expect(randomItems).to.have.length(3)

      randomItems.forEach((randomItem) => {
        expect(syriaDistricts.all).to.include(randomItem)
      })
    })
  })
})
