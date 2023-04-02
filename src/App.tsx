import HeaderTop from "./components/HeaderTop";
import DividingLine from "./components/DividingLine";
import './index.css';
import HeaderBottom from "./components/HeaderBottom";
import Footer from "./components/Footer";
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import * as React from "react";
import {Basked} from "./pages/Basked";
import Thanks from "./pages/Thanks";
import EmptyBasked from "./components/EmptyBasked";
import ProductCard from "./pages/ProductCard";
import Admin from "./pages/Admin";
import AddNewProduct from "./components/AddNewProduct";

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
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/basked" element={<Basked/>}/>
                <Route path="/thanks" element={<Thanks/>}/>
                <Route path="/empty" element={<EmptyBasked/>}/>
                <Route path="/card/:id" element={<ProductCard/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/add" element={<AddNewProduct/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
