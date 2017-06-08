function applications1myresult() {
  document.getElementById("my-result-box").innerHTML = '<div ng-app="myApp" ng-controller="nameController"><div ng-include="\'pl/ng1/applications1.myresult.html\'"></div></div>';

  var app = angular.module("myApp", []);
  app.controller("nameController",
  function($scope) {
    $scope.firstName="George";
    $scope.lastName="Washington";
  });
}
