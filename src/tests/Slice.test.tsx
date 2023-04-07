import {
    addProduct, removeProduct, clearProducts, removeProductFromBasked
} from '../redux/slices/productSlice';

describe('productSlice', ()=> {
    it('should add product', () => {
        const result = addProduct({"id": "0"});

        expect(result).toEqual({"payload": {"id": "0"}, "type": "product/addProduct"})
    });

    it('should remove product', () => {
        const result = removeProduct(0);

        expect(result).toEqual({"payload": 0, "type": "product/removeProduct"})
    });

    it('should delete product from basked', () => {
        const result = removeProductFromBasked(0);

        expect(result).toEqual({"payload": 0, "type": "product/removeProductFromBasked"})
    });

    it('should clean all products', () => {
        const result = clearProducts();

        expect(result).toEqual({"payload": undefined, "type": "product/clearProducts"})
    });
});