// Game design by Matt Leacock
// Coded adaptation by Luke Derrick.
// Note to the reader: as with any coded game, this code probably won't make sense (even with the comments)
// if the reader does not know how to play Pandemic.

var app = angular.module('app',[]);

app.controller('gameController',['$scope',function($scope){
// Soundtrack
	var audio = new Audio('sound/guileTheme.mp3');
	var scream = new Audio('sound/screaming_crowd.mp3')
// A linked list of the Player Cards.
	var PlayerDeck58 = {data:'img/PlayerDeck/Epidemic.png',next:null};
	var PlayerDeck57 = {data:'img/PlayerDeck/Epidemic.png',next:PlayerDeck58};
	var PlayerDeck56 = {data:'img/PlayerDeck/Epidemic.png',next:PlayerDeck57};
	var PlayerDeck55 = {data:'img/PlayerDeck/Epidemic.png',next:PlayerDeck56};
	var PlayerDeck54 = {data:'img/PlayerDeck/Epidemic.png',next:PlayerDeck55};
	var PlayerDeck53 = {data:'img/PlayerDeck/Epidemic.png',next:PlayerDeck54};
	var PlayerDeck52 = {data:'img/PlayerDeck/SE_OneQuietNight.png',next:PlayerDeck53};
	var PlayerDeck51 = {data:'img/PlayerDeck/SE_GovernmentGrant.png',next:PlayerDeck52};
	var PlayerDeck50 = {data:'img/PlayerDeck/SE_Forecast.png',next:PlayerDeck51};
	var PlayerDeck49 = {data:'img/PlayerDeck/SE_Airlift.png',next:PlayerDeck50};
	var PlayerDeck48 = {data:'img/PlayerDeck/city_Bangkok.png',next:PlayerDeck49};
	var PlayerDeck47 = {data:'img/PlayerDeck/city_Washington.png',next:PlayerDeck48};
	var PlayerDeck46 = {data:'img/PlayerDeck/city_Tokyo.png',next:PlayerDeck47};
	var PlayerDeck45 = {data:'img/PlayerDeck/city_Tehran.png',next:PlayerDeck46};
	var PlayerDeck44 = {data:'img/PlayerDeck/city_Taipei.png',next:PlayerDeck45};
	var PlayerDeck43 = {data:'img/PlayerDeck/city_Sydney.png',next:PlayerDeck44};
	var PlayerDeck42 = {data:'img/PlayerDeck/city_StPetersburg.png',next:PlayerDeck43};
	var PlayerDeck41 = {data:'img/PlayerDeck/city_Shanghai.png',next:PlayerDeck42};
	var PlayerDeck40 = {data:'img/PlayerDeck/city_Seoul.png',next:PlayerDeck41};
	var PlayerDeck39 = {data:'img/PlayerDeck/city_SaoPaulo.png',next:PlayerDeck40};
	var PlayerDeck38 = {data:'img/PlayerDeck/city_Santiago.png',next:PlayerDeck39};
	var PlayerDeck37 = {data:'img/PlayerDeck/city_SanFrancisco.png',next:PlayerDeck38};
	var PlayerDeck36 = {data:'img/PlayerDeck/city_Riyadh.png',next:PlayerDeck37};
	var PlayerDeck35 = {data:'img/PlayerDeck/city_Paris.png',next:PlayerDeck36};
	var PlayerDeck34 = {data:'img/PlayerDeck/city_Osaka.png',next:PlayerDeck35};
	var PlayerDeck33 = {data:'img/PlayerDeck/city_NewYork.png',next:PlayerDeck34};
	var PlayerDeck32 = {data:'img/PlayerDeck/city_Mumbai.png',next:PlayerDeck33};
	var PlayerDeck31 = {data:'img/PlayerDeck/city_Moscow.png',next:PlayerDeck32};
	var PlayerDeck30 = {data:'img/PlayerDeck/city_Montreal.png',next:PlayerDeck31};
	var PlayerDeck29 = {data:'img/PlayerDeck/city_Milan.png',next:PlayerDeck30};
	var PlayerDeck28 = {data:'img/PlayerDeck/city_Miami.png',next:PlayerDeck29};
	var PlayerDeck27 = {data:'img/PlayerDeck/city_MexicoCity.png',next:PlayerDeck28};
	var PlayerDeck26 = {data:'img/PlayerDeck/city_Manila.png',next:PlayerDeck27};
	var PlayerDeck25 = {data:'img/PlayerDeck/city_Madrid.png',next:PlayerDeck26};
	var PlayerDeck24 = {data:'img/PlayerDeck/city_LosAngeles.png',next:PlayerDeck25};
	var PlayerDeck23 = {data:'img/PlayerDeck/city_London.png',next:PlayerDeck24};
	var PlayerDeck22 = {data:'img/PlayerDeck/city_Lima.png',next:PlayerDeck23};
	var PlayerDeck21 = {data:'img/PlayerDeck/city_Lagos.png',next:PlayerDeck22};
	var PlayerDeck20 = {data:'img/PlayerDeck/city_Kolkata.png',next:PlayerDeck21};
	var PlayerDeck19 = {data:'img/PlayerDeck/city_Kinshasa.png',next:PlayerDeck20};
	var PlayerDeck18 = {data:'img/PlayerDeck/city_Khartoum.png',next:PlayerDeck19};
	var PlayerDeck17 = {data:'img/PlayerDeck/city_Karachi.png',next:PlayerDeck18};
	var PlayerDeck16 = {data:'img/PlayerDeck/city_Johannesburg.png',next:PlayerDeck17};
	var PlayerDeck15 = {data:'img/PlayerDeck/city_Jakarta.png',next:PlayerDeck16};
	var PlayerDeck14 = {data:'img/PlayerDeck/city_Istanbul.png',next:PlayerDeck15};
	var PlayerDeck13 = {data:'img/PlayerDeck/city_HongKong.png',next:PlayerDeck14};
	var PlayerDeck12 = {data:'img/PlayerDeck/city_HoChiMinh.png',next:PlayerDeck13};
	var PlayerDeck11 = {data:'img/PlayerDeck/city_Essen.png',next:PlayerDeck12};
	var PlayerDeck10 = {data:'img/PlayerDeck/city_Delhi.png',next:PlayerDeck11};
	var PlayerDeck9 = {data:'img/PlayerDeck/city_Chicago.png',next:PlayerDeck10};
	var PlayerDeck8 = {data:'img/PlayerDeck/city_Chennai.png',next:PlayerDeck9};
	var PlayerDeck7 = {data:'img/PlayerDeck/city_Cairo.png',next:PlayerDeck8};
	var PlayerDeck6 = {data:'img/PlayerDeck/city_BuenosAires.png',next:PlayerDeck7};
	var PlayerDeck5 = {data:'img/PlayerDeck/city_Bogota.png',next:PlayerDeck6};
	var PlayerDeck4 = {data:'img/PlayerDeck/city_Beijing.png',next:PlayerDeck5};
	var PlayerDeck3 = {data:'img/PlayerDeck/city_Baghdad.png',next:PlayerDeck4};
	var PlayerDeck2 = {data:'img/PlayerDeck/city_Atlanta.png',next:PlayerDeck3};
	var PlayerDeck1 = {data:'img/PlayerDeck/city_Algiers.png',next:PlayerDeck2};
	var PlayerDeck0 = {data:'img/PlayerDeck/SE_ResilientPopulation.png',next:PlayerDeck1};
	console.log(PlayerDeck0)
	var startPlayerDeck = PlayerDeck0;
	var endPlayerDeck = PlayerDeck58;
// A group of variables and arrays, which are involved in the drawing of Player Cards or are used to navigate
// the player profiles.
	$scope.holdingCards = [];
	$scope.usedEventCard = [];
	$scope.show = 0;
	$scope.currentTurn = null;
	$scope.showPlayerDeck = 0;
	var activePlayerDeck = 53;
	var addEpidemicCards = 0;
// epidemicProbability is the total number of player cards minus the number of Player Cards initially
// drawn (based on the number of players) divided by the number of epidemic cards in the deck. 
// It simulates shuffling the epidemic cards evenly throughout the deck, the number of which depends
// on the level of difficulty chosen.
	$scope.epidemicProbability = 0;
	$scope.epidemicProbabilityPerm = 0;
	$scope.insertInitialEpidemicCards = 0;

// A linked list of the infection cards.
	var infectDeck47 = {data:'img/InfectionCards/infect_Washington.png',next:null};
	var infectDeck46 = {data:'img/InfectionCards/infect_Tokyo.png',next:infectDeck47};
	var infectDeck45 = {data:'img/InfectionCards/infect_Tehran.png',next:infectDeck46};
	var infectDeck44 = {data:'img/InfectionCards/infect_Taipei.png',next:infectDeck45};
	var infectDeck43 = {data:'img/InfectionCards/infect_Sydney.png',next:infectDeck44};
	var infectDeck42 = {data:'img/InfectionCards/infect_StPetersburg.png',next:infectDeck43};
	var infectDeck41 = {data:'img/InfectionCards/infect_Shanghai.png',next:infectDeck42};
	var infectDeck40 = {data:'img/InfectionCards/infect_Seoul.png',next:infectDeck41};
	var infectDeck39 = {data:'img/InfectionCards/infect_SaoPaulo.png',next:infectDeck40};
	var infectDeck38 = {data:'img/InfectionCards/infect_Santiago.png',next:infectDeck39};
	var infectDeck37 = {data:'img/InfectionCards/infect_SanFrancisco.png',next:infectDeck38};
	var infectDeck36 = {data:'img/InfectionCards/infect_Riyadh.png',next:infectDeck37};
	var infectDeck35 = {data:'img/InfectionCards/infect_Paris.png',next:infectDeck36};
	var infectDeck34 = {data:'img/InfectionCards/infect_Osaka.png',next:infectDeck35};
	var infectDeck33 = {data:'img/InfectionCards/infect_NewYork.png',next:infectDeck34};
	var infectDeck32 = {data:'img/InfectionCards/infect_Mumbai.png',next:infectDeck33};
	var infectDeck31 = {data:'img/InfectionCards/infect_Moscow.png',next:infectDeck32};
	var infectDeck30 = {data:'img/InfectionCards/infect_Montreal.png',next:infectDeck31};
	var infectDeck29 = {data:'img/InfectionCards/infect_Milan.png',next:infectDeck30};
	var infectDeck28 = {data:'img/InfectionCards/infect_Miami.png',next:infectDeck29};
	var infectDeck27 = {data:'img/InfectionCards/infect_MexicoCity.png',next:infectDeck28};
	var infectDeck26 = {data:'img/InfectionCards/infect_Manila.png',next:infectDeck27};
	var infectDeck25 = {data:'img/InfectionCards/infect_Madrid.png',next:infectDeck26};
	var infectDeck24 = {data:'img/InfectionCards/infect_LosAngeles.png',next:infectDeck25};
	var infectDeck23 = {data:'img/InfectionCards/infect_London.png',next:infectDeck24};
	var infectDeck22 = {data:'img/InfectionCards/infect_Lima.png',next:infectDeck23};
	var infectDeck21 = {data:'img/InfectionCards/infect_Lagos.png',next:infectDeck22};
	var infectDeck20 = {data:'img/InfectionCards/infect_Kolkata.png',next:infectDeck21};
	var infectDeck19 = {data:'img/InfectionCards/infect_Kinshasa.png',next:infectDeck20};
	var infectDeck18 = {data:'img/InfectionCards/infect_Khartoum.png',next:infectDeck19};
	var infectDeck17 = {data:'img/InfectionCards/infect_Karachi.png',next:infectDeck18};
	var infectDeck16 = {data:'img/InfectionCards/infect_Johannesburg.png',next:infectDeck17};
	var infectDeck15 = {data:'img/InfectionCards/infect_Jakarta.png',next:infectDeck16};
	var infectDeck14 = {data:'img/InfectionCards/infect_Istanbul.png',next:infectDeck15};
	var infectDeck13 = {data:'img/InfectionCards/infect_HongKong.png',next:infectDeck14};
	var infectDeck12 = {data:'img/InfectionCards/infect_HoChiMinh.png',next:infectDeck13};
	var infectDeck11 = {data:'img/InfectionCards/infect_Essen.png',next:infectDeck12};
	var infectDeck10 = {data:'img/InfectionCards/infect_Delhi.png',next:infectDeck11};
	var infectDeck9 = {data:'img/InfectionCards/infect_Chicago.png',next:infectDeck10};
	var infectDeck8 = {data:'img/InfectionCards/infect_Chennai.png',next:infectDeck9};
	var infectDeck7 = {data:'img/InfectionCards/infect_Cairo.png',next:infectDeck8};
	var infectDeck6 = {data:'img/InfectionCards/infect_BuenosAires.png',next:infectDeck7};
	var infectDeck5 = {data:'img/InfectionCards/infect_Bogota.png',next:infectDeck6};
	var infectDeck4 = {data:'img/InfectionCards/infect_Beijing.png',next:infectDeck5};
	var infectDeck3 = {data:'img/InfectionCards/infect_Bangkok.png',next:infectDeck4};
	var infectDeck2 = {data:'img/InfectionCards/infect_Baghdad.png',next:infectDeck3};
	var infectDeck1 = {data:'img/InfectionCards/infect_Atlanta.png',next:infectDeck2};
	var infectDeck0 = {data:'img/InfectionCards/infect_Algiers.png',next:infectDeck1};
	var startInfectDeck = infectDeck0;
	var endInfectDeck = infectDeck47;
	var activeInfectDeck = [];
// The activeInfectDeck changes when an epidemic occurs (+1) or when the deck runs out of cards (-1).
	activeInfectDeck[0] = 47;
	activeInfectDeck[1] = 0;
	activeInfectDeck[2] = 0;
	activeInfectDeck[3] = 0;
	var currentInfectDeck = 0;

/********************setup***********************************/
	$scope.setup=function(){
		$scope.show = 1;
		for(var i=0;i<32;i++){
			$scope.holdingCards[i]=null;
		}
		for(var i=0;i<6;i++){
			$scope.usedEventCard[i]=null;
		}
	};

// Build Player Deck based on difficulty level. Build out the epidemicProbability based on the number of
// epidemic cards to be placed in the infection deck. See the description of epidemicProbability above.
	$scope.buildIntroDeck=function() {
		$scope.show = 2;
		addEpidemicCards = 4;
		$scope.epidemicProbability = 12;
	}
	$scope.buildStandardDeck=function() {
		$scope.show = 2;
		addEpidemicCards = 5;
		$scope.epidemicProbability = 10;
	}
	$scope.buildHeroicDeck=function() {
		$scope.show = 2;
		addEpidemicCards = 6;
		$scope.epidemicProbability = 8;
	}

	// Draw Initial Infection Cards. An ng-show variable.
	$scope.initialInfectDraw = 4;
	$scope.finalSetup=function(){
		$scope.show = 4;
		$scope.show2 = 4;
		$scope.initialInfectDraw--;
		if($scope.initialInfectDraw===0) $scope.show = 0;
		// activePlayerDeck will equal 45 when the number of players is 2 or 4, and will be 44 when the
		// number of players is 3. This is based on the number of initially drawn infection cards, which is
		// 8 for 2 and 4 players and is 9 for a three player game. For an explanation of why we're adding the
		// epidemicCards variable now, see the description of the drawPlayer function below.
		if(activePlayerDeck===45 || activePlayerDeck===44) activePlayerDeck = activePlayerDeck+addEpidemicCards;
		$scope.insertInitialEpidemicCards = 1;
		$scope.epidemicProbabilityPerm = $scope.epidemicProbability;
		if($scope.initialInfectDraw===0) $scope.show2=0;
	};

// Arrays involved in the drawing of initial roleCards
	var roleDraw = [];
	var roleCards = [];
	$scope.players = [];
	$scope.playerRole = [];
	$scope.playerColors = [];

// function, which must be called to update the player profile panel.
	$scope.updatePlayers = function(){
		$scope.players = [
			{"role_card": $scope.playerRole[0],
			"playerTurn": 0,
			"player_cards": [{"playerCard":$scope.holdingCards[0]},
							 {"playerCard":$scope.holdingCards[1]},
							 {"playerCard":$scope.holdingCards[2]},
							 {"playerCard":$scope.holdingCards[3]},
							 {"playerCard":$scope.holdingCards[4]},
							 {"playerCard":$scope.holdingCards[5]},
							 {"playerCard":$scope.holdingCards[6]},
							 {"playerCard":$scope.holdingCards[7]}]
																	},
			{"role_card": $scope.playerRole[1],
			"playerTurn": 1,
			"player_cards": [{"playerCard":$scope.holdingCards[8]},
							 {"playerCard":$scope.holdingCards[9]},
							 {"playerCard":$scope.holdingCards[10]},
							 {"playerCard":$scope.holdingCards[11]},
							 {"playerCard":$scope.holdingCards[12]},
							 {"playerCard":$scope.holdingCards[13]},
							 {"playerCard":$scope.holdingCards[14]},
							 {"playerCard":$scope.holdingCards[15]}]
																	},
			{"role_card": $scope.playerRole[2],
			"playerTurn": 2,
			"player_cards": [{"playerCard":$scope.holdingCards[16]},
							 {"playerCard":$scope.holdingCards[17]},
							 {"playerCard":$scope.holdingCards[18]},
							 {"playerCard":$scope.holdingCards[19]},
							 {"playerCard":$scope.holdingCards[20]},
							 {"playerCard":$scope.holdingCards[21]},
							 {"playerCard":$scope.holdingCards[22]},
							 {"playerCard":$scope.holdingCards[23]}]
																	},
			{"role_card": $scope.playerRole[3],
			"playerTurn": 3,
			"player_cards": [{"playerCard":$scope.holdingCards[24]},
							 {"playerCard":$scope.holdingCards[25]},
							 {"playerCard":$scope.holdingCards[26]},
							 {"playerCard":$scope.holdingCards[27]},
							 {"playerCard":$scope.holdingCards[28]},
							 {"playerCard":$scope.holdingCards[29]},
							 {"playerCard":$scope.holdingCards[30]},
							 {"playerCard":$scope.holdingCards[31]}]
																	}]
		// An array which holds the usedEventCards that may only be accessed by the Contingency Planner.
		$scope.usedEventCards = [
							{"eventCard":$scope.usedEventCard[0]},
							{"eventCard":$scope.usedEventCard[1]},
							{"eventCard":$scope.usedEventCard[2]},
							{"eventCard":$scope.usedEventCard[3]},
							{"eventCard":$scope.usedEventCard[4]},
							{"eventCard":$scope.usedEventCard[5]},
							{"eventCard":$scope.usedEventCard[6]}
																];
	}
// This function draws roleCards and populates the playerRole Array with Role Cards.
	$scope.start=function() {
		audio.play();
		$scope.show = 3;
		// first, second, third, and fourth  variables are used for the placement of the player pieces,
		// which indicate in what city each player is. The starting point is always Atlanta (location of the
		// CDC), which is the fifth city (numbered arbitrarily).
		$scope.first = 5;
		$scope.second = 5;
		$scope.third = 5;
		$scope.fourth = 5;
		var roleColors = [];
		/*---------------role cards draw-----------------------------*/
			/*--an array for random drawing of role cards-*/
			roleCards[0] = 'img/RoleCards/Scientist.png';
			roleColors[0] = "white";
			roleCards[1] = 'img/RoleCards/Researcher.png';
			roleColors[1] = "#774418";
			roleCards[2] = 'img/RoleCards/QuarantineSpecialist.jpg';
			roleColors[2] = "green";
			roleCards[3] = 'img/RoleCards/OperationsExpert.png';
			roleColors[3] = "lightgreen";
			roleCards[4] = 'img/RoleCards/Medic.png';
			roleColors[4] = "orange";
			roleCards[5] = 'img/RoleCards/Dispatcher.png';
			roleColors[5] = "purple";
			roleCards[6] = 'img/RoleCards/ContingencyPlanner.jpg';
			roleColors[6] = "#2EFFF5";

		for(var i=0;i<$scope.numberOfPlayers;i++){
			roleDraw = Math.floor(Math.random()*(7-i));
			$scope.playerRole[i] = roleCards[roleDraw];
			$scope.playerColors[i] = roleColors[roleDraw];
			for(var j=0;j<7-roleDraw;j++){
				roleCards[j+roleDraw]=roleCards[j+roleDraw+1];
				roleColors[j+roleDraw]=roleColors[j+roleDraw+1];
			}
		}
		// Each city element on the game board has four spots for the player pieces. Only one city
		// may hold each player at any given time, so each city has a unique ng-show identity. These
		// next 10 lines of code assign the correct player color to each of the player's spots. So
		// there are 48 spots for each player, but only one of these 48 are visible at any given time.
		var elemsFirst = document.getElementsByClassName("first_player");
		var elemsSecond = document.getElementsByClassName("second_player");
		var elemsThird = document.getElementsByClassName("third_player");
		var elemsFourth = document.getElementsByClassName("fourth_player");
		for(var i=0;i<48;i++){
			elemsFirst[i].style.backgroundColor=$scope.playerColors[0];
			elemsSecond[i].style.backgroundColor=$scope.playerColors[1];
			elemsThird[i].style.backgroundColor=$scope.playerColors[2];
			elemsFourth[i].style.backgroundColor=$scope.playerColors[3];
		}
		$scope.updatePlayers();
	};

// changes the highlighting of player profiles to indicate a change in turn. This uses ng-style in the html.
// Also the $scope.currentTurn variable is used often later on for the placing of player cards.
	$scope.playerTurnHighlight = [];
	$scope.playerTurnHighlight[0] = '#091B90'
	$scope.currentTurn = 0;
	$scope.playerTurnChange = function(currentTurn){
		$scope.currentTurn = currentTurn;
		$scope.playerTurnHighlight[0] = '#333333';
		$scope.playerTurnHighlight[1] = '#333333';
		$scope.playerTurnHighlight[2] = '#333333';
		$scope.playerTurnHighlight[3] = '#333333';
		if(currentTurn===0) $scope.playerTurnHighlight[0] = '#091B90';
		if(currentTurn===1) $scope.playerTurnHighlight[1] = '#091B90';
		if(currentTurn===2) $scope.playerTurnHighlight[2] = '#091B90';
		if(currentTurn===3) $scope.playerTurnHighlight[3] = '#091B90';
	}
// This function is called whenever a player clicks on a holdingCard. If the card clicked is just an
// ordinary holdingCard, then this function just assigns the numbered position of the card (0-7) to the
// scope. However, if the card in question is the event card being specially held by the Contingency Planner,
// then the image source of the card is assigned the currentCard variable. Then it brings up the Card Action
// Menu, which is actually label "disease_cube_menu" in the html.
	$scope.cardActionMenu = function(currentCard){
		if($scope.contingency===1){
			$scope.currentCard = $scope.contingencyCard;
		}else{
			$scope.currentCard = currentCard;
		}
		$scope.show=7;
	}
// Draw player cards.
	$scope.drawPlayer=function(){
		// If the game hasn't begun yet, and there isn't even a player 1, then don't draw a card.
		if($scope.playerRole[0]===null) return;
		// Find the first unoccupied playerCard spot of the selected player. If the player has all eight
		// spots filled, don't draw a card.
		var count = 0;
		for(var i=0;i<8;i++){
			if($scope.holdingCards[$scope.currentTurn*8+i]!=null) count++;
		}
		if(count===8) return;
		// After the initial drawing of player cards during setup, if the deck gets to a new section of deck,
		// where each section has only one epidemic card, then call addEpidemicCards(). When epidemicProbability
		// equals 0, there will always be no epidemic cards present in the activePlayerDeck.
		if($scope.insertInitialEpidemicCards===1){
			if($scope.epidemicProbability===0){
				$scope.addEpidemicCards();
			}
			$scope.epidemicProbability--;
		}
		// If there are no more player cards, game over.
		if(activePlayerDeck===0){
			$scope.show=3507;
			return;
		}
		// Draws a random integer (0-activePlayerDeck). If epidemicProbability equals 0, and an epidemic card
		// has not been drawn in this section of the player deck, then automatically call epidemic() and
		// remove one epidemic card from the activePlayerDeck. The logic in this code is based around the
		// fact that if an epidemic has not been drawn in the current section, and there are yet some epidemic
		// cards to be played in the game, then the last card of the activePlayerDeck will always be an
		// epidemic. 
		var numRand = Math.floor(Math.random()*(activePlayerDeck));
		if($scope.epidemicProbability===0){
			var current = startPlayerDeck;
			for(var y=0;y<activePlayerDeck;y++){
				if(y===activePlayerDeck-1 && current.data==='img/PlayerDeck/Epidemic.png'){
					$scope.epidemic();
					activePlayerDeck--;
					$scope.removeEpidemicCards();
					numRand = -1;
				}
				current = current.next;
			}
		}
		// If the randomly generated card is an epidemic card, call epidemic() and temporarily remove the
		// epidemic cards from the activePlayerDeck.
		// If it isn't an epidemic card, place the card in the open holdingCards spot of the current player.
		// assign the card to the last position of the playerDeck linked list.
		var current = startPlayerDeck;
		var previous = startPlayerDeck;
		for(var i=0;i<numRand+1;i++){
			if(i===numRand){
				if(current.data==='img/PlayerDeck/Epidemic.png'){
					activePlayerDeck--;
					$scope.epidemic();
					$scope.removeEpidemicCards();
					break;
				}
				$scope.placeCard(current.data);
				activePlayerDeck--;
				if(current===startPlayerDeck){
					startPlayerDeck = current.next;
					current.next = endPlayerDeck.next;
					endPlayerDeck.next = current;
					endPlayerDeck = current;
				}else if(current===endPlayerDeck){
				}else{
					previous.next = current.next;
					current.next = endPlayerDeck.next;
					endPlayerDeck.next = current;
					endPlayerDeck = current;
				}
				return;
			}
			previous = current;
			current = current.next;
		}
	}
// Place drawn playerCard in the first available holdingCards spot of the current player.
	$scope.placeCard = function(data){
		if($scope.show===20){
			$scope.show = 0;
		}
		for(var j=$scope.currentTurn*8;j<(($scope.currentTurn*8)+8);j++){
			if($scope.holdingCards[j]===null){
				$scope.holdingCards[j] = data;
				$scope.updatePlayers();
				return;
			}
		}
	}
// Functions called when an epidemic occurs.
	$scope.panic = function(){
		$scope.show = 666;
		scream.pause();
		scream.currentTime = 0;
		audio.play();
	}
	$scope.epidemic = function(){
		audio.pause();
		audio.currentTime = 0;
		scream.play();
		$scope.show = 665;
		currentInfectDeck++;
		$scope.currentInfectCard = "img/InfectionCards/infectionDiscardPlaceholder.png";
		$scope.forecastCount = 0;
	}
	$scope.epidemicFinish = function(){
		$scope.show = 0;
	}
// Functions involved with the giving of a player card from one player to another.
	$scope.data = 0;
	$scope.giveCard = function(){
		$scope.show = 20;
		$scope.data = $scope.holdingCards[8*$scope.currentTurn+$scope.currentCard];
		$scope.holdingCards[8*$scope.currentTurn+$scope.currentCard] = null;
		$scope.updatePlayers();
	}
	$scope.giveTo = function(currentTurn){
		$scope.currentTurn = currentTurn;
		$scope.playerTurnChange(currentTurn);
		$scope.placeCard($scope.data);
	}
// Function for discarding player cards.
	$scope.discardCard = function(){
		$scope.show = 0;
		$scope.discardedCards = $scope.holdingCards[8*$scope.currentTurn+$scope.currentCard];
		$scope.holdingCards[8*$scope.currentTurn+$scope.currentCard] = null;
		$scope.updatePlayers();
	}
// Array holds the image urls for 6 cards drawn from the infectionDeck needed for the use of the Forecast 
// event card.
	$scope.forecastImgs = [];
// Array holds the image urls of the 6 cards in the forecastImgs array, but in the order that the player wants.
	$scope.forecast = [];
// Variable populates forecastImgs array.
	$scope.forecastCount = 0;
// A value of 1 will initiate a "forecast mode" in drawInfect().
	$scope.forecastStart = 0;
// Counts the number of used event cards which are available to the Contingency Planner's special ability.
	var usedEventCardCounter = 0;
// Counts the number of cards in the forecast array.
	var tempCount = 0;
// True/False variable regarding the status of the Contingency Planner's special ability.
	$scope.contingency = 0;
// This function will be called for four different reasons:
// 1. If a player uses an event card and it is the forecast card, it will activate the 'forecast mode' in
//    drawInfect(). It will also draw 6 cards from drawInfect() within the 'forecast mode', and add this card
//    to the usedEventCard array, which is used in the Contingency Planner's special ability.
// 2. If a player uses an event card and it is not the forecast card, it will add the card to the
//    usedEventCard array, which is used in the Contingency Planner's special ability.
// 3. If the Contingency Planner uses an event card within his/her special ability, and this card is the
//    forecast card, the same will events as in number 1, but the card will not be added to the usedEventCard
//    array.
// 4. If the Contingency Planner uses an event card within his/her special ability, the card will be discarded.
	$scope.useCard = function(){
		if($scope.holdingCards[$scope.currentTurn*8+$scope.currentCard]==="img/PlayerDeck/SE_Forecast.png" || $scope.currentCard==="img/PlayerDeck/SE_Forecast.png"){
			$scope.showForecast = 90;
			$scope.forecastStart = 1;
			for(var i=0;i<6;i++){
				$scope.drawInfect();
				$scope.forecastCount++;
			}
			$scope.forecastStart = 0;
			tempCount = 6;
		}
		if($scope.contingency===0){
			for(var i=0;i<6;i++){
				if($scope.usedEventCard[i]===null){
					$scope.usedEventCard[i] = $scope.holdingCards[$scope.currentTurn*8+$scope.currentCard];
					$scope.updatePlayers();
					break;
				}
			}
			$scope.discardCard();
		}
		if($scope.contingency===1){
			$scope.contingencyCard = null;
			$scope.contingency = 0;
			$scope.updatePlayers();
			$scope.show = 0;
		}
	}
// Sets the contingency boolean to true, which affects the currentCard variable, and allows the
// contingencyCard to be assigned.
	$scope.contingentDetour = function(){
		$scope.contingency = 1;
		$scope.cardActionMenu(9);
	}
// Shows the contingency menu.
	$scope.usedEvent = function(){
		$scope.show = 68;
	}
// Assigns an event card of the Contingency Planner's choice to the Contingency player's role card.
	$scope.contingentPlan = function(index){
		$scope.contingencyCard = $scope.usedEventCard[index];
		$scope.usedEventCard[index] = null;
		$scope.updatePlayers();
	}
// Is called when the user of the Forecast Event Card selects the order of infect cards.
	$scope.forecastInfection = function(card){
		if(document.getElementById("button"+card).style.opacity==="0.7") return;
		document.getElementById("button"+card).style.opacity="0.7";
		tempCount--;
		$scope.forecast[tempCount] = $scope.forecastImgs[card];
		if(tempCount===0){ 
			for(var i=0;i<6;i++){
				document.getElementById("button"+i).style.opacity="0";
			}
			$scope.showForecast = 0;
		}
	}
// Adds epidemic cards to the activePlayerDeck until an epidemic card is drawn and resets the 
// epidemicProbability variable.
	$scope.addEpidemicCards = function(){
		$scope.epidemicProbability = $scope.epidemicProbabilityPerm;
		activePlayerDeck = activePlayerDeck + addEpidemicCards;
	}
// Removes epidemic cards from the activePlayerDeck until the next section of player cards is reached.
// Is called when an epidemic card is drawn.
	$scope.removeEpidemicCards = function(){
		addEpidemicCards--;
		activePlayerDeck = activePlayerDeck - addEpidemicCards;
	}
// Draw Infection Cards. When a random number is drawn for the selection of an infection card, that card
// will go to the end of the infection deck, which is a linked list, the current activeInfectDeck
// will decrease by one, and the next activeInfectDeck will increase by one. When an epidemic occurs, the
// currentInfectDeck is increased by one, and so drawInfect() source of cards becomes the former discard pile.
// This simulates a shuffling of the infect discard pile and placing it on top of the draw pile. drawInfect()
// will then draw a random number (0-activeInfectDeck[currentInfectDeck]) and will add the values of all
// previous activeInfectDecks to come up with the drawn card.
	$scope.drawInfect = function(){
		if(activeInfectDeck[currentInfectDeck]===0){
			activeInfectDeck[currentInfectDeck] = activeInfectDeck[currentInfectDeck+1];
			activeInfectDeck[currentInfectDeck+1] = 0;
			currentInfectDeck--;
			$scope.drawInfect();
			return;
		}
		var numRand = Math.floor(Math.random()*(activeInfectDeck[currentInfectDeck]));
		if(currentInfectDeck>0) numRand = numRand+1+activeInfectDeck[currentInfectDeck-1];
		if(currentInfectDeck>1) numRand = numRand+activeInfectDeck[currentInfectDeck-2];
		if(currentInfectDeck>2) numRand = numRand+activeInfectDeck[currentInfectDeck-3];
		if($scope.forecastCount!=0 && $scope.forecastStart===0){
			$scope.forecastCount--;
			$scope.currentInfectCard = $scope.forecast[$scope.forecastCount];
			return;
		}
		var current = startInfectDeck;
		var previous = startInfectDeck;
		for(var i=0;i<numRand+1;i++){
			if(i===numRand){
				// if forecastStart is 1, enter forecast mode.
				if($scope.forecastStart===1){$scope.forecastImgs[$scope.forecastCount]=current.data;
				}else $scope.currentInfectCard = current.data;
				activeInfectDeck[currentInfectDeck]--;
				activeInfectDeck[currentInfectDeck+1]++;
				if(current===startInfectDeck){
					startInfectDeck=current.next;
					current.next = null;
					endInfectDeck.next = current;
					endInfectDeck = current;
				}else if(current===endInfectDeck){
				}else{
					previous.next = current.next;
					current.next = null;
					endInfectDeck.next = current;
					endInfectDeck = current;
				}
				return;
			}
			previous = current;
			current = current.next;
		}
	}
	$scope.showCounter = 0;
	$scope.changeInfectCounter = function(position){
		var margin = position*36;
		document.getElementById("infect_counter").style.marginRight=margin+"px";
	}
	$scope.showOutbreak = 0;
	$scope.changeOutbreakCounter1 = function(position){
		var margin = position*60;
		document.getElementById("outbreak_counter").style.marginTop=margin+"px";
		document.getElementById("outbreak_counter").style.marginLeft="0px";
	}
	$scope.changeOutbreakCounter2 = function(position){
		var margin = position*32;
		document.getElementById("outbreak_counter").style.marginTop=margin+"px";
		document.getElementById("outbreak_counter").style.marginLeft="35px";
	}
// Place and Keep Track of Disease Cubes
	$scope.diseaseCube = [];
	$scope.currentCityButton = 0;
	for(var i=0;i<192;i++){
		$scope.diseaseCube[i] = null;
	}
	$scope.citySelector = function(city){
		$scope.currentCityButton = city;
		$scope.show = 100;
	}
	$scope.addCube = function(cubeAction){
		if(cubeAction<4){
			var cubePosition = $scope.currentCityButton*4+cubeAction;
			var action = 1;
		}else{
			var cubePosition = $scope.currentCityButton*4+cubeAction-4;
			var action = -1;
		}
		if(action===1){
			if($scope.diseaseCube[cubePosition]===null){ $scope.diseaseCube[cubePosition]=1;
			}else $scope.diseaseCube[cubePosition]++;
		}else{
			if($scope.diseaseCube[cubePosition]===null){
			}else $scope.diseaseCube[cubePosition]--;
			if($scope.diseaseCube[cubePosition]===0) $scope.diseaseCube[cubePosition]=null;
		}
	}
	$scope.showResearch = [];
	$scope.addResearchStation = function(){
		$scope.showResearch[$scope.currentCityButton] = 1;
		$scope.show = 0;
	}
	$scope.removeResearchStation = function(){
		$scope.showResearch[$scope.currentCityButton] = 0;
		$scope.show = 0;
	}
	$scope.movePlayer = function(){
		if($scope.currentTurn===0) $scope.first = $scope.currentCityButton;
		if($scope.currentTurn===1) $scope.second = $scope.currentCityButton;
		if($scope.currentTurn===2) $scope.third = $scope.currentCityButton;
		if($scope.currentTurn===3) $scope.fourth = $scope.currentCityButton;
		$scope.show = 0;
	}
	$scope.cancel = function(){
		$scope.show = 0;
	}
// escape key = cancel
	document.onkeydown = zx;
	function zx(){
		if(event.keyCode===27) $scope.$apply($scope.cancel());
	}
}]);