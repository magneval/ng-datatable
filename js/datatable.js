angular.module('components', [])
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
        .directive('datatable', ['datas', function(datas) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope, $element, datas) {
                var objects = $scope.objects = datas;
                var columns = $scope.columns = [];
                var sortColumn;
                var sortClass = $scope.sortClass = [];
                var reversed = false;
                for (var c in datas[0]) {
                    columns.push(c);
                    $scope.sortClass[c] = "nosort";
                }
                $scope.delete = function(line, $index, $event) {
                }
                $scope.edit = function(line) {
                    alert(line);
                }
                $scope.getClass = function(column) {
                    return $scope.sortClass[column];
                }
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
            },
            template:
                    '<table border="1" >' +
                    '    <thead>' +
                    '        <tr>' +
                    '            <th id="column{{column}}" ng-class="getClass(column)" ng-repeat="column in columns"  ng-click="sort(this)">{{column}}</th>' +
                    '        </tr>' +
                    '    </thead>' +
                    '    <tbody>' +
                    '           <td ng-repeat="column in columns" ng-click="edit(line)">' +
                    '{{line[column]}}' +
                    '           </td>' +
                    '           <td>' +
                    '<button class="btn btn-danger" ng-click="delete(line, $index, $event)">Delete</button>' +
                    '           </td>' +
                    '       </tr>' +
                    '    </tbody>' +
                    '</table>'
        }
        ;
    }])
        ;
