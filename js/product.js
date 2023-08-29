// const display = (data) => {
//     data.map((product) => {

//         let img = document.createElement("img")
//         img.src = product.img

//         let title = document.createElement("h4")
//         title.innerHTML = product.title

//         let dis = document.createElement("del")
//         dis.innerHTML = product.dis

//         let price = document.createElement("span")
//         price.innerHTML = product.price

//         let off = document.createElement("span")
//         off.innerHTML = product.off

//         let btn1 = document.createElement("button")
//         btn1.setAttribute('id','heart'); 

//         let iconElement = document.createElement('i');
//         iconElement.classList.add('fas', 'fa-heart'); 
//         btn1.append(iconElement)

//         let btn = document.createElement("button")
//         btn.innerHTML = "ADD TO BAG"

//         let div = document.createElement("div")
//         div.append(img,title,dis,price,btn1,btn)

//         document.getElementById("product").append(div)

//         btn1.addEventListener("click",()=>{
//             console.log(product.id);
//             let wish = JSON.parse(localStorage.getItem("wish")) || [];
//                 let exists = false;
//                 console.log(wish);
//                 wish.map((item, index) => {
//                     if (item.id == product.id) {
//                         wish[index].qty += 1;
//                         localStorage.setItem("wish", JSON.stringify(wish));
//                         exists = true;
//                     }
//                 });
//                 if (!exists) {
//                     wish.push({ ...product, qty: 1 });
//                     localStorage.setItem("wish", JSON.stringify(wish));
//                     alert("added to wishlist");
//                     window.location.reload();
//                 }
//         })

//     })
// }

// const get = () => { 
//     fetch("http://localhost:3000/product")
//     .then((rep)=>rep.json())
//     .then((rep)=>display(rep))
// }

// get();















let show = (data) => {
    console.log(data);
    document.getElementById("product").innerHTML = "";
    data.map((ele) => {

        let img = document.createElement("img");
        img.src = ele.img;

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let category = document.createElement("p");
        category.innerHTML = ele.category;
        category.setAttribute("class", "category")

        let price = document.createElement("p");
        price.innerHTML = `Rs.${ele.price}`;

        let i = document.createElement("i");
        i.classList.add('fas', 'fa-heart')

        let btn = document.createElement("button");
        btn.append(i)

        let btn1 = document.createElement("button");
        btn1.innerHTML = "BUY NOW";
        btn1.setAttribute("class", "btn1")

        let div = document.createElement("div");
        div.append(img, title, category, price, btn, btn1);
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
                window.location.reload();
            }
        });

    });
};
let products = []


// document.getElementById("lth").addEventListener("click", () => {
//     products.sort((a, b) => a.price - b.price)
//     show(products)
// })


// document.getElementById("htl").addEventListener("click", () => {

//     console.log("clicked");
//     products.sort((a, b) => b.price - a.price)
//     show(products)
// })
// document.getElementById("men").addEventListener("click", () => {
//     let temp = products.filter((val) => val.category == "men's clothing")
//     show(temp)
// })
// document.getElementById("wm").addEventListener("click", () => {
//     let temp = products.filter((val) => val.category == "women's clothing")
//     show(temp)
// })
// document.getElementById("ele").addEventListener("click", () => {
//     let temp = products.filter((val) => val.category == "electronics")
//     show(temp)
// })


fetch(" http://localhost:3000/product")
    .then((response) => response.json())
    .then((data) => { products = data, show(data) });
