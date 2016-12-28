console.log("controller");
storyMap.controller('MainController', ['$scope', function($scope) {
  var self = this;
  $scope.title = "Main";
  console.log($)
}]);


storyMap.controller('LoginController', LoginController);

function LoginController() {
  var self = this;
  self.title = "LoginController";
}

storyMap.controller('MapController', MapController);

function MapController($scope, $http, articleService) {
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
  articleService.getAll().then(function(res){
    $scope.articles = res.data;
    console.log(res.data);
  });
    

  // $http.get('/api/articles').then(function(res){
  //   $scope.articlas = res.data;
  //   console.log($scope.articlas);

  // })
  // .catch(function(err){
  //   console.log(err);
  // });

  // move this to article service
  self.submitArticle = function(){
    console.log("click");
    console.log(self.newArticleTitle);
    console.log(self.newArticleContent);
    var newArticle ={
      title: self.newArticleTitle,
      content: self.newArticleContent
    }
    $http.post('/api/articles/new', newArticle).then(function(res){
      console.log(res);
      self.newArticleTitle =''
      self.newArticleContent = ''
    }).catch(function(e){
      console.log(e);
    });
  } 
}

storyMap.controller('PlaygroundController', PlaygroundController);

function PlaygroundController($scope) {
  var self = this;
  $scope.name = "play";
  $('.images').imageGrid()
}

storyMap.controller('ArticleController', ArticleController);

function ArticleController($scope) {
  var self= this;
  $scope.showComment = false;
  $scope.like = false;
  $scope.toggleComment = function() {
      $scope.showComment = $scope.showComment === false ? true: false;
  };
  $scope.toggleLike = function() {
    //also need to add to article
    $scope.like = $scope.like === false ? true: false;
  };


}



