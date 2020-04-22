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

function prevPage() {     
  window.history.back()   
  }
