import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import Layout from './pages/ManageLayout'
import Login from './pages/Login';
import AuthComponent from './component/AuthComponent'
import Visualization from './pages/Visualization'
import 'antd/dist/antd.min.css'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <AuthComponent> <Layout/> </AuthComponent>}>
            <Route index element={<Visualization/>}></Route>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
