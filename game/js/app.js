var points = $('#points p:nth-child(1)');
var move = $('#move');

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
var arrayCartEasy = [1,1,2,2,3,3,4,4,5,5,6,6];
arrayCartEasy = shuffle(arrayCartEasy);
var arrayCartHard = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
arrayCartHard = shuffle(arrayCartHard);

var tabAcceptedAlreadyClick= [true,true,true,true,true,true,true,true,true,true,true,true];

var choosenFirstCart;
var secondChoose = false;
var numberFisrtCartVisible;
var hidesecondcart;
var pointsPlayer = 0;
var nextClick = true;
var timer1;
var timer2;
var numbermove = 0;

function revealEasy(cart) {
    console.log(tabAcceptedAlreadyClick);
    if(tabAcceptedAlreadyClick[cart-1] === true) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        $('#picture-' + cart).attr('src', 'images/' + arrayCartEasy[cart - 1] + '.png');
        if (secondChoose === true && cart !== numberFisrtCartVisible) {
            numbermove++;
            move.text('Move :' + numbermove);
            nextClick = false;
            if (choosenFirstCart === arrayCartEasy[cart - 1]) {
                hidesecondcart = cart;
                if (tabAcceptedAlreadyClick[hidesecondcart - 1] === true && tabAcceptedAlreadyClick[numberFisrtCartVisible - 1] === true) {
                    increaseResult();
                    timer1 = setTimeout(hideAcceptedCart, 1000);
                }
            } else {
                hidesecondcart = cart;
                timer2 = setTimeout(hideDontAcceptedCart, 1000);
            }
            secondChoose = false;
        } else {
            secondChoose = true;
            numberFisrtCartVisible = cart;
            choosenFirstCart = arrayCartEasy[cart - 1];
        }
    }
}
function revealHard(cart) {
    console.log(tabAcceptedAlreadyClick);
    if(tabAcceptedAlreadyClick[cart-1] === true) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        $('#picture-' + cart).attr('src', 'images/' + arrayCartHard[cart - 1] + '.png');
        if (secondChoose === true && cart !== numberFisrtCartVisible) {
            numbermove++;
            move.text('Move :' + numbermove);
            nextClick = false;
            if (choosenFirstCart === arrayCartHard[cart - 1]) {
                hidesecondcart = cart;
                if (tabAcceptedAlreadyClick[hidesecondcart - 1] === true && tabAcceptedAlreadyClick[numberFisrtCartVisible - 1] === true) {
                    increaseResult();
                    timer1 = setTimeout(hideAcceptedCart, 1000);
                }
            } else {
                hidesecondcart = cart;
                timer2 = setTimeout(hideDontAcceptedCart, 1000);
            }
            secondChoose = false;
        } else {
            secondChoose = true;
            numberFisrtCartVisible = cart;
            choosenFirstCart = arrayCartHard[cart - 1];
        }
    }
}
function hideAcceptedCart() {
    $('#picture-'+hidesecondcart).addClass('hidden-cart');
    $('#picture-'+numberFisrtCartVisible).addClass('hidden-cart');
    pointsPlayer++;
    points.text('Points : ' + pointsPlayer);
    tabAcceptedAlreadyClick[hidesecondcart-1] = false;
    tabAcceptedAlreadyClick[numberFisrtCartVisible-1] = false;
    nextClick = true;
}
function hideDontAcceptedCart() {
    $('#picture-'+hidesecondcart).attr('src','images/city2.png');
    $('#picture-'+numberFisrtCartVisible).attr('src','images/city2.png');
    nextClick = true;
}
// ładowanie łatwego poziomu po kliknięciu
function easeLevel() {
    var playerName = $('#name-of-player').val();

    var easeLevelRegion = document.getElementById('region-easy'),
        easeLevelTemplate = ''
            + '<div id="board-easy">'
            + '<div class="cart" id="box1"><img id="picture-1" src="images/city2.png"></div>'
            + '<div class="cart" id="box2"><img id="picture-2" src="images/city2.png"></div>'
            + '<div class="cart" id="box3"><img id="picture-3" src="images/city2.png"></div>'
            + '<div class="cart" id="box4"><img id="picture-4" src="images/city2.png"></div>'
            + '<div class="cart" id="box5"><img id="picture-5" src="images/city2.png"></div>'
            + '<div class="cart" id="box6"><img id="picture-6" src="images/city2.png"></div>'
            + '<div class="cart" id="box7"><img id="picture-7" src="images/city2.png"></div>'
            + '<div class="cart" id="box8"><img id="picture-8" src="images/city2.png"></div>'
            + '<div class="cart" id="box9"><img id="picture-9" src="images/city2.png"></div>'
            + '<div class="cart" id="box10"><img id="picture-10" src="images/city2.png"></div>'
            + '<div class="cart" id="box11"><img id="picture-11" src="images/city2.png"></div>'
            + '<div class="cart" id="box12"><img id="picture-12" src="images/city2.png"></div>'
            + '</div>'
            + '<div class="container">'
            + '<div class="row">'
            + '<div id="points"><p>Points : 0</p><p id="move">Move : 0</p></div>'
            + '<div class="col-md-12 player-result-box"><p>Koniec gry. Gratulacje!</p>' + playerName + '</div>'
            + '<div class="col-md-12"><button type="submit" class="btn btn-ingame-return">Powrót</button></div>'
            + '</div>'
            + '</div>';
    HTMLelement = document.createElement('div');
    HTMLelement.innerHTML = easeLevelTemplate;
    easeLevelRegion.appendChild(HTMLelement);

    $(document).ready(function() {
        $('.btn-ingame-return').on('click', function () {
            $('.game-main-menu').show();
            $('.section-game-easy').hide();
        })
    });
    var cart1 = $('#box1');
    var cart2 = $('#box2');
    var cart3 = $('#box3');
    var cart4 = $('#box4');
    var cart5 = $('#box5');
    var cart6 = $('#box6');
    var cart7 = $('#box7');
    var cart8 = $('#box8');
    var cart9 = $('#box9');
    var cart10 = $('#box10');
    var cart11 = $('#box11');
    var cart12 = $('#box12');

    cart1.click( function() { if(nextClick === true) {revealEasy(1)};});
    cart2.click( function() { if(nextClick === true) {revealEasy(2)};});
    cart3.click( function() { if(nextClick === true) {revealEasy(3)};});
    cart4.click( function() { if(nextClick === true) {revealEasy(4)};});
    cart5.click( function() { if(nextClick === true) {revealEasy(5)};});
    cart6.click( function() { if(nextClick === true) {revealEasy(6)};});
    cart7.click( function() { if(nextClick === true) {revealEasy(7)};});
    cart8.click( function() { if(nextClick === true) {revealEasy(8)};});
    cart9.click( function() { if(nextClick === true) {revealEasy(9)};});
    cart10.click( function() {if(nextClick === true) {revealEasy(10)};});
    cart11.click( function() {if(nextClick === true) {revealEasy(11)};});
    cart12.click( function() {if(nextClick === true) {revealEasy(12)};});
}

