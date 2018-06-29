var Handler = function ($http, GRAVATAR_HOST, $sce) {
  this.profile = function (hash, callback) {
    var url = GRAVATAR_HOST + '/' + hash + '.json'
    $http.jsonp($sce.trustAsResourceUrl(url)).then(
      function success(res) {
        callback(null, res.data)
      }, function error(err) {
        callback(err)
      })
  }
}

Handler.$inject = [
  '$http', 'GRAVATAR_HOST', '$sce'
]

angular.module('app').service('Gravatar', Handler)
