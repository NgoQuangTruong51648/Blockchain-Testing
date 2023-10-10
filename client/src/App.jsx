import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./global.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Create from "./pages/create/Create";
import News from "./pages/news/News";
import ItemDetail from "./pages/itemdetail/ItemDetail";
import Personal from "./pages/personal/Personal";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home  from "./pages/home/Home";
import Category from "./pages/category/Category";
import { AuthContext } from "./contexts/Auth/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/create' element={user ? <Create/> : <Login/>} />
          
          <Route path='/news' element={<News/>} />

          <Route path='/category' element={<Category/>} />

          <Route path='/login' element={user ? <Home/> : <Login/>} />

          <Route path='/register' element={user ? <Home/> : <Register/>} />

          <Route path='/personal/:id' element={<Personal/>} />

          <Route path='/itemdetail/:id' element={<ItemDetail/>} />

        </Routes>
    </Router>
  );
}

export default App;