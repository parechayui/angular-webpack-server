'use strict';

HomeController.$inject = ['GithubStatusService'];
function HomeController(gh) {
    var vm=this;
    vm.valueOne=_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
}

module.exports = HomeController;