import '../sass/footer.scss';
import vectoricon from '../assets/img/vectoricon_footer.png';
import vectorbutton from '../assets/img/vector_button.png';
import viber from '../assets/img/vector_viber.png';
import telegram from '../assets/img/vector_telegram.png';
import c from '../assets/img/Vector_c.png';
import y from '../assets/img/Vector_y.png';
import l from '../assets/img/Vector_l.png';
import t from '../assets/img/Vector_t.png';
import a from '../assets/img/Vector_a.png';
import n from '../assets/img/Vector_n.png';
import viza from '../assets/img/group_viza.png';
import master from '../assets/img/group_master.png';

function Footer() {
    return (
        <div className="main">
            <div className="footer _container">
                <div className="footer_column main_column">
                    <div className="column_item logo">
                        <img className="logo_img_icon" src={vectoricon} alt=""/>
                        <div className="logo_name">
                            <img src={c} alt=""/>
                            <img src={y} alt=""/>
                            <img src={l} alt=""/>
                            <img src={t} alt=""/>
                            <img src={a} alt=""/>
                            <img src={n} alt=""/>
                        </div>
                    </div>
                    <div className="column_item">
                        <h1 className="item-text">Компания «Султан» — снабжаем розничные магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской области</h1>
                    </div>
                    <div className="column_item">
                        <h1 className="input-text">Подпишись на скидки и акции</h1>
                        <form className="form">
                            <input className="input_email" type="text" placeholder="Введите ваш E-mail"/>
                            <button className="input_button" type="submit"><img src={vectorbutton} alt=""/></button>
                        </form>
                    </div>
                </div>
                <div className="footer_column">
                    <div>
                        <ul className="footer_menu">
                            <li className="menu_item"><span>Меню сайта:</span></li>
                            <li className="menu_item">О компании</li>
                            <li className="menu_item">Доставка и оплата</li>
                            <li className="menu_item">Возврат</li>
                            <li className="menu_item">Контакты</li>
                        </ul>
                    </div>
                </div>
                <div className="footer_column">
                    <div>
                        <ul className="footer_categories">
                            <li className="categories_item"><span>Категории:</span></li>
                            <li className="categories_item">Бытовая химия</li>
                            <li className="categories_item">Косметика и гигиена</li>
                            <li className="categories_item">Товары для дома</li>
                            <li className="categories_item">Товары для детей и мам</li>
                            <li className="categories_item">Посуда</li>
                        </ul>
                    </div>
                </div>
                <div className="footer_column">
                    <h1 className="download">Скачать прайс-лист:</h1>
                    <button className="download_link" type="button">Прайс-лист</button>
                    <h1 className="messengers_title">Связь в мессенджерах</h1>
                    <div className="messengers">
                        <button className="messengers_viber"><img src={viber} alt=""/></button>
                        <button className="messengers_telegram"><img src={telegram} alt=""/></button>
                    </div>
                </div>
                <div className="footer_column">
                    <h1 className="contacts_title">Контакты:</h1>
                    <div className="contacts_phonenumber">+7 (777) 490-00-91</div>
                    <div className="contacts_time">время работы: 9:00-20:00</div>
                    <div className="contacts_call"><u>Заказать звонок</u></div>
                    <div className="contacts_email"><b>opt.sultan@mail.ru</b></div>
                    <div className="contacts_text">На связи в любое время</div>
                    <div className="contacts_cards">
                        <div className="cards_viza">
                            <img className="viza_img" src={viza} alt=""/>
                        </div>
                        <div className="cards_master">
                            <img className="master_img" src={master} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;