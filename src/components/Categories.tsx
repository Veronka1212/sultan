import '../sass/categories.scss';
import React from "react";

const Categories: React.FC<Category> = ({value, onClickCategory}) => {

    const categories: string[] = ['Уход за телом', 'Уход за лицом', 'Уход за руками', 'Уход за ногами', 'Уход за волосами', 'Средства для загара',
        'Средства для бритья', 'Подарочные наборы', 'Гигиеническая продукция', 'Гигиена полости рта', 'Бумажная продукция'];

    return (
        <div className="categories _container">
            {
                categories.map((categoryName: string, i: number) => (
                        <div onClick={() => onClickCategory(i)}
                             className={value === i ? "categories_itemC classActive" : "categories_itemC"}
                             key={i}>{categoryName}</div>
                    )
                )
            }
        </div>
    )
}

export default Categories;