angular.module('loteriaApp').controller('sorteioCtrl',[
  '$scope', '$http', dashboardController
])

function dashboardController($scope, $http){
  $scope.realizarSorteio = function(){
    const url = 'http://localhost:3003/api/sorteio';
    $http.get(url).then(function(obj){
      $scope.mensagem = obj.data;
    })
  }
}
