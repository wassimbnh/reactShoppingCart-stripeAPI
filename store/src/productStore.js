// coffe : price_1Mx9jIEXYQfbBZFa9YQ6aWIM
// sunglasses : price_1Mx9nYEXYQfbBZFaxzwbXYPs
//camera :price_1Mx9qhEXYQfbBZFaMd2T2Yg2


const productsArray = [
    {
        id:"price_1Mx9jIEXYQfbBZFa9YQ6aWIM",
        title:"T-shirt",
        img:"T-shirt.jpg",
        price :45.99
    },
    {
        id:"price_1Mx9nYEXYQfbBZFaxzwbXYPs",
        title:"Jacket",
        img: "jacket.jpg",
        price : 119.99
    },
    {
        id:"price_1Mx9qhEXYQfbBZFaMd2T2Yg2",
        title:"Black Shirt",
        img:'blackshirt.jpg',
        price : 11.99
    },
    {
        id:"jeans",
        title:"Jeans",
        img:"jeans.jpg",
        price : 44.99
    },
    {
        id:"dfsfd",
        title:"Sweater",
        img:"sweater.jpg",
        price : 25.99
    },
    {
        id:"price_1Mx9qhEXYQfbBZFaMd2T2Yg2",
        title:"SweatShirt",
        img:"sweatshirt.jpg",
        price : 11.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id ===id)

    if (productData === undefined){
        console.log("Product data does not exists")
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData }; 