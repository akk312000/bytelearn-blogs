import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/404';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}>
            </Route>
            <Route path="/create" element={<Create/>}>
            </Route>
            <Route path="/blogs/:id" element={<BlogDetails/>}>
            </Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
            <Route path="*" element={<NotFound/>}>
             
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;