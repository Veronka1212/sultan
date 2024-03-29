import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";
import * as hooks from 'react-redux';
import SelectedProducts from "../components/SelectedProducts";
import * as productActions from '../redux/slices/productSlice';
import * as filterActions from '../redux/slices/filterSlice';
import Mock = jest.Mock;
import Categories from "../components/Categories";

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(hooks, 'useDispatch');
describe('Test dispatchers', () => {
    it('test select products dispatch', async () => {
        const dispatch: Mock = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);

        const removeProductFromBasked = jest.spyOn(productActions, 'removeProductFromBasked');
        const addProduct = jest.spyOn(productActions, 'addProduct');
        const removeProduct = jest.spyOn(productActions, 'removeProduct');

        render(<MemoryRouter><SelectedProducts id="0"
                                               url="https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_9ba_8001841474953-1.webp"
                                               name="Средство для мытья посуды Fairy Pure & Clean"
                                               size_type="мл"
                                               size={650}
                                               barcode={8001841475011}
                                               manufacturer="Procter and Gamble"
                                               brand="FAIRY"
                                               price={12.94}
                                               description="Средство для мытья посуды Fairy Pure & Clean сочетает в себе высокую эффективность Fairy в борьбе с загрязнениями и 100% натуральный аромат имбиря и бергамота из итальянской Калабрии. Активные компоненты Fairy полностью удаляют остатки жира  даже в холодной воде, а за счет образования стойкой пены даже одной капли средства хватает надолго. Формула легко смывается и дерматологически протестирована Ассоциацией здоровья кожи (Skin Health Alliance). 100% перерабатываемая бутылка. Обладает сертификатом экологического соответствия."
                                               count={0}/></MemoryRouter>);

        fireEvent.click(screen.getByTestId('product-delete-from-basked'));
        fireEvent.click(screen.getByTestId('product-add'));
        fireEvent.click(screen.getByTestId('product-delete'));

        expect(dispatch).toHaveBeenCalled();
        expect(removeProductFromBasked).toHaveBeenCalledWith("0");

        expect(dispatch).toHaveBeenCalled();
        expect(addProduct).toHaveBeenCalledWith({"id": "0"});

        expect(dispatch).toHaveBeenCalled();
        expect(removeProduct).toHaveBeenCalledWith("0");
    });

    it('test select categories', () => {

        const setCategory = jest.spyOn(filterActions, 'setCategory');
        render(<MemoryRouter>
            <Categories value={0} onClickCategory={setCategory}/>
        </MemoryRouter>)

        fireEvent.click(screen.getAllByTestId('select-category')[0]);
        expect(setCategory).toHaveBeenCalledWith(0);

    });
})