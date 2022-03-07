import React from 'react'
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { IMenuItem } from '../../interfaces/MenuItem';
import { selectMenu } from '../redux/menuSlice';
import { addToCart } from '../redux/cartSlice';

const Menus = () => {
  const menu = useSelector(selectMenu);
  const dispatch = useDispatch();

  const addItemToCart = (item: IMenuItem) => {
    dispatch(addToCart(item));
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

export default Menus;