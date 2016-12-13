console.log("controller");
storyMap.controller('MainController', ['$scope', function($scope){
  var self = this;
  $scope.title= "Main"
}])


storyMap.controller('LoginController',LoginController);
function LoginController(){
  var self = this;
  self.title = "LoginController";
}

storyMap.controller('MapController', MapController);
function MapController($scope){
  var self = this;
  $scope.name ="scope map";
  self.name ="self map";

}
