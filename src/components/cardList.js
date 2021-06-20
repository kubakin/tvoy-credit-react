import React from 'react';
import Card from './cards/card';
function CardList(props) {
  const {El,items} = props;
  // const items = useSelector(state=>state.micro);
  const lst = items.map((i,key)=> {
    return (
    <Card El={El} key={key} i={i}/>
    )
  })
  return (
    <div className="cardlist">
      {lst}
    </div>
  );
}

export default CardList;
