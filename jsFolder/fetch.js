/*fetch('https://reqres.in/api/users')
.then((r)=>r.json())
.then((names)=>{console.log(names);

handlenames(names)
});

const handlenames =(namedetails)=>{
    document.querySelector('p').innerText= namedetails.data;
}*/

/*fetch('https://reqres.in/api/users')
   .then(r => r.json())
   .then(r => {
       r.data.map(user => {
           console.log(`${user.id}: ${user.first_name} ${user.last_name}`);
       });
       handlenames(user.last_name)

   });
   const handlenames =(namedetails)=>{
    document.querySelector('p').innerText= namedetails.text;
};*/

/*fetch("http://api.alquran.cloud/v1/ayah/262")
.then((r) => r.json())
.then((quran)=>{console.log(quran);

    handleQuran(quran)
    });
const handleQuran = (quranDetails) => {
document.querySelector(".quote").innerText = quranDetails.data.text;
};*/
/*document.addEventListener("DOMContentLoaded", () => {
  
    const quotebutton = document.querySelector("button");
    const quotetxt = document.querySelector("blockquote p");
    const author = document.querySelector("blockquote cite");
    
    
    quotebutton.addEventListener("click", ChangeQuote);
    async function ChangeQuote() 
    {
      
      const res = await 
      
      fetch("https://api.quotable.io/random");
     
      const info = await res.json();
      if (res.ok) {
       
        quotetxt.textContent = info.content;
        author.textContent = info.author;
        console.log(info.content);
      } 
      ChangeQuote();
    }
    
  
    
  });*
  
  */

  /*fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(quote => {
      console.log(`${quote.content} —${quote.author}`)
      handlequote(quote)
    })
    
    const handlequote = (quoteDetails) => {
        document.querySelector("p").innerText = quoteDetails.content+"-"+ quoteDetails.author;
        };*/
  
       
       
       
       
        fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(quote => {
      console.log(`${quote.content} —${quote.author}`)
      handlequote(quote)
    })
    
    const handlequote = (quoteDetails) => {
        document.querySelector("p").innerText = quoteDetails.content+"-"+ quoteDetails.author;
        };



        document.addEventListener("DOMContentLoaded", () => {
         
            const quotebutton = document.querySelector("button");
            const quotetxt = document.querySelector("blockquote p");
            const author = document.querySelector("blockquote cite");
          
            async function changeQuote() {
              
              const res= await fetch("https://api.quotable.io/random");
              const info = await res.json();
              if (res.ok) {
              
                quotetxt.textContent = data.content;
                author.textContent = data.author;
              } else {
                quotetxt.textContent = "An error occured";
                console.log(info);
              }
            }
          
           
            button.addEventListener("click", changeQuote);
          
           
            changeQuote();
          });




       