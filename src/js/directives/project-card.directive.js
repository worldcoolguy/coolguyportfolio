angular
  .module('lbpf')
  .directive('projecttab', projecttab);

projecttab.$inject = [];
function projecttab() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/views/templates/projecttab.html',
    scope: {
      project: '='
    }
  };
}
