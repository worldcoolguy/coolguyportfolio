angular
  .module('lbpf')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['ProjectsConst'];
function HomeCtrl(ProjectsConst) {
  const vm = this;

  vm.projects = ProjectsConst;

  vm.chooseProject = project => {
    vm.currentProject = project;
  };
  vm.hideProject = () => {
    vm.currentProject = {};
  };
}
