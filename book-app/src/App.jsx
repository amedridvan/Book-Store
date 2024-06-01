import {Routes ,Route , BrowserRouter} from "react-router-dom"
import Login from "../src/pages/Login"
import SiginUp from "./pages/SiginUp";
import Home from '../src/component/Home'
function App() {
  return (
    <div className="">
      <BrowserRouter >
      <Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SiginUp />} />
        <Route path="/" element={<Home />} />
      </Routes>

  
      </BrowserRouter>
     
    </div>
  );
}

export default App;
