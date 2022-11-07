const menProducts = [
  {
      productId: 1,
      productCategory: "shirt",
      productName: "Korean Slim Fit",
      productPrice: 50000,
      productImage:'img/mens/koreanSlim.jpg',
      productDesc:`
      AliExpress
      Korean Slim Fit Men Trousers Suit Pant Black Navy Solid Business Casual Office Trouser
       Pantaloni Tuta Uomo Stretch Suit Trousers
      .`,
      productDiscount: 20
  },
  {
      productId: 2,
      productCategory: "trouser",
      productName: "Summer Slim Trousers",
      productPrice: 90000,
      productImage:'img/mens/summer.jpg',
      productDesc:`
      AliExpress
      2021 Spring And Summer Slim Fit Brand Fashion Men Trousers Classic Style Business Casual
       Men Korean Fashion Straight Suit.`,
      productDiscount: 10
  },
  {
      productId: 3,
      productCategory: "trouser",
      productName: "Fashion Vertical Stripes",
      productPrice: 80000,
      productImage:'img/mens/vertical.jpg',
      productDesc:`
      AliExpress
      Korean Slim Fit Men Dress Pants Fashion Vertical Stripes Men Suit Pants 
      Streetwear Ankle Length Office Trousers Men.`,
      productDiscount: 15
  },
  {
      productId: 4,
      productCategory: "trouser",
      productName: "Dori style",
      productPrice: 100000,
      productImage:'img/mens/dgm.jpg',
      productDesc:`Dori style funky look cargo@@DGM men's cargo pants designed along with
       outdoor activities, perfect for all outdoor activities, hiking, hunting.`,
      productDiscount: 10
  },
  {
      productId: 5,
      productCategory: "shirt",
      productName: "Men shirt soft",
      productPrice: 40000,
      productImage:'img/mens/shirt1.jpg',
      productDesc:`comfortable travel experienceSoft anti-skid PVC has anti-skid
      texture, not afraid of rainy days and wetlands, bending, wear-resistant, 
      rubber material`,
      productDiscount: 10
  },
  {
      productId: 6,
      productCategory: "shirt",
      productName: "Men Gentle shirt",
      productPrice: 30000,
      productImage:'img/mens/shirt2.jpg',
      productDesc:`comfortable travel experienceSoft anti-skid PVC has anti-skid
      texture, not afraid of rainy days and wetlands, bending, wear-resistant, 
      rubber material`,
      productDiscount: 30
  },
  {
      productId: 7,
      productCategory: "shirt",
      productName: "Men Stylish shirt",
      productPrice: 50000,
      productImage:'img/mens/shirt3.jpg',
      productDesc:`comfortable travel experienceSoft anti-skid PVC has anti-skid
      texture, not afraid of rainy days and wetlands, bending, wear-resistant, 
      rubber material`,
      productDiscount: 25
  },
  {
      productId: 8,
      productCategory: "shirt",
      productName: "Men soft long slived",
      productPrice: 60000,
      productImage:'img/mens/shirt4.jpg',
      productDesc:`comfortable travel experienceSoft anti-skid PVC has anti-skid
      texture, not afraid of rainy days and wetlands, bending, wear-resistant, 
      rubber material`,
      productDiscount: 15
  },
  {
    productId: 9,
    productCategory: "shoes",
    productName: "Men Classic Air Force",
    productPrice: 100000,
    productImage:'img/air.png',
    productDesc:`Men classic fashion Air Force shoe to bright up the classic day
    of classic men`,
    productDiscount: 15
}
]

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

function productsFunction() {
  const productsMenContainer = document.querySelector(".productsMen");
  const searchInput = document.querySelector(".search-input-men");
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");


  const displayProducts = (filteredProduct) => {
    productsMenContainer.innerHTML = filteredProduct.map((product) => {
      return `
        <div class="productMen">
          <img src="${product.productImage}" alt="${product.productName}">
          <span class="productMenName">${product.productName}</span>
          <span class="productMenPrice">shs.${product.productPrice}</span>
          <span class="productDiscount">${product.productDiscount}%</span>
          <button class="productButton">Buy</button>
        </div>
      `
    }).join("")
  }
  displayProducts(menProducts)

  searchInput.addEventListener("keyup", function(e) {
    let value = e.target.value.toLowerCase();
    if(value) {
      let filterProducts = menProducts.filter((product) => {
        return product.productName.toLowerCase().indexOf(value) !== -1;
      })
      displayProducts(filterProducts)
    } else {
      displayProducts(menProducts)
    }
  })

  const displayCategories = () => {
    const categories = menProducts.map((cat) => cat.productCategory)
    // console.log(["All",...new Set(categories)])
    const Categories = ["all",...categories.filter((cat,i) => {
      return categories.indexOf(cat) === i;
    })]
  
    categoriesContainer.innerHTML =  Categories.map(cat => 
      `
      <span class="cat">${cat}</span>
    `).join("")

    categoriesContainer.addEventListener("click", function(e) {
      const selectedCategory = e.target.textContent;
      const filteredProduct = menProducts.filter((product) => {
        return product.productCategory === selectedCategory;
      })
      selectedCategory == "all"? displayProducts(menProducts) : displayProducts(filteredProduct)
    })
  }
  displayCategories()

  const handlePriceRange = () => {
    const priceList = menProducts.map((product) => product.productPrice);
    const maxPrice = Math.max(...priceList)
    console.log(maxPrice)
    const minPrice = Math.min(...priceList)
    console.log(minPrice)
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;

    priceValue.textContent = "shs." + maxPrice

    priceRange.addEventListener("input", function(e) {
      priceValue.textContent = "shs." + e.target.value;
      const filterProducts = menProducts.filter((product) => product.productPrice <= e.target.value)
      displayProducts(filterProducts)
    })
  }

  handlePriceRange()
}
productsFunction();