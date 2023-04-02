import ml from '../assets/img/vector_ml.png';
import pieces from '../assets/img/vector_pieces.png';
import bucket from '../assets/img/Vector_backet.png';
import '../sass/productBlock.scss';
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from '../redux/slices/productSlice';
import {Link} from "react-router-dom";
import React from "react";
import {AppDispatch, RootState} from "../redux/store";

const ProductBlock: React.FC<Product> = ({id, url, name, size_type, size, barcode, manufacturer, brand, price, description}) => {

    const dispatch = useDispatch<AppDispatch>();

    const product = useSelector(
        (state: RootState) => state.productReducer.products.find(
            (pr:Product) => pr.id === id
        )
    );
    const currentCount: number = product ? product.count : 0;
    const onClickAdd = () => {
        const product = {
            id,
            url,
            name,
            size_type,
            size,
            barcode,
            brand,
            price,
            description
        }

        dispatch(addProduct(product));
    }

    return (
        <div className="product">
            <Link to={`/card/${id}`}>
                <div className="product_column">
                    <div className="product_image">
                        <img className="image_picture" src={url} alt=""/>
                    </div>
                </div>
                <div className="product_column">
                    <div className="product_weight">
                        <div className="weight_icon">
                            {size_type === 'шт' || size_type === ''
                                ? <img src={pieces} alt=""/>
                                : <img src={ml} alt=""/>}
                        </div>
                        <div className="weight_value">{size} {size_type}</div>
                    </div>
                </div>
                <div className="product_column name">
                    <h1 className="product_name"><b>{brand}</b> {name}</h1>
                </div>
            </Link>
            <div className="product_column">
                <div className="product_info">
                    <h1 className="info_barcode">Штрихкод: {barcode}</h1>
                    <h1 className="info_manufacturer">Производитель: {manufacturer}</h1>
                    <h1 className="info_brand">Бренд: {brand}</h1>
                </div>
            </div>
            <div className="product_column">
                <div className="product_purchase">
                    <h1 className="purchase_value"><b>{price} ₸</b></h1>
                    <button className="purchase_bucket_button" onClick={onClickAdd}>В
                        КОРЗИНУ<img src={bucket} alt=""/>
                    </button>
                    {currentCount > 0 && <p className="purchase_count">{currentCount}</p>}
                </div>
            </div>
        </div>
    )
}

export default ProductBlock;