import header from '../sass/header_top.module.scss';
import vector from '../assets/img/Vector_location.png';
import vector2 from '../assets/img/Vector_location2.png';
import letter from '../assets/img/Vector_letter.png';

function HeaderTop() {
    return (
        <div className={header.header}>
            <div className={header.columnLeft}>
                <div className={header.columnLeft_item}>
                    <div className={header.item_icon}>
                        <img className={header.icon_1} src={vector} alt=""/>
                        <img className={header.icon_2} src={vector2} alt=""/>
                    </div>
                    <div className={header.item_text}>
                        <h1><b>г. Кокчетав, ул. Ж. Ташенова 129Б</b></h1>
                        <h1>(Рынок Восточный)</h1>
                    </div>
                </div>
                <div className={header.columnLeft_item}>
                    <div className={header.item_icon}>
                        <img className={header.icon_letter} src={letter} alt=""/>
                    </div>
                    <div className={header.item_text}>
                        <h1><b>opt.sultan@mail.ru</b></h1>
                        <h1>На связи в любое время</h1>
                    </div>
                </div>
            </div>
            <div className={header.columnRight}>
                <ul className={header.columnRight_actions}>
                    <li className={header.actions_item}>О компании</li>
                    <li className={header.actions_item}>Доставка и оплата</li>
                    <li className={header.actions_item}>Возврат</li>
                    <li className={header.actions_item}>Контакты</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderTop;