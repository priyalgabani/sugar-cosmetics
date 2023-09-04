import navbar from "../components/header.js";

document.getElementById("navbar").innerHTML= navbar

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer

let wish = JSON.parse(localStorage.getItem("wish")) || [];

let show = (wish) => {
    wish.map((ele) => {
        let maindiv = document.createElement("div");

        let imgdiv = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.img;

        let texts = document.createElement("div");

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        // let rem=document.createElement("button")
        // rem.setAttribute("class", "btn bg-black text-light border-2 ps-5 pe-5 ")
        // rem.setAttribute("id", "rem")
        // rem.innerHTML="REMOVE WISHLIST"

        let price1 = document.createElement("p");
        price1.innerHTML = `${ele.price}$`;

        imgdiv.append(image);
        texts.append(title, price1);
        maindiv.append(imgdiv, texts);
        document.getElementById("wish").append(maindiv);

        price1.setAttribute("class", "price1");
        maindiv.setAttribute("class", "maindiv");
        imgdiv.setAttribute("class", "imgdiv");
        texts.setAttribute("class", "texts");
        
    });
};
show(wish);

