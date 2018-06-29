var Handler = function ($scope) {
  $scope.help = [
    {
      'name': 'Controllers',
      'description': 'Serviço responsável por instanciar os controllers.',
      'link': 'https://docs.angularjs.org/api/ng/service/$controller'
    },
    {
      'name': 'Directives',
      'description': 'São marcadores colocados nos elementos HTML (um atributo, nome de elemento, comentário ou classe CSS). Por exemplo: <my-dir></my-dir> | <span my-dir="exp"></span> | <!-- directive: my-dir exp --> | <span class="my-dir: exp;"></span>',
      'link': 'https://docs.angularjs.org/guide/directive'
    },
    {
      'name': 'Factories',
      'description': 'Deve sempre retornar algo, não existe um padrão para o seu uso, logo é a mais comum.',
      'link': 'https://rafaell-lycan.com/2015/angular-services-factories-providers/'
    },
    {
      'name': 'Services',
      'description': 'Muito parecido com as Factories, porém esse retorna uma instância. (não tem return, é algo como new Service())',
      'link': 'https://rafaell-lycan.com/2015/angular-services-factories-providers/'
    },
    {
      'name': 'Providers',
      'description': 'Muito parecido com as Factories e Services, mas nesse caso são configuráveis. Quer dizer, você pode configurar no inicio do app e depois só utilizar os métodos.',
      'link': 'https://rafaell-lycan.com/2015/angular-services-factories-providers/'
    },
    {
      'name': 'Filters',
      'description': 'Formata o valor da expressão para exibir ao usuário. Defaults: https://docs.angularjs.org/api/ng/filter',
      'link': 'https://docs.angularjs.org/guide/filter'
    }
  ]
}

Handler.$inject = [
  '$scope'
]

angular.module('app').controller('Help', Handler)
