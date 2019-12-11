/* Xu ly slide*/
const caroselItem = Array.from(document.querySelectorAll(".carosel-item"));
const nextButon = document.querySelector(".carosel-next");
const prevButon = document.querySelector(".carosel-prev");

let currentIndex = 0;

function setCarosel() {
  caroselItem[currentIndex].style.cssText = "left: 0; z-index:100";
  for (let i = currentIndex + 1; i < caroselItem.length; i++) {
    caroselItem[i].style.cssText = "left: 100%";
  }
  for (let i = currentIndex - 1; i >= 0; i--) {
    caroselItem[i].style.cssText = "left: -100%";
  }
}
function goToNext(params) {
  if (currentIndex === caroselItem.length - 1) {
    currentIndex = 0;
    setCarosel();
  } else {
    currentIndex++;
    setCarosel();
  }
}
function goToPrev(params) {
  if (currentIndex === 0) {
    currentIndex = caroselItem.length - 1;
    setCarosel();
  } else {
    currentIndex--;
    setCarosel();
  }
}
setCarosel();
nextButon.addEventListener("click", goToNext);
prevButon.addEventListener("click", goToPrev);
