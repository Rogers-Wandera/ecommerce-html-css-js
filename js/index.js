const featuredProducts = [
    {
        productName: "Women golden Watch",
        productPrice: 100000,
        productImage:'/img/featured/watch.jpg',
        productDesc:`Breitling Galactic 32 Sleek Women's Watch H7133012/H550-792H. This 32mm watch features
         a solid 18k rose gold case, bezel and bracelet. The Golden Sun gold dial has index and diamond 
         hour markers with a date window displayed at 3 o'clock. It is powered by the Breitling Caliber
          71 battery operated COSC Chronometer certified SuperQuartz movement with an end of 
          life indicator (EOL).`,
        productDiscount: 20
    },
    {
        productName: "Women Fashion Glasses",
        productPrice: 50000,
        productImage:'/img/featured/glasses.jpg',
        productDesc:`A classic square frame adds a timeless feel to these glasses from Valentino Eyewear. 
        In a timeless black hue and finished with contrasting logo-printed arms, the pair guarantees a 
        bold look.`,
        productDiscount: 10
    },
    {
        productName: "Women's Classic Platform Clog",
        productPrice: 200000,
        productImage:'/img/featured/womencrocs.jpg',
        productDesc:`Fully-molded Croslite material upper in a platform clog style with a round toe
        Perforated upper and backstrap design for your Jibbitz™ charms
        Odor-resistant, easy to clean, and quick to dry
        Iconic lightweight construction.`,
        productDiscount: 15
    },
    {
        productName: "Women's Classic shoes",
        productPrice: 200000,
        productImage:'/img/featured/womenshoes.jpg',
        productDesc:`RS Pro Plain fronted Gibson safety shoe is 100% non-metallic lace up leather shoe.
         This safety shoe has all round protection with a dual density outsole, composite midsole and a
          fibreglass toe cap. The lining for the safety shoe is a moisture wicking material and the 
          foot-bed is Activ-Step Comfort PU. A comfortable safety shoe that can be worn all 
          day plus gives you excellent protection.`,
        productDiscount: 10
    }
]

const menProducts = [
    {
        productName: "Korean Slim Fit",
        productPrice: 50000,
        productImage:'/img/mens/koreanSlim.jpg',
        productDesc:`
        AliExpress
        Korean Slim Fit Men Trousers Suit Pant Black Navy Solid Business Casual Office Trouser
         Pantaloni Tuta Uomo Stretch Suit Trousers
        .`,
        productDiscount: 20
    },
    {
        productName: "Summer Slim Trousers",
        productPrice: 90000,
        productImage:'/img/mens/summer.jpg',
        productDesc:`
        AliExpress
        2021 Spring And Summer Slim Fit Brand Fashion Men Trousers Classic Style Business Casual
         Men Korean Fashion Straight Suit.`,
        productDiscount: 10
    },
    {
        productName: "Fashion Vertical Stripes",
        productPrice: 80000,
        productImage:'/img/mens/vertical.jpg',
        productDesc:`
        AliExpress
        Korean Slim Fit Men Dress Pants Fashion Vertical Stripes Men Suit Pants 
        Streetwear Ankle Length Office Trousers Men.`,
        productDiscount: 15
    },
    {
        productName: "Dori style",
        productPrice: 100000,
        productImage:'/img/mens/dgm.jpg',
        productDesc:`Dori style funky look cargo@@DGM men's cargo pants designed along with
         outdoor activities, perfect for all outdoor activities, hiking, hunting.`,
        productDiscount: 10
    },
]

let featureProduct = document.getElementById("featured-wrapper");
let featureDiv = document.createElement("div");
featureDiv.classList.add("featured-products-wrapper")
featureDiv.innerHTML = featuredProducts.map((product) => {
    const {productName,productPrice,productDesc,productImage,productDiscount} = product;
    return `
        <div class="single-feature-product">
            <img src="${productImage}" alt="${productName}">
            <h3>${productName}</h3>
            <p class="productPrice">shs.${productPrice}</p>
            <p class="productDesc">${productDesc.substring(0,60)}</p>
            <p class="productDiscount">${productDiscount}%</p>
            <button>Buy now</button>
        </div>
    `
}).join("")

featureProduct.appendChild(featureDiv)


let menProductsPage = document.getElementById("men-wrapper");
let menDiv = document.createElement("div");
menDiv.classList.add("featured-products-wrapper")
menDiv.innerHTML = menProducts.map((product) => {
    const {productName,productPrice,productDesc,productImage,productDiscount} = product;
    return `
        <div class="single-feature-product men-feature-product" id="hover-men-products">
            <img src="${productImage}" alt="${productName}">
            <h3>${productName}</h3>
            <p class="productPrice">shs.${productPrice}</p>
            <p class="productDesc hide-desc" id="desc-men">${productDesc}</p>
            <p class="productDiscount">${productDiscount}%</p>
            <button>Buy now</button>
        </div>
    `
}).join("")

menProductsPage.appendChild(menDiv);

let hoverMenProduct = document.querySelectorAll("#hover-men-products");
let descMen = document.querySelectorAll("#desc-men");

hoverMenProduct.forEach((men,index) => {
    men.addEventListener("mouseover", function(e) {
        descMen.forEach((desc, descIndex) => {
           if(index === descIndex) {
                desc.classList.remove("hide-desc")
           } else {
            desc.classList.add("hide-desc")
           }
        })
    })
})