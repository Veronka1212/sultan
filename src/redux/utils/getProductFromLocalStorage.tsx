import getTotalPriceFromLocalStorage from "./getTotalPriceFromLocalStorage";

export const getProductFromLocalStorage = () => {
    const data = localStorage.getItem('product');
    const products: Product[] = data ? JSON.parse(data) : [];
    const totalPrice = getTotalPriceFromLocalStorage(products);

    return {
        products,
        totalPrice,
    }
};

export default getProductFromLocalStorage;