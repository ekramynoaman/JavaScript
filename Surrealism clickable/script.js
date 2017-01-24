//click eye
var clickedCheck = false;

var myEye=document.getElementById("eye");
myEye.addEventListener('click', function() {
	var myPoem = document.getElementById('poem');
	myPoem.innerHTML = "My siren is blue as the veins where she swims";
	myPoem.style.font="italic bold 20px arial,serif";
	var audio=document.getElementById('sound');
	audio.play();
	clickedCheck = true;
	poemUpdate(clickedCheck);
});

function poemUpdate(_clickedCheck){
	if(_clickedCheck == true){
		var myPoem = document.getElementById('poem');
		setTimeout(function(){
			myPoem.style.opacity = '0';
		}, 2000);

		setTimeout(function(){
			myPoem.innerHTML = '';
			myPoem.style.opacity = 'initial';
		}, 4000);

		_clickedCheck = !_clickedCheck; 
		return _clickedCheck;
	}
}


//click kite
var clickedCheck = false;

var myKite=document.getElementById("kite");
myKite.addEventListener('click', function(){
	var myPoem = document.getElementById('poem');
	myPoem.innerHTML = "The trams make a noise like doughnut batter dropped in oil";
	myPoem.style.font="italic bold 20px arial,serif";
	var audio=document.getElementById('sound');
	audio.play();
	clickedCheck = true;
	poemUpdate(clickedCheck);
});

function poemUpdate(_clickedCheck){
	if(_clickedCheck == true){
		var myPoem = document.getElementById('poem');
		
		setTimeout(function(){
			myPoem.style.opacity = '0';
		}, 2000);

		setTimeout(function(){
			myPoem.innerHTML = '';
			myPoem.style.opacity = 'initial';
		}, 4000);

		_clickedCheck = !_clickedCheck; 
		return _clickedCheck;
	}
}


//click star
var clickedCheck = false;

var myStar=document.getElementById("star");
myStar.addEventListener('click', function(){
	var myPoem = document.getElementById('poem');
	myPoem.innerHTML = "He bursts the star with revolver shots to eternalize the birth of his son";
	myPoem.style.font="italic bold 20px arial,serif";
	clickedCheck = true;
	poemUpdate(clickedCheck);
});

function poemUpdate(_clickedCheck){
	if(_clickedCheck == true){
		var myPoem = document.getElementById('poem');
		
		setTimeout(function(){
			myPoem.style.opacity = '0';
		}, 2000);

		setTimeout(function(){
			myPoem.innerHTML = '';
			myPoem.style.opacity = 'initial';
		}, 4000);

		_clickedCheck = !_clickedCheck; 
		return _clickedCheck;
	}
}


//click Moon
var clickedCheck = false;

var myMoon=document.getElementById("moon");
myMoon.addEventListener('click', function(){
	var myPoem = document.getElementById('poem');
	myPoem.innerHTML = "The world is a strange thing";
	myPoem.style.font="italic bold 20px arial,serif";
	clickedCheck = true;
	poemUpdate(clickedCheck);
});

function poemUpdate(_clickedCheck){
	if(_clickedCheck == true){
		var myPoem = document.getElementById('poem');
		
		setTimeout(function(){
			myPoem.style.opacity = '0';
		}, 2000);

		setTimeout(function(){
			myPoem.innerHTML = '';
			myPoem.style.opacity = 'initial';
		}, 4000);

		_clickedCheck = !_clickedCheck; 
		return _clickedCheck;
	}
}


//click Horse
var clickedCheck = false;

var myHorse=document.getElementById("horse");
myHorse.addEventListener('click', function(){
	var myPoem = document.getElementById('poem');
	myPoem.innerHTML = "I circle around but the sky changes";
	myPoem.style.font="italic bold 20px arial,serif";
	clickedCheck = true;
	poemUpdate(clickedCheck);
});

function poemUpdate(_clickedCheck){
	if(_clickedCheck == true){
		var myPoem = document.getElementById('poem');
		
		setTimeout(function(){
			myPoem.style.opacity = '0';
		}, 2000);

		setTimeout(function(){
			myPoem.innerHTML = '';
			myPoem.style.opacity = 'initial';
		}, 4000);

		_clickedCheck = !_clickedCheck; 
		return _clickedCheck;
	}
}


//click hand
var clickedCheck = false;

var myHand=document.getElementById("hand");
myHand.addEventListener('click', function(){
	var myPoem = document.getElementById('poem');
	myPoem.innerHTML = "The disciples of light have never invented anything but a not very opaque darkness";
	myPoem.style.font="italic bold 20px arial,serif";
	clickedCheck = true;
	poemUpdate(clickedCheck);
});

function poemUpdate(_clickedCheck){
	if(_clickedCheck == true){
		var myPoem = document.getElementById('poem');
		
		setTimeout(function(){
			myPoem.style.opacity = '0';
		}, 2000);

		setTimeout(function(){
			myPoem.innerHTML = '';
			myPoem.style.opacity = 'initial';
		}, 4000);

		_clickedCheck = !_clickedCheck; 
		return _clickedCheck;
	}
}


//click body
var clickedCheck = false;

var myBody=document.getElementById("body");
myBody.addEventListener('click', function(){
	var myPoem = document.getElementById('poem');
	myPoem.innerHTML = "The river rolls the small body of a woman and that means the end is near";
	myPoem.style.font="italic bold 20px arial,serif";
	clickedCheck = true;
	poemUpdate(clickedCheck);
});

function poemUpdate(_clickedCheck){
	if(_clickedCheck == true){
		var myPoem = document.getElementById('poem');
		
		setTimeout(function(){
			myPoem.style.opacity = '0';
		}, 2000);

		setTimeout(function(){
			myPoem.innerHTML = '';
			myPoem.style.opacity = 'initial';
		}, 4000);

		_clickedCheck = !_clickedCheck; 
		return _clickedCheck;
	}
}


//click bird
var clickedCheck = false;

var myBird=document.getElementById("bird");
myBird.addEventListener('click', function(){
	var myPoem = document.getElementById('poem');
	myPoem.innerHTML = "Night jostles her stars and it rains sand and cotton";
	myPoem.style.font="italic bold 20px arial,serif";
	clickedCheck = true;
	poemUpdate(clickedCheck);
});


function poemUpdate(_clickedCheck){
	if(_clickedCheck == true){
		var myPoem = document.getElementById('poem');
		
		setTimeout(function(){
			myPoem.style.opacity = '0';
		}, 2000);

		setTimeout(function(){
			myPoem.innerHTML = '';
			myPoem.style.opacity = 'initial';
		}, 4000);

		_clickedCheck = !_clickedCheck; 
		return _clickedCheck;
	}
}

var Icon1=document.getElementById("icon1");
Icon1.addEventListener('click', windowScroll());

var Icon2=document.getElementById("icon2");
Icon2.addEventListener('click', windowScroll());

function windowScroll() {
	return function(){
		var _colum1=document.getElementById('colum1');
		_colum1.style.width = '0';
		_colum1.style.opacity = '0';
		var _colum2=document.getElementById('colum2');
		_colum2.style.width = '0';
		_colum2.style.opacity = '0';
		// window.location.hash = '#theWrapper';
		smoothScroll('theWrapper');
		return false;
	};
}

/************** Smooth Scroll ****************/

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 2);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 80);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}
/************** Smooth Scroll ****************/





