const Navbar =()=>{
    return` <header class="bg-black text-light">
    <nav class="navbar justify-content-between navbar-expand-lg bg-body-tertiary bg-black">
        <div class="container-fluid">
            <img src="/logo/Sugar.jpg" style="width:200px;" alt="">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <input class="form-control me-2 bg-dark text-white p-3" style="width: 600px;" type="search" placeholder="Try 'Liquid Lipstick' " aria-label="Search">
              <button class="btn bg-light text-black" type="submit"> Search</button>
            </form>
          </div>
          <div class=" text-light">
           <ul class="d-flex ">
            <li><a href="login.html" class="fs-5"><i class="fa-solid fa-user fs-6 ms-1" ></i>login</a></li>
            <li><a href="signup.html" class="fs-5" style="margin-right: 10px;">signup</a></li>
           </ul>
          </div>
          <div class="icon text-light">
            <i class="fa-regular fa-heart fs-5"></i>
            <i class="fa-solid fa-bag-shopping fs-5"></i>
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
          <li class="nav-item ">
            <a class="nav-link active fw-bold" aria-current="page" href="lipstick.html">LIPS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="foundation.html">FACE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="nails.html">NAILS</a>
          </li>
          <li class="nav-item">
           <a class="nav-link active fw-bold" aria-current="page" href="skin.html">SKIN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="skincare.html">SKINCARE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="offers.html">OFFERS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="seller.html">SELLER</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="gift&kits.html">GIFT&KITS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="blog.html">BLOG</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="#">STORE</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>`
}
export default Navbar