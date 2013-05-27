var ngDatatable = angular.module("components",[]) 

ngDatatable.directive("ng-datatable", function() {
  return {
    restrict: 'E',
    scope: {
      service: "@",
      configs: "=",
      onselect: "&"
    },
    template: 
                    '<table border="1" >' +
                    ' <thead>' +
                    ' <tr>' +
                    ' <th id="column{{column}}" ng-class="getClass(column)" ng-repeat="column in columns" ng-click="sort(this)">{{column}}</th>' +
                    ' <th ng-click="export()">export</th>' +
                    ' </tr>' +
                    ' </thead>' +
                    ' <tbody>' +
                    ' <tr ng-repeat="line in objects">' +
                    ' <td ng-repeat="column in columns" ng-click="edit(line)">' +
                    '{{line[column]}}' +
                    ' </td>' +
                    ' <td>' +
                    '<button class="btn btn-danger" ng-click="delete(line, $index, $event)">Delete</button>' +
                    ' </td>' +
                    ' </tr>' +
                    ' </tbody>' +
                    '</table>',
    link: function(scope) {
      scope.datas=service.query(configs);
    }
  }
}
)
