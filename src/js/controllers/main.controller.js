angular
  .module('lbpf')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [];
function MainCtrl() {
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
