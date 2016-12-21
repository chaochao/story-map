console.log("route")
storyMap.config(routes);

function routes($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl:'angular-app/pages/main.html',
    controller: 'MainController'
  })
  .when('/map', {
    templateUrl:'angular-app/pages/map.html',
    controller: 'MapController as vm'
  })
  .when('/playground', {
    templateUrl:'angular-app/pages/playground.html',
    controller: 'PlaygroundController as vm'
  })
  .otherwise({
    redirectTo: '/'
  });
}