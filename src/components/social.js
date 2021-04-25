import React from 'react'
import {Row, Col, Space} from 'antd'
import Vk from '../media/social/vk.png'
import Inst from '../media/social/inst.png'
import Tg from '../media/social/tg.png'
import VkMob from '../media/social/vkmob.png';
import InstMob from '../media/social/instmob.png';
import TgMob from '../media/social/tgmob.png';
function Social() {
  return (
    <div className="App">
      <Row className='social'>
        <Col sm={0} xs={0}  md={0} xl={24}>
      <img alt='Vk' src={Vk}></img>
      <img alt='Inst' src={Inst}></img>
      <img alt='Tg' src={Tg}></img>
      </Col>
      <Col xl={0}sm={24} xs={24} md={24}>
        <Space size={15}>
      <img alt='Vk' src={VkMob}></img>
      <img alt='Inst' src={InstMob}></img>
      <img alt='Tg' src={TgMob}></img>
      </Space>
      </Col>
      </Row>
    </div>
  );
}

export default Social;
