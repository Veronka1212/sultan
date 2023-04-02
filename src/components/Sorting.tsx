import '../sass/sort.scss';
import {useSelector, useDispatch} from "react-redux";
import {setSort} from "../redux/slices/filterSlice";
import React from "react";
import {RootState} from "../redux/store";
import {Link} from "react-router-dom";

const sorts: Sort[] = [{name: 'ЦЕНА 🠕', property: '&sortBy=price&order=asc'},
    {name: 'ЦЕНА 🠗', property: '&sortBy=price&order=desc'},
    {name: 'А-Я 🠕', property: '&sortBy=name&order=asc'},
    {name: 'А-Я 🠗', property: '&sortBy=name&order=desc'}];

const Sorting: React.FC = () => {
    const dispatch = useDispatch();
    const sort = useSelector((state: RootState) => state.filterReducer.sort);
    const sortProperty = sort.property;
    const onChangeSort = (event: any) => {
        dispatch(setSort(event.target.value));
    }
    return (
        <div className="sort">
            <Link to="/admin">
                <button className="search_button">АДМИН</button>
            </Link>
            <div className="sort_select">
                <div className="select_name">Сортировка:</div>
                <select value={sortProperty} onChange={onChangeSort} className="select_prod">
                    {
                        sorts.map(
                            (item: Sort, i: number) => (
                                <option key={i} value={item.property}>
                                    {item.name}
                                </option>
                            )
                        )
                    }
                </select>
            </div>
        </div>
    )
}

export default Sorting;