import { TailSpin } from "react-loader-spinner";
import "./LoaderProductList.css";

const LoaderProductList = () => {
  return (
    <div className="loader-product">
      <TailSpin
        height="180"
        width="180"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderProductList;
