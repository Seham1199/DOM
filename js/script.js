var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex = 0 ;

for(var i = 0 ; i < imgs.length ; i ++)
{
   imgs[i].addEventListener("click" , function(evenInfo){

     currentIndex =  imgs.indexOf(evenInfo.target);
   //   console.log(currentIndex);

     var imgSrc = evenInfo.target.getAttribute("src");
   //   console.log(myImgs);
   lightBoxItem.style.backgroundImage = `url("${imgSrc}")`;

      // lightBoxContainer.style.display = "flex";  مش هيشتغل عشان bootstrap
      lightBoxContainer.classList.replace("d-none" , "d-flex");
   });
}


// Next Slider Function
function nextSlider(){
   currentIndex++;
   if (currentIndex == imgs.length) {
       currentIndex = 0 ;
   }
  
   var imgSrc = imgs[currentIndex].getAttribute("src");
   lightBoxItem.style.backgroundImage = `url("${imgSrc}")`;

}
// Prev Slider Function
function prevSlider(){
   currentIndex--;
   if (currentIndex < 0 ) {
      currentIndex = imgs.length - 1 ;
   }

   var imgSrc = imgs[currentIndex].getAttribute("src");
   lightBoxItem.style.backgroundImage = `url("${imgSrc}")`;
}

function closeSlider(){
   lightBoxContainer.classList.replace("d-flex" , "d-none");
}
nextBtn.addEventListener("click" , nextSlider);
prevBtn.addEventListener("click" , prevSlider);
closeBtn.addEventListener("click" , closeSlider);


document.addEventListener("keydown" , function(eventInfo){

   //  console.log(eventInfo.code);

   if(eventInfo.code == "ArrowRight")
   {
      nextSlider();
   }else if(eventInfo.code == "ArrowLeft")
   {
      prevSlider();
   }else if(eventInfo.code == "Escape")
   {
      closeSlider();
   }

});


lightBoxContainer.addEventListener("click" , function(eventInfo){
   // console.log(eventInfo.target)

   if (eventInfo.target != lightBoxContainer) {
 nextBtn.addEventListener("click" , nextSlider);
prevBtn.addEventListener("click" , prevSlider);
closeBtn.addEventListener("click" , closeSlider);
// console.log("hello");
   } else {
      lightBoxContainer.classList.replace("d-flex" , "d-none");

   }
})


