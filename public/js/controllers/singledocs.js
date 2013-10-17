angular.module('elish.singledocs').controller('SingledocsController',
    ['$scope', '$routeParams', '$location', 'Global', 'Singledocs',
    function ($scope, $routeParams, $location, Global, Singledocs) {
        $scope.global = Global;

        $scope.create = function() {
            var singledoc = new Singledocs({
                title: this.title,
                content: this.content
            });

            singledoc.$save(function(response) {
                $location.path("docs/" + response._id);
            });

            this.title = "";
            this.content = "";
        };
        
        $scope.remove = function(singledoc) {
            singledoc.$remove();

            for (var i in $scope.singledocs) {
                if ($scope.singledocs[i] == singledoc) {
                    $scope.singledocs.splice(i, 1);
                }
            }
        };

        $scope.update = function() {
            var singledoc = $scope.singledoc;
            if (!singledoc.updated) {
                singledoc.updated = [];
            }
            singledoc.updated.push(new Date().getTime());

            singledoc.$update(function() {
                $location.path('docs/' + singledoc._id);
            });
        };

        $scope.find = function(query) {
            Singledocs.query(query, function(singledocs) {
                $scope.singledocs = singledocs;
            });
        };

        $scope.findOne = function() {
            Singledocs.get({
                singledocId: $routeParams.singledocId
            },
            function(singledoc) {
                $scope.singledoc = singledoc;
            });
        };
        
    }]);
