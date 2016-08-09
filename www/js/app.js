// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('SMSController', function($scope, $cordovaSms) {
  $scope.data = {res:'wahou'};
  $scope.test = function() {
    alert("1 2 1 2 TEST !");
  }
 document.addEventListener("deviceready", function() {
 
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT' // send SMS with the native android SMS messaging
          //intent: '' // send SMS without open any other app
          //intent: 'INTENT' // send SMS inside a default SMS app
      }
    };
 
    $scope.sendSMS = function() {
 
      $cordovaSms
        .send('', 'This is some dummy text', options)
        .then(function() {
          alert('Success');
          // Success! SMS was sent
        }, function(error) {
          alert('Error');
          console.log(error);
          // An error occurred
        });
    }
  });
});