//generate random image
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var images = ["images/nirvana.jpg", "images/green-day.jpg", "images/blink-182.png", "images/red-hot.jpg", "images/smaching.jpg"]
var user = 0
var chances = 0
var songs = ["Nirvana", "Green Day", "Blink 182", "Red Hot Chili Pepers", "Smaching Pumpkins"]
var randomImage = images[Math.floor(Math.random() * images.length)];
var randomSong = songs[Math.floor(Math.random() * songs.length)];

function startFunction(){
	var empty = []
	for (var i = 0; i < randomSong.length; i++) {
	empty.push(" _ ");
	};

document.getElementById("numberofchar").innerHTML = randomSong.length;
document.getElementById("nameofsong").innerHTML = randomSong;
document.getElementById("blanks").innerHTML = empty.join(" ");

document.getElementById("imagecontent").src = randomImage;
};











