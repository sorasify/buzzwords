/**
 * Created by vdt on 27.03.2015.
 */
angular.module('buzzwordApp.directives.frame', [])
    .controller('BackController', ['$scope', function($scope) {
        $scope.backDialog = function () {
            window.history.back();
        };
    }])
    .directive('navigationbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'page/partials/frame/navigationBar.html',
            link: function (scope, element) {
            },
            scope: {
                'back': '&onBack'
            },
            controller: "BackController",
            replace: true,
            transclude: true
        };
    }).directive('navigationbarwithoutback', function () {
        return {
            restrict: 'E',
            templateUrl: 'page/partials/frame/navigationBarWithoutBack.html',
            replace: true,
            transclude: true
        };
    }).directive('footer', function () {
        return {
            restrict: 'E',
            templateUrl: 'page/partials/frame/footer.html',
            replace: true,
            transclude: true
        };
    });
