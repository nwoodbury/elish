angular.module('elish.system').controller('IndexController', 
    ['$scope', 'Global', 
    function ($scope, Global) {
        $scope.global = Global;
    }]);
