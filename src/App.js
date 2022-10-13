import { Home } from "./Components/Home";
import "./Components/Common.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CommentList } from "./Components/CommentList";
import { Nav } from "./Components/Nav";
import { PhotoList } from "./Components/PhotoList";
import {ProductList} from "./Components/ProductList"
import {CryptoList} from "./Components/CryptoList"
import {ParentCoAuth} from "./Components/ParentCoAuth"
import {ParentTodo} from "./Components/ParentTodo"
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/todouplifted" element={< ParentTodo/>} />
          <Route path="/coauth" element={<ParentCoAuth/>}/>
          <Route path="/productlist" element={<ProductList />}/>
          <Route path="/commentlist" element={<CommentList />} />
          <Route path="photolist" element={<PhotoList />} />
          <Route path="/crypto" element={<CryptoList/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
