const productWomen = [
    {
        productId: 1,
        productName: "Digital Watch",
        productDesc: `Wear the tooling shoes you loveLace up, low top, softSoft PU leather +
        mesh upper, smooth and delicate feel, clear and beautiful texture, without`,
        productCategory: "electronics",
        productImg: 'img/women/product-5.png',
        productPrice: 20000
    },
    {
        productId: 1,
        productName: "Digital Watch",
        productDesc: `Wear the tooling shoes you loveLace up, low top, softSoft PU leather +
        mesh upper, smooth and delicate feel, clear and beautiful texture, without`,
        productCategory: "electronics",
        productImg: 'img/women/product-5.png',
        productPrice: 20000
    },
    {
        productId: 1,
        productName: "Digital Watch",
        productDesc: `Wear the tooling shoes you loveLace up, low top, softSoft PU leather +
        mesh upper, smooth and delicate feel, clear and beautiful texture, without`,
        productCategory: "electronics",
        productImg: 'img/women/product-5.png',
        productPrice: 20000
    }
]

const productDisplay = document.querySelector(".productswomen");
console.log(productDisplay)

function displayProducts(filteredproduct) {
    productDisplay.innerHTML = filteredproduct.map((product) => {
        return `
        <div class="productWomen">
            <img src="${product.productImg}" alt="${product.productName}">
            <span class="productWomenName">${product.productName}</span>
            <span class="productWomenPrice">shs. ${product.productPrice}</span>
        </div>
        `
    })
}
displayProducts(productWomen);

function sliderFunction() {
    let slideIndex = 1;
  showSlides(slideIndex);
  
  document.getElementById("nextSlide").addEventListener("click",function() {
    showSlides(slideIndex += 1);
  })
  
  document.getElementById("prevSlide").addEventListener("click",function() {
    showSlides(slideIndex += -1);
  })
  
  document.getElementById("dot1").addEventListener("click",function() {
    showSlides(slideIndex = 1);
  })
  document.getElementById("dot2").addEventListener("click",function() {
    showSlides(slideIndex = 2);
  })
  document.getElementById("dot3").addEventListener("click",function() {
    showSlides(slideIndex = 3);
  })
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  
  function displaySlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(displaySlides, 5000);
  }
  
  displaySlides()
  }
  sliderFunction();