(function() {
    'use strict';

    angular
        .module('pokedexApp.pokemonlist')
        .controller('PokemonListController', PokemonListController);

        PokemonListController.$inject = ['$scope', 'pokemonStorage']; 

        function PokemonListController($scope, pokemonStorage) {
            
            //GET Pokemon Data & Bind to scope
            var pokemonData = {
                pokedex: function() {
                    pokemonStorage.pokedex(function(pokemons) {
                        $scope.pokemons = pokemons;
                    });
                },
                types: function() {
                    pokemonStorage.types(function(pokemonTypes) {
                        $scope.pokemonTypes = pokemonTypes;
                    });
                },
                skills: function() {
                    pokemonStorage.skills(function(pokemonSkills) {
                        $scope.pokemonSkills = pokemonSkills;
                    });
                }  
            }
            $scope.pokemons = pokemonData.pokedex();
            $scope.pokemonTypes = pokemonData.types();
            $scope.pokemonSkills = pokemonData.skills();
            
            //Dynamic Sorting
            $scope.reverse = true;
            $scope.orderByMe = function(orderBy) {
                $scope.reverse = ($scope.myOrderBy = orderBy) ? !$scope.reverse : false;
                $scope.myOrderBy = orderBy;
            };
            
            //Show/ Hide Pokemon Details
            $scope.details = {};
            $scope.toggle = function(index) {
                $scope.details[index] = !$scope.details[index];
            };
        }

})();