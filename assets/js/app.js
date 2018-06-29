angular.module('app', [
  'ngRoute',
  'angular-md5'
])

var Handler = function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/index.html',
      controller: 'Index'
    })
    .when('/help', {
      templateUrl: '/views/help.html',
      controller: 'Help'
    })
    .otherwise({
      redirectTo: '/'
    })
}

Handler.$inject = [
  '$routeProvider'
]

angular.module('app').config(Handler)
