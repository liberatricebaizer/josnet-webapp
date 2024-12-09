import { useState, useEffect } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import Logo from "../images/LOGO.png";
import { Link, NavLink } from "react-router-dom";
import { Loader2 } from "lucide-react";
import styles from "../styles/styles";
import { categoriesData, productData } from "../static/data";

import { getCountries } from "./api";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
// import DropDown from "./DropDown";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import { FaMessage } from "react-icons/fa6";

const languages = {
  en: {
    signIn: "Sign In",
    favorites: "My favorites",
    cart: "Cart",
    placeholder: "Search products...",
    noResults: "No results found for",
    loading: "Searching...",
  },
  fr: {
    signIn: "Se connecter",
    favorites: "Mes favoris",
    cart: "Panier",
    placeholder: "Rechercher des produits...",
    noResults: "Aucun résultat trouvé pour",
    loading: "Recherche en cours...",
  },
  es: {
    signIn: "Iniciar sesión",
    favorites: "Mis favoritos",
    cart: "Carrito",
    placeholder: "Buscar productos...",
    noResults: "No se encontraron resultados para",
    loading: "Buscando...",
  },
};

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchData, setSearchData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const hover = "hover:text-groon transitions text-black";
  const Hover = ({ isActive }) => (isActive ? "text-groon" : hover);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setShowResults(true);

    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    setShowLangDropdown(false);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  // Fetch countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false
      }
    };
    fetchCountries();
  }, []);
  // Fetch user's current country based on their location
  useEffect(() => {
    const fetchCurrentCountry = async () => {
      if (navigator.geolocation && countries.length > 0) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://geocode.xyz/${latitude},${longitude}?geoit=json`
            );
            const data = await response.json();
            const countryCode = data.country ? data.prov : "us"; // Default to 'us' if not found
            const country = countries.find(
              (c) => c.code.toLowerCase() === countryCode.toLowerCase()
            );
            if (country) {
              setSelectedCountry(country);
            }
          } catch (error) {
            console.error("Error fetching country:", error);
          }
        });
      }
    };

    fetchCurrentCountry();
  }, [countries]); // Run this effect when countries are fetched

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, countries]);

  const handleSearche = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <>
      {/* // <div className="bg-white border-b-[0.1px] border-b-[#ebeaea]">
    //   <div className="flex justify-between items-center p-8"> */}
      {/* Language Selector */}
      <div className="flex lg:justify-end gap-2 lg:gap-32 pr-4 text-sm p-2 w-full bg-slate-200">
        <p>Help Center</p>
        <div className="flex items-center gap-2 ">
          Ship to :{" "}
          <div className="relative">
            <div
              className="flex items-center  cursor-pointer"
              onClick={toggleDropdown}
            >
              {selectedCountry ? (
                <div className="flex items-center">
                  <img
                    src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
                    alt={selectedCountry.name}
                    className="mr-2"
                  />
                  <span>{selectedCountry.name}</span>
                </div>
              ) : (
                <div className="text-gray-500">Select a country</div>
              )}
              <svg
                className={`fill-current h-4 w-4 ml-auto transition-transform ${
                  isOpen ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
            {isOpen && (
              <div className="absolute z-10 w-[300px]   mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                <p className="p-4">Ship to</p>
                <div className="px-4 py-2 border-b border-gray-300">
                  <input
                    type="text"
                    placeholder="Search countries"
                    value={searchTerm}
                    onChange={handleSearche}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <ul className="max-h-64 overflow-y-auto">
                  {filteredCountries.map((country) => (
                    <li
                      key={country.code}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleCountrySelect(country)}
                    >
                      <div className="flex items-center">
                        <img
                          src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                          alt={country.name}
                          className="mr-2"
                        />
                        <span>{country.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>{" "}
          / $USD
        </div>

        <div className="relative flex  ">
          <div
            className={`${hover} flex gap-2 items-center cursor-pointer`}
            onClick={() => setShowLangDropdown(!showLangDropdown)}
          >
            <span>{currentLang.toUpperCase()}</span>
            <FaAngleDown />
          </div>

          {showLangDropdown && (
            <div className="absolute right-0 mt-2 bg-gray-100 border rounded-md shadow-lg z-50">
              <div
                onClick={() => handleLanguageChange("en")}
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
              >
                English
              </div>
              <div
                onClick={() => handleLanguageChange("fr")}
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
              >
                Français
              </div>
              <div
                onClick={() => handleLanguageChange("es")}
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
              >
                Español
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed  top-0 left-0 z-10" : null
        } transition hidden  md:flex  items-center  w-full bg-white border-b h-[70px]`}
      >
        <div className="w-full px-4">
          <div className=" md:h-[50px]  md:my-[20px]  flex gap-8 items-center ">
            <div>
              <NavLink to="/">
                <img src={Logo} alt="" className="w-full" />
              </NavLink>
            </div>

            {/* Search Form with Results Dropdown */}

            <div className="w-11/12 relative  flex items-center justify-between">
              <div className="flex gap-2 w-1/3 h-10  rounded border-[#86CCFF] border">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder={languages[currentLang].placeholder}
                  className="bg-transparent w-full outline-none px-2"
                />
                <button
                  type="submit"
                  className="flex items-center  w-16 justify-center rounded-s-[4px] bg-[#5DBBFF]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin text-white h-5 w-5" />
                  ) : (
                    <FaSearch className="text-white" />
                  )}
                </button>
                {searchData && searchData.length !== 0 ? (
                  <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                    {searchData &&
                      searchData.map((i, index) => {
                        return (
                          <Link to={`/product/${i._id}`}>
                            <div className="w-full flex items-start-py-3">
                              <img
                                src={`${i.images[0]?.url}`}
                                alt=""
                                className="w-[40px] h-[40px] mr-[10px]"
                              />
                              <h1>{i.name}</h1>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                ) : null}
              </div>
              <div className="text-main font-bold">
                <NavLink to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
                  <h1 className=" flex items-center">
                    {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                    <IoIosArrowForward className="ml-1" />
                  </h1>
                </NavLink>
              </div>
              {/* navitems */}
              <div className={`${styles.noramlFlex}`}>
                <NavBar active={activeHeading} />
              </div>

              <div className="flex  gap-6">
                <div className={`${styles.noramlFlex} `}>
                  <div
                    className="relative cursor-pointer mr-[15px]"
                    onClick={() => setOpenWishlist(true)}
                  >
                    <AiOutlineHeart size={30} color="#000000" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <div className={`${styles.noramlFlex}`}>
                  <div
                    className="relative cursor-pointer mr-[15px]"
                    onClick={() => setOpenCart(true)}
                  >
                    <AiOutlineShoppingCart size={30} color="#000000" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      {cart && cart.length}
                    </span>
                  </div>
                </div>
                <div className={`${styles.noramlFlex}`}>
                  <div className="relative cursor-pointer mr-[15px]">
                    {isAuthenticated ? (
                      <Link to="/profile">
                        <img
                          src={`${user?.avatar?.url}`}
                          className="w-[35px] h-[35px] rounded-full"
                          alt=""
                        />
                      </Link>
                    ) : (
                      <Link to="/SignIn">
                        <CgProfile size={30} color="#000000" />
                      </Link>
                    )}
                  </div>
                </div>
                {/* cart popup */}
                {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

                {/* wishlist popup */}
                {openWishlist ? (
                  <Wishlist setOpenWishlist={setOpenWishlist} />
                ) : null}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm  fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] md:hidden z-50 p-4 top-0 left-0 shadow-sm`}
      >
        <div className="w-full flex  items-center justify-between">
          <div>
            <Link to="/">
              <div>
                <NavLink to="/">
                  <img src={Logo} alt="" />
                </NavLink>
              </div>
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
          <div className="">
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0  left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="p-8">
                <div className="flex gap-2 w-full h-10  rounded border-[#86CCFF] border">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder={languages[currentLang].placeholder}
                    className="bg-transparent w-full outline-none px-2"
                  />
                  <button
                    type="submit"
                    className="flex items-center  w-16 justify-center rounded-s-[4px] bg-[#5DBBFF]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin text-white h-5 w-5" />
                    ) : (
                      <FaSearch className="text-white" />
                    )}
                  </button>
                  {searchData && (
                    <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                      {searchData.map((i) => {
                        const d = i.name;

                        const Product_name = d.replace(/\s+/g, "-");
                        return (
                          <Link to={`/product/${Product_name}`}>
                            <div className="flex items-center">
                              <img
                                src={i.image_Url[0]?.url}
                                alt=""
                                className="w-[50px] mr-2"
                              />
                              <h5>{i.name}</h5>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                <NavBar active={activeHeading} />
                <div className={`${styles.button}  !rounded-[4px]`}>
                  <Link to="/shop-create">
                    <h1 className="text-[#fff] flex items-center">
                      Become Seller <IoIosArrowForward className="ml-1" />
                    </h1>
                  </Link>
                </div>

                <div className="flex w-full mt-8">
                  {isAuthenticated ? (
                    <div>
                      <Link to="/profile">
                        <img
                          src={`${user.avatar?.url}`}
                          alt=""
                          className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                        />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link
                        to="/SignIn"
                        className="text-[18px] pr-[10px] text-[#000000b7]"
                      >
                        Signin |
                      </Link>
                      <Link
                        to="/sign-up"
                        className="text-[18px] text-[#000000b7]"
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
