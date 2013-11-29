'use strict';

/* Controllers */

var monsterControllers = angular.module('monsterControllers', []);

monsterControllers.controller('MonsterListCtrl', ['$scope', 'Monster',
  function ($scope, Monster) {
    $scope.monsters = Monster.query();
    $scope.orderProp = 'year';
  }]);

monsterControllers.controller('MonsterDetailCtrl', ['$scope', '$routeParams', 'Monster',
  function ($scope, $routeParams, Monster) {
    $scope.monster = Monster.get({monsterId: $routeParams.monsterId}, function (monster) {
      // $scope.mainImageUrl = monster.images[0];
    });

    $scope.setImage = function(imageUrl) {
      // $scope.mainImageUrl = imageUrl;
    }
  }]);
