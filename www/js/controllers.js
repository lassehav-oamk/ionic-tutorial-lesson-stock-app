var app = angular.module('starter.controllers', []);

app.controller('mainCtrl', function($scope, $state){
    $scope.name = "Pink Elefant";

    $scope.stockData = [
                        { name: "AAPL", value: 118 },
                        { name: "MSFT", value: 60 },
                        { name: "GOOG", value: 50 }
                    ];

    $scope.goToSearch = function()
    {
        // change state to search
        $state.go('search');
    }
});


app.controller('searchCtrl', function($scope, $http){
    $scope.name = "Blue Snake";
    $scope.input = {
        searchText: ""
    };

    $scope.results = { name: "" };

    $scope.executeSearch = function()
    {        
        // Execute a HTTP Request to yahoo server
        var userInput = $scope.input.searchText;
        $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + userInput + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=')
        .then(function(response){
            // get some data
            console.log(response);
            console.log(response.data.query.results.quote.Name);
            console.log(response.data.query.results.quote.Ask);

            // display the data to the user in the view
            $scope.results.name = response.data.query.results.quote.Name;
        });                    
    }
});