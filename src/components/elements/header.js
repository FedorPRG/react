import "../../style/home.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export function Header({}) {
  const [flag, setFlag] = useState(false);

  function openCloseNavMenu() {
    setFlag(!flag);
  }

  return (
    <div>
      <header class="header center">
        <div class="header_left">
          <Link to={"/"}>
            <img src="/img/icon_logo.svg" alt="icon_logo" />
          </Link>
          <Link href="#">
            <img src="/img/search.svg" alt="search" />
          </Link>
        </div>
        <div class="header_right ">
          <div class="nav_menu">
            <input type="checkbox" id="check" />
            <label for="check">
              <img
                class="nav_menu_img"
                src="/img/nav_menu.svg"
                alt="nav_menu"
                onClick={openCloseNavMenu}
              />
            </label>
            <div
              class="nav_menu_box"
              style={{ display: flag ? "block" : "none" }}
            >
              <div class="nav_menu_box_title">MENU</div>
              <Link class="nav_menu_box_heading" to={"/catalog"}>
                MAN
              </Link>
              <div class="nav_menu_box_links">
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  {" "}
                  Accessories
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  {" "}
                  Bags
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  Denim{" "}
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  T-Shirts{" "}
                </Link>
              </div>
              <Link class="nav_menu_box_heading" to={"/catalog"}>
                WOMAN
              </Link>
              <div class="nav_menu_box_links">
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  {" "}
                  Accessories
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  {" "}
                  Jackets&nbsp;&&nbsp;Coats
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  {" "}
                  Polos
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  T-Shirts{" "}
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  Shirts{" "}
                </Link>
              </div>
              <Link class="nav_menu_box_heading" to={"/catalog"}>
                KIDS
              </Link>
              <div class="nav_menu_box_links">
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  Accessories
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  {" "}
                  Jackets&nbsp;&&nbsp;Coats
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  {" "}
                  Polos
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  T-Shirts{" "}
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  Shirts{" "}
                </Link>
                <Link class="nav_menu_box_links_item" to={"/catalog"}>
                  {" "}
                  Bags
                </Link>
              </div>
            </div>
          </div>
          <Link to={"/registration"} class="personal">
            <img src="/img/personal.svg" alt="personal" />
          </Link>
          <Link to={"/cart"} class="cart item_in_cart">
            <img src="/img/cart.svg" alt="cart" />
          </Link>
        </div>
      </header>
    </div>
  );
}
