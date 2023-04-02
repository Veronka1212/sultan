class  Product {
    id: string;
    url: string;
    name: string;
    size_type: string;
    size: number;
    barcode: number;
    manufacturer: string;
    brand: string;
    price: number;
    description: string;
    count:number;


    constructor(id: string, url: string, name: string, size_type: string, size: number, barcode: number, manufacturer: string, brand: string, price: number, description: string, count: number) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.size_type = size_type;
        this.size = size;
        this.barcode = barcode;
        this.manufacturer = manufacturer;
        this.brand = brand;
        this.price = price;
        this.description = description;
        this.count = count;
    }
}