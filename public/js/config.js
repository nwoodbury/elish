//Setting up route
window.app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.

        //=====================================================================
        //  Articles
        //=====================================================================

        when('/articles', {
            templateUrl: 'views/articles/list.html'
        }).
        when('/articles/create', {
            templateUrl: 'views/articles/create.html'
        }).
        when('/articles/:articleId/edit', {
            templateUrl: 'views/articles/edit.html'
        }).
        when('/articles/:articleId', {
            templateUrl: 'views/articles/view.html'
        }).


        //=====================================================================
        //  Users
        //=====================================================================

        when('/users', {
            templateUrl: 'views/users/list.html'
        }).
        when('/users/profile', {
            templateUrl: 'views/users/profile.html'
        }).
        when('/users/:userId', {
            templateUrl: 'views/users/view.html'
        }).

        //=====================================================================
        //  Docs
        //=====================================================================

        when('/docs', {
            templateUrl: 'views/singledocs/list.html'
        }).
        when('/docs/create', {
            templateUrl: 'views/singledocs/create.html'
        }).
        when('/docs/:singledocId/edit', {
            templateUrl: 'views/singledocs/edit.html'
        }).
        when('/docs/:singledocId', {
            templateUrl: 'views/singledocs/view.html'
        }).

        //=====================================================================
        //  Agents
        //=====================================================================

        when('/agents', {
            templateUrl: 'views/agents/list.html'
        }).
        when('/agents/create', {
            templateUrl: 'views/agents/create.html'
        }).
        when('/agents/:agentId/edit', {
            templateUrl: 'views/agents/edit.html'
        }).
        when('/agents/:agentId', {
            templateUrl: 'views/agents/view.html'
        }).

        //=====================================================================
        //  Main
        //=====================================================================

        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
