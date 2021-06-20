import { Row, Col } from 'antd';
import React from 'react';
import Trebov from './trebov';
function Card(props) {
  const { i, El } = props;
  const { name, img, href, text, treb, docs, trebDoc } = i
  return (
    <div className='card'>
      <Row>
          <Col xl={0} xxl={0} lg={0} md={0} xs={{offset:1}} sm={24}>
            <h3>{name}</h3>
          </Col>
        </Row>
    <div className="headCard">
      <div className='logoButton'>
        
        <img src={window.location.origin +'/' + img} alt="" />
        <p>{text}</p>
        <a href={href} target="_blank" rel="noreferrer" className='classicButton yellow'>Оформить заявку</a>
      </div>
      <div className='ContentCard'>
        <Row>
          <Col offset={1} xl={24} xxl={24} lg={24} md={24} sm={0} xs={0}>
            <h3>{name}</h3>
          </Col>
        </Row>
        <El data={props.i} />
      </div>
     
    </div>
    <Row className='docs'>
      {(docs !== undefined)  ?  <Col offset={1} span={22}>
          <p>Документы: {docs}</p>
        </Col> : ''}
    </Row>
    <Row className='docs'>
      {(trebDoc !== undefined)  ?  <Col offset={1} span={22}>
          <p>Подтверждение дохода (1 документ на выбор): {trebDoc}</p>
        </Col> : ''}
    </Row>
    <Row className='treb'>
      {(treb !== undefined)  ? <Trebov treb={treb}/> : ''}
    </Row>
    </div>
  );
}

export default Card;
