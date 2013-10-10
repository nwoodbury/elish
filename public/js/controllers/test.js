angular.module('elish.test').controller('TestsController',
    ['$scope', 'Global', 'Tests',
    function($scope, Global, Tests) {
        $scope.global = Global;

        $scope.reached = 'True';

        $scope.servicereached = Tests.service;
    }]);
