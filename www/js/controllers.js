angular.module('starter', ['ionic', 'starter.services', 'ionic-audio'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MusicCtrl', ['$scope', 'MediaManager', function($scope, MediaManager) {
    
    $scope.dynamicTrack = {};   // we use this scope variable to dynamically assign a track

    $scope.myTrack = {
        url: 'http://oggvorbis.tb-stream.net:80/technobase.ogg',
        artist: 'Somebody',
        title: 'Song name',
        art: 'img/album_art.jpg'
    };

}]);
