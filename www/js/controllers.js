var app = angular.module('starter.controllers', []);

app.controller('mainCtrl', function($scope, $state){
    $scope.name = "Pink Elefant";

    $scope.goToSearch = function()
    {
        // change state to search
        $state.go('search');
    }
});


app.controller('searchCtrl', function($scope){
    $scope.name = "Blue Snake";
});