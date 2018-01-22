export class GameService {
    constructor($state){
        'ngInject';
        this.$state = $state;
    }

    closeAction() {
        this.$state.go('home') 
    }
}