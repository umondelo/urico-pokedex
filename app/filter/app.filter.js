//(function() {
//    'use strict';
//    
//    angular
//        .module('pokedexApp.filter')
//        .filter('removeSpecialChars', removeSpecialChars);
//        
//        removeSpecialChars.$inject = [];
//        
//        //REPLACE special characters and white space with nothing
//        function removeSpecialChars() {            
//            return function(string) {
//                if (!angular.isString(string)) {
//                    return string;
//                }
//                return string.replace(/[^\s\w]/gi, '');
//            };
//        }
//
//})();


'use strict';

angular.module('pokedexApp.filter', [])

.filter('removeSpecialChars', [function() {
    return function(string) {
        if (!angular.isString(string)) {
            return string;
        }
        return string.replace(/[^\s\w]/gi, '');
    };
}]);