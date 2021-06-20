import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link as Lnk } from "react-scroll";
function Menu(props) {
  const menuItems = useSelector(state=>state.menuItems);
  const menu = menuItems.map((item, key)=>{
    let s = item.replace(/[\s, -]/g, '');
    return (
      <div >
      {/* <a  href="/qwe">{item}</a> */}
      <Lnk to='offers' key={key} smooth={true}><NavLink key={key}   activeClassName={'active'} className={'menuItem '+ props.typeButton} to={'/'+s}>{item}</NavLink></Lnk>
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
