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
cart13.click( function() {if(nextClick === true) {reveal(13)};});
cart14.click( function() {if(nextClick === true) {reveal(14)};});
cart15.click( function() {if(nextClick === true) {reveal(15)};});
cart16.click( function() {if(nextClick === true) {reveal(16)};});

var arrayCart = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

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

console.log(arrayCart)

var tabAcceptedAlreadyClick= [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];

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
    console.log(tabAcceptedAlreadyClick)
    if(tabAcceptedAlreadyClick[cart-1] === true) {

        clearTimeout(timer2);
        clearTimeout(timer1);
        $('#picture-' + cart).attr('src', 'images/' + arrayCart[cart - 1] + '.png')
        console.log(cart);
        console.log(numberFisrtCartVisible);
        if (secondChoose === true && cart !== numberFisrtCartVisible) {

            numbermove++;
            move.text('Move :' + numbermove)
            nextClick = false;
            if (choosenFirstCart === arrayCart[cart - 1]) {
                hidesecondcart = cart;

                if (tabAcceptedAlreadyClick[hidesecondcart - 1] === true && tabAcceptedAlreadyClick[numberFisrtCartVisible - 1] === true) {

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
    pointsPlayer ++;
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