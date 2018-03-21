let myApp = angular.module( 'myApp', [] );

myApp.controller('WhatController', function(){
    console.log("controller has started");
    let self = this;
    self.greeting = "hello Hadar";
});