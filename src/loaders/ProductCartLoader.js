import { getStoredCart } from "../utilities/fakedb";

export const ProductCartLoader = async () => {
    // get products
    const productData = await fetch('products.json');
    const products = await productData.json();
    // get cart
    const savedCart = getStoredCart();
    const initialCart = [];
    // console.log('savedCart', savedCart);
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id)
        // console.log(id, addedProduct);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }



    return { products: products, initialCart: initialCart };

}