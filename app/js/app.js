'use strict';

/* App Module */

var monsterApp = angular.module('monsterApp', [
  'ngRoute',
  // 'monsterAnimations',

  'monsterControllers',
  // 'movieAPIControllers',
  'monsterFilters',
  'monsterServices'
  // 'movieAPIServices'
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
      // when('/movies', {
      //   templateUrl: 'templates/movies/search.html',
      //   controller: 'MovieSearchCtrl'
      // }).
      // when('/movies/:movieId', {
      //   templateUrl: 'templates/movies/detail.html',
      //   controller: 'MovieDetailCtrl'
      // }).
      otherwise({
        redirectTo: '/monsters'
      });
  }]);
