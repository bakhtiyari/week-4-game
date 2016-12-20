$(document).ready(function(){

	var MINIMUM_TARGET_SCORE = 19;

	var MAXIMUM_TARGET_SCORE = 120;

	var MINIMUM_CRYSTAL_SCORE = 1;

	var MAXIMUM_CRYSTAL_SCORE = 12

	var numberOfWins = 0;

	var numberOfLosses = 0;

	$("#winNum").text(numberOfWins);

	$("#lossNum").text(numberOfLosses);

	$("#play").on("click", function() {

		var randNumbArray = [];

		var crystalValue = 0;

		var currentScore = 0;

		var targetScore = 0;

		var crystalIsEnasbled = true;

		$("#wonOrLostMsg").text("");

		displayTargetScore(targetScore);

		displayCurrentScore(currentScore);

		makeRandomNumbersArray();

		displayTargetScore(randNumbArray[0]);

		$(".img").on("click", function() {

			if (crystalIsEnasbled) {

				var crystalNumber = parseInt($(this).attr("id"));

				crystalValue = randNumbArray[crystalNumber];

				addToCurntScore(crystalValue);

				displayCurrentScore(currentScore);

				checkCurrentScoreVsTargetScore();
			}
		});

	function displayTargetScore(aNumber) {

		$("#targetnum").text(aNumber);
	}

	function displayCurrentScore(aNumber) {

		$("#currentnum").text(aNumber);
	}

	function makeRandomNumbersArray(){

		var minNumber = MINIMUM_TARGET_SCORE;
		var maxNumber = MAXIMUM_TARGET_SCORE;

		for (var i = 0; i < 5; i++) {
			
			if(i !==0) {
				minNumber = MINIMUM_CRYSTAL_SCORE;
				maxNumber = MAXIMUM_CRYSTAL_SCORE;
			}

			randNumbArray[i] = getRandomInt(minNumber, maxNumber);
		}
	}

	/**
	 * Returns a random integer number between min (inclusive) and max (exclusive)
	 */
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function addToCurntScore(aNumber) {

		currentScore += aNumber;
	}

	function checkCurrentScoreVsTargetScore() {

		if (currentScore > randNumbArray[0]) {

			$("#wonOrLostMsg").text("You Lost");

			numberOfLosses++;

			$("#lossNum").text(numberOfLosses);

			crystalIsEnasbled = false;
		}

		else if (currentScore === randNumbArray[0]){

			$("#wonOrLostMsg").text("You Won");

			numberOfWins++;

			$("#winNum").text(numberOfWins);

			crystalIsEnasbled = false;
		}
	}

	});

});