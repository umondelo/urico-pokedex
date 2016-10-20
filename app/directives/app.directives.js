(function() {
    'use strict';

    angular
        .module('pokedexApp.directive')
        .directive('searchSort', searchSort)
        .directive('skillDescription', skillDescription);
        
        searchSort.$inject = ['$http'];
        skillDescription.$inject = ['$http'];
        
        //CREATE New Element for search & sorting
        function searchSort() {            
            return {
                restrict: 'E', // USE AS ELEMENT
                templateUrl: '/directives/search-sort.html'
            };
        }
    
        //CREATE New Element for Skill Description
        function skillDescription() {            
            return {
                restrict: 'E', // USE AS ELEMENT
                templateUrl: '/directives/skill-description.html'
            };
        }

})();