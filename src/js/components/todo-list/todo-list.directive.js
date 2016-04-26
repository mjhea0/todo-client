angular
  .module('myApp')
  .directive('todoList', todoList);


function todoList() {
  return {
    restrict: 'EA',
    scope: false,
    controller: 'todoListController',
    templateUrl: 'js/components/todo-list/todo-list.template.html',
  };
}