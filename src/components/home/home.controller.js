export default class HomeController {
	constructor($log, $rootScope, $state) {
		'ngInject';
		this.$rootScoope = $rootScope;
		this.$log = $log;
		this.$state = $state;
	}

	$onInit = () => {
		this.heading = 'Welcome to the game !';
	};

	confirmPseudoAction  = () => {
		this.$rootScoope.pseudo = this.pseudo;
		this.$state.go('game')
	}
}
