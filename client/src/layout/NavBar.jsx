import { FaAngleDown, FaSearch } from "react-icons/fa";
import Logo from "../images/LOGO.png";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  const hover = "hover:text-groon transitions text-black";
  const Hover = ({ isActive }) => (isActive ? "text-groon" : hover);
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center p-8">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="flex justify-between  gap-28">
          <div className="flex  gap-2   w-96  h-10 rounded border-[#86CCFF]  border">
            <input
              type="text"
              className=" bg-transparent     w-full outline-none px-2"
            />
            <div className="flex items-center w-16 justify-center   rounded-s-[4px]    bg-[#5DBBFF]">
              {/* <span className="text-white">Search</span> */}
              <FaSearch className="text-white" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-10">
            <NavLink to="/SignIn" className={Hover}>
              Sign In
            </NavLink>
            <NavLink to="/Favorite" className={Hover}>
              My favorites
            </NavLink>
            <NavLink to="/Cart" className={Hover}>
              Cart
            </NavLink>
            <div
              className={Hover}
              style={{ display: "flex", gap: "2px", alignItems: "center" }}
            >
              <span>English</span>
              <FaAngleDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
