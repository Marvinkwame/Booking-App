import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import './App.css';
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchHotel from "./pages/SearchHotel";
import HotelPage from "./pages/HotelPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<SearchHotel />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App;
