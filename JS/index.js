// ========================================== JavaScript Slider codes Start ================================ \
let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let dot3 = document.querySelector(".dot3");
let dot4 = document.querySelector(".dot4");
let dot5 = document.querySelector(".dot5");
let dot6 = document.querySelector(".dot6");
let dot7 = document.querySelector(".dot7");
let dot8 = document.querySelector(".dot8");
let dot = document.querySelectorAll(".dot");
let images = document.querySelector(".box");
dot1.classList.add("active");
dot1.addEventListener("click", () => {
  images.style.transform = "translateX(0)";
  dot1.style.boxShadow = "0 0 20px inset black";
  dot2.style.boxShadow = "0 0 20px inset transparent";
  dot3.style.boxShadow = "0 0 20px inset transparent";
  dot4.style.boxShadow = "0 0 20px inset transparent";
  dot5.style.boxShadow = "0 0 20px inset transparent";
  dot6.style.boxShadow = "0 0 20px inset transparent";
  dot7.style.boxShadow = "0 0 20px inset transparent";
  dot8.style.boxShadow = "0 0 20px inset transparent";
});
dot2.addEventListener("click", () => {
  images.style.transform = "translateX(-100%)";
  dot1.style.boxShadow = "0 0 20px inset transparent";
  dot2.style.boxShadow = "0 0 20px inset black";
  dot3.style.boxShadow = "0 0 20px inset transparent";
  dot4.style.boxShadow = "0 0 20px inset transparent";
  dot5.style.boxShadow = "0 0 20px inset transparent";
  dot6.style.boxShadow = "0 0 20px inset transparent";
  dot7.style.boxShadow = "0 0 20px inset transparent";
  dot8.style.boxShadow = "0 0 20px inset transparent";
});
dot3.addEventListener("click", () => {
  images.style.transform = "translateX(-200%)";
  dot1.style.boxShadow = "0 0 20px inset transparent";
  dot2.style.boxShadow = "0 0 20px inset transparent";
  dot3.style.boxShadow = "0 0 20px inset black";
  dot4.style.boxShadow = "0 0 20px inset transparent";
  dot5.style.boxShadow = "0 0 20px inset transparent";
  dot6.style.boxShadow = "0 0 20px inset transparent";
  dot7.style.boxShadow = "0 0 20px inset transparent";
  dot8.style.boxShadow = "0 0 20px inset transparent";
});
dot4.addEventListener("click", () => {
  images.style.transform = "translateX(-300%)";
  dot1.style.boxShadow = "0 0 20px inset transparent";
  dot2.style.boxShadow = "0 0 20px inset transparent";
  dot3.style.boxShadow = "0 0 20px inset transparent";
  dot4.style.boxShadow = "0 0 20px inset black";
  dot5.style.boxShadow = "0 0 20px inset transparent";
  dot6.style.boxShadow = "0 0 20px inset transparent";
  dot7.style.boxShadow = "0 0 20px inset transparent";
  dot8.style.boxShadow = "0 0 20px inset transparent";
});
dot5.addEventListener("click", () => {
  images.style.transform = "translateX(-400%)";
  dot1.style.boxShadow = "0 0 20px inset transparent";
  dot2.style.boxShadow = "0 0 20px inset transparent";
  dot3.style.boxShadow = "0 0 20px inset transparent";
  dot4.style.boxShadow = "0 0 20px inset transparent";
  dot5.style.boxShadow = "0 0 20px inset black";
  dot6.style.boxShadow = "0 0 20px inset transparent";
  dot7.style.boxShadow = "0 0 20px inset transparent";
  dot8.style.boxShadow = "0 0 20px inset transparent";
});
dot6.addEventListener("click", () => {
  images.style.transform = "translateX(-500%)";
  dot1.style.boxShadow = "0 0 20px inset transparent";
  dot2.style.boxShadow = "0 0 20px inset transparent";
  dot3.style.boxShadow = "0 0 20px inset transparent";
  dot4.style.boxShadow = "0 0 20px inset transparent";
  dot5.style.boxShadow = "0 0 20px inset transparent";
  dot6.style.boxShadow = "0 0 20px inset black";
  dot7.style.boxShadow = "0 0 20px inset transparent";
  dot8.style.boxShadow = "0 0 20px inset transparent";
});
dot7.addEventListener("click", () => {
  images.style.transform = "translateX(-600%)";
  dot1.style.boxShadow = "0 0 20px inset transparent";
  dot2.style.boxShadow = "0 0 20px inset transparent";
  dot3.style.boxShadow = "0 0 20px inset transparent";
  dot4.style.boxShadow = "0 0 20px inset transparent";
  dot5.style.boxShadow = "0 0 20px inset transparent";
  dot6.style.boxShadow = "0 0 20px inset transparent";
  dot7.style.boxShadow = "0 0 20px inset black";
  dot8.style.boxShadow = "0 0 20px inset transparent";
});
dot8.addEventListener("click", () => {
  images.style.transform = "translateX(-700%)";
  dot1.style.boxShadow = "0 0 20px inset transparent";
  dot2.style.boxShadow = "0 0 20px inset transparent";
  dot3.style.boxShadow = "0 0 20px inset transparent";
  dot4.style.boxShadow = "0 0 20px inset transparent";
  dot5.style.boxShadow = "0 0 20px inset transparent";
  dot6.style.boxShadow = "0 0 20px inset transparent";
  dot7.style.boxShadow = "0 0 20px inset transparent";
  dot8.style.boxShadow = "0 0 20px inset black";
});
// ========================================== JavaScript Slider codes End ================================ \
