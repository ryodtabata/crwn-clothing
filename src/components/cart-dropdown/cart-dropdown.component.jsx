import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {/* Cart items will be rendered here */}
            </div>
            <Button className='checkout-button'>CHECKOUT</Button>

        </div>
    )};

    export default CartDropdown;