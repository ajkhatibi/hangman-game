//generate random image
var images = [
	"images/nirvana.jpg", "images/blink-182.jpg", "images/red-hot.jpg", "images/green-day.jpg", "images/smaching.jpg"
]

var randomImage = images[Math.floor(Math.random() * images.length)];

function getRandomImage(){
	document.getElementId("myImages").src = randomImage;

}



//generate coresponding game