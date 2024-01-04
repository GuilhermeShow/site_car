import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/Header";
import Home from "../pages/home";
import Detalhes from "../pages/Detalhes";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/:id" element={<Detalhes/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;