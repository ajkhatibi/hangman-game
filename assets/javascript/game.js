//generate random image
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var images = ["images/nirvana.jpg", "images/green-day.jpg", "images/blink-182.png", "images/red-hot.jpg", "images/smaching.jpg"]
var user = 0
var chances = 0
var songs = ["Nirvana", "Green Day", "Blink 182", "Red Hot Chili Pepers", "Smaching Pumpkins"]
var randomImage = images[Math.floor(Math.random() * images.length)];
var randomSong = songs[Math.floor(Math.random() * songs.length)];

//starting the game

function startFunction(){
	var empty = []
	for (var i = 0; i < randomSong.length; i++) {
	empty.push(" _ ");
	};

	document.getElementById("numberofchar").innerHTML = randomSong.length;
	document.getElementById("nameofsong").innerHTML = randomSong;
	document.getElementById("blanks").innerHTML = empty.join(" ");

	var forImage = randomSong.charAt(0);

	if (forImage === "N"){
		document.getElementById("imagecontent").src = images[0];
	} else if (forImage === "G") {
		document.getElementById("imagecontent").src = images[1];
	} else if (forImage === "B"){
		document.getElementById("imagecontent").src = images[2];
	} else if (forImage === "R"){
		document.getElementById("imagecontent").src = images[3];
	} else if (forImage === "S"){
		document.getElementById("imagecontent").src = images[4];

	};
};

//get letters to appear in the game

















