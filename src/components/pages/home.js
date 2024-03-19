import "../../style/home.css";
import { Discounts_item } from "../elements/discounts_item";
import { Footer } from "../elements/footer";
import { Header } from "../elements/header";
import { Link } from "react-router-dom";
import { Product_item } from "../elements/product_item";
import { Advantages_item } from "../elements/advantages_item";
import { useSelector } from "react-redux";

export function Home({}) {
  const discounts = useSelector((state) => state.discounts.array);
  const products = useSelector((state) => state.products.array).slice(0, 6);
  return (
    <div>
      <Header />
      <div class="title_site">
        <img src="img/title_site.png" alt="title_site" class="img_title_site" />
        <div class="title_site_box">
          <div class="title_site_content">
            <div class="title_site_content_header">THE BRAND</div>
            <div class="title_site_content_text_box">
              <div class="title_site_content_text_black">OF LUXERIOUS</div>
              <div class="title_site_content_text_pink">FASHION</div>
            </div>
          </div>
        </div>
      </div>
      <div class="discounts center">
        {discounts.map((item) => (
          <Discounts_item
            srcFront={item.srcFront}
            srcBack={item.srcBack}
            text={item.text}
            heading={item.heading}
          />
        ))}

        <div class="discounts_item discounts_item_big">
          <a href="#">
            <img
              src="img/discounts_item4-1.jpg"
              alt="discounts_item1-1"
              class="discounts_item_img_big"
            />
            <img
              src="img/discounts_item4-2.png"
              alt="discounts_item1-2"
              class="discounts_item_back_big"
            />
            <div class="discounts_item_content">
              <p class="discounts_item_text">LUXIROUS & TRENDY</p>
              <p class="discounts_item_heading">ACCESORIES</p>
            </div>
          </a>
        </div>
      </div>
      <section class="product-box center">
        <h3 class="product-box_title">Fetured Items</h3>
        <p class="product-box_text">
          Shop for items based on what we featured in this week
        </p>
        <div class="product-box__container">
          <div class="catalogSlider">
            {products.map((item) => (
              <Product_item
                id={item.id}
                src={item.img}
                srcHover={"img/product-box_hover.png"}
                name={item.name}
                text={item.text}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>
      <div class="button_browse_all_product">
        <Link to={"/catalog"} class="button_browse_all_product_link">
          Browse All Product
        </Link>
      </div>
      <section class="advantages">
        <Advantages_item
          src={"img/advantages_item1.svg"}
          text="Worldwide delivery on all. Authorit tively morph
                            next-&nbsp;generation innov tion with extensive models."
          heading="Free Delivery"
        />
        <Advantages_item
          src={"img/advantages_item2.svg"}
          text="Worldwide delivery on all. Authorit tively morph
                            next-&nbsp;generation innov tion with extensive models."
          heading="Sales & discounts"
        />
        <Advantages_item
          src={"img/advantages_item3.svg"}
          text="Worldwide delivery on all. Authorit tively morph
                            next-&nbsp;generation innov tion with extensive models."
          heading="Quality assurance"
        />
      </section>
      <section class="subscribe">
        <article class="subscribe_info">
          <img src="img/subscribe_info.png" alt="subscribe_info" />
          <p>
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,{" "}
            <span>a pulvinar purus condimentum“</span>
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
