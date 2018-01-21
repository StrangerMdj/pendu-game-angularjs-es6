import gameComponent from './game.component';

const gameModule = angular.module('app.game', []);

gameModule.component('game', gameComponent);

export default gameModule;
