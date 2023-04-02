import style from '../sass/filter.module.scss';
import vectorbutton from "../assets/img/vector_button.png";
import del_icon from '../assets/img/Vector_del_icon.png';
import FilterPrice from "./FilterPrice";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {
    addManufactToArray,
    filterArrayManufactures,
    setManufacture
} from "../redux/slices/filterSlice";

export const Filter: React.FC = () => {

    const dispatch = useDispatch();
    const manufacturers: string[] = ['Procter and Gamble', 'ООО \'ГРИДЕМ\'', 'ООО \'ЮНИЛЕВЕР РУСЬ\'', 'Николь', 'ООО \'ДизайнСоап\'',
        'Белита', 'BEAUTY COSMETIC', 'ООО «Белгейтс»'];

    const manufacture: string = useSelector((state: RootState) => state.filterReducer.manufacture);
    const onChangeManufact = (event: any) => {
        dispatch(setManufacture(event.target.value));
    }
    const onChangeManufactures = (event: any) => {
        const {value, checked} = event.target;
        if (checked) {
            dispatch(addManufactToArray(value));
        } else {
            dispatch(filterArrayManufactures(value));
        }
    }

    return (
        <div className={style.filter}>
            <FilterPrice/>
            <form className={style.filter_form}>
                <h1 className={style.filter_title}>Производитель</h1>
                <input className={style.form_input} type="text" value={manufacture}
                       onChange={onChangeManufact}/>
                <button className={style.form_button} type="submit"><img src={vectorbutton} alt=""/></button>
            </form>
            <form>
                <div className={style.filter_checkbox}>
                    {
                        manufacturers
                            .filter(m => m.toLowerCase().includes(manufacture.toLowerCase()))
                            .map((m: string) => (
                                    <div key={m}>
                                        <input type="checkbox" id="manufactures" value={m} name="scales"
                                               onChange={onChangeManufactures}/>
                                        <label htmlFor="manufactures">{m}</label>
                                    </div>
                                )
                            )
                    }
                    <div className={style.checkbox_block}>
                        <input className={style.checkbox_input} type="submit" value="Показать"/>
                        <button className={style.checkbox_clean} type="reset"><img src={del_icon} alt=""/></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Filter;