import style from '../sass/categoriesLeft.module.scss';
import React from "react";


const CategoriesLeft: React.FC<Category> = ({onClickCategory}) => {

    const categories: string[] = ['Уход за телом', 'Уход за лицом', 'Уход за руками', 'Уход за ногами', 'Уход за волосами', 'Средства для загара',
        'Средства для бритья', 'Подарочные наборы', 'Гигиеническая продукция', 'Гигиена полости рта', 'Бумажная продукция'];

    return (
        <div className="_container">
            <div className={style.categories}>
                <h1>УХОД ЗА ТЕЛОМ</h1>
                {
                    categories.map((categoryName: string, i: number) => (
                            <div onClick={() => onClickCategory(i)}
                                 className={style.categories_item}
                                 key={i}>{categoryName}</div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default CategoriesLeft;