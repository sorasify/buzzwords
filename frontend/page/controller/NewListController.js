/**
 * Created by vdt on 28.03.2015.
 */

app.controller('NewListController', function ($scope, $timeout) {

    $scope.pageName = 'Liste Erstellen';

    $scope.words = {};

    $scope.addWord = function () {
        if(!$scope.words[$scope.wordName] && $scope.wordName != undefined){
            $scope.words[$scope.wordName] = $scope.wordDesc;
            $timeout(function(){
                var pageContentHeight = $(".pageFullContent").height();
                var windowHeight = $(window).height();
                if(pageContentHeight+150 >= windowHeight){
                    $(".footer").removeClass("absolutBottom");
                } else {
                    $(".footer").addClass("absolutBottom");
                }
            },50);
        }
    };

});
