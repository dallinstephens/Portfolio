document.getElementById("my-result-box").innerHTML = '<div ng-app="myGroceryList" ng-controller="controllerName"><div ng-include="\'pl/ng1/applications2.myresult.html\'"></div></div>';

var app = angular.module('myGroceryList', []);
app.controller('controllerName',
function($scope) {
  $scope.foods=["Egg Whites", "Greek Yogurt", "Clementites", "Boneless Chicken Breast"];
  $scope.addItem = function () {
    $scope.foods.push($scope.addFood);
  };
  $scope.removeItem = function (x) {
    $scope.foods.splice(x, 1);
  };
});
