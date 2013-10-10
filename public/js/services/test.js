angular.module('elish.test').factory('Tests',
    ['$resource',
    function($resource) {
        return {
            service: 'service reached'
        };
    }]);
