import {Routes ,Route , BrowserRouter} from "react-router-dom"
import Login from "../src/pages/Login"
import SiginUp from "./pages/SiginUp";
function App() {
  return (
    <div className="">
      <BrowserRouter >
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SiginUp />} />
      </Routes>

  
      </BrowserRouter>
     
    </div>
  );
}

export default App;
