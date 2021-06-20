import { Col, Row } from 'antd';
import React, { useContext } from 'react';
import BurgerStatus from '../redux/context';
import Menu from './menu';
import Social from '../components/social';
function Burger() {
    const status = useContext(BurgerStatus);
    let cls = ''
    if(status) {
        cls = 'visible';
    }
    else {
        cls = 'not-visible'
    }
        return (
            <>
            <Row>
                <Col offset={12} className={"Burger "+cls}>
            <Menu/>
      <Social/>

            <div className='svyaz'>
            <p> Корпоративная почта</p>
            <p className='mail'>tvoy.credit.feedback@gmail.com</p>
            </div>
          </Col>
          </Row>
          </>
        );
    }
  


export default Burger;
