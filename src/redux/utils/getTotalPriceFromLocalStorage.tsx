export const getTotalPriceFromLocalStorage = (products: Product[]) => {
    return products.reduce((sum, pr) => pr.price * pr.count + sum, 0);
}

export default getTotalPriceFromLocalStorage;