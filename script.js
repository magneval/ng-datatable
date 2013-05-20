angular.module('components', []).
  directive('tabs', function() {
    return {
      restrict: 'E',
controller: function($scope, $element) {
},
      template:
        '<div>' +
          'Hello' +
        '</div>',
      replace: true
    };
  })
