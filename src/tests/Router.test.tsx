import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Thanks from "../pages/Thanks";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";
import App from "../App";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import axios from "axios";
import ProductBlock from "../components/ProductBlock";
import {renderWithRouter} from "./helpers/renderWithRouter";

jest.mock('axios');

describe('Test router', () => {
    let response: Response;
    it('test Thanks return to home page', async () => {
        render(<MemoryRouter><Thanks/></MemoryRouter>);
        const link = screen.getByTestId('main-link');
        await userEvent.click(link);
        expect(link).toBeInTheDocument();
    });

    it('Error page test', () => {
        render(
            <MemoryRouter initialEntries={['/asfasfafasf']}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </MemoryRouter>
        );
        expect(screen.getByTestId('not-found')).toBeInTheDocument();
    });

    it('Test Product Card', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response);
        render(renderWithRouter(<Provider store={store}><ProductBlock id="0"
                                                                      url="https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_9ba_8001841474953-1.webp"
                                                                      name="Средство для мытья посуды Fairy Pure & Clean"
                                                                      size_type="мл"
                                                                      size={650}
                                                                      barcode={8001841475011}
                                                                      manufacturer="Procter and Gamble"
                                                                      brand="FAIRY"
                                                                      price={12.94}
                                                                      description="Средство для мытья посуды Fairy Pure & Clean сочетает в себе высокую эффективность Fairy в борьбе с загрязнениями и 100% натуральный аромат имбиря и бергамота из итальянской Калабрии. Активные компоненты Fairy полностью удаляют остатки жира  даже в холодной воде, а за счет образования стойкой пены даже одной капли средства хватает надолго. Формула легко смывается и дерматологически протестирована Ассоциацией здоровья кожи (Skin Health Alliance). 100% перерабатываемая бутылка. Обладает сертификатом экологического соответствия."
                                                                      count={0}/>)
            </Provider>,
            ''));
        const users = await screen.findAllByTestId('product-block');
        expect(users.length).toBe(1);
        userEvent.click(users[0])
        expect(screen.getByTestId('product-card')).toBeInTheDocument();
    });

    it('should filtering products', function () {

    });
})