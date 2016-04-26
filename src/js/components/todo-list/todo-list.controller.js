angular
  .module('myApp')
  .controller('todoListController', todoListController);


todoListController.$inject = ['$scope', 'todoListService'];

function todoListController($scope, todoListService) {
  todoListService.getAll()
    .then(function(todos) {
      $scope.todos = todos.data;
    });
}
