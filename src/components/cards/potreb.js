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
      <Col offset={1} xxl={24} sm={24} xs={24} xl={24} >
        <p>
          Дополнительная информация: компания предоставляет услуги для жителей Москвы и Московской области
      </p>
      </Col>
    </Row>
  );
}

export default Potreb;
