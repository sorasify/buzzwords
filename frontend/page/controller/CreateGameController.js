/**
 * Created by vdt on 28.03.2015.
 */

app.controller('CreateGameController', function ($scope, $http, $timeout) {

    $scope.pageName = 'Spiel Erstellen';

    $http.get(buzzwordsURL).
        success(function(data) {
            $scope.buzzwordLists = data.buzzwordLists;
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
