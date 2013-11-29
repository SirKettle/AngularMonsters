'use strict';

/* Services */

var monsterServices = angular.module('monsterServices', ['ngResource']);

monsterServices.factory('Monster', ['$resource',
  function ($resource){
    return $resource('src/json/monsters/:monsterId.json', {}, {
      query: {method:'GET', params:{monsterId:'monsters'}, isArray:true}
    });
  }]);
