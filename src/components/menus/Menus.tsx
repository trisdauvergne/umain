import React, {
  useEffect,
  useState
} from 'react';
import './Menu.scss';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { IMenuItem } from '../../interfaces/MenuItem';
import { selectMenu } from '../redux/menuSlice';
import { addToCart } from '../redux/cartSlice';

const Menus = () => {
  const menu = useSelector(selectMenu);
  const [ itemsByCategory, setItemsByCategory ] = useState<IMenuItem[]>([]);
  const [ visibleDetails, setVisibleDetails ] = useState(false);
  const dispatch = useDispatch();

  const addItemToCart = (item: IMenuItem) => {
    dispatch(addToCart(item));
  };

  let newArr: string[] = [];

  menu.forEach((item) => {
    if (!newArr.includes(item.category)) {
      newArr.push(item.category);
    }
  });

  const filterType = (type: string) => {
    setVisibleDetails(false);
    let items: IMenuItem[];
    items = menu.filter(item => item.category === type);
    setItemsByCategory(items);
    setVisibleDetails(true);
  }
 
  if (menu && menu.length > 0) {
    return (
      <section className="menu">
        <div className="menu-categories">
          <h4>Categories</h4>
          {newArr.map((item, i: number) => (
            <button onClick={() => filterType(item)} key={i}>{item}</button>
          ))}
        </div>
        {visibleDetails && 
        <div className="menu-details">
          <h3 data-testid="menus-heading">Menu</h3>
          {itemsByCategory && itemsByCategory.map((item: IMenuItem, i: number) => (
            <div key={i}>
               <p>{item.name}, {item.price}</p>
              {item.topping && item.topping.map((item: string, i: number) => <li key={i}>{item}</li>)}
              <button onClick={() => addItemToCart(item)}>Add to cart</button>
            </div>
          ))}
        </div>
        }
      </section>
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