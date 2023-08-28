const display = (data) => {
    data.map((product) => {

        let img = document.createElement("img")
        img.src = product.img

        let title = document.createElement("h4")
        title.innerHTML = product.title

        let dis = document.createElement("del")
        dis.innerHTML = product.dis

        let price = document.createElement("span")
        price.innerHTML = product.price

        let off = document.createElement("span")
        off.innerHTML = product.off

        let btn1 = document.createElement("button")
        btn1.setAttribute('id','heart'); 
        
        let iconElement = document.createElement('i');
        iconElement.classList.add('fas', 'fa-heart'); 
        btn1.append(iconElement)

        let btn = document.createElement("button")
        btn.innerHTML = "ADD TO BAG"

        let div = document.createElement("div")
        div.append(img,title,dis,price,btn1,btn)

        document.getElementById("product").append(div)

        btn1.addEventListener("click",()=>{
            console.log(product.id);
        })
    })
}

const get = () => { 
    fetch("http://localhost:3000/product")
    .then((rep)=>rep.json())
    .then((rep)=>display(rep))
}

get();