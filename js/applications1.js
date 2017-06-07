var app = angular.module('myApp', []);
app.controller('nameController',
function($scope) {
  $scope.firstName="George";
  $scope.lastName="Washington";
});
