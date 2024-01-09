import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Hero from "./pages/Hero";
import MainLayout from "./layout/MainLayout";
import Category from "./pages/Category";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hero/:heroId" element={<Hero />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Route>
    </Routes>
  )
}

export default App
