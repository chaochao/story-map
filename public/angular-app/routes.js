console.log("route")
storyMap.config(routes);

function routes($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl:'angular-app/pages/main.html',
    controller: 'MainController'
  })
  .when('/another', {
    templateUrl:'angular-app/pages/another.html'
  })
  .when('/map', {
    templateUrl:'angular-app/pages/map.html',
    controller: 'MapController as vm'
  })
  .otherwise({
    redirectTo: '/'
  });
}