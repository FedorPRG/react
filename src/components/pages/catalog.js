import "../../style/style-catalog.css";
import { Header } from "../elements/header";
import { Footer } from "../elements/footer";
import { Link } from "react-router-dom";
import { Product_item } from "../elements/product_item";
import { useDispatch, useSelector } from "react-redux";
import { openCatalog } from "../../reducers/catalog_reducer";
import { filtrCatalog } from "../../reducers/catalog_reducer";
import React, { useEffect } from "react";

export function Catalog({}) {
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(openCatalog())},[])
  const productsForCatalog = useSelector(
    (state) => state.productsForCatalog.arrayFilter
  );
  function selectSize(e, size) {
    dispatch(
      filtrCatalog({
        e,
        size,
      })
    );
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
              <a to={"/"} href="#" class="breadcrumbs__link">
                NEW ARRIVALS
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="start" class="filter-sort center">
        <details class="filter">
          <summary class="filter_summary">
            <span class="filter_heading">FILTER</span>
            <svg
              class="filter_svgSmoll"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                fill="black"
              />
            </svg>

            <svg
              class="filter_svgBig"
              width="38"
              height="25"
              viewBox="0 0 38 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.08333 25H10.4167C11.5625 25 12.5 24.0625 12.5 22.9167C12.5 21.7708 11.5625 20.8333 10.4167 20.8333H2.08333C0.9375 20.8333 0 21.7708 0 22.9167C0 24.0625 0.9375 25 2.08333 25ZM0 2.08333C0 3.22917 0.9375 4.16667 2.08333 4.16667H35.4167C36.5625 4.16667 37.5 3.22917 37.5 2.08333C37.5 0.9375 36.5625 0 35.4167 0H2.08333C0.9375 0 0 0.9375 0 2.08333ZM2.08333 14.5833H22.9167C24.0625 14.5833 25 13.6458 25 12.5C25 11.3542 24.0625 10.4167 22.9167 10.4167H2.08333C0.9375 10.4167 0 11.3542 0 12.5C0 13.6458 0.9375 14.5833 2.08333 14.5833Z"
                fill="black"
              />
            </svg>
          </summary>
          <div class="filter_content">
            <details open class="filter_item">
              <summary class="filter_head">CATEGORY</summary>
              <div class="filter_link-box">
                <a href="#" class="filter_link">
                  Accessories
                </a>
                <a href="#" class="filter_link">
                  Bags
                </a>
                <a href="#" class="filter_link">
                  Denim
                </a>
                <a href="#" class="filter_link">
                  Hoodies & Sweatshirts
                </a>
                <a href="#" class="filter_link">
                  Jackets & Coats
                </a>
                <a href="#" class="filter_link">
                  Polos
                </a>
                <a href="#" class="filter_link">
                  Shirts
                </a>
                <a href="#" class="filter_link">
                  Shoes
                </a>
                <a href="#" class="filter_link">
                  Sweaters & Knits
                </a>
                <a href="#" class="filter_link">
                  T-Shirts
                </a>
                <a href="#" class="filter_link">
                  Tanks
                </a>
              </div>
            </details>

            <details class="filter_item">
              <summary class="filter_head">BRAND</summary>
              <div class="filter_link-box">
                <a href="" class="filter_link">
                  Accessories
                </a>
                <a href="" class="filter_link">
                  Bags
                </a>
                <a href="" class="filter_link">
                  Denim
                </a>
                <a href="" class="filter_link">
                  Hoodies & Sweatshirts
                </a>
                <a href="" class="filter_link">
                  Jackets & Coats
                </a>
                <a href="" class="filter_link">
                  Polos
                </a>
                <a href="" class="filter_link">
                  Shirts
                </a>
                <a href="" class="filter_link">
                  Shoes
                </a>
                <a href="" class="filter_link">
                  Sweaters & Knits
                </a>
                <a href="" class="filter_link">
                  T-Shirts
                </a>
                <a href="" class="filter_link">
                  Tanks
                </a>
              </div>
            </details>

            <details class="filter_item">
              <summary class="filter_head">DESIGNER</summary>
              <div class="filter_link-box">
                <a href="" class="filter_link">
                  Accessories
                </a>
                <a href="" class="filter_link">
                  Bags
                </a>
                <a href="" class="filter_link">
                  Denim
                </a>
                <a href="" class="filter_link">
                  Hoodies & Sweatshirts
                </a>
                <a href="" class="filter_link">
                  Jackets & Coats
                </a>
                <a href="" class="filter_link">
                  Polos
                </a>
                <a href="" class="filter_link">
                  Shirts
                </a>
                <a href="" class="filter_link">
                  Shoes
                </a>
                <a href="" class="filter_link">
                  Sweaters & Knits
                </a>
                <a href="" class="filter_link">
                  T-Shirts
                </a>
                <a href="" class="filter_link">
                  Tanks
                </a>
              </div>
            </details>
          </div>
        </details>

        <div class="sort">
          <details class="sort_details">
            <summary class="sort_summary">
              <span class="sort_heading">TRENDING&nbsp;NOW</span>
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

          <details class="sort_details">
            <summary class="sort_summary">
              <span class="sort_heading">SIZE </span>
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
            <div class="sort_box">
              <div class="sort_check">
                <input
                  onChange={(e) => selectSize(e.target.checked, "XS")}
                  class="sort_checkbox"
                  id="sort_check1"
                  type="checkbox"
                />
                <label for="sort_check1">XS</label>
              </div>
              <div class="sort_check">
                <input
                  onChange={(e) => selectSize(e.target.checked, "S")}
                  class="sort_checkbox"
                  id="sort_check2"
                  type="checkbox"
                />
                <label for="sort_check2">S</label>
              </div>
              <div class="sort_check">
                <input
                  onChange={(e) => selectSize(e.target.checked, "M")}
                  class="sort_checkbox"
                  id="sort_check3"
                  type="checkbox"
                />
                <label for="sort_check3">M</label>
              </div>
              <div class="sort_check">
                <input
                  onChange={(e) => selectSize(e.target.checked, "L")}
                  class="sort_checkbox"
                  id="sort_check4"
                  type="checkbox"
                />
                <label for="sort_check4">L</label>
              </div>
            </div>
          </details>

          <details class="sort_details">
            <summary class="sort_summary">
              <span class="sort_heading">PRICE</span>
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
      </div>

      <section class="product-box center">
        <div class="product-box__container">
          <div class="catalogSlider">
            {productsForCatalog.map((item) => (
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

      <div class="box-page">
        <div class="box-page_content">
          <div href="#start" class="leftArrow">
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="pageSliderBox"></div>
          <div href="#start" class="rightArrow">
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <section class="advantages">
        <div class="advantages_item wobble-hor-bottom">
          <img src="img/advantages_item1.svg" alt="advantages_item1" />
          <div class="advantages_item_content">
            <h3 class="advantages_item_heading">Free Delivery</h3>
            <p class="advantages_item_text">
              Worldwide delivery on all. Authorit tively morph
              next-&nbsp;generation innov tion with extensive models.
            </p>
          </div>
        </div>
        <div class="advantages_item wobble-hor-bottom">
          <img src="img/advantages_item2.svg" alt="advantages_item2" />
          <div class="advantages_item_content">
            <h3 class="advantages_item_heading">Sales & discounts</h3>
            <p class="advantages_item_text">
              Worldwide delivery on all. Authorit tively morph
              next-&nbsp;generation innov tion with extensive models.
            </p>
          </div>
        </div>
        <div class="advantages_item wobble-hor-bottom">
          <img src="img/advantages_item3.svg" alt="advantages_item3" />
          <div class="advantages_item_content">
            <h3 class="advantages_item_heading">Quality assurance</h3>
            <p class="advantages_item_text">
              Worldwide delivery on all. Authorit tively morph
              next-&nbsp;generation innov tion with extensive models.
            </p>
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
