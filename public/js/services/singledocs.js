// Singledocs service used for single docs REST endpoint
angular.module('elish.singledocs').factory('Singledocs',
    ['$resource',
    function($resource) {
        return $resource('docs/:singledocId', {
            singledocId: '@_id'
        },
        {
            update: { method: 'PUT' }
        });
    }]);
