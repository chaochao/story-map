console.log("controller");
storyMap.controller('MainController', ['$scope', function($scope) {
  var self = this;

  $scope.title = "Main";
  console.log($)
  // i18n
  //   .init({
  //     detectLngQS: 'lang',
  //     resGetPath: 'locales/__lng__/__ns__.json'
  //   })
  //   .done(function() { 
  //     $('[data-i18n]').i18n();
  //     var appName = $.t("app.name");
  //     console.log(appName);
  //   });


}])


storyMap.controller('LoginController', LoginController);

function LoginController() {
  var self = this;
  self.title = "LoginController";
}

storyMap.controller('MapController', MapController);

function MapController($scope) {
  var self = this;
  $scope.name = "scope map";
  self.name = "self map";
  $scope.map = new BMap.Map("bdmap"); 
  
  $scope.map.centerAndZoom(new BMap.Point(104.06, 30.67), 11);  // 初始化地图,设置中心点坐标和地图级别
  var point = new BMap.Point(104.06, 30.67);  
  var marker = new BMap.Marker(point)
  $scope.map.addOverlay(marker); 
  console.log($scope.map);
  // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
  // // map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
  $scope.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  $scope.map.addEventListener('click',function(e){
    var pt =e.point;
    console.log(pt);
  });

  self.submitArtical = function(){
    console.log("click");
  } 

}

storyMap.controller('PlaygroundController', PlaygroundController);

function PlaygroundController($scope) {
  var self = this;
  $scope.name = "play";
  $('.images').imageGrid()
}

