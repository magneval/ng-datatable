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
        .directive('datatable', function() {
    return {
        restrict: 'E',
        transclude: true,
//      scope: {},
//      controller: function($scope, $element) {
//        var panes = $scope.panes = [];
// 
//        $scope.select = function(pane) {
//          angular.forEach(panes, function(pane) {
//            pane.selected = false;
//          });
//          pane.selected = true;
//        };
// 
//        this.addPane = function(pane) {
//          if (panes.length === 0) $scope.select(pane);
//          panes.push(pane);
//        };
//      },
        template:
                '<table border="1">' +
                '<tr >' +
                '<td >' +
                '{{data}}' +
                '</td>' +
                '</tr>' +
                '</table>'
//                ,
//      replace: true
    };
})
        ;
