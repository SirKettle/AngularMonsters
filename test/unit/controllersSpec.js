'use strict';

/* jasmine specs for controllers go here */
describe('Monster controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('monsterApp'));
  beforeEach(module('monsterServices'));

  describe('MonsterListCtrl', function(){
    var scope, ctrl, $httpBackend,
        monstersData = [{
          "id"       : "godzilla",
          "year"     : 1937,
          "title"    : "Godzilla - Oh My Oshi",
          "summary"  : "A big ass lizard",
          "imageUrl" : "img/monsters/godzilla/thumb.jpg"
        },
        {
          "id"       : "king_kong",
          "year"     : 1952,
          "title"    : "King Kong",
          "summary"  : "A big ass monkey",
          "imageUrl" : "img/monsters/king_kong/thumb.jpg"
        }];

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      
      $httpBackend.expectGET('src/json/monsters/monsters.json').respond(monstersData);

      scope = $rootScope.$new();
      ctrl = $controller('MonsterListCtrl', {$scope: scope});
    }));


    it('should create "monsters" model with 2 monsters fetched from xhr', function() {
      expect(scope.monsters).toEqualData([]);
      $httpBackend.flush();

      expect(scope.monsters).toEqualData(monstersData);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('year');
    });
  });


  describe('MonsterDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
        xyzMonsterData = function() {
          return {
            "title"   : "Godzilla - Oh My Oshi",
            "summary" : "A big ass lizard",
            "location" : "Tokyo, Japan",
            "movies" : {
              "godzilla" : {
                "title" : "Godzilla",
                "releaseYear" : "1938",
                "details" : {
                  "director" : "Unknown",
                  "actors" : [ "A. Man", "Leading Lady", "Some Bloke" ]
                }
              },
              "godzilla_returns" : {
                "title" : "Godzilla returns",
                "releaseYear" : "1947",
                "details" : {
                  "director" : "Unknown",
                  "actors" : [ "A. Man", "Leading Lady", "Some Bloke" ]
                }
              }
            }
          }
        };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('src/json/monsters/xyz.json').respond(xyzMonsterData());

      $routeParams.monsterId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('MonsterDetailCtrl', {$scope: scope});
    }));


    it('should fetch monster detail', function() {
      expect(scope.monster).toEqualData({});
      $httpBackend.flush();

      expect(scope.monster).toEqualData(xyzMonsterData());
    });
  });
});
