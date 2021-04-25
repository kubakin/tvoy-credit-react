import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
function Menu(props) {
  const menuItems = useSelector(state=>state.menuItems);
  const menu = menuItems.map(item=>{
    return (
      <div >
      {/* <a  href="/qwe">{item}</a> */}
      <NavLink activeClassName={'active'} className={'menuItem '+ props.typeButton} to={'/'+item}>{item}</NavLink>
      </div>
    )
  })
  return (
    <div className="Menu">
      {menu}

    </div>
  );
}

export default Menu;
