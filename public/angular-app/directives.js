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

storyMap.directive('register', register);
function register(){
  return {
    restrict: 'E',
    templateUrl: 'angular-app/directives/register.html',
    replace: true
  };
};

storyMap.directive('article', article);
function article(){
  return {
    restrict: 'E',
    templateUrl:'angular-app/directives/article.html',
    replace: true,
    scope:{
      atcl: "="
    }
  }
}