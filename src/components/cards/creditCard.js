import { Row, Col } from 'antd';
import React from 'react';
function CreditCard(props) {
  const { limit, stavka, period, obsluzh, cashback, age } = props.data;
  return (
    <Row className='mainRow'>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='firstColumn mainInfo'>
        <p><span>Лимит кредитования</span> {limit}</p>
        <p><span>Льготный период</span> {period}</p>
        <p><span>Ставка</span> {stavka}</p>


      </Col>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='mainInfo'>
        <p><span>Обслуживание</span> {obsluzh}</p>
        <p><span>Кэшбэк</span> {cashback}</p>
        <p><span>Возраст</span> {age}</p>
      </Col>
    </Row>
  );
}

export default CreditCard;
