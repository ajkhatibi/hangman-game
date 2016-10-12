//generate random image
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var images = ["images/nirvana.jpg", "images/green-day.jpg", "images/blink-182.png", "images/red-hot.jpg", "images/smaching.jpg"]
var user = 0
var chances = 0
var songs = ["Nirvana", "Green Day", "Blink 182", "Red Hot Chili Pepers", "Smaching Pumpkins"]
var randomImage = images[Math.floor(Math.random() * images.length)];
var randomSong;
var empty;
var count = 0
var wins = 0
var letterArray = new Array



function updateHtml(){
	document.getElementById("blanks").innerHTML = empty.join(" ");
};

function updateNumber(){
	document.getElementById("numberofchar").innerHTML = randomSong.length;

};
//starting the game

function startFunction(){

	empty = []
	randomSong = songs[Math.floor(Math.random() * songs.length)];
	for (var i = 0; i < randomSong.length; i++) {
	empty.push(" _ ");
	}


	updateHtml()
	updateNumber()
	document.getElementById("nameofsong").innerHTML = randomSong;

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
	//get letters to appear in the game


};


	
	document.onkeyup = function gameFunction (event) {

		var user = String.fromCharCode(event.keyCode).toLowerCase(); 
		var lowerCaseRandomSong = randomSong.toLowerCase();
		var indexSong = lowerCaseRandomSong.indexOf(user);



		if (indexSong > -1){
			for (var i = 0; i < lowerCaseRandomSong.length; i++){
				if (lowerCaseRandomSong[i] === user){
					empty[i] = user;
					updateNumber();
					console.log(empty);
				}
				if (lowerCaseRandomSong[i] === " "){
					empty[i] = " ";
					
				}
			}

		} 
		else 
				{
				chances++
				document.getElementById("chances").innerHTML = chances
				console.log(chances);
				}
		updateHtml();

		count++
		if (lowerCaseRandomSong.length === count){
			startFunction()
			count = 0
			chances = 0
		}
		if (lowerCaseRandomSong.indexOf("_") === -1){
			wins++


		}
		if(lowerCaseRandomSong.indexOf(user) === -1){

			letterArray.push(user);
			document.getElementById("letters").innerHTML = letterArray;
			document.getElementById("numberofchar").innerHTML = lowerCaseRandomSong.length;
			lowerCaseRandomSong.length--

		}
		
	};
	






// 	for (var i = 0; i < lowerCaseRandomSong.length; i++){
// 		if (i <= count){
// 			count++
// 		} else{
// 			startFunction()
// 		}

// 	}
	
// }













