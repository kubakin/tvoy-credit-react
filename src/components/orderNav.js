import React from 'react';
import Menu from './menu';
function OrdersNav(props) {
  return (
    <div className="OrdersNav">
      <h2>Услуги</h2>
        <Menu tst={props.tst} typeButton='classicButton'/>
    </div>
  );
}

export default OrdersNav;
