interface IFilter {
    category: number;
    sort: Sort;
    currentPage: number;
    minPrice: number;
    maxPrice: number;
    manufacture: string;
    arrayManufacture: string[];
}