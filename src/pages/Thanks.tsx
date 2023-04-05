import style from "../sass/helppages.module.scss";
import thanks from '../assets/img/thanks.png';
import {Link} from "react-router-dom";

const Thanks = () => {
    return (
        <div className="wrapper">
            <div className="_container">
                <div className={style.main}>
                    <div className={style.block}>
                        <h1 className={style.block_text}>Спасибо за заказ!</h1>
                        <img className={style.image} src={thanks} alt=""/>
                        <Link to="/sultan">
                            <button className={style.button}>На главную</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thanks;