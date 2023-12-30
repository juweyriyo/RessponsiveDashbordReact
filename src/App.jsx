import { Routes,Route } from "react-router-dom"
import Dashbourd from "./pages/Dashbourd"
import Product from "./pages/Product"
import Sevice from "./pages/Sevice"
import Parent from "./pages/Parent"
import Attendence from "./pages/Attendence"
import Sidenav from "./component/sidenav"

function App(){
     return < Sidenav>
     <Routes>
       <Route path="/" element={<Dashbourd/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/service" element={<Sevice/>}/>
          <Route path="/parent" element={<Parent/>}/>
          <Route path="/attendence" element={<Attendence/>}/>
     </Routes>
     </Sidenav>
}
export default App