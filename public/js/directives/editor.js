angular.module('elish').directive('editor',
    [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'views/editor/editor.html',
            scope: {
                content: '='
            }
        };
    }]);
