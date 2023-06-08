import { h_c, d_c } from "./css/ProductDetailHeading.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
const ProductDetailHeading = () => {
  return (
    <section>
      <div className={h_c}>
        <h4>Varsa yellow Basmati rice</h4>
        <p>
          26kg <BsFillCheckCircleFill />
        </p>
        <h4>₹730</h4>
      </div>

      <div className={d_c}>
        <h4>Description</h4>
        <p>
          Varsha Yellow Rice it is smooth, extra long and extra fine. It will be
          an important part of all quality rice recipes and on your platter to
          relish.
        </p>
      </div>
      <div className={d_c}>
        <h4>Disclaimer</h4>
        <p>
          Every effort is made to maintain accuracy of all information. However,
          actual product packaging and materials may contain more and/or
          different information. It is recommended not to solely rely on the
          information presented.
        </p>
      </div>
    </section>
  );
};

export default ProductDetailHeading;
