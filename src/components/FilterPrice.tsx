import style from '../sass/filter.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setMaxPrice, setMinPrice} from "../redux/slices/filterSlice";

export const FilterPrice = () => {

    const dispatch = useDispatch();
    const priceMin = useSelector((state: RootState) => state.filterReducer.minPrice);
    const priceMax = useSelector((state: RootState) => state.filterReducer.maxPrice);
    const onChangeSetMin = (event: any) => {
        dispatch(setMinPrice(event.target.value));
    }

    const onChangeSetMax = (event: any) => {
        dispatch(setMaxPrice(event.target.value));
    }

    return (
        <div>
            <div className={style.filter}>
                <div className={style.filter_title}>ПОДБОР ПО ПАРАМЕТРАМ</div>
                <div className={style.filter_price}>Цена <b>₸</b></div>
                <div className={style.filter_priceInput}>
                    <input className={style.priceInput_field} type="number" value={priceMin}
                           onChange={onChangeSetMin}/>
                    <h1 className={style.priceInput_dash}>-</h1>
                    <input className={style.priceInput_field} type="number" value={priceMax}
                           onChange={onChangeSetMax}/>
                </div>
            </div>
        </div>
    )
}

export default FilterPrice;