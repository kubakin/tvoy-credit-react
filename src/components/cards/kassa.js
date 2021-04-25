import { Row, Col } from 'antd';
import React from 'react';
function Kassa(props) {
  const { snyatie, vnes, opening, platezh, sms, obsluzh, mobBank } = props.data;
  return (
    <>
      <Row className='mainRow'>
        <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='firstColumn mainInfo'>
          <p><span>Открытие счета</span> {opening}</p>
          <p><span>Обслуживание</span> {obsluzh}</p>
          <p><span>Платежи</span> {platezh}</p>


        </Col>
        <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='mainInfo'>
          <p><span>Снятие</span> {snyatie}</p>
          <p><span>Внесение</span> {vnes}</p>
          <p><span>SMS-информирование</span> {sms}</p>
        </Col>
      </Row>
      <Row>
        <Col offset={1}>
          <p>Мобильный банк: {mobBank}</p>
        </Col>
      </Row>
    </>

  );
}

export default Kassa;
