import { Row, Col } from 'antd';
import React from 'react';
function Zaim(props) {
  const { srok, stavka, summa, predmet, how, age } = props.data;
  return (
    <Row className='mainRow'>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='firstColumn mainInfo'>
        <p><span>Срок кредитования</span> {srok}</p>
        <p><span>Ставка кредитования</span> {stavka}</p>
        <p><span>Сумма кредитования</span> {summa}</p>
      </Col>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='mainInfo'>
        <p><span>Предмет залога</span> {predmet}</p>
        <p><span>Получение</span> {how}</p>
        <p><span>Возраст</span> {age}</p>
      </Col>
    </Row>
  );
}

export default Zaim;
