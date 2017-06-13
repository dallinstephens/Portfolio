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
