console.log(1);

const btn = document.querySelector('button');


btn.onclick = function() 
{
    
    
    let myImage = document.querySelector('img');

        let mySrc = myImage.getAttribute('src');
        if(mySrc === "Pictures/Eyes.png" ) 
        {
          myImage.setAttribute ('src',"Pictures/SukiStrawberry.png" )
        }
}