window.app = angular.module('elish', 
        ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'elish.system', 
         'elish.articles', 'elish.users', 'elish.singledocs']);

angular.module('elish.system', []);
angular.module('elish.articles', []);
angular.module('elish.users', []);
angular.module('elish.singledocs', []);
