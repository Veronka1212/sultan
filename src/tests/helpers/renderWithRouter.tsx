import {MemoryRouter} from "react-router-dom";
import AppRouts from "../../router/AppRouts";

export const renderWithRouter = (component: any, initialRoute: string) => {
    if (initialRoute === ''){
        initialRoute = '/';
    }
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouts />
            {component}
        </MemoryRouter>
    )
}