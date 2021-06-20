import { Row, Col } from 'antd';
import React from 'react';
function Microzaim(props) {
  const { second, first, poluchenie, vozrast } = props.data;
  return (
    <div className='microzaim'> 
    <Row className='mainRow'>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='firstColumn mainInfo'>
        <p><span>На первый займ</span></p>
        <p><span>Срок</span> {first.srok}</p>
        <p><span>Ставка</span> {first.stavka}</p>
        <p><span>Сумма</span> {first.summa}</p>
      </Col>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='mainInfo'>
        <p><span>На повторный займ</span></p>
        <p><span>Срок</span> {second.srok}</p>
        <p><span>Ставка</span> {second.stavka}</p>
        <p><span>Сумма</span> {second.summa}</p>
      </Col>
      <div className='thirdStage'>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='firstColumn age'>
        <p><span>Возраст</span> {vozrast}</p>

      </Col><Col offset={1} xxl={11} sm={11} xs={20} xl={11}>
        <p><span>Получение</span> {poluchenie}</p>

      </Col>
      </div>
    </Row>
    </div>
  );
}

export default Microzaim;
