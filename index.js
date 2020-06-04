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






var inserthere = $('h1');
$('<nav class="scrollnav"><ul></ul></nav>').insertAfter(inserthere);
var blogHeadings = $('article h2');

blogHeadings.each(function(){
var headingTxt = $(this).text();
var listheading = '<li>' + headingTxt + '</li>'
$('.scrollnav ul').append(listheading)});


$('.scrollnav li').click(function(){
 var index = $(this).index()
 var articleheading = $( 'article h2:eq(' + index + ')' )
 var pos = $(articleheading).offset().top - 10

 $('html,body')

    .animate({scrollTop: pos});
});


