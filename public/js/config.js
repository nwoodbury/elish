//Setting up route
window.app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
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
        when('/users', {
            templateUrl: 'views/users/list.html'
        }).
        when('/users/profile', {
            templateUrl: 'views/users/profile.html'
        }).
        when('/users/:userId', {
            templateUrl: 'views/users/view.html'
        }).
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
        $locationProvider.hashPrefix("!");
    }
]);
