const expect = require('chai').expect;
const syriaDistricts = require('./index');

describe('syria-districts', function () {
  describe('all', function () {
    it('should be an array of strings', function () {
      expect(syriaDistricts.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Damascus`', function() {
      expect(syriaDistricts.all).to.include('Damascus');
    });
  });

  describe('random', function(){
    it('should return a random item from the syriaDistricts.all', function(){
      const randomItem = syriaDistricts.random();
      expect(syriaDistricts.all).to.include(randomItem);
    });
  });
});
