import ReactPaginate from "react-paginate";
import '../sass/pagination.scss';
import React from "react";
const Pagination: React.FC<Pagination> = ({currentPage,onChangePage}) => {

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