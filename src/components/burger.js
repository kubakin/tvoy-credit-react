import { Col, Row } from 'antd';
import React, { useContext } from 'react';
import BurgerStatus from '../redux/context';
import Menu from './menu';
import Social from '../components/social';
function Burger() {
    const status = useContext(BurgerStatus);
    if(status) {
        return (
            <>
            <Row>
                <Col offset={12} className="Burger">
            <Menu/>
      <Social/>

            <div className='svyaz'>
            <p> Корпоративная почта</p>
            <p class='mail'>po4ta@yandex.ru</p>
            </div>
          </Col>
          </Row>
          </>
        );
    }
    else {
        return (
            <>
            </>
        )
    }
  
}

export default Burger;
