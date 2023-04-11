import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import ProductBlock from "../components/ProductBlock";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setCurrentPage} from '../redux/slices/filterSlice';
import {fetchProducts} from "../redux/slices/loadSlice";
import {useEffect} from "react";
import {AppDispatch, RootState} from "../redux/store";
import Filter from "../components/Filter";
import CategoriesLeft from "../components/CategoriesLeft";
import style from '../sass/home.module.scss';

export const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products: Product[] = useSelector((state: RootState) => state.loadReducer.items);
    const category: number = useSelector((state: RootState) => state.filterReducer.category);
    let minPrice: number = useSelector((state: RootState) => state.filterReducer.minPrice);
    let maxPrice: number = useSelector((state: RootState) => state.filterReducer.maxPrice);
    const sort: Sort = useSelector((state: RootState) => state.filterReducer.sort);
    const currentPage: number = useSelector((state: RootState) => state.filterReducer.currentPage);
    let manufacture: string = useSelector((state: RootState) => state.filterReducer.manufacture);
    const arrayManufacture: string[] = useSelector((state: RootState) => state.filterReducer.arrayManufacture);

    if (!minPrice) {
        minPrice = 0;
    }
    if (!maxPrice) {
        maxPrice = 0;
    }

    const property: string = sort.property;
    let filterProducts: Product[] = [];

    if (arrayManufacture.length > 0) {
        for (let i: number = 0; i < products.length; i++) {
            for (let j: number = 0; j < arrayManufacture.length; j++) {
                if (products[i].manufacturer === arrayManufacture[j]) {
                    filterProducts.push(products[i]);
                }
            }
        }
    } else {
        filterProducts = products;
    }

    useEffect(() => {
        dispatch(fetchProducts(
            {category, sort, currentPage, minPrice, maxPrice, manufacture, arrayManufacture}
        ));
    }, [sort, minPrice, maxPrice, manufacture,arrayManufacture, category, property, currentPage, dispatch])

    const onClickCategory = (value: number) => {
        dispatch(setCategory(value));
    }

    const onChangePage = (number: number) => {
        dispatch(setCurrentPage(number));
    }

    return (<div>
            <Categories value={category} onClickCategory={onClickCategory}/>
            <div className="wrapper _container">
                <Sorting/>
                <div className="products_body">
                    <div className={style.body_filters}>
                        <Filter/>
                        <CategoriesLeft value={category} onClickCategory={onClickCategory}/>
                    </div>
                    <div className={style.body_products}>
                        {
                            filterProducts.filter(p => p.price > minPrice && p.price < maxPrice)
                                .map(
                                    (product) => (
                                        <ProductBlock key={product.id} {...product} data-testid="product"/>
                                    )
                                )
                        }
                    </div>
                </div>
            </div>

            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    )
}

export default Home;