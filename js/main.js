//Constants

const emailMenu = document.querySelector('.nav--email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.nav--menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.nav--cart');
const backCart = document.querySelector('.back');
const myCart = document.querySelector('.order-container');
const myOrder = document.querySelector('.order-subcontainer');
const shopContainer = document.querySelector('.shop-container');
const productDetail = document.querySelector('.product-detail');
const exitDetail = document.querySelector('.exit');
const overviewTotal = document.querySelector('.overview--total');
const emptyCart = document.querySelector('.empty-cart');


//Toggle Functions


const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
    myCart.classList.add('inactive');
    productDetail.classList.add('inactive');
}

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('inactive');
    myCart.classList.add('inactive');
    productDetail.classList.add('inactive')
}

const toggleMyOrder = () => {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive')


    myCart.classList.toggle('inactive');
}

const closeProductDetail = () => {
    productDetail.classList.add('inactive');
}

const openProductDetail = () => {
    productDetail.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    myCart.classList.add();
}


// Main Event Listeners


emailMenu.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMyOrder);
backCart.addEventListener('click', toggleMyOrder);
exitDetail.addEventListener('click', closeProductDetail);

//Arrays


const productList = [];
const cartProducts = [];


//Shop Items


productList.push({
    name: 'Round Shelf',
    price: 120,
    image: 'data:image/jpeg;base64,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'
})

productList.push({
    name: 'Retro Refrigerator',
    price: 180,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtE0ryfmzvh9PRQuhKOfh23AD0alMhetfxRQ&usqp=CAU'
})

productList.push({
    name: 'Laptop',
    price: 900,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYv8JB7LqsalIwyI0SoIrddSYLE45M4xqhQ&usqp=CAU'
})

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

//!Product Rendering

// Existen dos formas en las que podemos recorrer un array para introducir cada producto al HTML

// for(i of array)

const renderProducts = (arr) => {
    for(product of productList){
        let i = productList.indexOf(product);

        const shopItem = document.createElement('div');
        shopItem.classList.add('shop__item');
        
        const productImage = document.createElement('img')
        productImage.classList.add('item--img');
        productImage.setAttribute('src', product.image);
        productImage.setAttribute('name', product.name);
        productImage.setAttribute('title', product.name);
        productImage.addEventListener('click', openProductDetail);
    
        const itemPrice = document.createElement('h3');
        
        itemPrice.classList.add('item--price');
        itemPrice.innerText= `$${product.price}`
    
        const itemTitle = document.createElement('p');
        itemTitle.classList.add('item--title')
        itemTitle.innerText = product.name;
    
        const itemCart = document.createElement('span');
        itemCart.classList.add('item--cart');
        itemCart.setAttribute('name', 'Add to Cart');
        itemCart.setAttribute('title', 'Add to Cart');
        itemCart.addEventListener('click', () => {addToCart(i, itemCart)})
        product.cart = itemCart;
    
        shopItem.append(productImage, itemPrice, itemTitle, itemCart);
    
        shopContainer.appendChild(shopItem);
    }
    
}

renderProducts(productList);

// for(i in array) muestra el indice

//Tenerlo en una function ayuda a mantener un orden y que este pueda ser llamado cuando sea necesario

//!Cart Functions

const addToCart = (index, cart) => {
    let x = productList[index];
    cart.classList.toggle('item--added');
    cart.setAttribute('name', 'Remove from cart');
    cart.setAttribute('title', 'Remove from cart');
    shoppingCart.setAttribute('src', '../assets/Icons/icon_shopping_cart_notification.svg')
    if(cartProducts.includes(x)){
        return;
        
    }else{
        cartProducts.push(x);
        renderToCart(x);
        sumTotal();
    }
}

const renderToCart = (element) =>{
    emptyCart.classList.add('inactive');
    const orderArticle = document.createElement('div');
    orderArticle.classList.add('order__article');

    const articleImage = document.createElement('img');
    articleImage.setAttribute('src', element.image);
    articleImage.classList.add('article--img');

    const articleName = document.createElement('p');
    articleName.innerText = element.name;
    articleName.classList.add('article--name');

    const articlePrice = document.createElement('p');
    articlePrice.innerText = `$${element.price}`;
    articlePrice.classList.add('article--price');

    const cancelItem = document.createElement('span');
    cancelItem.classList.add('cancel-item');
    cancelItem.addEventListener('click', () => {removeFromCart(orderArticle, element)})

    articlePrice.appendChild(cancelItem);

    orderArticle.append(articleImage, articleName, articlePrice);

    myOrder.append(orderArticle);
}


const removeFromCart = (element1, element2) =>{
    let index = cartProducts.indexOf(element2);
    cartProducts.splice(index, 1);
    element1.remove();
    element2.cart.classList.remove('item--added');
    sumTotal();
    if(cartProducts.length === 0){
        emptyCart.classList.remove('inactive');
        shoppingCart.setAttribute('src', '../assets/Icons/icon_shopping_cart.svg')
    }
}

const sumTotal = () =>{
    let sum = 0;
    for(element of cartProducts){
        sum += element.price;
    }
    overviewTotal.innerText = `$${sum}`;
}