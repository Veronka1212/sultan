import SelectedProducts from "../components/SelectedProducts";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import style from "../sass/basked.module.scss";
import {clearProducts} from "../redux/slices/productSlice";
import EmptyBasked from "../components/EmptyBasked";
import React from "react";
import {RootState} from "../redux/store";


export const Basked: React.FC = () => {

    const products: Product[] = useSelector((state: RootState) => state.productReducer.products);
    const count = useSelector((state: RootState) => state.productReducer.totalPrice);
    const dispatcher = useDispatch();
    const onClickClear = () => {
        dispatcher(clearProducts());
    }

    if (count === 0 || products.length === 0) {
        return <EmptyBasked/>;
    }

    return (
            <div className="basked _container">
                <h1 className={style.basked_title}>КОРЗИНА</h1>
                {
                    products.map(pr => <SelectedProducts key={pr.id} {...pr}/>)
                }
                <Link to="/thanks">
                    <button className={style.basked_button} onClick={onClickClear}>Оформить заказ</button>
                </Link>

        </div>
    )
}

export default Basked;