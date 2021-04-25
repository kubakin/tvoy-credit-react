import React, { useContext } from 'react';
import {Col, Row} from 'antd';
import Logo from '../media/logo4.png';
import Social from './social';
import Menu from './menu';
import Burger from '../media/burger.png';
import BurgerStatus from '../redux/context';
import Close from '../media/close.png'
function FixedNav(props) {
  const status = useContext(BurgerStatus);
  let icon = Burger
  if(status) {
    icon = Close;
  }
  else {
    icon = Burger;
  }
  return (
    <div className="fixedNav">
      <Row justify='space-between'>
        <Col offset={2} xl={1} xs={1} lg={1} className='logo'><img alt='Logo' src={Logo}></img></Col>
          <Col sm={0} xs={0}  md={0} xl={16}>
              <Menu/>
          </Col>
          <Col onClick={()=>props.changed()} className='burgerIcon' lg={2}  xs={8} xl={0}  md={3}><img  src={icon} alt="Burger icon"/></Col>
        <Col sm={0} xs={0} md={0} xl={3}><Social></Social></Col>
      </Row>
    </div>
  );
}

export default FixedNav;
