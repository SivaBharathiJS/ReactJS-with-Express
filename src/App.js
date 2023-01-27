import { BrowserRouter, Routes,Route } from "react-router-dom";
import P1 from './pages/D1'
import P2 from './pages/D2'
import P3 from './pages/D3'
import P4 from './pages/D4'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<P1/>}/>
      <Route path='/page2/:id' exact element={<P2/>}/>
      <Route path='/page3/:id' exact element={<P3/>}/>
      <Route path='/page4/:id' exact element={<P4/>}/>
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;
