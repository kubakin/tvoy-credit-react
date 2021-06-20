import { Col } from 'antd';
import React from 'react';
function Trebov(props) {
  const { treb } = props;
  const lst = treb.map((i,key) => {
    return (
      <span key={key}>{i}</span>
    )
  })
  return (
    <>
      <Col className='zagolovok' lg={10} md={10} xs={24}>
        <p>Требования для подачи заявления</p>
      </Col>
      <Col className='trebList' lg={14} md={14} xs={24}>
        {lst}
      </Col>
    </>
  );
}

export default Trebov;
