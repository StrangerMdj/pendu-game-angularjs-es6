import routerHelperService from './router-helper/router-helper.service';

const coreModule = angular.module('app.core', [
	'ui.router'
]);


coreModule.config(routerHelperService);

export default coreModule;
