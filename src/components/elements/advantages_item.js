
export function Advantages_item({ src, text, heading }) {
    return (
        <div>
            <div class="advantages_item wobble-hor-bottom">
                <img src={src} alt="advantages" />
                <div class="advantages_item_content">
                    <h3 class="advantages_item_heading">{heading}</h3>
                    <p class="advantages_item_text">{text}</p>
                </div>
            </div>
        </div>
    );
}