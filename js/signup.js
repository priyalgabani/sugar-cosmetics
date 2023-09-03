
const signup = (e) =>{
    e.preventDefault()
    let user ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    };
    
    fetch(`http://localhost:3000/users ?email=${user.email}`)
    .then((res)=> res.json())
    .then((data) => {
        if(data.length > 0){
            alert("user can alredy assigt")
            window.location.href="./index.html"

        }
        else{
            alert("sign")
            window.location.href="./index.html"
            fetch("http://localhost:3000/users",{
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(user)
            })
        }
    })

}

document.getElementById("form").addEventListener("submit", signup)

