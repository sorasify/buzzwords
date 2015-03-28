/**
 * Created by vdt on 27.03.2015.
 */

app.controller('ShowGameController', function ($scope, $http, $routeParams, $timeout) {

    $scope.pageName = 'Spiel Lobby';

    $http.get("/apimock/game.json?gameid="+$routeParams.gameid).
        success(function(data) {
            $scope.game = data.game;
            $http.get(buzzwordsURL).
                success(function(data) {
                    $scope.buzzwordLists = data.buzzwordLists;
                    setBuzzwordTitle($scope);
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
        });

    function setBuzzwordTitle(scope){
        scope.buzzwordLists.forEach(function (listValue) {
            if(scope.game.buzzwordListId == listValue.listId){
                scope.game.listName = listValue.name;
                scope.game.words = listValue.words;
            }
        });
    }
});