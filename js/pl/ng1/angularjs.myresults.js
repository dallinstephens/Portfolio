// applications1
var module0 = angular.module("MyModule0", []);
module0.controller("MyController0",
  function($scope) {
    $scope.firstName="George";
    $scope.lastName="Washington";
  }
);

// applications2
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
  }
);

// directives1
var module2 = angular.module("MyModule2", []);
module2.controller("MyController2",
  function() {
    // No Controller Here
  }
);

// directives2
var module3 = angular.module('MyModule3', []);
module3.controller('MyController3',
  function() {
    // No Controller Here
  }
);

// directives3
var module4 = angular.module('MyModule4', []);
module4.controller('MyController4',
  function() {
    // No Controller Here
  }
);

// directives4
var module5 = angular.module('MyModule5', []);
module5.controller('MyController5',
  function() {
    // No Controller Here
  }
);

// directives5
var module6 = angular.module('MyModule6', []);
module6.controller('MyController6',
  function() {
    // No Controller Here
  }
);

// directives6
var module7 = angular.module('MyModule7', []);
module7.directive("directiveCreatedByDallin",
  function() {
    return{
      template: "<h1>I Dallin made this directive.</h1>"
    };
  }
);
module7.controller('MyController7',
  function() {
    // No Controller Here
  }
);

// directives7
var module8 = angular.module('MyModule8', []);
module8.directive("myDirective",
  function() {
    return {
      restrict: "M",
      replace: true,
      template: "<p>This statement was created using a comment.</p>"
    };
  }
);
module8.controller('MyController8',
  function() {
    // No Controller Here
  }
);

// directives8
var module9 = angular.module('MyModule9', []);
module9.directive("myDirective2",
  function() {
    return {
      restrict: "C",
      template: "<b>The class name invoked the directive for this case.</b>"
    };
  }
);
module9.controller('MyController9',
  function() {
    // No Controller Here
  }
);

// expressions1
var module10 = angular.module('MyModule10', []);
module10.controller('MyController10',
  function() {
    // No Controller Here
  }
);

// expressions2
var module11 = angular.module('MyModule11', []);
module11.controller('MyController11',
  function() {
    // No Controller Here
  }
);

// expressions3
var module12 = angular.module('MyModule12', []);
module12.controller('MyController12',
  function() {
    // No Controller Here
  }
);

// topic#
//var module#PREV+1 = angular.module('MyModule#PREV+1', []);
//module#PREV+1.controller('MyController#PREV+1',
//  function() {
    // No Controller Here
//  }
//);

// This counts the number of section tags in angularjs.myresults.html.
var sectionCount = document.getElementById("my-result-code-ng1").getElementsByTagName("section").length;
// For testing purposes: document.getElementById("righthere").innerHTML = sectionCount;

// Creates angular.module("CombineModule", ["MyModule0", "MyModule1", "MyModule2", ...])
MyModule = [];
for (i = 0; i < sectionCount; i++) {
    MyModule[i] = 'MyModule' + i;
}

angular.module("CombineModule", MyModule);
