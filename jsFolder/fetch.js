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

fetch("http://api.alquran.cloud/v1/ayah/262")
.then((r) => r.json())
.then((quran)=>{console.log(quran);

    handleQuran(quran)
    });
const handleQuran = (quranDetails) => {
document.querySelector("p").innerText = quranDetails.data.text;
};