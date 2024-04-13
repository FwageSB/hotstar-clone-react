import "./Menubar.css";
import { CiUser , CiHome , CiSearch ,  CiBasketball} from "react-icons/ci";
import { PiTelevisionSimpleLight } from "react-icons/pi"
import { GoDeviceCameraVideo } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

function Menubar() {
  return (
    <div className="menubar">
      <div className="menubar_top">
        <Link to="/">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/v1656431456/web-images/logo-d-plus.svg"
            alt=""
            className="menubar_logo"
          />
        </Link>
        <h3>Subscribe {`>`}</h3>
      </div>
      <div className="menubar_option">
        <CiUser className="option" />
        <CiSearch className="option" />
        <Link to="/home">
          <CiHome className="option" />
        </Link>
        <PiTelevisionSimpleLight className="option" />
        <GoDeviceCameraVideo className="option" />
        <CiBasketball className="option" />
        <BiCategory className="option" />
      </div>
    </div>
  );
}

export default Menubar;
