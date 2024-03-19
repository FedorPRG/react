
export function Discounts_item({ srcFront, srcBack, text, heading }) {
    return (
        <div>
            <div class="discounts_item">
                <a href="#" class="">
                    <img src={srcFront} alt="discounts_item1-1" class="discounts_item_img" />
                    <img src={srcBack} alt="discounts_item1-2" class="discounts_item_back" />
                    <div class="discounts_item_content">
                        <p class="discounts_item_text">{text}</p>
                        <p class="discounts_item_heading">{heading}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}