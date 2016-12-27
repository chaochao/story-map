storyMap.service('articleService', ['$http', function($http){

  this.getAll = function(){
    return $http.get('api/articles').catch(function(err){
      console.log(err);
    })
  }
  
}])