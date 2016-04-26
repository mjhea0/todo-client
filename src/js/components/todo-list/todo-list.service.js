angular
  .module('myApp')
  .service('todoListService', todoListService);

todoListService.$inject = ['$http'];

function todoListService($http) {
  return {
    getAll: function() {
      return $http.get('https://ancient-reaches-80028.herokuapp.com/api/v1/todos');
    }
  };
}