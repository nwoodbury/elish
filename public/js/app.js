window.app = angular.module('elish', 
        ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'elish.system', 
         'elish.articles', 'elish.users', 'elish.test']);

angular.module('elish.system', []);
angular.module('elish.articles', []);
angular.module('elish.users', []);
angular.module('elish.test', []);
