
import "../../style/style-cart.css";
import { Header } from "../elements/header";
import { Footer } from "../elements/footer";
import { Link } from 'react-router-dom';

export function Cart({  }) {
    return (
        <div>
            <Header />
            <div class="top-head center">
                <h2 class="top-head_heading">SHOPPING CART</h2>

                <nav class="breadcrumbs">
                    <ul class="breadcrumbs__ul">
                        <li class="breadcrumbs__li"><Link to={'/'} class="breadcrumbs__link">HOME</Link></li>
                        <li class="breadcrumbs__li"><a href="#" class="breadcrumbs__link">SHOPPING CART</a></li>
                        {/* <li class="breadcrumbs__li"><a href="." class="breadcrumbs__link">NEW ARRIVALS</a></li>  */}
                    </ul>
                </nav>
            </div>

            <div class="cart_box center">
                <div class="cart_box_left">

                    <div class="cart_box_left_button">
                        <div class="clearCart">CLEAR SHOPPING CART</div>
                        <a href="./catalog.html">CONTINUE SHOPPING</a>
                    </div>
                </div>
                <div class="cart_box_right">

                    <form class="cart_box_right_adress" action="#">
                        <p>SHIPPING ADRESS</p>
                        <input type="text" placeholder="Bangladesh" />
                        <input type="text" placeholder="State" />
                        <input type="number" placeholder="Postcode / Zip" />
                        <button>GET A QUOTE</button>
                    </form>

                    <div class="cart_box_right_checkout">
                        <p class="cart_box_right_checkout_sub">SUB TOTAL $900</p>
                        <p class="cart_box_right_checkout_grand">GRAND TOTAL <span>$900</span></p>
                        <svg width="275" height="1" viewBox="0 0 275 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M275 0H0V1H275V0Z" fill="#E2E2E2" />
                        </svg>
                        <a class="cart_box_right_checkout_button" href="#">PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>

            <section class="subscribe">
                <article class="subscribe_info">
                    <img src="img/subscribe_info.png" alt="subscribe_info" />
                    <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span>a pulvinar purus condimentum“</span> </p>
                </article>
                <div class="subscribe_content">
                    <h3 class="subscribe_content_heading">SUBSCRIBE</h3>
                    <p class="subscribe_content_text">FOR OUR NEWLETTER AND PROMOTION</p>
                    <form class="subscribe_content_form" action="#">
                        <input class="subscribe_content_input" type="email" required placeholder="Enter Your Email" />
                        <button class="subscribe_content_button" type="submit">Subscribe</button>
                    </form>
                </div>
            </section>
            <Footer/>         
            
        </div>
    );
}