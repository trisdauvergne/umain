import React, {
  useState
} from 'react';
import './menus.scss';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { IMenuItem } from '../../interfaces/MenuItem';
import {
  selectMenu,
  selectVisibility,
  selectDetailsVisibility,
  changeMenuDetailVisibility
} from '../../redux/menuSlice';
import {
  selectRestaurant,
  selectRestaurantId
} from '../../redux/restaurantSlice';
import { addToCart } from '../../redux/cartSlice';

const Menus = () => {
  const menu = useSelector(selectMenu);
  const visibleMenu = useSelector(selectVisibility);
  const visibleDetails = useSelector(selectDetailsVisibility);
  const restaurantName = useSelector(selectRestaurant);
  const restaurantId = useSelector(selectRestaurantId)
  const dispatch = useDispatch();
  
  const [ itemsByCategory, setItemsByCategory ] = useState<IMenuItem[]>([]);
  const [ itemCategory, setItemCategory ] = useState('');

  const addItemToCart = (item: IMenuItem) => {
    let itemWithId = {
      ...item,
      restaurantId
    };
    dispatch(addToCart(itemWithId));
  };

  let categoryArr: string[] = [];

  menu.forEach((item) => {
    if (!categoryArr.includes(item.category)) {
      categoryArr.push(item.category);
    }
  });

  const filterType = (type: string) => {
    dispatch(changeMenuDetailVisibility(false));
    setItemCategory(type);
    let items: IMenuItem[];
    items = menu.filter(item => item.category === type);
    setItemsByCategory(items);
    dispatch(changeMenuDetailVisibility(true));
  }
 
  if (menu && menu.length > 0) {
    return (
      <section className='menu'>
        <h2 data-testid='menu-heading' className='section-heading'>{restaurantName}'s menu</h2>
        <div className='menu-container'>
          {visibleMenu && <div data-testid='menu-categories' className='menu-categories'>
            {categoryArr.map((item, i: number) => (
              <button onClick={() => filterType(item)} key={i}>{item}</button>
            ))}
          </div>}
          <div data-testid='menu-details' className='menu-details'>
            {visibleDetails && <h4>{itemCategory}</h4>}
            {visibleDetails && itemsByCategory && itemsByCategory.map((item: IMenuItem, i: number) => (
              <div key={i}>
                <p>{item.name}, {item.price}sek</p>
                {item.topping && item.topping.map((item: string, i: number) => <li key={i}>{item}</li>)}
                <button onClick={() => addItemToCart(item)}>Add {item.name} to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className='menu'>
        <h2 className='section-heading grey'>Menus will show here...</h2>
      </section>
    )
  }
}

export default Menus;