// ładowanie trudnego poziomu po kliknięciu

function hardLevel() {
    var playerName = $('#name-of-player').val();

    var hardLevelRegion = document.getElementById('region-difficult'),
        hardLevelTemplate = ''
            + '<div id="board-difficult">'
            + '<div class="cart" id="box1"><img id="picture-1" src="images/city2.png"></div>'
            + '<div class="cart" id="box2"><img id="picture-2" src="images/city2.png"></div>'
            + '<div class="cart" id="box3"><img id="picture-3" src="images/city2.png"></div>'
            + '<div class="cart" id="box4"><img id="picture-4" src="images/city2.png"></div>'
            + '<div class="cart" id="box5"><img id="picture-5" src="images/city2.png"></div>'
            + '<div class="cart" id="box6"><img id="picture-6" src="images/city2.png"></div>'
            + '<div class="cart" id="box7"><img id="picture-7" src="images/city2.png"></div>'
            + '<div class="cart" id="box8"><img id="picture-8" src="images/city2.png"></div>'
            + '<div class="cart" id="box9"><img id="picture-9" src="images/city2.png"></div>'
            + '<div class="cart" id="box10"><img id="picture-10" src="images/city2.png"></div>'
            + '<div class="cart" id="box11"><img id="picture-11" src="images/city2.png"></div>'
            + '<div class="cart" id="box12"><img id="picture-12" src="images/city2.png"></div>'
            + '<div class="cart" id="box13"><img id="picture-13" src="images/city2.png"></div>'
            + '<div class="cart" id="box14"><img id="picture-14" src="images/city2.png"></div>'
            + '<div class="cart" id="box15"><img id="picture-15" src="images/city2.png"></div>'
            + '<div class="cart" id="box16"><img id="picture-16" src="images/city2.png"></div>'
            + '</div>'
            + '<div class="container">'
            + '<div class="row">'
            + '<div id="points"><p>Points : 0</p><p id="move">Move : 0</p></div>'
            + '<div class="col-md-12 player-result-box"><p>Koniec gry. Gratulacje!</p>' + playerName + '</div>'
            + '<div class="col-md-12"><button type="submit" class="btn btn-ingame-return">Powrót</button></div>'
            + '</div>'
            + '</div>';
    HTMLelement = document.createElement('div');
    HTMLelement.innerHTML = hardLevelTemplate;
    hardLevelRegion.appendChild(HTMLelement);
    $(document).ready(function() {
        $('.btn-ingame-return').on('click', function () {
            $('.game-main-menu').show();
            $('.section-game-difficult').hide();
        })
    });
    var cart1 = $('#box1');
    var cart2 = $('#box2');
    var cart3 = $('#box3');
    var cart4 = $('#box4');
    var cart5 = $('#box5');
    var cart6 = $('#box6');
    var cart7 = $('#box7');
    var cart8 = $('#box8');
    var cart9 = $('#box9');
    var cart10 = $('#box10');
    var cart11 = $('#box11');
    var cart12 = $('#box12');
    var cart13 = $('#box13');
    var cart14 = $('#box14');
    var cart15 = $('#box15');
    var cart16 = $('#box16');

    cart1.click( function() { if(nextClick === true) {revealHard(1)};});
    cart2.click( function() { if(nextClick === true) {revealHard(2)};});
    cart3.click( function() { if(nextClick === true) {revealHard(3)};});
    cart4.click( function() { if(nextClick === true) {revealHard(4)};});
    cart5.click( function() { if(nextClick === true) {revealHard(5)};});
    cart6.click( function() { if(nextClick === true) {revealHard(6)};});
    cart7.click( function() { if(nextClick === true) {revealHard(7)};});
    cart8.click( function() { if(nextClick === true) {revealHard(8)};});
    cart9.click( function() { if(nextClick === true) {revealHard(9)};});
    cart10.click( function() {if(nextClick === true) {revealHard(10)};});
    cart11.click( function() {if(nextClick === true) {revealHard(11)};});
    cart12.click( function() {if(nextClick === true) {revealHard(12)};});
    cart13.click( function() {if(nextClick === true) {revealHard(13)};});
    cart14.click( function() {if(nextClick === true) {revealHard(14)};});
    cart15.click( function() {if(nextClick === true) {revealHard(15)};});
    cart16.click( function() {if(nextClick === true) {revealHard(16)};});
}

