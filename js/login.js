const login=(e)=>{
    e.preventDefault();
    let users={
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    fetch(`http://localhost:3000/users?email=${email.users}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.lentgh >0){
            if(data[0].password===users.password){
                alert("login succes full")
                window.location="/pages/index.html"
            }
            else{
                alert("enter the correct password")
            }
        }
        else{
            alert("user can not acces")
          }
    })
}



document.getElementById("form").addEventListener("sumbit", login)
