import Navbar from "../components/header.js";

document.getElementById("navbar").innerHTML=Navbar()

const login=(e)=>{
    e.preventDefault();
    let user={
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    fetch(`http://localhost:3000/users?email=${user.email}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.length>0){
            if(data[0].password===user.password){
                alert("login succes full")
                window.location="./signup.html"
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



document.getElementById("login").addEventListener("submit", login)

