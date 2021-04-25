import { Row, Col } from 'antd';
import React from 'react';
function Ipoteka(props) {
  const { srok, stavka, summa, stazh, laststazh, age, type } = props.data;
  return (
    <Row className='mainRow'>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='firstColumn mainInfo'>
        <p><span>Срок кредитования</span> {srok}</p>
        <p><span>Ставка кредитования</span> {stavka}</p>
        <p><span>Сумма кредитования</span> {summa}</p>
      </Col>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='mainInfo'>
        <p><span>Тип платежа</span> {type}</p>
        <p><span>Возраст</span> {age}</p>
        <p><span>Общий стаж</span> {stazh}</p>
        <p><span>Стаж на последнем месте</span> {laststazh}</p>
      </Col>
    </Row>
  );
}

export default Ipoteka;
