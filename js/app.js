
// at this stage all the dom element is targeted and contained into variables 
let body = document.querySelector('body');
let wrapper = document.querySelector('.wrapper');
let heroImage = document.querySelector('#images');
let heroDetail =document.querySelector('.details');
let integrify =document.querySelector('.integrify');
let img= document.querySelector('img');
let h1= document.querySelector('h1');
let h4= document.querySelectorAll('h4');
let nextIcon= document.querySelector('#next');
let prevIcon= document.querySelector('#prev');

let detailsIcon= document.querySelector('#info');
// Next image function start from here
let x=0;

// this if the funtion that incerts the image and details fron the photosinfo object
function nextImage(){
img.src = './media/' + photosInfo[x].src;
heroImage.appendChild(img);
integrify.textContent=" Integrify Academy 2018"
integrify.classList.add("tada") 


let fullName = x+ 1 +'. '+ photosInfo[x].firstName + ' ' + photosInfo[x].lastName;
h1.textContent = fullName;
heroDetail.appendChild(h1);

let title = 'Title: ' +photosInfo[x].title;
 h4[0].textContent = title;
 heroDetail.appendChild(h4[0]);

 let nationality = 'Nationality:  ' +photosInfo[x].nationality;
 h4[1].textContent = nationality;
 heroDetail.appendChild(h4[1]);

 let skills = "Skills: " +photosInfo[x].skills;
 h4[2].textContent = skills;
 heroDetail.appendChild(h4[2]);

 let longTermVision = "Vision: " +photosInfo[x].longTermVision;
 h4[3].textContent = longTermVision;
 heroDetail.appendChild(h4[3]);

 let motivatesMe = "Motivation: " +photosInfo[x].motivatesMe;
 h4[4].textContent = motivatesMe;
 heroDetail.appendChild(h4[4]);

 let favoriteQuote = "Favorite Quote: " +photosInfo[x].favoriteQuote;
 h4[5].textContent = favoriteQuote;
 heroDetail.appendChild(h4[5]);

 let joinedOn = "Date Joined: " +photosInfo[x].joinedOn;
 h4[6].textContent = joinedOn;
 heroDetail.appendChild(h4[6]);

 let whySofterDeveloper = "Why a Software Developer : " +photosInfo[x].whySofterDeveloper;
 h4[7].textContent = whySofterDeveloper;
 heroDetail.appendChild(h4[7]);

 
setTimeout(()=>{integrify.classList.remove("tada")},500)

}
 // this one calls the next function when the page loads
window.onload = nextImage;

//click listener for next icon 
nextIcon.addEventListener('click', function() {
	x++;
	
	
  
	if (x === photosInfo.length) {
	  x = 0
	}
	nextImage();
	img.classList.remove("fadeInRight")
	img.classList.add("fadeInLeft")
	
  });
// click listener for previous button 
  prevIcon.addEventListener('click', function() {
	if (x >0) {
		x--;
		nextImage();
	  }
	else if(x===0){
		x=photosInfo.length-1
		nextImage()
	}
	else {
		nextImage()
	}
img.classList.remove("fadeInLeft")
img.classList.add("fadeInRight")
	
	
  });


// this function change the wrapper back ground in every 4 seconds 

  function bgImg() {
	let c = 2;
  
	setInterval(() => {
	  let imgUrl = "./media/" + 'group' + c + '.jpg';
	  body.style.backgroundImage = `url(${imgUrl})`;
	  
	  if (c === 5) {
		c = 2;
	  }
	  c++;
  
	}, 4000);
}

bgImg();