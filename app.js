let app = new Vue({

  el: '#content',

  data: {
    pseudo: false,
    nbMotsParMinute: 30,
    seconds: 10,
    words: [{"word":"poulet","score":38421,"tags":["syn","n","prop"]},{"word":"gallus gallus","score":37722,"tags":["syn","n","prop"]},{"word":"coward","score":28270,"tags":["syn","n"]},{"word":"yellow","score":27729,"tags":["syn","n"]},{"word":"crybaby","score":27542,"tags":["syn","n"]},{"word":"wimp","score":27329,"tags":["syn","n"]},{"word":"fearful","score":25292,"tags":["syn","adj"]},{"word":"cowardly","score":24654,"tags":["syn","adj"]},{"word":"chickenhearted","score":22483,"tags":["syn","adj"]},{"word":"lily-livered","score":22483,"tags":["syn","adj"]},{"word":"volaille","score":22483,"tags":["syn","n"]},{"word":"white-livered","score":22483,"tags":["syn","adj"]},{"word":"yellow-bellied","score":22483,"tags":["syn","adj"]},{"word":"meat","score":22482,"tags":["n"]},{"word":"poultry","score":21548,"tags":["n"]},{"word":"pig","score":19341,"tags":["n"]},{"word":"poussin","score":19143,"tags":["n","prop"]},{"word":"egg","score":18917,"tags":["n"]},{"word":"broiler","score":18730,"tags":["n"]},{"word":"bacon","score":18335,"tags":["n"]},{"word":"fowl","score":17157,"tags":["n"]},{"word":"duck","score":15792,"tags":["n"]},{"word":"fried","score":15511,"tags":["adj","prop"]},{"word":"roast","score":15498,"tags":["n"]},{"word":"goose","score":15344,"tags":["n"]},{"word":"croquettes","score":15207,"tags":["n"]},{"word":"hen","score":14836,"tags":["n"]},{"word":"rooster","score":14428,"tags":["n"]},{"word":"pollo","score":14074,"tags":["n"]},{"word":"bird","score":13903,"tags":["n"]},{"word":"casserole","score":13646,"tags":["n"]},{"word":"bread","score":13482,"tags":["n"]},{"word":"honey","score":12331,"tags":["n"]},{"word":"farm","score":11221,"tags":["n"]},{"word":"chick","score":11079,"tags":["n"]},{"word":"coop","score":10856,"tags":["n"]},{"word":"alligator","score":10548,"tags":["n"]},{"word":"avian","score":10359,"tags":["adj"]},{"word":"bunny","score":9950,"tags":["n"]},{"word":"ducky","score":9791,"tags":["n"]},{"word":"kitchen","score":9561,"tags":["n"]},{"word":"puffin","score":9216,"tags":["n"]},{"word":"octopus","score":9198,"tags":["n"]},{"word":"eggnog","score":9110,"tags":["n"]},{"word":"elephant","score":9026,"tags":["n"]},{"word":"momma","score":7532,"tags":["n"]},{"word":"puss","score":7459,"tags":["n"]},{"word":"poodle","score":7451,"tags":["n"]},{"word":"ape","score":7338,"tags":["n"]},{"word":"baby","score":6932,"tags":["n"]},{"word":"hatching","score":6664,"tags":["n"]},{"word":"copper","score":5972,"tags":["n"]},{"word":"wuss","score":5520,"tags":["n"]},{"word":"ave","score":5426,"tags":["n","prop"]},{"word":"toys","score":5261,"tags":["n"]},{"word":"afraid","score":5243,"tags":["adj"]},{"word":"scared","score":5210,"tags":["adj"]},{"word":"wench","score":5199,"tags":["n"]},{"word":"kiddo","score":5164,"tags":["n"]},{"word":"sissy","score":4946,"tags":["n"]},{"word":"sweetie","score":4850,"tags":["n"]},{"word":"hussy","score":4783,"tags":["n"]},{"word":"handkerchief","score":4743,"tags":["n"]},{"word":"varicella","score":4728,"tags":["n"]},{"word":"fireball","score":4717,"tags":["n"]},{"word":"spook","score":4481,"tags":["n"]},{"word":"chickenpox","score":4421,"tags":["n"]},{"word":"trash","score":4342,"tags":["n"]},{"word":"bug","score":4168,"tags":["n"]},{"word":"quitter","score":4118,"tags":["n"]},{"word":"gal","score":3847,"tags":["n"]},{"word":"girl","score":3778,"tags":["n"]},{"word":"dame","score":3635,"tags":["n"]},{"word":"consignment","score":3578,"tags":["n"]},{"word":"weakling","score":3204,"tags":["n"]},{"word":"cutie","score":3180,"tags":["n"]},{"word":"cop","score":2859,"tags":["n"]},{"word":"sweetheart","score":2546,"tags":["n"]},{"word":"fuzz","score":2522,"tags":["n"]},{"word":"doormat","score":2446,"tags":["n"]},{"word":"babe","score":2174,"tags":["n"]},{"word":"broad","score":2162,"tags":["adj"]},{"word":"marketable","score":432,"tags":["adj"]},{"word":"coops","score":1,"tags":["n"]},{"word":"sexer","score":1,"tags":["n"]}],
   	word: "Prêt?",
   	motSaisi: "",
   	niveauActuel: 0,
   	niveauMaxAtteint: 0,
   	nbMotsOk: 0,
   	success: true,
   	motsOkConsecutifs: 0,
   	nbmotsConsecutifs: 5,
   	motsCorrectsSaisis: 0,
   	jeu: false,
   	fin: false,
    maxTimer: true,
    playerName: "",
    bestScores: [
      { nom: 'atchoum', score: 5, pluriel: true },
      { nom: 'dormeur', score: 4, pluriel: true },
      { nom: 'timide', score: 3, pluriel: true },
      { nom: 'grincheux', score: 2, pluriel: true},
      { nom: 'prof', score: 1, pluriel: false }
    ],
  },

  methods: {

    recPseudo: function() {
      if(this.playerName != "") {
        this.pseudo = true
      }
    },

    start: function() { //f° lancée au click bouton "jouer"
      this.seconds = 10
      this.motSaisi = ""
      this.niveauActuel = 0
      this.niveauMaxAtteint = 0
      this.motsCorrectsSaisis = 0
      this.motsOkConsecutifs = 0
      this.nbmotsConsecutifs = 5
      this.jeu = true
      this.fin = false
      this.$refs.answer.focus()
      this.randomWords()
      clearInterval(this.$interval)
      this.getCount()
    },

  	getCount: function() { //f° affichage chrono
  		this.$interval = setInterval(() => {
  			if(this.seconds >0) {
  				this.seconds--
  			}
		  }, 1000)
  	},

  	randomWords: function() { //f° affichage mots
      //nouveau tableau de mot de - de 5 lettres:
      function infA5(element) {
        return element.word.length <= 5
      }
     if(this.niveauActuel <=2) { //En dessous du niveau 2, les mots affichés font moins de 6 lettres
        this.$smallWords = this.words.filter(infA5)
        var index = Math.floor(Math.random()*this.$smallWords.length)
        this.word = this.$smallWords[index].word
      } else {
        var index = Math.floor(Math.random()*this.words.length)
        this.word = this.words[index].word
      }
  	},

  	control: function() { //f° controle des mots saisis
  		if(this.seconds > 0) {
	  		if(this.word !== this.motSaisi) {
	  			this.success = false
	  		} else{
	  			this.success = true
		  		this.randomWords()
		  		this.motSaisi = ""
		  		this.nbMotsOk++
		  		this.motsOkConsecutifs++
		  		this.motsCorrectsSaisis++
		  		if(this.motsOkConsecutifs == this.nbmotsConsecutifs) {
		  			this.niveauActuel++
		  			this.niveauMaxAtteint++
			  		this.nbMotsOk = 0
			  		this.motsOkConsecutifs = 0
			  		this.nbmotsConsecutifs++
            this.nbMotsParMinute++
            this.modTempsMax(this.nbmotsConsecutifs, this.nbMotsParMinute)
		  		}
	  		}	
  		}
  		else{
  			this.word = "Perdu!"
  			this.jeu = false
  			this.fin = true
        for(var $i=0 ; $i<this.bestScores.length ; $i++) {
            if(this.motsOkConsecutifs > this.bestScores[$i].score){
              this.bestScores[$i].score = this.motsCorrectsSaisis
              this.bestScores[$i].nom = this.playerName
              this.bestScores[$i].pluriel = true
              this.word = "Perdu! Mais tu es dans le top 5, bravo!"
              break 
            }
        }
  		}
  	},

    modTempsMax: function(nbmotsConsecutifs, nbMotsParMinute) { //f° mod affichage temps compteur
      return this.seconds = Math.round((60*nbmotsConsecutifs)/nbMotsParMinute)
    },

    smallWords: function(elements) {
      return elements.word.length <= 5
    }
  }

})

