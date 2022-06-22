import { 
    Space, 
    Table, 
    Tag, 
    Divider,
    Card } from 'antd';
import CustomerBreadcrumb from "../../component/CustomerBreadcrumb";
import './index.scss'

function TableLayout(){

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
      
                if (tag === 'loser') {
                  color = 'volcano';
                }
      
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a onClick={()=>{console.log(record)}}>Delete</a>
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];





    return (
        <div>
            <CustomerBreadcrumb arr={['Show','Table']}></CustomerBreadcrumb>
            <div className="site-card-border-less-wrapper">
                <Card
                title="When to use"
                bordered={false}
                style={{
                    width: "100%",
                }}
                >
                <p>When you want to show some data</p>
                </Card>
            </div>
            <div className='table-content'>
                <h3>basic Table</h3>
                <Divider/>
                <Table
                columns={columns} 
                dataSource={data}
                pagination={{
                    pageSize:10
                }}  />
            </div>
        </div>
    )
}

export default TableLayout;