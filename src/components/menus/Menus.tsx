import React, {
  useState
} from 'react';
import './menus.scss';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { IMenuItem } from '../../interfaces/MenuItem';
import { selectMenu } from '../../redux/menuSlice';
import { selectRestaurant } from '../../redux/restaurantSlice';
import { addToCart } from '../../redux/cartSlice';

const Menus = () => {
  const menu = useSelector(selectMenu);
  const restaurantName = useSelector(selectRestaurant);
  const [ itemsByCategory, setItemsByCategory ] = useState<IMenuItem[]>([]);
  const [ itemCategory, setItemCategory ] = useState('');
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
    setItemCategory(type);
    let items: IMenuItem[];
    items = menu.filter(item => item.category === type);
    setItemsByCategory(items);
    setVisibleDetails(true);
  }
 
  if (menu && menu.length > 0) {
    return (
      <section className='menu'>
        <h2 className='section-heading'>{restaurantName}'s menu</h2>
        <div className='menu-container'>
          <div className='menu-categories'>
            {newArr.map((item, i: number) => (
              <button onClick={() => filterType(item)} key={i}>{item}</button>
            ))}
          </div>
          <div className='menu-details'>
            <h4>{itemCategory}</h4>
            {visibleDetails && itemsByCategory && itemsByCategory.map((item: IMenuItem, i: number) => (
              <div key={i}>
                <p>{item.name}, {item.price}</p>
                {item.topping && item.topping.map((item: string, i: number) => <li key={i}>{item}</li>)}
                <button onClick={() => addItemToCart(item)}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className='menu'>
        {/* <h2 className='section-heading'>Click on a restaurant to see its menu...</h2> */}
      </section>
    )
  }
}

export default Menus;