// Score---------

function highScore(totalPoints){
    totalPoints= (pointsPlayer/numbermove)*100;
    return totalPoints;
}
// EndGame detection

var result = {
    currentPairsRevealed: 0,
    totalPairs: (Array.from(document.querySelectorAll('.cart')).length / 2)
};

function increaseResult () {
    result.currentPairsRevealed++;
    // pointsPlayer++;
    if(result.currentPairsRevealed === result.totalPairs) {
        console.log(highScore());

        if (allScores) {
            console.log(allScores);
            allScores.push(highScore())
        } else {

            allScores = [];
            allScores.push(highScore())
        }
        localStorage.setItem('score', highScore());
        var allScores = [];
        allScores = JSON.parse(localStorage.getItem('allScores'));
        localStorage.setItem('allScores', JSON.stringify(allScores));
    }
}
//console.log('result', result);

// name playera
$(document).ready(function() {
    $('#check-name').on('click', function () {
        if ($('#name-of-player').val() !== '') {
            $('.player-name-box').removeClass('error');
            $('.section-game-chooselevel').show();
            $('.section-game-nameofplayer').hide();
        } else {
            $('.player-name-box').addClass('error');
            return false;
        }
    });
    // if(result.currentPairsRevealed === result.totalPairs) {
    //     $('.player-result-box').addClass('end');
    //     var boxOfPlayerRegion = document.getElementsByClassName('player-result-box-end');
    //     var playerName = $('#name-of-player').val();
    //     playerName = document.createElement('p');
    //     playerName.innerHTML = '<p id="player"></p>';
    //     boxOfPlayerRegion.appendChild(playerName);
    // } else {
    //     $('.player-result-box').removeClass('end');
    // }
    $('#button-game-start').on('click', function () {
        $('.section-game-nameofplayer').show();
        $('.game-main-menu').hide();
    });
    $('#button-game-instruction').on('click', function () {
        $('.section-game-instruction').show();
        $('.game-main-menu').hide();
    });
    $('.btn-game-return').on('click', function () {
        $('.game-main-menu').show();
        $('.section-game-nameofplayer').hide();
        $('.section-game-easy').hide();
        $('.section-game-chooselevel').hide();
        $('.section-game-instruction').hide();
        $('.section-game-results').hide();
    });
    $('#button-game-easy').on('click', function () {
        $('.section-game-easy').show();
        $('.section-game-chooselevel').hide();
        easeLevel()
    });
    $('#button-game-difficult').on('click', function () {
        $('.section-game-difficult').show();
        $('.section-game-chooselevel').hide();
        hardLevel()
    });
    $('#button-game-results').on('click', function () {
        $('.section-game-results').show();
        $('.game-main-menu').hide();
    });
});