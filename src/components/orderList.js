import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import CardList from './cardList';
import CreditCard from './cards/creditCard';
import Dibet from './cards/dibet';
import Ipoteka from './cards/ipoteka';
import Kassa from './cards/kassa';
import Microzaim from './cards/microzaim';
import Potreb from './cards/potreb';
import Refinance from './cards/refinance';
import Zaim from './cards/zaim';
function OrderList() {
  const items = useSelector(state => state);
  // const {micro, cards, credit, dibet, ipoteka, kassa, refinance, zaim} = items;
  const { micro, credit, cards, dibet, zaim, ipoteka, refinance, kassa } = items;
  console.log(items)
  return (
    <div className="OrdersNav">
      <Switch>
        <Route path="/Микрозаймы">
          <h2>Микрозаймы</h2>
          <CardList className='pd-content' items={micro} El={Microzaim} />
        </Route>
        <Route path="/Потребительские кредиты">
          <h2>Потребительские кредиты</h2>
          <CardList className='pd-content' items={credit} El={Potreb} />
        </Route>
        <Route path="/Кредитные карты">
          <h2>Кредитные карты</h2>
          <CardList className='pd-content' items={cards} El={CreditCard} />
        </Route>
        <Route path="/Дебетовые карты">
          <h2>Дебетовые карты</h2>
          <CardList className='pd-content' items={dibet} El={Dibet} />
        </Route>
        <Route path="/Займы под залог">
          <h2>
            Займы под залог
          </h2>
          <CardList className='pd-content' items={zaim} El={Zaim} />
        </Route>
        <Route path="/Ипотека">
          <h2>
            Ипотека
          </h2>
          <CardList className='pd-content' items={ipoteka} El={Ipoteka} />
        </Route>
        <Route path="/Рефинансирование">
          <h2>Рефинансирование</h2>
          <CardList className='pd-content' items={refinance} El={Refinance} />
        </Route>
        <Route path="/Рассчётно-кассовое обслуживание">
          <h2>Рассчётно-кассовое обслуживание</h2>
          <CardList className='pd-content' items={kassa} El={Kassa} />
        </Route>
        <Redirect to="/Микрозаймы" />
      </Switch>
    </div>
  );
}

export default OrderList;
