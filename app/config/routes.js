angular.module('loteriaApp').config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('apostas', {
      url: "/apostas",
      templateUrl: "apostas/apostas.html"
    }).state('sorteio', {
      url: "/sorteio",
      templateUrl: "sorteio/sorteio.html"
    })

    $urlRouterProvider.otherwise('/apostas')
  }
])
