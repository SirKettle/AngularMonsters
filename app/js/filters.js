'use strict';

/* Filters */

angular.module('monsterFilters', []).filter('checkmark', function () {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
});
