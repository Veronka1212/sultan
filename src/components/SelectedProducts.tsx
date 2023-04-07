import pieces from "../assets/img/vector_pieces.png";
import ml from "../assets/img/vector_ml.png";
import style from '../sass/selectProducts.module.scss';
import line from '../assets/img/line.png';
import big_line from '../assets/img/Vector_line_big.png';
import del_icon from '../assets/img/Vector_del_icon.png';
import {addProduct, removeProduct, removeProductFromBasked} from "../redux/slices/productSlice";
import {useDispatch} from "react-redux";
import React from "react";

export const SelectedProducts: React.FC<Product> = ({id, url, name, size_type, size, brand, price, description, count}) => {

    const dispatcher = useDispatch();
    const onClickAdd = () => {
        dispatcher(addProduct({id}));
    }
    const onClickRemove = () => {
        dispatcher(removeProduct(id));
    }
    const onClickDeleteFromBasket = () => {
        dispatcher(removeProductFromBasked(id));
    }

    return (
        <div>
            <img src={big_line} alt=""/>
            <div className={style.product}>
                <div className={style.product_column}>
                    <img className={style.column_image} src={url} alt=""/>
                </div>
                <div className={style.product_column}>
                    <div className={style.column_about}>
                        <div className={style.product_weight}>
                            <div className={style.weight_icon}>
                                {size_type === 'шт' || size_type === ''
                                    ? <img src={pieces} alt=""/>
                                    : <img src={ml} alt=""/>}
                            </div>
                            <div className={style.weight_value}>{size} {size_type}</div>
                        </div>
                        <h1 className={style.product_name}><b>{brand}</b> {name}</h1>
                        <div className={style.product_description}>{description}</div>
                    </div>
                </div>
                <div className={style.product_column}>
                    <div className={style.column_action}>
                        <img className={style.action_line} src={line} alt=""/>
                        <div className={style.action_buttons}>
                            <button className={style.buttons_del} data-testid="product-add" onClick={onClickRemove}>-</button>
                            <div className={style.buttons_amount}>{count}</div>
                            <button className={style.buttons_add} data-testid="product-delete" onClick={onClickAdd}>+</button>
                        </div>
                        <img className={style.action_line} src={line} alt=""/>
                        <div className={style.action_price}>{price} ₸</div>
                        <img className={style.action_line} src={line} alt=""/>
                        <button className={style.action_delete} data-testid="product-delete-from-basked" onClick={onClickDeleteFromBasket}><img src={del_icon} alt=""/></button>
                    </div>
                </div>
            </div>
            <img src={big_line} alt=""/>
        </div>
    )
}

export default SelectedProducts;