class Pagination {
    currentPage: number;
    onChangePage: (i: number) => void;

    constructor(currentPage: number, onChangePage: (i: number) => void) {
        this.currentPage = currentPage;
        this.onChangePage = onChangePage;
    }
}