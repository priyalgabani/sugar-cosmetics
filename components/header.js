const navbar = () => {
  return ` <header class="bg-black text-light">
    <nav class="navbar justify-content-between navbar-expand-lg bg-body-tertiary bg-black">
        <div class="container-fluid">
            <img src="https://entrackr.com/storage/2022/03/Sugar.jpg" style="width:200px;" alt="">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <input class="form-control me-2 bg-dark text-white p-3" id="search" style="width: 600px;" type="search" placeholder="Try 'Liquid Lipstick' " aria-label="Search">
              <button class="btn bg-light text-black" id="search-btn" type="submit"> Search</button>
            </form>
          </div>
          <div class=" text-light">
           <ul class="d-flex ">
            <li><a href="login.html" class="fs-5"><i class="fa-solid fa-user fs-6 ms-1" ></i>login</a></li>
            <li><a href="signup.html" class="fs-5" style="margin-right: 10px;">signup</a></li>
           </ul>
          </div>
          <div class="icon text-light">
            <a href="../pages/wishlist.html" class="text-light"><i class="fa-regular fa-heart fs-5"></i></a>
            <a href="../pages/cart.html" class="text-light"><i class="fa-solid fa-bag-shopping fs-5"></i></a>
            <i class="fa-solid fa-snowflake fs-5"></i>
          </div>
        </div>
    </nav>
  </header>

  <nav class="navbar navbar-expand-lg navbar-dark bg-body-tertiary bg-dark">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2" >
        <li class="nav-item">
        <a class="nav-link active fw-bold" aria-current="page" href="../pages/product.html">PRODUCTS</a>
      </li>
          <li class="nav-item ">
            <a class="nav-link active fw-bold" aria-current="page" href="../pages/lips.html" id="lips">LIPS</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link active fw-bold" aria-current="page" href="../pages/eye.html" id="eyes">EYES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="../pages/face.html" id="face">FACE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="../pages/nails.html" id="nails">NAILS</a>
          </li>
          <li class="nav-item">
           <a class="nav-link active fw-bold" aria-current="page" href="../pages/skin.html" id="skin">SKIN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="../pages/skincare.html">SKINCARE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="../pages/offers.html">OFFERS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="../pages/seller.html">SELLER</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="../pages/blog.html">BLOG</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="#">STORE</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>`
}
export default navbar()