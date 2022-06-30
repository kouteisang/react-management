import {
    HomeOutlined,
    FormOutlined,
    PaperClipOutlined,
    PieChartOutlined
  } from '@ant-design/icons';


const items = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
      auth:[0 ,1],
    },
    {
      label: 'form',
      icon: <FormOutlined/>,
      key: '/form',
      children:[
        {
          label:"General Form", 
          key:"/form/general-form", 
          auth:[0, 1],
        },
        {
          label:"Step Form", 
          key:"/form/step-form",
          auth:[1],
        }, 
      ]
    },
    {
      label:"Others",
      icon:<PaperClipOutlined />,
      key: "/others",
      children:[
        {
          label:"Rich Text",
          key:"/others/rich-test",
          auth:[1],
        }
      ]
    },
    {
      label:"show",
      icon:<PieChartOutlined />,
      key: "/show",
      children:[
        {
          label:"Table",
          key:"/show/table",
          auth:[1],
        }
      ]
    }
]

export default items