import { Col, Row } from 'antd';
import React from 'react';
import Menu from './menu';
import Vk from '../media/social/vkwhite.png'
import Inst from '../media/social/instwhite.png'
import Tg from '../media/social/tgwhite.png'
function Foot() {
    return (
        <div className="footer">
        <Row  justify='start'>
            <Col className='navFoot'xs={{span:11, offset:1}} md={{span:10, offset:3}} lg={{span: 7, offset:4}}>
                    <Menu />
                    {/* <div className="disclaimer">
                        <p>Сайт НЕ является представительством МФО или банком, не осуществляет выдачу займов и кредитов. Все рекомендуемые на сайте кредитные учреждения имеют соответствующие лицензии.Персональные данные пользователей не собираются и не хранятся. При использовании материалов гиперссылка на tvoycredit.com обязательна.</p>
                    </div>
                    <p className="by">ИП Ананьев Д.Ю., ОГРНИП: 319100100029133</p>
                    <p className="tag">©2020 tvoycredit.com Все права защищены.</p> */}
            </Col>
            <Col offset={0} xs={{span:11, offset:0}} md={6} lg={4} className='connect'>
                <p>Корпоративная почта:</p>
                <p>tvoy.credit.feedback@gmail.com</p>
                <Row className='social'>
                <Col justify='end' xl={24}>
        <a target="_blank" rel="noreferrer" href="https://vk.com/tvoy_credit"><img alt='Vk' src={Vk}></img></a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tvoy.credit/"><img alt='Inst' src={Inst}></img></a>
      <a target="_blank" rel="noreferrer" href="https://t.me/tvoy_credit"><img alt='Tg' src={Tg}></img></a>
      </Col>
      </Row>


            </Col>
        </Row>
        <Row>
            <Col xs={{span:15, offset:1}} md={{span:10, offset:3}} lg={{span: 7, offset:4}}>
            <div className="disclaimer">
                        <p>Сайт НЕ является представительством МФО или банком, не осуществляет выдачу займов и кредитов. Все рекомендуемые на сайте кредитные учреждения имеют соответствующие лицензии.Персональные данные пользователей не собираются и не хранятся. При использовании материалов гиперссылка на tvoycredit.com обязательна.</p>
                    </div>
                    <p className="by xs-0">ИП Ананьев Д.Ю., ОГРНИП: 319100100029133</p>
                    <p className="tag">©2020 tvoycredit.com Все права защищены.</p>
            </Col>
        </Row>
        </div>
    );
}

export default Foot;
