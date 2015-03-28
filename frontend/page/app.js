/**
 * Created by vdt on 27.03.2015.
 */

var app = angular.module('buzzwordApp', [
    'ngRoute',
    'buzzwordApp.directives.frame',
    'mm.foundation'
]);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/selectGames',
        {
            controller: 'SelectGameController',
            templateUrl: '/page/partials/content/selectGames.html'
        }).when('/showGame/:gameid',
        {
            controller: 'ShowGameController',
            templateUrl: '/page/partials/content/showGame.html'
        }).when('/showGame',
        {
            controller: 'ShowGameController',
            templateUrl: '/page/partials/content/showGame.html'
        }).when('/createGame',
        {
            controller: 'CreateGameController',
            templateUrl: '/page/partials/content/createGame.html'
        }).when('/newList',
        {
            controller: 'NewListController',
            templateUrl: '/page/partials/content/newList.html'
        }).when('/play/:gameid',
        {
            controller: 'GameController',
            templateUrl: '/page/partials/content/play.html'
        });

});

var buzzwordsURL = "/apimock/buzzwordLists.json";
//var buzzwordsURL = "http://nb0151.sybit.de:9000/buzzLists";

function checkFooterPosition(){
    var pageContentHeight = $(".pageFullContent").height();
    var windowHeight = $(window).height();
    console.log("pageContentHeight: "+ pageContentHeight);
    console.log("windowHeight: "+ windowHeight);
    if(pageContentHeight >= windowHeight){
        $(".footer").removeClass("absolutBottom");
    } else {
        $(".footer").addClass("absolutBottom");
    }
}