import productReducer, {
    addProduct, removeProduct, clearProducts
} from '../redux/slices/productSlice';
import filterReducer, {
    setCategory,
    setSort,
    setMinPrice,
    setMaxPrice,
    setManufacture,
    addManufactToArray,
    filterArrayManufactures
} from '../redux/slices/filterSlice';

describe('productSlice', () => {
    let arrayProducts: ICard = {
        products: [
            {
                "id": "0", "url": "", "name": "", "size_type": "", "size": 0, "barcode": 0,
                "manufacturer": "", "brand": "", "description": "", "price": 0, "count": 1
            },
            {
                "id": "1", "url": "", "name": "", "size_type": "", "size": 0, "barcode": 0,
                "manufacturer": "", "brand": "", "description": "", "price": 0, "count": 1
            },
            {
                "id": "2", "url": "", "name": "", "size_type": "", "size": 0, "barcode": 0,
                "manufacturer": "", "brand": "", "description": "", "price": 0, "count": 1
            }
        ],
        totalPrice: 0,
    }
    it('should add product', () => {
        const action = {payload: {
                "id": "3", "url": "", "name": "", "size_type": "", "size": 0, "barcode": 0,
                "manufacturer": "", "brand": "", "description": "", "price": 0, "count": 1
            }, type: addProduct.type}
        const result: ICard = productReducer(arrayProducts, action);
        expect(result.products).toEqual( [
            {
                "id": "0", "url": "", "name": "", "size_type": "", "size": 0, "barcode": 0,
                "manufacturer": "", "brand": "", "description": "", "price": 0, "count": 1
            },
            {
                "id": "1", "url": "", "name": "", "size_type": "", "size": 0, "barcode": 0,
                "manufacturer": "", "brand": "", "description": "", "price": 0, "count": 1
            },
            {
                "id": "2", "url": "", "name": "", "size_type": "", "size": 0, "barcode": 0,
                "manufacturer": "", "brand": "", "description": "", "price": 0, "count": 1
            },
            {
                "id": "3", "url": "", "name": "", "size_type": "", "size": 0, "barcode": 0,
                "manufacturer": "", "brand": "", "description": "", "price": 0, "count": 1
            }
        ]);
    });

    it('should delete product from basked', () => {
        const action = {payload: "2", type: removeProduct.type}
        const result: ICard = productReducer(arrayProducts, action);
        expect(result.products).toEqual( [
            {
                "id": "0", "url": "", "name": "", "size_type": "", "size": 0, "barcode": 0,
                "manufacturer": "", "brand": "", "description": "", "price": 0, "count": 1
            },
            {
                "id": "1", "url": "", "name": "", "size_type": "", "size": 0, "barcode": 0,
                "manufacturer": "", "brand": "", "description": "", "price": 0, "count": 1
            }
        ]);
    });

    it('should clean all products', () => {
        const action = {payload: {}, type: clearProducts.type}
        const result: ICard = productReducer(arrayProducts, action);
        expect(result.products).toEqual([]);
    });
});

describe('filterSlice', () => {
    let filter: IFilter = {
        category: 0,
        sort: {name: 'ЦЕНА 🠕', property: '&sortBy=price&order=asc'},
        currentPage: 1,
        minPrice: 0,
        maxPrice: 10000,
        manufacture: '',
        arrayManufacture: ["a", "b", "c"],
    }
    it('should set category', () => {
        const action = {payload: 5, type: setCategory.type}
        const result: IFilter = filterReducer(filter, action);
        expect(result.category).toEqual(5);
    });

    it('should set sort', () => {
        const action = {payload: "property", type: setSort.type}
        const result: IFilter = filterReducer(filter, action);
        expect(result.sort.property).toEqual("property");
    });

    it('should set manufacture', () => {
        const action = {payload: "BELITA", type: setManufacture.type}
        const result: IFilter = filterReducer(filter, action);
        expect(result.manufacture).toEqual("BELITA");
    });

    it('should set max and min price', () => {
        const actionMax = {payload: 10000, type: setMaxPrice.type};
        const actionMin = {payload: 0, type: setMinPrice.type};
        const resultMax: IFilter = filterReducer(filter, actionMax);
        const resultMin: IFilter = filterReducer(filter, actionMin);
        expect(resultMax.maxPrice).toEqual(10000);
        expect(resultMin.minPrice).toEqual(0);
    });

    it('should add manufacture to array', () => {
        const action = {payload: "Belita", type: addManufactToArray.type}
        const result: IFilter = filterReducer(filter, action);
        expect(result.arrayManufacture).toEqual(["a", "b", "c", "Belita"]);
    });

    it('should filter array of manufactures', () => {
        const action = {payload: "a", type: filterArrayManufactures.type}
        const result: IFilter = filterReducer(filter, action);
        expect(result.arrayManufacture).toEqual(["b", "c"]);
    });
});
