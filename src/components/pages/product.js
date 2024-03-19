import "../../style/style-product.css";
import { Header } from "../elements/header";
import { Footer } from "../elements/footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product_item } from "../elements/product_item";
import React, { useState } from "react";

export function Product({}) {
  const { id } = useParams();
  const products = useSelector((state) => state.products.array).slice(0, 3);
  const product = useSelector((state) => state.products.array).filter(
    (item) => item.id === id.split(":")[1]
  )[0];
  const imgsSlider = [product.img1, product.img2, product.img3];
  const [i, setI] = useState(0);
  function nextSliderLeft() {
    if (i === 0) {
      setI(2);
      return;
    }
    setI(i - 1);
  }
  function nextSliderRight() {
    if (i === 2) {
      setI(0);
      return;
    }
    setI(i + 1);
  }
  return (
    <div>
      <Header />
      <div class="top-head center">
        <h2 class="top-head_heading">NEW ARRIVALS </h2>
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__ul">
            <li class="breadcrumbs__li">
              <Link to={"/"} class="breadcrumbs__link">
                HOME
              </Link>
            </li>
            <li class="breadcrumbs__li">
              <Link to={"/catalog"} class="breadcrumbs__link">
                MEN
              </Link>
            </li>
            <li class="breadcrumbs__li">
              <Link to={"/catalog"} class="breadcrumbs__link">
                NEW ARRIVALS
              </Link>
            </li>
            <li class="breadcrumbs__li">
              <a href="#" class="breadcrumbs__link">
                PRODUCT
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="slider center">
        <div onClick={nextSliderLeft} class="slider_arrow leftArrow">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
              fill="black"
            />
          </svg>
        </div>

        <img class="slider_img" src={imgsSlider[i]} alt={imgsSlider[i]}></img>

        <div onClick={nextSliderRight} class="slider_arrow rightArrow">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <section class="content">
        <p class="content_title">{product.gender} COLLECTION</p>
        <svg
          width="63"
          height="4"
          viewBox="0 0 63 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M63 0.786865H0V3.81225H63V0.786865Z" fill="#EF5B70" />
        </svg>
        <p class="content_heading">{product.name}</p>
        <p class="content_text">{product.textProduct}</p>
        <p class="content_price">{product.price}</p>
        <svg
          class="line"
          width="642"
          height="2"
          viewBox="0 0 642 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 1.49829H641.5H0.5Z"
            stroke="#EAEAEA"
            stroke-linejoin="round"
          />
        </svg>
        <div class="sort_prod">
          <details class="sort_prod_details">
            <summary class="sort_prod_summary">
              <span class="sort_prod_heading">CHOOSE COLOR</span>
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81724 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214V5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
          </details>

          <details class="sort_prod_details">
            <summary class="sort_prod_summary">
              <span class="sort_prod_heading">CHOOSE SIZE</span>
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81724 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214V5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
            <div class="sort_prod_box">
              <div class="sort_prod_check">
                <input
                  class="sort_prod_checkbox"
                  id="sort_prod_check1"
                  type="checkbox"
                />
                <label for="sort_prod_check1">XS</label>
              </div>
              <div class="sort_prod_check">
                <input
                  class="sort_prod_checkbox"
                  id="sort_prod_check2"
                  type="checkbox"
                />
                <label for="sort_prod_check2">S</label>
              </div>
              <div class="sort_prod_check">
                <input
                  class="sort_prod_checkbox"
                  id="sort_prod_check3"
                  type="checkbox"
                />
                <label for="sort_prod_check3">M</label>
              </div>
              <div class="sort_prod_check">
                <input
                  class="sort_prod_checkbox"
                  id="sort_prod_check4"
                  type="checkbox"
                />
                <label for="sort_prod_check4">L</label>
              </div>
            </div>
          </details>

          <details class="sort_prod_details">
            <summary class="sort_prod_summary">
              <span class="sort_prod_heading">QUANTITY</span>
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81724 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214V5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
          </details>
        </div>

        <div class="content_add_to_cart buy">
          <svg
            width="27"
            height="25"
            viewBox="0 0 27 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38956 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z"
              fill="#EF5B70"
            />
          </svg>
          <p class="content_add_to_cart_text">Add to Cart</p>
        </div>
      </section>

      <section class="product-box center">
        <div class="product-box__container">
          <div class="catalogSlider">
            {products.map((item) => (
              <Product_item
                id={item.id}
                src={item.img}
                srcHover={"/img/product-box_hover.png"}
                name={item.name}
                text={item.text}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section class="subscribe">
        <article class="subscribe_info">
          <img src="img/subscribe_info.png" alt="subscribe_info" />
          <p>
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,{" "}
            <span>a pulvinar purus condimentum“</span>{" "}
          </p>
        </article>
        <div class="subscribe_content">
          <h3 class="subscribe_content_heading">SUBSCRIBE</h3>
          <p class="subscribe_content_text">FOR OUR NEWLETTER AND PROMOTION</p>
          <form class="subscribe_content_form" action="#">
            <input
              class="subscribe_content_input"
              type="email"
              required
              placeholder="Enter Your Email"
            />
            <button class="subscribe_content_button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
