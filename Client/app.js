var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        controller: "myCtrl",
        templateUrl: "views/anime.html" 
    })
    .when("/anime",{
        controller: "myCtrl",
        templateUrl: "views/anime.html" 
    })
    .when("/anime/single/:id",{
        controller: "myCtrl",
        templateUrl: "views/single.html" 
    })
    .when("/anime/add",{
        controller: "myCtrl",
        templateUrl: "views/add.html" 
    })
    .when("/anime/edit/:id",{
        controller: "myCtrl",
        templateUrl: "views/edit.html" 
    })
    .otherwise({
        redirectTo: "/anime"
    })
})