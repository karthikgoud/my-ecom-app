import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { NavLink, useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { useCart } from "../../context/CartContext";
import { useWish } from "../../context/WishContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../../context/DataContext";

const ProductDetails = () => {
  const { productId } = useParams();
  // console.log(productId);
  const { addToCart } = useCart();
  const { addWish } = useWish();
  const {
    productState: { data },
  } = useData();

  const [singleProduct, setSingleProduct] = useState({});
  const [singlePageLoader, setSinglePageLoader] = useState(true);

  const gettingDetailByProductId = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      // console.log(data);
      setSingleProduct(data.product);
      setSinglePageLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingDetailByProductId();
  }, [productId]);

  const productObj = data.find((item) => item._id === productId);

  console.log("state", productObj);

  return (
    <div className="single-page">
      {singlePageLoader ? (
        <Circles
          height="150"
          width="150"
          color="#2C3E50"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <div id="product-page">
          <NavLink to="/product">
            <h3>
              {" "}
              <FontAwesomeIcon icon={faAnglesLeft} /> Back
            </h3>
          </NavLink>
          <div className="product-details-cont">
            <div className="img-cont">
              <img
                className="product-img"
                src={singleProduct?.image}
                alt="product name"
              />
            </div>
            <div className="info-cont">
              <div className="title-cont">
                <h1>{singleProduct?.title}</h1>
              </div>
              <div className="price-discount-cont">
                <div className="price-cont">
                  <h3 className="discounted-price">
                    ₹{singleProduct?.disCountedPrice}
                  </h3>
                  <h3 className="actual-price">₹{singleProduct?.price}</h3>
                </div>
                <div className="discount">{singleProduct?.discount} OFF</div>
              </div>
              <div className="product-info-cont">
                <p>
                  <span className="details-bold">Availability</span>:{" "}
                  {singleProduct?.availability}
                </p>
                <p>
                  <span className="details-bold">Description</span>:{" "}
                  {singleProduct?.description}
                </p>
                <p>
                  <span className="details-bold">Size</span>:{" "}
                  {singleProduct?.size}
                </p>
                <p>
                  <span className="details-bold">Delivery</span>:{" "}
                  {singleProduct?.delivery}
                </p>
              </div>
              <div className="btn-cont">
                <button
                  className="single-card-btn"
                  onClick={() => addWish(singleProduct)}
                  disabled={productObj.isWished}
                >
                  Add to WishList
                </button>
                <button
                  className="single-card-btn"
                  onClick={() => addToCart(singleProduct)}
                  disabled={productObj.isCarted}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
