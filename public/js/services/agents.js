// Agents service used for the agents REST endpoint
angular.module('elish.agents').factory('Agents',
    ['$resource',
    function($resource) {
        return $resource('agents/:agentId', {
            agentId: '@_id'
        }, {
            update: {method: 'PUT'}
        });
    }]);
