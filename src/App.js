import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import Layout from './container/ManageLayout'
import Login from './container/Login';
import AuthComponent from './component/AuthComponent'
import Visualization from './pages/Visualization'
import NotFound from './component/404';
import routes from './routes';
import store from './redux/store'
import 'antd/dist/antd.min.css'
import './App.css';




function App() {
  let role = parseInt(store.getState().loginInfo.permission)
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <AuthComponent> <Layout/> </AuthComponent>}>
            <Route index element={<Visualization/>}></Route>
            {
              routes.map((item)=>{
                if(item.auth.indexOf(role) !== -1){
                  return (<Route 
                    path={item.path}
                    element={item.element}
                    key={item.key}
                  />)
                }
              })
            }
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
