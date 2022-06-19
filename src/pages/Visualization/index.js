import {Row, Col} from 'antd'
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    WhatsAppOutlined
} from '@ant-design/icons';
import StackBar from '../../component/StackBar'
import Line from '../../component/Line'
import Pie from '../../component/Pie';
import Bubble from '../../component/Bubble';
import People from '../../component/People';
import './index.scss'

function Visualization(){
    return (
        <div>
            <Row>
                <Col span={6}>
                    <div className='icon facebook'>
                        <FacebookOutlined className="icon-style"/>
                        <div>
                            <span>999</span>
                            <div className='app-name'>Facebook</div>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='icon instragram'>
                        <InstagramOutlined className="icon-style"/>
                        <div>
                            <span>888</span>
                            <div className='app-name'>Instragram</div>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='icon twitter'>
                        <TwitterOutlined className="icon-style"/>
                        <div>
                            <span>777</span>
                            <div className='app-name'>Twitter</div>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='icon whatsapp'>
                        <WhatsAppOutlined className="icon-style"/>
                        <div>
                            <span>666</span>
                            <div className='app-name'>WhatsApp</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <StackBar/>
            <Row>
                <Col span={12}>
                    <Line/>
                </Col>
                <Col span={12}>
                    <Pie/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Bubble/>
                </Col>
                <Col span={12}>
                    <People/>
                </Col>       
            </Row>
        </div>
    )
}

export default Visualization;