/**
 * Created by vdt on 27.03.2015.
 */

app.controller('SelectGameController', function ($scope, $http, $timeout) {

    $scope.pageName = 'Buzzword Bingo';

    $http.get("/apimock/games.json").
        success(function(data) {
            $scope.games = data.games;
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
        scope.games.forEach(function (gameValue) {
            scope.buzzwordLists.forEach(function (listValue) {
                if(gameValue.buzzwordListId == listValue.listId){
                    gameValue.listName = listValue.name;
                }
            });
        });
    }
});
