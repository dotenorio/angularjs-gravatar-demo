var Handler = function ($scope, Gravatar, md5) {
  $scope.getGravatarProfile = function () {
    Gravatar.profile(md5.createHash($scope.emailGravatar), (err, data) => {
      if (err) return $scope.gravatarResult = err
      $scope.gravatarResult = data
    })
  }
}

Handler.$inject = [
  '$scope', 'Gravatar', 'md5'
]

angular.module('app').controller('Index', Handler)
