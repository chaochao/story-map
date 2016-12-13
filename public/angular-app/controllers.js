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