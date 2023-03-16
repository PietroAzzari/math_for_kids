var num1, num2, operator, answer;

const answerInput = document.getElementById("answer");
const checkButton = document.getElementById("checkButton");

answerInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    checkAnswer();
  }
});

checkButton.addEventListener("click", function() {
  checkAnswer();
});

function checkAnswer() {
  // codice per controllare la risposta qui
}

function generateQuestion() {
	num1 = Math.floor(Math.random() * 10) + 1;
	num2 = Math.floor(Math.random() * 10) + 1;
	operator = ['+', '-', 'x'][Math.floor(Math.random() * 3)];
	document.getElementById('num1').innerHTML = num1;
	document.getElementById('num2').innerHTML = num2;
	document.getElementById('operator').innerHTML = operator;
	document.getElementById('answer').value = '';
	document.getElementById('result').innerHTML = '';
}

function checkAnswer() {
	var correctAnswer;
	switch (operator) {
		case '+':
			correctAnswer = num1 + num2;
			break;
		case '-':
			correctAnswer = num1 - num2;
			break;
		case 'x':
			correctAnswer = num1 * num2;
			break;
	}
	answer = parseInt(document.getElementById('answer').value);
	if (answer === correctAnswer) {
		document.getElementById('result').innerHTML = 'Corretto!';
	} else {
		document.getElementById('result').innerHTML = 'Sbagliato. La risposta corretta è ' + correctAnswer;
	}
}
