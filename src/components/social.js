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
        <a target="_blank" rel="noreferrer" href="https://vk.com/tvoy_credit"><img alt='Vk' src={Vk}></img></a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tvoy.credit/"><img alt='Inst' src={Inst}></img></a>
      <a target="_blank" rel="noreferrer" href="https://t.me/tvoy_credit"><img alt='Tg' src={Tg}></img></a>
      </Col>
      <Col xl={0}sm={24} xs={24} md={24}>
        <Space size={15}>
      <a target="_blank" rel="noreferrer" href="https://vk.com/tvoy_credit"><img alt='Vk' src={VkMob}></img></a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tvoy.credit/"><img alt='Inst' src={InstMob}></img></a>
      <a target="_blank" rel="noreferrer" href="https://t.me/tvoy_credit"><img alt='Tg' src={TgMob}></img></a>
      </Space>
      </Col>
      </Row>
    </div>
  );
}

export default Social;
