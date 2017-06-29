angular
  .module('lbpf')
  .controller('ProjectsCtrl', ProjectsCtrl);

ProjectsCtrl.$inject = [];
function ProjectsCtrl() {
  const vm = this;

  vm.currentProject = {};

  vm.chooseProject = project => {
    console.log('hit');
    vm.currentProject = project;
  };
  vm.hideProject = () => {
    vm.currentProject = {};
  };
}
