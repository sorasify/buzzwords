/**
 * Created by vdt on 28.03.2015.
 */

app.controller('GameController', function ($scope, $http, $routeParams, $timeout) {



    $http.get("/apimock/game.json?gameid="+$routeParams.gameid).
        success(function(data) {
            $scope.game = data.game;
            $scope.pageName = data.game.name;
            $timeout(function(){
                var pageContentHeight = $(".pageFullContent").height();
                var windowHeight = $(window).height();
                if(pageContentHeight+150 >= windowHeight){
                    $(".footer").removeClass("absolutBottom");
                } else {
                    $(".footer").addClass("absolutBottom");
                }
            },50);
        });

    $scope.getMaxScore = function(){
        return "5";
    };

    $scope.getScoreForPlayer = function(player){
        return "3";
    };
});
