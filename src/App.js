import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import Layout from './pages/ManageLayout'
import Login from './pages/Login';
import AuthComponent from './component/AuthComponent'
import Visualization from './pages/Visualization'
import GeneralForm from './pages/Form/GeneralForm';
import StepForm from './pages/Form/StepForm';
import Editor from './pages/Editor';
import 'antd/dist/antd.min.css'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <AuthComponent> <Layout/> </AuthComponent>}>
            <Route index element={<Visualization/>}></Route>
            <Route path='/form/general-form' element={<GeneralForm/>}></Route>
            <Route path='/form/step-form' element={<StepForm/>}></Route>
            <Route path="/others/rich-test" element={<Editor/>}></Route>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
