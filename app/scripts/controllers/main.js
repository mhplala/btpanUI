'use strict';

/**
 * @ngdoc function
 * @name btpanUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the btpanUiApp
 */
var btpanUiApp = angular.module('btpanUiApp')
  .controller('MainCtrl', function() {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

// angular controller

var url = 'http://blog.sui.me:5000/com/';

btpanUiApp.controller('MainCtrl', function($scope, $http) {
  $scope.source1 = '';
  $scope.amount = "总数";
  $scope.getsource = function() {
    $http.get(url + $scope.source1).success(function(data) {
      if (data.length < 1) {
        alert("邀请码错误");
      } else {
        $scope.results = data;
        $scope.amount = data.length;
      };
    });
  }
});
