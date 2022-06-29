import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import Loadable  from 'react-loadable';
import Layout from './pages/ManageLayout'
import Login from './pages/Login';
import AuthComponent from './component/AuthComponent'
import Visualization from './pages/Visualization'
//import StepForm from './pages/Form/StepForm';
// import Editor from './pages/Editor';
// import TableLayout from './pages/Table'
import 'antd/dist/antd.min.css'
import './App.css';


function Loading(){
  return (<h1> Loading ... </h1>);
}

const GeneralForm = Loadable({
  loader:() => import('./pages/Form/GeneralForm'),
  loading: Loading
})


const StepForm = Loadable({
  loader: () => import('./pages/Form/StepForm'),
  loading: Loading
})

const Editor = Loadable({
  loader: () => import('./pages/Editor'),
  loading: Loading
})

const TableLayout = Loadable({
  loader: () => import('./pages/Table'),
  loading: Loading
})




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
            <Route path="/show/table" element={<TableLayout/>}></Route>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
