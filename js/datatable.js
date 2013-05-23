angular.module('components', ['ngResource'])
        .value('datas', [
    {
        "a": 1,
        "b": 2,
        "c": 3
    },
    {
        "a": 4,
        "b": 5,
        "c": 6
    },
    {
        "a": 7,
        "b": 8,
        "c": 9
    },
    {
        "a": '*',
        "b": 0,
        "c": '#'
    }
])
        .factory('Frameworks', function($resource) {
//    return $resource('http://localhost\\:1234/frameworks/:id', {
    return $resource('rest/:id.json', {
        id: '@_id'
    });
})
        .controller('MainCtrl', function($scope, Frameworks) {
    $scope.Frameworks = Frameworks;
    $scope.config = {
        service: Frameworks
    };
})
        .directive('datatable', ['datas', function(datas, config) {
        getColums = function($scope, objects) {
            $scope.columns = [];
            for (var c in objects[0]) {
                if (c.indexOf('$')) {

                    $scope.columns.push(c);
                    if (!$scope.sortClass[c]) {
                        $scope.sortClass[c] = "nosort";
                    }
                }
            }

        }
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope, $element, $attrs, datas) {
                var objects = $scope.objects = $scope.$parent.config.service.query({}, function(result) {

                    getColums($scope, result);
                });
                var columns = $scope.columns = [];
                var sortColumn;
                var sortClass = $scope.sortClass = [];
                var reversed = false;
                getColums($scope, objects);
                $scope.delete = function(line, $index, $event) {
                };
                $scope.edit = function(line) {
                    alert(line);
                };
                $scope.export = function() {
                    alert(datas);
                };
                $scope.getClass = function(column) {
                    return $scope.sortClass[column];
                };
                $scope.sort = function(column) {
                    if (sortColumn === column) {
                        reversed = !reversed;
                    } else {
                        reversed = false;
                        if (sortColumn) {
                            c = sortColumn.column;
                            $scope.sortClass[c] = "nosort";
                        }
                        sortColumn = column;
                    }
                    c = sortColumn.column;
                    if (reversed) {
                        $scope.sortClass[c] = "sort";
                    } else {
                        $scope.sortClass[c] = "reversesort";

                    }
                };
            },
            template:
                    '<table border="1" >' +
                    '    <thead>' +
                    '        <tr>' +
                    '            <th id="column{{column}}" ng-class="getClass(column)" ng-repeat="column in columns"  ng-click="sort(this)">{{column}}</th>' +
                    '            <th  ng-click="export()">export</th>' +
                    '        </tr>' +
                    '    </thead>' +
                    '    <tbody>' +
                    '       <tr ng-repeat="line in objects">' +
                    '           <td ng-repeat="column in columns" ng-click="edit(line)">' +
                    '{{line[column]}}' +
                    '           </td>' +
                    '           <td>' +
                    '<button class="btn btn-danger" ng-click="delete(line, $index, $event)">Delete</button>' +
                    '           </td>' +
                    '       </tr>' +
                    '    </tbody>' +
                    '</table>'
//                ,
//      replace: true
        };
    }])
//})
;
