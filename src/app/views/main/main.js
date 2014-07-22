'use strict';

var angular = require('angular');
var template = require('./main.html');
// services
var monsterService = require('../../services/monsterService');
// sub components
var avatarComponent = require('../../components/avatar/avatar');



// directive name:
//		namespaceTypeName (examples: wtComponentAvatar or dinoViewDetail )
// 
// template use:
// <namespace:type-name></namespace:type-name> (examples: <wt:component-avatar></wt:component-avatar> or <dino:view-detail></dino:view-detail> )

module.exports = angular.module('myApp.views.main', [
	monsterService.name,
	avatarComponent.name
])
.directive('myViewMain', function (
	MyMonsterService,
	$location
) {
	return {
		restrict: 'E',
		template: template,
		controller: 'MyViewMainCtrl',
		replace: true,
		scope: {
		},
		link: function (scope, elem, attrs, controller) {

			controller.getMonsters();

			scope._onCreateClicked = function () {
				controller.createMonster(scope.newMonster);
			};

			scope._onRowClicked = function (monster) {
				$location.path('detail/' + monster._id);
			};

			// silly chaining but good test!!

			// controller.getMonsters()
			// 	.then(function (origMonstersData) {
			// 		console.log('origMonsters ', origMonstersData);
					
			// 		controller.getMonster(1001)
			// 			.then(function (getMonsterData) {
			// 				console.log('getMonster ', getMonsterData);

			// 				controller.updateMonster(getMonsterData.data._id, {
			// 						extras: 'I like armadillos'
			// 					})
			// 					.then(function (updateMonsterData) {
			// 						console.log('updateMonster ', updateMonsterData);

			// 						controller.createMonster({
			// 								name: 'Newbie',
			// 								where: 'No-where'
			// 							})
			// 							.then(function (createMonsterData) {
			// 								console.log('createMonster ', createMonsterData);

			// 								controller.getMonsters()
			// 									.then(function (getMonstersData) {
			// 										console.log('getMonsters ', getMonstersData);
													
			// 										MyMonsterService.delete(1001)
			// 											.then(function (deleteData) {
			// 												console.log('MyMonsterService.delete ', deleteData);

			// 												controller.getMonsters()
			// 													.then(function (getMonstersAfterDeleteData) {
			// 														console.log('getMonsters ', getMonstersAfterDeleteData);
			// 													});
			// 											})
			// 											.catch(function (err) {
			// 												console.warn('MyMonsterService.delete error', 1001, err);
			// 											});
			// 									});
			// 							});

			// 					});
			// 			});
			// 	});
		}
	};
})
.controller('MyViewMainCtrl', function (
	$scope,
	MyMonsterService
) {
	var self = this;

	this.getMonsters = function (params) {
		return MyMonsterService.getAll(params)
			.then(function (monsters) {
				$scope.monsters = monsters;
			})
			.catch(function (err) {
				console.warn('getMonsters error', params, err);
			});
	};

	this.getMonster = function (id) {
		return MyMonsterService.get(id)
			.catch(function (err) {
				console.warn('getMonster error', id, err);
			});
	};

	this.updateMonster = function (id, params) {
		return MyMonsterService.update(id, params)
			.catch(function (err) {
				console.warn('updateMonster error', id, err);
			});
	};

	this.createMonster = function (params) {
		return MyMonsterService.create(params)
			.then(function (details) {
				self.getMonsters();
			})
			.catch(function (err) {
				console.warn('createMonster error', params, err);
			});
	};
});