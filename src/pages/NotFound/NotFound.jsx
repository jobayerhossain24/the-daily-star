import img from "../../assets/notFound/404-error.avif";
import Navbar from "../Shared/Navbar/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar></Navbar>

      <img className="w-full " src={img} alt="" />
    </div>
  );
};

export default NotFound;
