'use strict';

/* App Module */

var monsterApp = angular.module('monsterApp', [
  'ngRoute',
  // 'monsterAnimations',
  'monsterControllers',
  'monsterFilters',
  'monsterServices'
]);

monsterApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/monsters', {
        templateUrl: 'templates/monsters/list.html',
        controller: 'MonsterListCtrl'
      }).
      when('/monsters/:monsterId', {
        templateUrl: 'templates/monsters/detail.html',
        controller: 'MonsterDetailCtrl'
      }).
      otherwise({
        redirectTo: '/monsters'
      });
  }]);
