import {Route, Routes} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Thanks from "../pages/Thanks";
import EmptyBasked from "../components/EmptyBasked";
import ProductCard from "../pages/ProductCard";
import Admin from "../pages/Admin";
import AddNewProduct from "../components/AddNewProduct";
import * as React from "react";
import {Home} from "../pages/Home";
import {Basked} from "../pages/Basked";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/sultan" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/basked" element={<Basked/>}/>
            <Route path="/thanks" element={<Thanks/>}/>
            <Route path="/empty" element={<EmptyBasked/>}/>
            <Route path="/card/:id" element={<ProductCard/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/add" element={<AddNewProduct/>}/>
        </Routes>
    );
};

export default AppRouter;