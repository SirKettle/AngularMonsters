'use strict';

/* Controllers */

var monsterControllers = angular.module('monsterControllers', []);

monsterControllers.controller('MonsterListCtrl', ['$http', '$scope', 'Monster',
  function ($http, $scope, Monster) {
    $scope.monsters = Monster.query();
    $scope.orderProp = 'year';
  }]);

monsterControllers.controller('MonsterDetailCtrl', ['$http', '$scope', '$routeParams', 'Monster',
  function ($http, $scope, $routeParams, Monster) {

    $scope.images = [];

    $scope.monster = Monster.get({monsterId: $routeParams.monsterId}, function (aMonster) {

      angular.forEach($scope.monster.images, function (url) {
        // $scope.images.push("");
        $('<img src="' + url + '" />').load(function () {
          $scope.$apply(function () {
            $scope.images.push(url);
          });
        });
      });

    });
  }]);

monsterControllers.directive('loadingImage', function () {
  return {
    restrict: 'E',
    // replace : true,
    // controller : 'LoadingCtrl',
    template : "<div class=\"image image-{{loaded}}\" style=\"background-image:url({{url}})\"></div>"
  };
});

// monsterControllers.controller('LoadingCtrl', ['$scope',
//   function ($scope) {
//     $scope.loaded = 'false';
//     $scope.loadFile = function () {
//         return url;
//       var url = this.url;

//       $('<img src="' + url + '" />').load(function () {

//         $scope.loaded = 'true';
//         alert('sdhfb');
//         return url;
        
//       });
//     };
//   }]);