'use strict';

it('should demonstrate using when (200 status)', inject(function($http) {
    var $scope = {};
    
    $httpBackend
        .when('GET', '/data/pokedex.json')
        .respond(200, { ename: 'Bulbasaur' });

    $httpBackend.flush();
    
    expect($scope.valid).toBe(true);
    expect($scope.response).toEqual({ ename: 'Bulbasaur' });
}));