var moduleA = angular.module("MyModuleA", []);
moduleA.controller("MyControllerA",
function($scope) {
  $scope.firstName="George";
  $scope.lastName="Washington";
});

var moduleB = angular.module('MyModuleB', []);
moduleB.controller('MyControllerB',
function($scope) {
  $scope.foods=["Egg Whites", "Greek Yogurt", "Clementites", "Boneless Chicken Breast"];
  $scope.addItem = function () {
    $scope.foods.push($scope.addFood);
  };
  $scope.removeItem = function (x) {
    $scope.foods.splice(x, 1);
  };
});

angular.module("CombineModule", ["MyModuleA", "MyModuleB"]);

// The class="hide-code" is added to each result code so that all can be hidden except the current result code. This is in conjuction with javascript in pages.js.
// document.getElementById("my-result-box").innerHTML = '<div id="my-result-code" ng-app="CombineModule"><div ng-controller="MyControllerA"  ng-include="\'pl/ng1/applications1.myresult.html\'" class="hide-code"></div><div ng-controller="MyControllerB"  ng-include="\'pl/ng1/applications2.myresult.html\'" class="hide-code"></div></div>';
