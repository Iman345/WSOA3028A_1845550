console.log(1);

const btn = document.querySelector('button');
const backbtn = document.querySelector('backButton');

btn.onclick = function() 
{
    
    
    let myImage = document.querySelector('img');

        let mySrc = myImage.getAttribute('src');
        if(mySrc === "Pictures/Eyes.png" ) 
        {
          myImage.setAttribute ('src',"Pictures/SukiStrawberry.png" )
          
        }
}

document.getElementById('backButton').addEventListener('click', () => {
  history.back();
});


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.Topbtn').fadeIn();
    } else {
      $('.Topbtn').fadeOut();
    }
  });

  $('.Topbtn').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 100);
      return false;
  });

});



