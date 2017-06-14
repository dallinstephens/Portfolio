var module0 = angular.module("MyModule0", []);
module0.controller("MyController0",
function($scope) {
  $scope.firstName="George";
  $scope.lastName="Washington";
});

var module1 = angular.module('MyModule1', []);
module1.controller('MyController1',
function($scope) {
  $scope.foods=["Egg Whites", "Greek Yogurt", "Clementites", "Boneless Chicken Breast"];
  $scope.addItem = function () {
    $scope.foods.push($scope.addFood);
  };
  $scope.removeItem = function (x) {
    $scope.foods.splice(x, 1);
  };
});

var module2 = angular.module("MyModule2", []);
module2.controller("MyController2",
function() {
  // No Controller Here
});

var module3 = angular.module('MyModule3', []);
module3.controller('MyController3',
function($scope) {
  $scope.foods=["Egg Whites", "Greek Yogurt", "Clementites", "Boneless Chicken Breast"];
  $scope.addItem = function () {
    $scope.foods.push($scope.addFood);
  };
  $scope.removeItem = function (x) {
    $scope.foods.splice(x, 1);
  };
});

// This counts the number of section tags in angularjs.myresults.html.
var sectionCount = document.getElementsByTagName('section').length;

// For testing purposes: document.getElementById("righthere").innerHTML = sectionCount;

// Creates angular.module("CombineModule", ["MyModule0", "MyModule1", "MyModule2", ...])
MyModule = [];
for (i = 0; i < sectionCount; i++) {
    MyModule[i] = 'MyModule' + i;
}

angular.module("CombineModule", MyModule);
