$('#nav-intro').click(e => {
  e.preventDefault();
  const { hash } = e.currentTarget;
  if (!hash) return;
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 800);
});

var introFirst = document.getElementById('content-intro-01');
var introSecond = document.getElementById('content-intro-02');

lottie.loadAnimation({
  container: introFirst, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../animations/shasket_landingpage_animation_01_vie.json' // the path to the animation json
});

lottie.loadAnimation({
  container: introSecond, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../animations/shasket_landingpage_animation_02.json' // the path to the animation json
});