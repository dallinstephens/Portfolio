var moduleA = angular.module("MyModuleA", []);
moduleA.controller("MyControllerA",
function($scope) {
  $scope.firstName="Dallin";
  $scope.lastName="Stephens";
});
