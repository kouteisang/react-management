import Loadable  from 'react-loadable';
import { nanoid } from 'nanoid'

function Loading(){
    return (<h1> Loading ... </h1>);
}
  
const GeneralForm = Loadable({
    loader:() => import('../pages/Form/GeneralForm'),
    loading: Loading
})
  
  
const StepForm = Loadable({
    loader: () => import('../pages/Form/StepForm'),
    loading: Loading
})
  
const Editor = Loadable({
    loader: () => import('../pages/Editor'),
    loading: Loading
})
  
const TableLayout = Loadable({
    loader: () => import('../pages/Table'),
    loading: Loading
})

const routes = [
    {path:"/form/general-form", element:<GeneralForm/>, auth:[1, 0], key:nanoid()},
    {path:"/form/step-form", element:<StepForm/>, auth:[1], key:nanoid()},
    {path:"/others/rich-test", element:<Editor/>, auth:[1], key:nanoid()},
    {path:"/show/table", element:<TableLayout/>, auth:[1], key:nanoid()},
] 

export default routes;