angular
  .module('lbpf')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = [];
function HomeCtrl() {
  const vm = this;

  vm.chooseProject = project => {
    console.log('hit');
    vm.currentProject = project;
  };
  vm.hideProject = () => {
    vm.currentProject = {};
  };
}
