app.controller("myCtrl",['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
    
    $scope.getAnimes = function(){
        $http.get("/api/animes")
        .then(function(response){
            $scope.animes = response.data
        },function(err){
            console.log(err)
        })
    }
    $scope.getSingle = function(){
        var id = $routeParams.id
        console.log(id)
        $http.get("/api/animes/"+id)
        .then(function(response){
            $scope.anime = response.data
        },function(err){
            console.log(err)
        })
    }
    $scope.add = function(){
        $http.post("/api/animes",$scope.anime)
        .then(function(response){
            window.location.href = "#/anime"
        },function(err){
            console.log(err)
        })
    }
    $scope.update = function(){
        var id = $routeParams.id
        $http.put("/api/animes/"+id,$scope.anime)
        .then(function(response){
            window.location.href = "#/anime"
        },function(err){
            console.log(err)
        })
    }
    $scope.delete = function(){
        var id = $routeParams.id
        $http.delete("/api/animes/"+id)
        .then(function(response){
            window.location.href = "#/anime"
        },function(err){
            console.log(err)
        })
    }
}])