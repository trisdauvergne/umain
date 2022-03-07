import React from 'react'
import { useSelector } from 'react-redux';
import { IMenuItem } from '../../interfaces/MenuItem';
import { selectMenu } from '../redux/menuSlice';

const Menus = () => {
  const menu = useSelector(selectMenu);

  const addItemToCart = (item: IMenuItem) => {
    console.log(item);
  }
  
  if (menu && menu.length > 0) {
    return (
      <div>
        <h3 data-testid="menus-heading">Menu</h3>
        {menu.map((item: IMenuItem, i: number) => (
          <div key={i}>
            <p>{item.name}, {item.price}</p>
            {item.topping && item.topping.map((item: string, i: number) => <li key={i}>{item}</li>)}
            <button onClick={() => addItemToCart(item)}>Add to cart</button>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <h3>No menus yet</h3>
      </div>
    )
  }
}

export default Menus