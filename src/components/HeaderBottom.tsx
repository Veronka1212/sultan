import '../sass/header_bottom.scss';
import c from "../assets/img/Vector_c2.png";
import y from "../assets/img/Vector_y2.png";
import l from "../assets/img/Vector_l2.png";
import t from "../assets/img/Vector_t2.png";
import a from "../assets/img/Vector_a2.png";
import n from "../assets/img/Vector_n2.png";
import searchbutton from "../assets/img/Vector_search.png";
import logo from "../assets/img/vectoricon.png";
import photo from "../assets/img/pngwing_3.png";
import price from "../assets/img/Vectorprice.png";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import React from "react";
import {RootState} from "../redux/store";

const HeaderBottom: React.FC = () => {

    const {products, totalPrice} = useSelector((state:RootState) => state.productReducer);

    const totalCount: number = products.reduce((sum: number, pr: Product) => sum + pr.count, 0);

    return (
        <div className="header2">
            <Link to="/">
                <div className="header2_columns logo_title">
                    <img className="header2_logo" src={logo} alt=""/>
                    <div className="header2_logoname">
                        <div className="logo_name">
                            <img src={c} alt=""/>
                            <img src={y} alt=""/>
                            <img src={l} alt=""/>
                            <img src={t} alt=""/>
                            <img src={a} alt=""/>
                            <img src={n} alt=""/>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="header2_columns">
                <div className="header2_search">
                    <button className="search_button">Каталог</button>
                    <input className="input_catalog2" type="text" placeholder="поиск..."/>
                    <button className="input_button2" type="submit"><img src={searchbutton} alt=""/></button>
                </div>
            </div>
            <div className="header2_columns">
                <div className="header2_contacts2">
                    <div className="contacts2_text_block">
                        <div className="contacts2_phonenumber">+7 (777) 490-00-91</div>
                        <div className="contacts2_time">время работы: 9:00-20:00</div>
                        <div className="contacts2_call"><u>Заказать звонок</u></div>
                    </div>
                    <img className="contacts2_photo" src={photo} alt=""/>
                </div>
            </div>
            <div className="header2_columns">
                <button className="pricelist">Прайс-лист <img src={price} alt=""/></button>
            </div>
            <div className="header2_columns">
                <Link to="/basked">
                    <div className="bucket">
                        <div className="bucket_group">
                            <button className="bucket_button2" type="submit"></button>
                            <div className="bucket_cost">{totalCount}</div>
                        </div>
                        <div className="bucket_text_block">
                            <h1 className="text_block_title">КОРЗИНА</h1>
                            <div className="text_block_price">{totalPrice.toFixed(2)} ₸</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HeaderBottom;