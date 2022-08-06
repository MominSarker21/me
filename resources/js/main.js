//MixitUp
var mixer = mixitup('.grid-portfolio-container');

//Hamburger menu
function openMenu(){
  document.getElementById("navbar").style.height="100vh";
};
function closeMenu(){
  document.getElementById("navbar").style.height="0";
};

//Smoth Scroll
$(function(){
  $('.menu-item a').on('click', function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    });
    return false;
  })
})