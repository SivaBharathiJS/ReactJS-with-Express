import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Page1 from './pages/d1' 
import Page2 from './pages/d2' 
function App() {
  return (
      <Router> 
      <Routes>
      <Route path='/' exact element={<Page1 />} />
      <Route path='/page2' exact element={<Page2 />} />
      </Routes>
      </Router>)}

export default App;
