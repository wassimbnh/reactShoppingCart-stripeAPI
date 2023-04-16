// coffe : price_1Mx9jIEXYQfbBZFa9YQ6aWIM
// sunglasses : price_1Mx9nYEXYQfbBZFaxzwbXYPs
//camera :price_1Mx9qhEXYQfbBZFaMd2T2Yg2


const productsArray = [
    {
        id:"price_1MxYrrEXYQfbBZFacmhm7QfO",
        title:"T-shirt",
        img:"T-shirt.jpg",
        price :45.99
    },
    {
        id:"price_1MxYsTEXYQfbBZFawbRuVC62",
        title:"Jacket",
        img: "jacket.jpg",
        price : 119.99
    },
    {
        id:"price_1MxYu7EXYQfbBZFaAhkoiFau",
        title:"Black Shirt",
        img:'blackshirt.jpg',
        price : 11.99
    },
    {
        id:"price_1MxYvrEXYQfbBZFanKrDWaFd",
        title:"Jeans",
        img:"jeans.jpg",
        price : 44.99
    },
    {
        id:"price_1MxYwrEXYQfbBZFa6d3gqbf6",
        title:"Sweater",
        img:"sweater.jpg",
        price : 25.99
    },
    {
        id:"price_1MxYxnEXYQfbBZFa8h3ClwDr",
        title:"SweatShirt",
        img:"sweatshirt.jpg",
        price : 15.99
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