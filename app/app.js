(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('pokedexApp', [
        'ngRoute',
        'angular-loading-bar',
        'ngAnimate',
        'mgcrea.bootstrap.affix',
        
        'pokedexApp.directive',
        'pokedexApp.filter',
        'pokedexApp.services',
        'pokedexApp.pokemonlist'
    ]).
    config(['$locationProvider', '$routeProvider', 'cfpLoadingBarProvider', function($locationProvider, $routeProvider, cfpLoadingBarProvider) {
        $locationProvider.hashPrefix('!');
        
        $routeProvider. 
            when('/', {
                templateUrl: 'pokemonlist/pokemon-list.html',
                controller: 'PokemonListController'
            }).
            otherwise({
                redirectTo: '/'
            });
        
        /** Loading bar: this will call the loader to display inside #pokemon-list, showing the text below **/
        cfpLoadingBarProvider.parentSelector = '#pokemon-list';
        cfpLoadingBarProvider.spinnerTemplate = '<li class="loader-wrapper"><span class="fa fa-spinner">Loading pokemons, please wait...</li>';
        
    }]);
    
})();