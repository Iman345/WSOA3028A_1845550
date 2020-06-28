fetch('https://reqres.in/api/users')
.then((r)=>r.json())
.then((p)=>console.log(p));
   