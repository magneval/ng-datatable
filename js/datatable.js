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
                for (var c in datas[0]) {
                    columns.push(c);
                }
            },
            template:
                    '<table border="1" >' +
                    '    <thead>' +
                    '        <tr>' +
                    '            <th ng-repeat="column in columns">{{column}}</th>' +
                    '        </tr>' +
                    '    </thead>' +
                    '    <tbody>' +
                    '       <tr ng-repeat="line in objects" >' +
                    '           <td ng-repeat="column in columns">' +
                    '{{line[column]}}' +
                    '           </td>' +
                    '       </tr>' +
                    '    </tbody>' +
                    '</table>'
        }
        ;
    }])
        ;
