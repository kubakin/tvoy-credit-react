import { Row, Col } from 'antd';
import React from 'react';
function Potreb(props) {
  const { srok, stavka, summa, type, how, age } = props.data;
  return (
    <Row className='mainRow'>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='firstColumn mainInfo'>
        <p><span>Срок</span> {srok}</p>
        <p><span>Ставка</span> {stavka}</p>
        <p><span>Сумма</span> {summa}</p>
      </Col>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='mainInfo'>
        <p><span>Тип платежа</span> {type}</p>
        <p><span>Получение</span> {how}</p>
        <p><span>Возраст</span> {age}</p>
      </Col>
      <Col offset={1} xxl={23} sm={23} xs={23} xl={23} >
        
      </Col>
    </Row>
  );
}

export default Potreb;
