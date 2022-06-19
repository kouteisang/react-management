import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import Layout from './pages/ManageLayout'
import Visualization from './pages/Visualization'
import 'antd/dist/antd.min.css'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Visualization/>}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
