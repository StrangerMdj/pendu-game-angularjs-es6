

import './services/core.module';
import './app.components';

const appModule = angular
	.module('game-es6', [
		'app.core',
		'ui.router',
		'app.home',
		'app.game'
	]);

export default appModule;
