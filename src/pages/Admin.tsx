import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import pieces from "../assets/img/vector_pieces.png";
import ml from "../assets/img/vector_ml.png";

const Admin: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get<Product[]>('https://641db24c945125fff3d3c0b1.mockapi.io/item')
            .then(res => {
                setProducts(res.data);
            })
    }, [products])


    const deleteProduct = (id: string) => {
        axios.delete<Product[]>(`https://641db24c945125fff3d3c0b1.mockapi.io/item/${id}`)
            .then(res => {
                const p = products.filter(item => item.id !== id);
                setProducts(p);
            })

    }


    return (
        <div className="wrapper _container">
            <Link to="/add">
                <button className="purchase_bucket_button">ДОБАВИТЬ</button>
            </Link>
            <div className="products_body">
                {
                    products.map(
                        (product) => (
                            <div className="product" key={product.id}>
                                <Link to={`/card/${product.id}`}>
                                    <div className="product_column">
                                        <div className="product_image">
                                            <img className="image_picture" src={product.url} alt=""/>
                                        </div>
                                    </div>
                                    <div className="product_column">
                                        <div className="product_weight">
                                            <div className="weight_icon">
                                                {product.size_type === 'шт' || product.size_type === ''
                                                    ? <img src={pieces} alt=""/>
                                                    : <img src={ml} alt=""/>}
                                            </div>
                                            <div className="weight_value">{product.size} {product.size_type}</div>
                                        </div>
                                    </div>
                                    <div className="product_column name">
                                        <h1 className="product_name"><b>{product.brand}</b> {product.name}</h1>
                                    </div>
                                </Link>
                                <div className="product_column">
                                    <div className="product_info">
                                        <h1 className="info_barcode">Штрихкод: {product.barcode}</h1>
                                        <h1 className="info_manufacturer">Производитель: {product.manufacturer}</h1>
                                        <h1 className="info_brand">Бренд: {product.brand}</h1>
                                    </div>
                                </div>
                                <div className="product_column">
                                    <div className="product_purchase">
                                        <h1 className="purchase_value"><b>{product.price} ₸</b></h1>
                                        <button className="purchase_bucket_button"
                                                onClick={() => deleteProduct(product.id)}>Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Admin;