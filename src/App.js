import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Produkte, Container, Vorteil, Kunden, Kontakte } from './pages/pages';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'             element={<Container/>}>
            <Route path='/'           element={<Main/>}/>
            <Route path='/produkte'   element={<Produkte/>}/>
            <Route path='/vorteil'    element={<Vorteil/>}/>
            <Route path='/kunden'     element={<Kunden/>}/>
            <Route path='/kontakte'   element={<Kontakte/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
