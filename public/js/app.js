window.app = angular.module('elish', 
        ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'elish.system', 
         'elish.articles']);

angular.module('elish.system', []);
angular.module('elish.articles', []);
