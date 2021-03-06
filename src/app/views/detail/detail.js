'use strict';

var angular = require('angular');
var template = require('./detail.html');
// services
var monsterService = require('../../services/monsterService');
// sub components
var avatarComponent = require('../../components/avatar/avatar');



// directive name:
//		namespaceTypeName (examples: wtComponentAvatar or dinoViewDetail )
// 
// template use:
// <namespace:type-name></namespace:type-name> (examples: <wt:component-avatar></wt:component-avatar> or <dino:view-detail></dino:view-detail> )

module.exports = angular.module('myApp.views.detail', [
	monsterService.name,
	avatarComponent.name
])
.directive('myViewDetail', function (
	MyMonsterService
) {
	return {
		restrict: 'E',
		template: template,
		controller: 'MyViewDetailCtrl',
		replace: true,
		scope: {
			key: '='
		},
		link: function (scope, elem, attrs, controller) {

			controller.getDetails(scope.key);

			scope._onUpdateClicked = function () {
				controller.updateDetails(scope.key, scope.details);
			};
		}
	};
})
.controller('MyViewDetailCtrl', function (
	$scope,
	MyMonsterService
) {

	this.getDetails = function (id) {
		return MyMonsterService.get(id)
			.then(function (details) {
				$scope.details = details;
				// console.log('retrieved', $scope.details);
			})
			.catch(function (err) {
				console.warn('getDetails error', id, err);
			});
	};

	this.updateDetails = function (id, details) {
		return MyMonsterService.update(id, details)
			.then(function (details) {
				$scope.details = details;
				// console.log('updated', $scope.details);
			})
			.catch(function (err) {
				console.warn('updateDetails error', id, err);
			});
	};
});