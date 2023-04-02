import '../sass/header_top.scss';
import vector from '../assets/img/Vector_location.png';
import vector2 from '../assets/img/Vector_location2.png';

function HeaderTop() {
    return (
        <div className="header">
            <div className="header_part left">
                <div className="header_column">
                    <div className="header_addressBlock">
                        <div className="addressBlock_icon">
                            <img className="icon_location" src={vector} alt=""/>
                            <img className="icon_location2" src={vector2} alt=""/>
                        </div>
                        <div className="header_address">
                            <h1 className="header_text">г. Кокчетав, ул. Ж. Ташенова 129Б</h1>
                            <h1 className="address_name">(Рынок Восточный)</h1>
                        </div>
                    </div>
                </div>
                <div className="header_column">
                    <div className="header_contacts">
                        <h1 className="contacts_email_h">opt.sultan@mail.ru</h1>
                        <h1 className="contacts_text_h">На связи в любое время</h1>
                    </div>
                </div>
            </div>
            <div className="header_part">
                <div className="header_column">
                    <div>
                        <ul className="header_categories">
                            <li className="header_iteam">О компании</li>
                            <li className="header_iteam">Доставка и оплата</li>
                            <li className="header_iteam">Возврат</li>
                            <li className="header_iteam">Контакты</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;