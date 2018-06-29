var Handler = function ($scope, $location) {
  $scope.menu = '/'
  $scope.go = function (menu) {
    $location.path(menu)
    $scope.menu = menu
  }
}

Handler.$inject = [
  '$scope', '$location'
]

angular.module('app').controller('Main', Handler)
