(function() {
    'use strict';

    angular
        .module('pokedexApp.services')
        .factory('pokemonStorage', pokemonStorage);
        
        pokemonStorage.$inject = ['$http'];
        
        //GET pokemon data using $http (api call)
        function pokemonStorage($http) {            
            return {
                pokedex: function(callback){
                    $http.get('/data/pokedex.json').success(callback);
                },
                types: function(callback){
                    $http.get('/data/types.json').success(callback);
                },
                skills: function(callback){
                    $http.get('/data/skills.json').success(callback);
                }
            };
        }

})();
