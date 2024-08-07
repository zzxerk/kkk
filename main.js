var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  slideTransition: 300,
  dots: false,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  //   touchDrag: false,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});


const menuBtn = document.querySelector('.menu--btn');
const menu = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.close--menu--btn');

menuBtn.addEventListener('click', function () {
  menu.classList.add('active');
})

closeMenuBtn.addEventListener('click', function () {
  menu.classList.remove('active');
})