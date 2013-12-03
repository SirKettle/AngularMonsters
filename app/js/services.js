'use strict';

/* Services */

var monsterServices, movieAPIServices;

monsterServices = angular.module('monsterServices', ['ngResource']);

monsterServices.factory('Monster', ['$resource',
  function ($resource) {
    return $resource('src/json/monsters/:monsterId.json', {}, {
      query: {method:'GET', params:{monsterId:'monsters'}, isArray:true}
    });
  }
]);

// Use PHP to communicate with 3rd party API
// http://www.htmlcenter.com/blog/building-angularjs-based-native-mobile-application-part-2/


// var movieAPI = http://api.rottentomatoes.com/api/public/v1.0.json?apikey=2rer892vj4hphasrr5kunc9s

// movieAPIServices = angular.module('movieAPIServices', ['ngResource']);

// movieAPIServices.factory('MovieSearch', ['$resource',
//   function ($resource) {
//     return $resource('http://api.rottentomatoes.com/api/public/v1.0.json?apikey=2rer892vj4hphasrr5kunc9s&callback=JSON_CALLBACK', {}, {
//       search: {
//         method: 'JSONP',
//         params: {
//           apikey: '2rer892vj4hphasrr5kunc9s',
//           callback: 'JSON_CALLBACK'
//         },
//         isArray:false
//       }
//     });
//   }
// ]);

// movieAPIServices.factory('Movie', ['$resource',
//   function ($resource) {
//     return $resource('http://api.rottentomatoes.com/api/public/v1.0/movies/:movieId.json?apikey=2rer892vj4hphasrr5kunc9s', {}, {
//       query: {
//         method: 'JSONP',
//         params: {
//           apikey  : '2rer892vj4hphasrr5kunc9s',
//           movieId : '770672122', //'@id',
//           callback: 'JSON_CALLBACK'
//         },
//         isArray:false
//       }
//     });
//   }
// ]);

// // http://api.rottentomatoes.com/api/public/v1.0/movies/770672122.json?apikey=[your_api_key]

// // 2rer892vj4hphasrr5kunc9s


// angular.module('search', [])
//   .factory('SearchService', function($q,$rootScope,$resource) {
//     var _search = {};
//     _search.user = function(opts){
//         return $resource('https://api.github.com/users/:user', {user: opts.user}, {
//             search: {method:'JSONP',params:{callback: 'JSON_CALLBACK'}}
//         });
//     }
//     return _search;
// });