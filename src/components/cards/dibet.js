import { Row, Col } from 'antd';
import React from 'react';
function Dibet(props) {
  const { limit, snyatie, procent, obsluzh, cashback, sms, type } = props.data;
  const limLst = limit.map(i => {
    return (
      
      <p>{i}</p>
    )
  })
  const typesLst = type.map(i => {
    return (
      <Col   xs={{pull:2}} lg={{push:0, offset: 1}}>
      <img src={`/img/icons/${i}.png`} alt={i} />
      </Col>
    )
  })
  return (
    <>
    <Row className='mainRow'>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='firstColumn mainInfo'>
        <p><span>Обслуживание</span> {obsluzh}</p>
        <p><span>Снятие</span> {snyatie}</p>
        <p><span>Лимит на снятие</span> {limLst}</p>
      </Col>
      <Col offset={1} xxl={11} sm={11} xs={20} xl={11} className='mainInfo'>
        <p><span>Процент на остаток</span> {procent}</p>
        <p><span>Кэшбэк</span> {cashback}</p>
        <p><span>SMS-информирование</span> {sms}</p>
      </Col>
      
        
      </Row>
      <Row className='footCard' gutter justify='end'>
        
          {typesLst}
        
      </Row>
      </>
  );
}

export default Dibet;
