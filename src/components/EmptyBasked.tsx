import style from '../sass/helppages.module.scss';
import empty from '../assets/img/empty.png';
import {Link} from "react-router-dom";
import React from "react";

const EmptyBasked: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="_container">
                <div className={style.main}>
                    <div className={style.block}>
                        <h1 className={style.block_text}>Ваша корзина пуста!</h1>
                        <img className={style.image} src={empty} alt=""/>
                        <Link to="/">
                            <button className={style.button}>Назад</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmptyBasked;