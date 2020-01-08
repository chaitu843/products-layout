const FLEX_CONTAINER = document.querySelector(`.flex-container`);

const createSmallDiv = (imgUrl, title, description, price) => {
    return `<div class = "item-small">
    <img class = "image" src = "${imgUrl}"/>
    <div class = "desc-wrapper">
        <div class = "desc">
            <div class = "details">
                <span>${title}</span>
                <span>${description}</span>
                <span>short description</span>
            </div>
            <div class = "price">${price}</div>
        </div>
    </div>
</div>`
}

const createLargeDiv = (imgUrl, title, description, price) => {
    return `<div class = "item-large">
    <img class = "image" src = "${imgUrl}"/>
    <div class = "desc-wrapper">
        <div class = "desc">
            <div class = "details">
                <span>${title}</span>
                <span>${description}</span>
            </div>
            <div class = "price">${price}</div>
        </div>
    </div>
</div>`
}

const getIndex = (index) => {
    if(index<7) return index;
    else return getIndex(index-7);
}

const appendProducts = (products) => {
    products.forEach((product, index) => {
        index = getIndex(index);
        let html = ``;
        if(index === 0 ) {
            FLEX_CONTAINER.insertAdjacentHTML('beforeend', `<div class = "column-one"></div>`);
            html = createSmallDiv(product.imgUrl, product.title, product.description, product.price)
            FLEX_CONTAINER.querySelector('.column-one:last-child').insertAdjacentHTML('beforeend', html)
        } else if(index % 6 === 0) {
            html = createSmallDiv(product.imgUrl, product.title, product.description, product.price)
            FLEX_CONTAINER.querySelector('.column-three:last-child').insertAdjacentHTML('beforeend', html)
        } else if (index % 5 === 0) {
            FLEX_CONTAINER.insertAdjacentHTML('beforeend', `<div class = "column-three"></div>`);
            html = createSmallDiv(product.imgUrl, product.title, product.description, product.price)
            FLEX_CONTAINER.querySelector('.column-three:last-child').insertAdjacentHTML('beforeend', html)
        } else if (index % 4 === 0) {
            html = createSmallDiv(product.imgUrl, product.title, product.description, product.price);
            FLEX_CONTAINER.querySelector('.column-two:last-child').insertAdjacentHTML('beforeend', html);
        } else if (index % 3 === 0) {
            html = createSmallDiv(product.imgUrl, product.title, product.description, product.price);
            FLEX_CONTAINER.querySelector('.column-two:last-child').insertAdjacentHTML('beforeend', html);
        } else if (index % 2 === 0) {
            FLEX_CONTAINER.insertAdjacentHTML('beforeend', `<div class = "column-two"></div>`);
            html = createLargeDiv(product.imgUrl, product.title, product.description, product.price);
            FLEX_CONTAINER.querySelector('.column-two:last-child').insertAdjacentHTML('beforeend', html);
        } else {
            html = createLargeDiv(product.imgUrl, product.title, product.description, product.price);
            FLEX_CONTAINER.querySelector('.column-one:last-child').insertAdjacentHTML('beforeend', html);
        }
    });
}


const products = [
    {
        "title": "Product one",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/358873_0000081590?$medium$",
        "description": "description",
        "price": "$40.00" 
    },
    {
        "title": "Product two",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/357669_0000008988?$medium$",
        "description": "description",
        "price": "$50.00" 
    },
    {
        "title": "Product three",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/354898_0000009240?$medium$",
        "description": "description",
        "price": "$20.00" 
    },
    {
        "title": "Product four",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/358884_0000094805?$medium$",
        "description": "description",
        "price": "$90.00" 
    },
    {
        "title": "Product five",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/358327_0000081590?$medium$",
        "description": "description",
        "price": "$70.00" 
    },
    {
        "title": "Product six",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/348389_0000081590?$medium$",
        "description": "description",
        "price": "$10.00" 
    },
    {
        "title": "Product seven",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/357669_0000008988?$medium$",
        "description": "description",
        "price": "$80.00" 
    },
    {
        "title": "Product eight",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/357669_0000008988?$medium$",
        "description": "description",
        "price": "$32.00" 
    },
    {
        "title": "Product Nine",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/354898_0000009240?$medium$",
        "description": "description",
        "price": "$10.00" 
    },
    {
        "title": "Product Ten",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/348389_0000081590?$medium$",
        "description": "description",
        "price": "$30.00" 
    },
    {
        "title": "Product Eleven",
        "imgUrl": "https://lanebryant.scene7.com/is/image/lanebryantProdATG/358327_0000081590?$medium$",
        "description": "description",
        "price": "$40.00" 
    }
]

appendProducts(products);