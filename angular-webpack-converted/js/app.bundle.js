webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('myApp', []);

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular
	    .module('myApp')
	    .directive('yepNope', __webpack_require__(2));

/***/ },
/* 2 */
/***/ function(module, exports) {

	function YepNopeDirective() {
	  return {
	    restrict: 'E',
	    link: function (scope, element, attrs) {
	      scope.$watch(attrs.check, function (val) {
	        var words = val ? 'Yep' : 'Nope';
	        element.text(words);
	      });
	    }
	  }
	}

	module.exports = YepNopeDirective;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(4);

	angular.module('myApp').service('GithubStatusService', __webpack_require__(6));

/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	'use strict';

	GithubStatusService.$inject = ['$http'];
	function GithubStatusService($http) {
	    var _this = this;
	    _this.getStatus = function getStatus() {
	        return $http({
	            method: 'jsonp',
	            url: 'https://status.github.com/api/status.json?callback=JSON_CALLBACK',
	            transformResponse: appendTransform($http.defaults.transformResponse, function(value) {
	                return (value.status === 'good');
	            })
	        });
	    }
	}

	function appendTransform(defaults, transform) {
	  defaults = angular.isArray(defaults) ? defaults : [defaults];
	  return defaults.concat(transform);
	}

	module.exports = GithubStatusService;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular
	    .module('myApp')
	    .controller('homeController', __webpack_require__(8));

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	HomeController.$inject = ['GithubStatusService'];
	function HomeController(gh) {
	    var vm=this;
	    vm.valueOne=_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
	}

	module.exports = HomeController;

/***/ }
]);