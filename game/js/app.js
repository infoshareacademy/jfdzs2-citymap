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
var points = $('#points p:nth-child(1)');
var move = $('#move');

cart1.click( function() { if(nextClick === true) {reveal(1)};});
cart2.click( function() { if(nextClick === true) {reveal(2)};});
cart3.click( function() { if(nextClick === true) {reveal(3)};});
cart4.click( function() { if(nextClick === true) {reveal(4)};});
cart5.click( function() { if(nextClick === true) {reveal(5)};});
cart6.click( function() { if(nextClick === true) {reveal(6)};});
cart7.click( function() { if(nextClick === true) {reveal(7)};});
cart8.click( function() { if(nextClick === true) {reveal(8)};});
cart9.click( function() { if(nextClick === true) {reveal(9)};});
cart10.click( function() {if(nextClick === true) {reveal(10)};});
cart11.click( function() { if(nextClick === true) {reveal(11)};});
cart12.click( function() {if(nextClick === true) {reveal(12)};});

var arrayCart = [1,1,2,2,3,3,4,4,5,5,6,6];

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

arrayCart = shuffle(arrayCart);

//console.log(arrayCart)

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
function reveal(cart)
{
    console.log(tabAcceptedAlreadyClick);
    if(tabAcceptedAlreadyClick[cart-1] === true) {

        clearTimeout(timer2);
        clearTimeout(timer1);
        $('#picture-' + cart).attr('src', 'images/' + arrayCart[cart - 1] + '.png');
        //console.log(cart);
        //console.log(numberFisrtCartVisible);
        if (secondChoose === true && cart !== numberFisrtCartVisible) {

            numbermove++;
            move.text('Move :' + numbermove);
            nextClick = false;
            if (choosenFirstCart === arrayCart[cart - 1]) {
                hidesecondcart = cart;

                if (tabAcceptedAlreadyClick[hidesecondcart - 1] === true && tabAcceptedAlreadyClick[numberFisrtCartVisible - 1] === true) {
                    // console.log('zwiększam')
                    increaseResult();
                    timer1 = setTimeout(hideAcceptedCart, 1000);

                }

            }
            else {
                hidesecondcart = cart;
                timer2 = setTimeout(hideDontAcceptedCart, 1000);
            }
            secondChoose = false;
        }

        else {
            secondChoose = true;
            numberFisrtCartVisible = cart;
            choosenFirstCart = arrayCart[cart - 1];
        }
    }
}

function hideAcceptedCart() {
    $('#picture-'+hidesecondcart).addClass('hidden-cart');
    $('#picture-'+numberFisrtCartVisible).addClass('hidden-cart');
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
    pointsPlayer++;
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
    });
    $('#button-game-difficult').on('click', function () {
        $('.section-game-difficult').show();
        $('.section-game-chooselevel').hide();
    });
    $('#button-game-results').on('click', function () {
        $('.section-game-results').show();
        $('.game-main-menu').hide();
    });

});


