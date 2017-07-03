angular.module('loteriaApp').controller('apostasCtrl',[
  '$scope', '$http', 'toastr', apostasController
])

function apostasController($scope, $http, toastr){
  $scope.apostador = {};
  $scope.apostador.numero = [];

  $scope.cadastrarAposta = function(){
    const url = 'http://localhost:3003/api/apostador';
    let aposta = $scope.apostador;
    $http.post(url, aposta).then(function(obj){
      console.log(obj);
      if(obj.status === 201){
        let toast = toastr.success('Aposta cadastrada com sucesso', 'Info');
        toastr.refreshTimer(toast, 7000);
        $scope.apostador = {};
        $scope.apostador.numero = [];
      }
    })
  };

  $scope.limparApostas = function(){
    const url = 'http://localhost:3003/api/apostador/';
    $http.delete(url).then(function(obj){
      let toast = toastr.success('Apostas apagadas com sucesso', 'Info');
      toastr.refreshTimer(toast, 7000);
      //console.log(obj);
    })
  }

}
