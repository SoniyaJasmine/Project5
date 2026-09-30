import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./ProductDetails.css";

import blue1 from "../assets/Images/dusty-blue-wedding-invitation1_1_1.jpg";
import blue2 from "../assets/Images/blue.jpg";
import blue3 from "../assets/Images/blue1.jpg";
import blue4 from "../assets/Images/blue2.jpg";
import image2 from "../assets/Images/Ganesha_Invitation__Hindu_Wedding_Invitation___Indian_Wedding__sri_Lankan_Wedding___Tamil_Invitation__Lavender_Lilac_Purle_-_Etsy_UK-removebg-preview.png";
import image3 from "../assets/Images/download__13_-removebg-preview.png";
import image4 from "../assets/Images/download__14_-removebg-preview.png";
import image5 from "../assets/Images/Editable_Elegant_Indian_Wedding_Invitation__Indian_Wedding_Invite__Hindu_Wedding_Invitation_Template__Wedding_Invitation_and_Thank_You_Card-removebg-preview.png";
import image6 from "../assets/Images/download__10_-removebg-preview.png";
import image7 from "../assets/Images/scroll.jpg";
import image8 from "../assets/Images/Gate_fold_Indian_wedding_Invitation_in_light_brown_with_floral_motifs-removebg-preview.png";



function ProductDetails() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(2);
  const [selectedImage, setSelectedImage] = useState(
    blue1
  );

  const handleBuyNow = () => {
  const product = {
    id: "KN50054",
    name: "The Blue Wedding Cards",
    price: 72.25,
    image: selectedImage,
    sku: "KN50054",
  };

  addToCart(product, quantity);
  navigate("/checkout");
};

  const images = [
    blue1,
    blue2,
    blue3,
    blue4,
  ];

  const relatedCards = [
    {
      image: blue1,
      name: "The blue Wedding Cards",
      price: "72.25",
    },
    {
      image: image2,
      name: "Ganesha Wedding Cards",
      price: "25.25",
    },
    {
      image: image3,
      name: "Wedding Cards Favour Box",
      price: "39.45",
    },
    {
      image: image4,
      name: "Theme Wedding Cards",
      price: "30.00",
    },
    {
      image: image5,
      name: "Editable Wedding Cards",
      price: "35.55",
    },
    {
      image: image6,
      name: "Traditional Wedding Cards",
      price: "25.00",
    },
    {
      image: image7,
      name: "Royal Scroll Wedding Cards",
      price: "75.00",
    },
    {
      image: image8,
      name: "Gate Fold Wedding Cards",
      price: "43.20",
    },
  ];

  return (
    <main className="product-page">

      {/* =========================
          PRODUCT SECTION
      ========================= */}

      <section className="product-section">

        {/* LEFT IMAGE AREA */}

        <div className="product-images">

          <div className="thumbnail-list">

            {images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${
                  selectedImage === image ? "selected" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`Product ${index + 1}`} />
              </button>
            ))}

          </div>


          <div className="main-product-image">

            <img
              src={selectedImage}
              alt="Blue Wedding Card"
            />

          </div>

        </div>


        {/* RIGHT PRODUCT DETAILS */}

        <div className="detail-info">

          <div className="sku">
            SKU Code: KN50054
          </div>


          <p className="detail -price">
            <span>Rs. 72.25</span>{" "}
            per unit inclusive of all taxes
          </p>


          {/* QUANTITY */}

          <div className="quantity-row">

            <strong>QTY:</strong>

            <div className="quantity-box">

              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

          </div>


          {/* BUTTONS */}

          <div className="product-buttons">

            <button
              className="buy-button"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

            <button
              className="cart-button"
              onClick={() => {
                const product = {
                  id: "KN50054",
                  name: "The Blue Wedding Cards",
                  price: 72.25,
                  image: selectedImage,
                  sku: "KN50054",
                };

                addToCart(product, quantity);
                navigate("/cart");
              }}
            >
              Add to Cart
            </button>

          </div>


          {/* VARIANTS */}

          <h3 className="variant-heading">
            Variants
            <span>
              (Same size & material but different color/Theme)
            </span>
          </h3>

          <div className="variant-image">

            <img
              src={blue1}
              alt="Variant"
            />

          </div>

        </div>

      </section>


      {/* =========================
          DESCRIPTION
      ========================= */}

      <section className="product-information">

        <div className="description">

          <h2>DESCRIPTION:</h2>

          <p>
            The blue wedding card has embossed floral design
            with customized initial acrylic nameplate.
          </p>

          <p>
            This invitation card has holding insert and an
            envelope
          </p>


          <h2 className="comments-title">
            ADDITIONAL COMMENTS
          </h2>

          <p>
            Discounts are applied based on quantity at checkout
          </p>

        </div>


        {/* ADDITIONAL INFORMATION */}

        <div className="additional-info">

          <h2>ADDITIONAL INFORMATION</h2>

          <div className="info-items">

            <span>
              ↕ <b>Height:</b> 27.5 cms
            </span>

            <span>
              ↔ <b>Width:</b> 21 cms
            </span>

            <span>
              ♙ <b>Weight:</b> 110 grams
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          RELATED CARDS
      ========================= */}

      <section className="related-section">

        <h2>Related Cards</h2>

        <div className="related-grid">

          {relatedCards.map((card, index) => (

            <div
              className="related-card"
              key={index}
              onClick={() => navigate("/product-details")}
            >

              <div className="related-image">

                <img
                  src={card.image}
                  alt={card.name}
                />

                <button
                  className="related-heart"
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  ♡
                </button>

              </div>


              <div className="related-details">

                <h3>{card.name}</h3>

                <p>Rs. {card.price}</p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;