export default class GameController {
	constructor($log, $rootScope, $state, GameService) {
		'ngInject';
		this.heading = 'Pendu Game !!'
		this.$log = $log;
		this.$rootScoope = $rootScope;
		this.$state = $state
		this.failed =[];
		this.hearts = 5;
		this._gameService = GameService;
	}

	$onInit = () => {
		if(this.$rootScoope.pseudo == undefined){
			this._gameService.closeAction()
		}
		this.generateThePendu(); 
		
	};

	generateThePendu = () =>{
		this.count = 0;
		this.word = this.$rootScoope.pseudo;
		this.dash = '';
		for (let i = 0; i < this.word.length - 2; i++) {
			this.dash += " _";
		}
		this.hiddenWord = this.word[0] + this.dash + this.word[this.word.length - 1];
		this.word = "";
	};

	checkAlphabet = () => {
			this.count = 0;
			this._word = this.$rootScoope.pseudo;
			
			for (var i = 1; i < this._word.length - 1; i++) {
				 
				if (this.alphabet == this._word[i]) {
					this.count++;
					this.hiddenWord = this.hiddenWord.split("").map(function (lettres, index) {
						if (index == i * 2) return this.alphabet;
						return lettres;
					}.bind(this)).join('');
				}
			}
			if (this.count == 0) {
				this.failed.push(this.alphabet);
				this.hearts-- ;
			}
			this.alphabet = "";
			if (this._word == this.hiddenWord.replace(/[ ]+/g, ""))
				this.success= "Félicitation tu as trouvé le  mot !!!";	
	};

	close = () => {

		this._gameService.closeAction();
		this.$rootScoope.pseudo = ""
	};
}
