angular.module('loteriaApp').controller('sorteioCtrl',[
  '$scope', '$http', sorteioController
])

function sorteioController($scope, $http){

  $scope.mensagemSorteio = "";
  $scope.mensagemGanhador = "";

  $scope.realizarSorteio = function(){
    const url = 'http://localhost:3003/api/sorteio';
    $http.get(url).then(function(obj){
      $scope.numeros = obj.data;
      $scope.mensagemSorteio = "Os números os sorteados são: " + $scope.numeros;
    })
  };

  $scope.verificarGanhador = function(){
    const url = 'http://localhost:3003/api/sorteio/ganhador'
    $http.get(url).then(function(obj){
      $scope.mensagemGanhador = obj.data;
    })
  };
}
