import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Another, Container } from './pages/pages';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Container/>}>
            <Route path='/' element={<Main/>}/>
            <Route path='/another' element={<Another/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
