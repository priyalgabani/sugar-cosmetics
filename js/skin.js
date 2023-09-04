import navbar from "../components/header.js";

document.getElementById("navbar").innerHTML= navbar

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer


let show = (data) => {
    document.getElementById("product").innerHTML = "";
    data.map((ele) => {

        let img = document.createElement("img");
        img.src = ele.img;

        let title = document.createElement("h3");
        title.setAttribute("class","row justify-content-center")
        title.innerHTML = ele.title;

        let div1=document.createElement("div")

        let del=document.createElement("del")
        del.innerHTML=ele.del

        let price = document.createElement("p");
        price.innerHTML = `Rs.${ele.price}`;
        price.setAttribute("class","fw-bold")

        let off=document.createElement("span")
        off.innerHTML=ele.off
        off.setAttribute("class","text-danger")

        div1.append(del,price,off)
        div1.setAttribute("class","d-flex justify-content-center gap-5")

        let i = document.createElement("i");
        i.classList.add('fas', 'fa-heart')

        let btn = document.createElement("button");
        btn.append(i)
        btn.setAttribute("class", "btn border me-2")

        let btn1 = document.createElement("button");
        btn1.innerHTML = "ADD TO BAG";
        btn1.setAttribute("class", "btn bg-black text-light border-2 ps-5 pe-5 ")
        
        let div2=document.createElement("div")
        div2.append(btn,btn1)

        let div = document.createElement("div");
        div.append(img, title,div1, div2);
        div.setAttribute("class","div")
        document.getElementById("product").append(div);

        btn.addEventListener("click", () => {
            let wish = JSON.parse(localStorage.getItem("wish")) || [];
            let exists = false;
            console.log(wish);
            wish.map((item, index) => {
                if (item.id == ele.id) {
                    wish[index].qty += 1;
                    localStorage.setItem("wish", JSON.stringify(wish));
                    exists = true;
                }
            });
            if (!exists) {
                wish.push({ ...ele, qty: 1 });
                localStorage.setItem("wish", JSON.stringify(wish));
                alert("added to wishlist");
                window.location.reload();
            }
        })

        btn1.addEventListener("click", () => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let exists = false;
            console.log(cart);
            cart.map((item, index) => {
                if (item.id == ele.id) {
                    cart[index].qty += 1;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    exists = true;
                }
            });
            if (!exists) {
                cart.push({ ...ele, qty: 1 });
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("added to cart");
            }
        });

    });
};

let products = []

fetch("http://localhost:3000/product?category=skin")
    .then((response) => response.json())
    .then((data) => { products = data, show(data) });