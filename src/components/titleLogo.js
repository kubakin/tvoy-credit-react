import React from 'react'
import { Row, Col} from 'antd'
function TitleLogo() {
  return (
    <div className='titleLogo'>
      <Row >
        <Col xs={16} offset={3} md={15} lg={12} xxl={9}>
            <p className='MainTextHeader'>Твой кредит предоставляет огромный спектр эксклюзивных финансовых продуктов. С нами Вы откроете высочайший уровень профессионального сервиса по подбору кредитных решений.</p>
        </Col>
      </Row>
      <Row>
        <Col offset={3} md={12} lg={10} xxl={8} xl={10}>
            <p className='MiniTextHeader'>Мы больше, чем просто агрегатор. Мы Ваш финансовый помощник! Нашей главной задаче является помочь Вам преодолеть финансовые трудности с максимальной выгодой.</p>
        </Col>
      </Row>
      <Row>
        <Col offset={3} md={15} lg={7}>
          <a href='qwe' className='goToOrderButton'>Перейти к услугам</a>
        </Col>
      </Row>
    </div>
  );
}
export default TitleLogo;
