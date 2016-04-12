'use strict';

/**
 * @ngdoc function
 * @name btpanUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the btpanUiApp
 */
var btpanUiApp = angular.module('btpanUiApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


btpanUiApp.controller('MainCtrl',function($scope,$http){
$http.get('http://blog.sui.me:5000/jianzhimao').success(function(data){
  $scope.results = data;
});


});

$('.special.cards .image').dimmer({
  on: 'hover'
});
