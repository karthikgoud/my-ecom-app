import { Dna } from "react-loader-spinner";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <Dna
        visible={true}
        height="100vh"
        width="100vw"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
