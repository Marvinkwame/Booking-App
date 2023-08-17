import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import './App.css';
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App;
