//Imports
import { products } from "./products.js";

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
const openProductDetail = () => {
    productDetail.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    myCart.classList.add();
}

const closeProductDetail = () => {
    productDetail.classList.add('inactive');
}




// Main Event Listeners


emailMenu.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMyOrder);
backCart.addEventListener('click', toggleMyOrder);


//Arrays


const productList = Object.values(products);
const cartProducts = [];

//!Product Rendering

// Existen dos formas en las que podemos recorrer un array para introducir cada producto al HTML

// for(let i of array)

const renderProducts = (arr) => {
    for(let product of productList){
        //Agregando destructurizacion
        let index = productList.indexOf(product);
        let {title, price, image} = product;

        const shopItem = document.createElement('div');
        shopItem.classList.add('shop__item');
        
        const productImage = document.createElement('img')
        productImage.classList.add('item--img');
        productImage.setAttribute('src', image);
        productImage.setAttribute('name', title);
        productImage.setAttribute('title', title);
        productImage.addEventListener('click', () => {renderDescription(product)});
    
        const itemPrice = document.createElement('h3');
        
        itemPrice.classList.add('item--price');
        itemPrice.innerText= `$${price}`
    
        const itemTitle = document.createElement('p');
        itemTitle.classList.add('item--title')
        itemTitle.setAttribute('title', title)
        itemTitle.innerText = title;
    
        const itemCart = document.createElement('span');
        itemCart.classList.add('item--cart');
        itemCart.setAttribute('name', 'Add to Cart');
        itemCart.setAttribute('title', 'Add to Cart');
        itemCart.addEventListener('click', () => {addToCart(index, itemCart)})
        product.cart = itemCart;
    
        shopItem.append(productImage, itemPrice, itemTitle, itemCart);
    
        shopContainer.appendChild(shopItem);
    }
    
}

renderProducts(productList);

// for(let i in array) muestra el indice

//Tenerlo en una function ayuda a mantener un orden y que este pueda ser llamado cuando sea necesario

//!Cart Functions

const addToCart = (index, cart) => {
    let product = productList[index];
    cart.classList.toggle('item--added');
    cart.setAttribute('name', 'Remove from cart');
    cart.setAttribute('title', 'Remove from cart');
    shoppingCart.setAttribute('src', '../assets/Icons/icon_shopping_cart_notification.svg')
    if(cartProducts.includes(product)){
        return;
        
    }else{
        cartProducts.push(product);
        renderToCart(product);
        sumTotal();
    }
}

const renderToCart = (element) =>{
    //Agregando destructurizacion
    let {image, title, price} = element;

    emptyCart.classList.add('inactive');
    const orderArticle = document.createElement('div');
    orderArticle.classList.add('order__article');

    const articleImage = document.createElement('img');
    articleImage.setAttribute('src', image);
    articleImage.classList.add('article--img');

    const articleName = document.createElement('p');
    articleName.innerText = title;
    articleName.classList.add('article--name');

    const articlePrice = document.createElement('p');
    articlePrice.innerText = `$${price}`;
    articlePrice.classList.add('article--price');

    const cancelItem = document.createElement('span');
    cancelItem.classList.add('cancel-item');
    cancelItem.addEventListener('click', () => {removeFromCart(orderArticle, element)})

    articlePrice.appendChild(cancelItem);

    orderArticle.append(articleImage, articleName, articlePrice);

    myOrder.append(orderArticle);
}

const removeFromCart = (htmlElement, arrayElement) =>{
    let index = cartProducts.indexOf(arrayElement);
    cartProducts.splice(index, 1);
    htmlElement.remove();
    arrayElement.cart.classList.remove('item--added');
    sumTotal();
    if(cartProducts.length === 0){
        emptyCart.classList.remove('inactive');
        shoppingCart.setAttribute('src', '../assets/Icons/icon_shopping_cart.svg')
    }
}

const sumTotal = () =>{
    let sum = 0;
    console.log('hola');
    for(let element of cartProducts){
        sum += element.price;
    }
    overviewTotal.innerText = `$${sum}`;
}

//!Render product description

const renderDescription = element =>{
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    myCart.classList.add('inactive');
    let { title, price, description, image} = element;
    const remove = document.querySelector('.product-detail :nth-child(1)');
    if(remove !== null){
        remove.remove();
    }
    productDetail.classList.remove('inactive')

    const mainSection = document.createElement('section');

    const figure = document.createElement('figure');
    figure.classList.add('product--img');
    const exit = document.createElement('span');
    exit.classList.add('exit')
    exit.addEventListener('click', closeProductDetail);

    const span = document.createElement('span');
    exit.appendChild(span);

    const productImg = document.createElement('img');
    productImg.setAttribute('alt', title);
    productImg.setAttribute('title', title);
    productImg.setAttribute('src', image);
    productImg.classList.add('product--img');
    figure.append(exit, productImg);

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    
    const slider1 = document.createElement('div');
    slider1.classList.add('product--slider', 'slider--selected');
    const slider2 = document.createElement('div');
    slider2.classList.add('product--slider');
    const slider3 = document.createElement('div');
    slider3.classList.add('product--slider');
    
    sliderContainer.append(slider1, slider2, slider3);

    const productDescriptionContainer = document.createElement('section');
    productDescriptionContainer.classList.add('product-description-container');

    const productPrice = document.createElement('h2');
    productPrice.classList.add('product--price');
    productPrice.innerText = `$${price}`;

    const productName = document.createElement('p');
    productName.classList.add('product--name')
    productName.innerText = title;

    const productDescription = document.createElement('p');
    productDescription.classList.add('product--description')
    productDescription.innerText = description;

    productDescriptionContainer.append(productPrice, productName, productDescription);

    const button = document.createElement('button');
    button.classList.add('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('title', 'Add to cart');
    
    const addToCart = document.createElement('img');
    addToCart.setAttribute('src', '../assets/Icons/white_shopping_cart.svg')
    addToCart.setAttribute('alt', 'Add to cart');
    
    button.append(addToCart);
    button.innerHTML += 'Add to cart';


    mainSection.append(figure, sliderContainer, productDescriptionContainer, button);

    productDetail.append(mainSection);
}
