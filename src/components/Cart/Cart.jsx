import {useSelector, useDispatch} from "react-redux";
import { setActiveCategory } from "../../stores/Cart";

function Cart() {
    let dispatch = useDispatch();
    let cart = useSelector((state) => state.cart.items);
    let activeCategory = useSelector((state) => state.cart.activeCategory);
    let categories = useSelector((state) => state.categories.categories);
    let filteredItems = Object.values(cart).filter((item) => !activeCategory || item.category === activeCategory);

   return(
       <div>
           <ul style={{display: 'flex', listStyleType: 'none'}}>
               {categories.map((category) => (
                   <li key={category.id} onClick={() => dispatch(setActiveCategory(category.id))}
                       style={{margin: '0 10px'}}>
                       {category.name}
                   </li>
               ))}
           </ul>
           <ul>
               {filteredItems.map((item) => (
                   <li key={item.id}>
                       {item.title} -  Quantity {item.quantity}
                   </li>
               ))}
           </ul>
       </div>
   )
}

export default Cart;
