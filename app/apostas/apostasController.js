angular.module('loteriaApp').controller('apostasCtrl',[
  '$scope', '$http', apostasController
])

function apostasController($scope, $http){
  $scope.apostador = {};
  $scope.apostador.numero = [];
  $scope.mensagem = "";

  $scope.cadastrarAposta = function(){
    const url = 'http://localhost:3003/api/apostador';
    let aposta = $scope.apostador;
    $http.post(url, aposta).then(function(obj){
      console.log(obj);
      if(obj.status === 201){
        $scope.mensagem = "Aposta Cadastrada";
        $scope.apostador = {};
        $scope.apostador.numero = [];
      }
    })
  };

  $scope.limparApostas = function(){
    const url = 'http://localhost:3003/api/apostador/';
    $http.delete(url).then(function(obj){
      console.log(obj);
    })
  }

}
