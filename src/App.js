import React, { createRef, useState } from 'react'
import './App.css'
import FixedNav from './components/fixedNav'
import { Col, Layout, Row } from 'antd'
import TitleLogo from './components/titleLogo';
import Burger from './components/burger';
import BurgerStatus from './redux/context';
import OrderNav from './components/orderNav';
import OrderList from './components/orderList';
import Foot from './components/foot';
import { BrowserRouter as Router } from 'react-router-dom';
import Keys from './components/keys';
function App() {
  const [status, changeStatus] = useState(false);
  const { Header, Content, Footer } = Layout
  function changeStatusBurger() {
    changeStatus(!status);
  }
  const req = createRef();
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header>
            <BurgerStatus.Provider value={status}>
              <div className='fixedCombine'>
                <FixedNav changed={() => changeStatusBurger()} />
                <Burger />
              </div>
            </BurgerStatus.Provider>
            <TitleLogo />
          </Header>
          <Row justify='center'>
            <Col md={20} xs={22} lg={15}>
              <Content>
                {/* <Citata/> */}
                <OrderNav tst={req}/>
                <div id='here'></div>
                <OrderList  />
              </Content>
            </Col>
          </Row>
          <Footer >
            <Foot />
          </Footer>
          <Keys/>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
