/*fetch('https://reqres.in/api/users')
.then((r)=>r.json())
.then((names)=>{console.log(names);

handlenames(names)
});

const handlenames =(namedetails)=>{
    document.querySelector('p').innerText= namedetails.data;
}*/

fetch('https://reqres.in/api/users')
   .then(res => res.json())
   .then(res => {
       res.data.map(user => {
           console.log(`${user.id}: ${user.first_name} ${user.last_name}`);
       });
   });
   const handlenames =(namedetails)=>{
    document.querySelector('p').innerText= namedetails.first_name;
};