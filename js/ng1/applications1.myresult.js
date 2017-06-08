function myResult(item) {
  if (item == "applications1") {
    document.getElementById("my-result-box").innerHTML = '<div ng-app="myApp" ng-controller="nameController"><div ng-include="\'pl/ng1/applications1.myresult.html\'"></div></div>';

    var app = angular.module("myApp", []);
    app.controller("nameController",
    function($scope) {
      $scope.firstName="George";
      $scope.lastName="Washington";
    });
  }

  if (item == "applications2") {
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
  }
}
