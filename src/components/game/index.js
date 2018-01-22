import gameComponent from './game.component';
import { GameService } from './game.service';

const gameModule = angular.module('app.game', []);

gameModule.component('game', gameComponent);
gameModule.service('GameService', GameService);

export default gameModule;
