// Retrieved from 
// http://blog.tomaka17.com/2012/12/random-tricks-when-using-angularjs/
//
// Allows two-way binding of HTML in elements such as those enabled by
// content-editable
angular.module('twoWayHTMLBinding')
    .directive('adminBindHtml', function($timeout) {
        return {
            link: function compile(scope, tElement, tAttrs) {
                var refresh = function() {
                    scope.$apply(tAttrs.adminBindHtml + ' = "' + tElement.html().replace(/"/g, '\\"') + '"');
                    $timeout(refresh, 200);
                };
                scope.$watch(tAttrs.adminBindHtml, function(val, oldVal) {
                    if (val != oldVal && tElement.html() != val)
                        tElement.html(scope.$eval(tAttrs.adminBindHtml));
                });
                $timeout(refresh, 200);
            }
        };
    });
