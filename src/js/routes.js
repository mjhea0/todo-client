angular
  .module('myApp')
  .config(appConfig);


appConfig.$inject = ['$routeProvider'];

function appConfig($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<todo-list></todo-list>'
    })
    .otherwise({
      redirectTo: '/'
    });
}