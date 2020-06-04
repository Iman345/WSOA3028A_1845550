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


var scrollbtn = $('#scrollbutton');

$(window).scroll(function() 
{
  if ($(window).scrollTop() > 400) {
    scrollbtn.addClass('show');
  } 
  
  else {
    scrollbtn.removeClass('show');
  }
});

scrollbtn.on('click', function(up) {
  up.preventDefault();
  $('html, body').animate({scrollTop:0}, '400');
});




