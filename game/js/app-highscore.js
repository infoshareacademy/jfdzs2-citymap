localStorage.setItem('score', highScore());
var allScores = [];
allScores = JSON.parse(localStorage.getItem('allScores'));

console.log(allScores);

var selectorHighScore = document.getElementById('highScoreBoard');
allScores.forEach(function(score, index){
    var highScoreElements = document.createElement('p');
    highScoreElements.innerText = (index + 1) + '. ' + score;
    selectorHighScore.appendChild(highScoreElements);
});

// Score-tabela


function showHighScore() {
    var playerName = $('#name-of-player').val();
    var movesOfPlayer = numbermove;
    var pointsOfPlayer = highScore();

    movesOfPlayer = document.getElementById('move');
    playerName = document.getElementById('player');
    pointsOfPlayer = document.getElementById('points');

    var highScoreRegion = document.getElementById('highScoreBoard');
        highScoreTemplate = ''
            + '<div class="line">'
            + '<strong id="player"></strong>'
            + '<span id="move"></span>'
            + '<span id="points"></span>'
            + '</div>';
    HTMLelement = document.createElement('div');
    HTMLelement.innerHTML = highScoreTemplate;
    highScoreRegion.appendChild(HTMLelement);
}
var showHighScoreTable = document.getElementById('showHighScore-table');
showHighScoreTable.addEventListener('click', showHighScore);