import style from "../sass/productCard.module.scss";
import pieces from "../assets/img/vector_pieces.png";
import ml from "../assets/img/vector_ml.png";
import line from "../assets/img/Vector_description.png";
import little_line from "../assets/img/Vector_little_line.png";
import share from "../assets/img/Vector_share.png";
import pricelist from "../assets/img/Vector_download.png";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, removeProduct} from "../redux/slices/productSlice";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchSelectProduct} from "../redux/slices/cardSlice";
import {AppDispatch, RootState} from "../redux/store";

export const ProductCard = () => {

    const product = useSelector((state: RootState) => state.cardReducer.item);

    const dispatcher = useDispatch<AppDispatch>();
    const {id} = useParams();

    useEffect(() => {
        if (id != null) {
            dispatcher(fetchSelectProduct(id));
        }
    }, [dispatcher, id])

    const onClickAdd = () => {
        dispatcher(addProduct(product));
    }
    const onClickRemove = () => {
        dispatcher(removeProduct(id));
    }
    const p = useSelector(
        (state: RootState) => state.productReducer.products.find(
            (pr:Product) => pr.id === id
        )
    );

    const currentCount = p ? p.count : 0;

    return (
        <div className="wrapper">
            <div className="_container">
                <div className={style.navigation}>
                    <a className={style.navigation_item} href="/">Главная</a>
                    <img className={style.navigation_item} src={little_line} alt=""/>
                    <a className={style.navigation_item} href="/">Каталог</a>
                    <img className={style.navigation_item} src={little_line} alt=""/>
                    <a className={style.navigation_item} href={`/card/${product.id}`}>{product.name}</a>
                </div>
                <div className={style.product}>
                    <div className={style.product_column}>
                        <img className={style.column_image} src={product.url} alt=""/>
                    </div>
                    <div className={style.product_column}>
                        <h1 className={style.product_instock}>В наличии</h1>
                        <h1 className={style.column_name}><b>{product.brand}</b>
                            <b>{product.manufacturer}</b> {product.name}</h1>
                        <div className={style.column_weight}>
                            <div className={style.weight_icon}>
                                {product.size_type === 'шт' || product.size_type === ''
                                    ? <img src={pieces} alt=""/>
                                    : <img src={ml} alt=""/>}
                            </div>
                            <div className={style.weight_value}>{product.size} {product.size_type}</div>
                        </div>
                        <div className={style.column_action}>
                            <div className={style.action_price}>{product.price} ₸</div>
                            <div className={style.action_buttons}>
                                <button className={style.buttons_del} onClick={onClickRemove}>-</button>
                                <div className={style.buttons_amount}>{currentCount}</div>
                                <button className={style.buttons_add} onClick={onClickAdd}>+</button>
                            </div>
                            <button className={style.action_basked} onClick={onClickAdd}>В корзину</button>
                        </div>
                        <div className={style.column_share}>
                            <button className={style.share_button}><img src={share} alt=""/></button>
                            <div className={style.share_text}>При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</div>
                            <button className={style.share_pricelist}>Прайс-лист <img src={pricelist} alt=""/></button>
                        </div>
                        <div className={style.column_shot_info}>
                            <h1>Производитель: <b>{product.manufacturer}</b></h1>
                            <h1>Бренд: <b>{product.brand}</b></h1>
                            <h1>Артикул: <b>460404</b></h1>
                            <h1>Штрихкод: <b>{product.barcode}</b></h1>
                        </div>
                        <div className={style.column_description}>
                            <details>
                                <summary className={style.description_title}>Описание ▲</summary>
                                <br></br>
                                <p className={style.description_text}>{product.description}</p>
                            </details>
                        </div>
                        <img className={style.column_line} src={line} alt=""/>
                        <div className={style.column_long_info}>
                            <details>
                                <summary className={style.description_title}>Характеристики ▲</summary>
                                <br></br>
                                <h1>Назначение: <b>бытовая химия</b></h1>
                                <h1>Тип: <b>средство</b></h1>
                                <h1>Производитель: <b>{product.manufacturer}</b></h1>
                                <h1>Бренд: <b>{product.brand}</b></h1>
                                <h1>Артикул: <b>460404</b></h1>
                                <h1>Штрихкод: <b>{product.barcode}</b></h1>
                                <h1>Вес: <b>{product.size}</b></h1>
                                <h1>Объем: <b>{product.size_type}</b></h1>
                                <h1>Кол-во в коробке: <b>{product.size}</b></h1>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;