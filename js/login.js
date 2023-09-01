import Navbar from "../components/nav.js";
document.getElementById('navbar').innerHTML=Navbar();

const login = (e) => {
    e.preventDefault();
    let users = {
        email : document.getElementById('email').value,
        password: document.getElementById('password').value}

    fetch(`http://localhost:3000/users?email=${users.email}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.length > 0){
            if(data[0].password === users.password){
                localStorage.setItem("loggin",true)
                alert("login success")
                setTimeout(() => {
                    window.location.href = "/pages/index.html"
                },1000)
            }
            else{
                alert("login invalid")
            }
        }
        else{
            alert("user not found");
        }
    })
    

}

document.getElementById('form').addEventListener('submit', ()=> login());





