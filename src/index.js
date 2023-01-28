import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Disp from "./Grid.js";
import Form from "./form.js";
export default function App()
{
<BrowserRouter>
<Routes>
<Route path="/" element={<Form/>}>
<Route path="/grid" element={<Disp/>}>
</Routes>
</BrowserRouter>
}