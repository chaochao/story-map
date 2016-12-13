console.log("div controller");

storyMap.directive('navBar', navBar);
function navBar(){
  return {
    restrict: 'E',
    templateUrl: 'angular-app/directives/navBar.html',
    controller: 'LoginController',
    controllerAs: 'vm',
    replace: true
  };
};