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


Topbutton = document.getElementById("Topbtn");


window.onscroll = function() {scrollupFunction()};

function scrollupFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    Topbutton.style.display = "block";
  } else {
    Topbutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




