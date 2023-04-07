import HeaderTop from "./components/HeaderTop";
import DividingLine from "./components/DividingLine";
import './index.css';
import HeaderBottom from "./components/HeaderBottom";
import Footer from "./components/Footer";
import AppRouts from "./router/AppRouts";

function App() {

    return (
        <div className="App">
            <div className="wrapper _container">
                <HeaderTop/>
            </div>
            <DividingLine/>
            <div className="wrapper _container">
                <HeaderBottom/>
            </div>
            <DividingLine/>
            <AppRouts/>
            <Footer/>
        </div>
    );
}

export default App;
