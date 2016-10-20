'use strict';

describe('pokedexApp.filter', function() {

  beforeEach(module('pokedexApp'));

  describe('removeSpecialChars', function(){

    it('it should remove special characters and whitespace', inject(function($filter) {
      //spec body
      var removeSpecialChars = $filter('removeSpecialChars');
      expect(removeSpecialChars('Uri *^!co')).toBe('Urico'); //pass
    }));

  });
});