import navbar from "../components/header.js";
document.getElementById("navbar").innerHTML=navbar

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalprice = 0;
cart.map((ele) => {
    totalprice += ele.price * ele.qty;
});

let show = (cart) => {
    cart.map((ele, index) => {
        let maindiv = document.createElement("div");

        let imgdiv = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.img;

        let texts = document.createElement("div");

        let title = document.createElement("h3");
        title.innerHTML = ele.title;


        let price1 = document.createElement("p");
        price1.innerHTML = `${ele.price}$`;

        let plusminse = document.createElement("div");

        let minse = document.createElement("button");
        minse.innerHTML = "-";
        minse.setAttribute("class","btn border")

        let noq = document.createElement("button");
        noq.innerHTML = ele.qty;
        noq.setAttribute("class","btn border")

        let plus = document.createElement("button");
        plus.innerHTML = "+";
        plus.setAttribute("class","btn border")
        
        imgdiv.append(image);
        texts.append(title, price1);
        plusminse.append(minse, noq, plus);
        maindiv.append(imgdiv, texts, plusminse);
        document.getElementById("cartpage").append(maindiv);

        price1.setAttribute("class", "price1");
        maindiv.setAttribute("class", "maindiv");
        imgdiv.setAttribute("class", "imgdiv");
        texts.setAttribute("class", "texts");
        plusminse.setAttribute("class", "plusminse");

        minse.addEventListener("click", () => {
            console.log(ele);
            let qty = cart[index].qty;
            if (qty == 1) {
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));

                console.log(cart);
                window.location.reload();
            } else {
                cart[index].qty -= 1;
                localStorage.setItem("cart", JSON.stringify(cart));
                window.location.reload();
            }
        });
        plus.addEventListener("click", () => {
            console.log("test");
            cart[index].qty += 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.reload();
        });
    });
};
show(cart);

let show2 = () => {
    let maindiv2 = document.createElement("div");
    
    let lable2 = document.createElement("p");
    lable2.innerHTML = "TOTAL PRICE:";
    
    let btn2 = document.createElement("button");
    btn2.innerHTML = "Check Out"
    btn2.setAttribute("class","btn border bg-black text-light")
    btn2.setAttribute("id","btn")

    let disprice = document.createElement("p")


    maindiv2.append(lable2);
    document.getElementById("other").append(maindiv2, btn2);
    document.getElementById("price").append(lable2, totalprice);

    maindiv2.setAttribute("class", "maindiv2");

};
show2();


document.getElementById("btn").addEventListener("click",()=>{
    alert("CHECK OUT")
})