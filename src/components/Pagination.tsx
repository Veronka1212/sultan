import ReactPaginate from "react-paginate";
import '../sass/pagination.scss';
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
const Pagination: React.FC<Pagination> = ({currentPage,onChangePage}) => {

    const products: Product[] = useSelector((state: RootState) => state.loadReducer.items);
console.log(products.length)
    return(
        <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={3}
            forcePage={currentPage - 1}
        />
    )

};

export default Pagination;