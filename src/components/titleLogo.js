import React from 'react'
import { Row, Col} from 'antd'
import { Link as Lnk } from "react-scroll";

function TitleLogo() {
  return (
    <div className='titleLogo'>
      <Row >
        <Col xs={16} offset={3} md={15} lg={12} xxl={9}>
            <p className='MainTextHeader'>Твой Кредит — помощник в подборе кредитных решений с максимальной выгодой для Вас.</p>
        </Col>
      </Row>
      <Row>
        <Col offset={3} xs={16} md={12} lg={10} xxl={8} xl={10}>
            <p className='MiniTextHeader'>Мы - сервис по подбору кредитных и финансовых продуктов без скрытых условий от кредитных организаций.</p>
        </Col>
      </Row>
      <Row>
        <Col offset={3} md={15} lg={7}>
        <Lnk className='goToOrderButton' to='goToOrderButton' smooth={true}>Перейти к услугам</Lnk>
        </Col>
      </Row>
    </div>
  );
}
export default TitleLogo;
