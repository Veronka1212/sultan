import style from '../sass/addProduct.module.scss';
import React, {useState} from "react";
import axios from "axios";

const AddNewProduct = () => {

    const [id, setId] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [prescription, setPrescription] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [size_type, setSize_type] = useState<string>('');
    const [size, setSize] = useState<number>(0);
    const [barcode, setBarcode] = useState<number>(0);
    const [manufacturer, setManufacturer] = useState<string>('');
    const [brand, setBrand] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(0);

    const categories: string[] = ['Уход за телом', 'Уход за лицом', 'Уход за руками', 'Уход за ногами', 'Уход за волосами', 'Средства для загара',
        'Средства для бритья', 'Подарочные наборы', 'Гигиеническая продукция', 'Гигиена полости рта', 'Бумажная продукция'];

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }
    const onClickPut = () => {
        axios.post('https://641db24c945125fff3d3c0b1.mockapi.io/item', {
            "id": id,
            "url": url,
            "prescription": categories[prescription],
            "name": name,
            "size_type": size_type,
            "size": size,
            "barcode": barcode,
            "manufacturer": manufacturer,
            "brand": brand,
            "description": description,
            "price": price
        })
            .then(response => {
                console.log(response.data);
                window.location.href = "/admin";
            })
            .catch(error => console.log(error.value));

    }

    return (
        <div className="wrapper">
            <div className="_container">
                <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className={style.body}>
                        <h1>Адрес картинки: </h1>
                        <input value={url} onChange={(event) => setUrl(event.target.value)}/>
                        <h1>ID: </h1>
                        <input value={id} onChange={(event) => setId(event.target.value)}/>
                        <h1>Назначение: </h1>
                        <input value={prescription} type="number"
                               onChange={(event) => setPrescription(Number(event.target.value))}/>
                        <h1>Название: </h1>
                        <input value={name} onChange={(event) => setName(event.target.value)}/>
                        <h1>Тип размера: </h1>
                        <input value={size_type} onChange={(event) => setSize_type(event.target.value)}/>
                        <h1>Размер: </h1>
                        <input value={size} type="number" onChange={(event) => setSize(Number(event.target.value))}/>
                        <h1>Штрихкод: </h1>
                        <input value={barcode} type="number"
                               onChange={(event) => setBarcode(Number(event.target.value))}/>
                        <h1>Производитель: </h1>
                        <input value={manufacturer} onChange={(event) => setManufacturer(event.target.value)}/>
                        <h1>Бренд: </h1>
                        <input value={brand} onChange={(event) => setBrand(event.target.value)}/>
                        <h1>Описание: </h1>
                        <input value={description} onChange={(event) => setDescription(event.target.value)}/>
                        <h1>Цена: </h1>
                        <input value={price} type="number" onChange={(event) => setPrice(Number(event.target.value))}/>
                    </div>
                    <div className={style.body_button}>
                        <button className="purchase_bucket_button" type="submit" onClick={onClickPut}>Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNewProduct;