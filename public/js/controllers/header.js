angular.module('elish.system').controller('HeaderController', 
    ['$scope', 'Global', 
    function ($scope, Global) {
        $scope.global = Global;

        $scope.menu = [{
            "title": "Documents",
            "link": "docs"
        }, {
            "title": "Create a New Document",
            "link": "docs/create"
        }];
    }]);
