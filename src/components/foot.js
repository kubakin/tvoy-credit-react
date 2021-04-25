import { Col, Row } from 'antd';
import React from 'react';
import Menu from './menu';
function Foot() {
    return (
        <Row className="footer" justify='start'>
            <Col className='navFoot'xs={{span:11, offset:1}} md={{span:10, offset:3}} lg={{span: 7, offset:4}}>
                    <Menu />
                    <div className="disclaimer">
                        <p>Сайт НЕ является представительством МФО или банком, не осуществляет выдачу займов и кредитов. Все рекомендуемые на сайте кредитные учреждения имеют соответствующие лицензии.Персональные данные пользователей не собираются и не хранятся. При использовании материалов гиперссылка на tvoycredit.com обязательна.</p>
                    </div>
                    <p className="by">ИП Ананьев Д.Ю., ОГРНИП: 319100100029133</p>
                    <p className="tag">©2020 tvoycredit.com Все права защищены.</p>
            </Col>
            <Col offset={0} xs={{span:11, offset:0}} md={6} lg={4} className='connect'>
                <p>Корпоративная почта:</p>
                <p>tvoy.credit.feedback@gmail.com</p>


            </Col>
        </Row>
    );
}

export default Foot;
