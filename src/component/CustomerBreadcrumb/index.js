import { Breadcrumb } from "antd";

function CustomerBreadcrumb(props){
    const {arr} = props;
    return (
        <div>
            <Breadcrumb>
                {
                    arr.map(item => (
                        <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                    ))
                }
            </Breadcrumb>
        </div>
    )
}

export default CustomerBreadcrumb;