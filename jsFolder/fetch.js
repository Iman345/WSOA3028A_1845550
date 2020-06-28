fetch('https://reqres.in/api/users')
.then(res => res.json())
.then(res => {
    res.data.map(user => {
        console.log(`${user.id}: ${user.first_name} ${user.last_name}`);
    });
  const namehandle=(namedetails)=>{
      document.querySelector("p").innerText=namedetails.data;
  }  
});