'use strict';

/* Controllers */

var monsterControllers = angular.module('monsterControllers', []);

monsterControllers.controller('MonsterListCtrl', ['$http', '$scope', 'Monster',
  function ($http, $scope, Monster) {
    $scope.monsters = Monster.query();
    $scope.orderProp = 'year';



    $http.get('/app/src/data/getMovies.php').
      success(function(data, status, headers, config) {
          //what do I do here?
          debugger;
      }).
      error(function(data, status, headers, config) {
          $scope.error = true;
      });
  }]);

monsterControllers.controller('MonsterDetailCtrl', ['$http', '$scope', '$routeParams', 'Monster',
  function ($http, $scope, $routeParams, Monster) {
    $scope.monster = Monster.get({monsterId: $routeParams.monsterId}, function (monster) {
      // $scope.mainImageUrl = monster.images[0];
    });

    $scope.setImage = function(imageUrl) {
      // $scope.mainImageUrl = imageUrl;
    }
  }]);




// var movieAPIControllers = angular.module('movieAPIControllers', []);

// movieAPIControllers.controller('MovieSearchCtrl', ['$scope', 'MovieSearch',
//   function ($scope, MovieSearch) {
//     $scope.movie = MovieSearch.query();
//     $scope.orderProp = 'year';
//   }]);

// movieAPIControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams', 'Movie',
//   function ($scope, $routeParams, Movie) {
//     $scope.movie = Monster.get({movieId: $routeParams.movieId}, function (movie) {
//       // $scope.mainImageUrl = monster.images[0];
//       debugger;
//     });

//     $scope.setImage = function(imageUrl) {
//       // $scope.mainImageUrl = imageUrl;
//     }
//   }]);