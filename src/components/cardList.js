import React from 'react';
import Card from './cards/card';
function CardList(props) {
  const {El,items} = props;
  console.log(items)
  // const items = useSelector(state=>state.micro);
  const lst = items.map(i=> {
    return (
    <Card El={El} i={i}/>
    )
  })
  return (
    <div className="cardlist">
      {lst}
    </div>
  );
}

export default CardList;
