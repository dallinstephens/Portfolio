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

document.getElementById("my-result-box").innerHTML = '<div ng-app="CombineModule"><div id="MyControllerA" ng-controller="MyControllerA"  ng-include="\'pl/ng1/applications1.myresult.html\'"></div><div id="MyControllerB" ng-controller="MyControllerB"  ng-include="\'pl/ng1/applications2.myresult.html\'"></div></div>';

function applications1() {
  $('#MyControllerB').hide();
  $('#MyControllerA').show();
}

function applications2() {
  $('#MyControllerA').hide();
  $('#MyControllerB').show();
}
