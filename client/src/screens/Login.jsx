import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import Icon from "../images/google.png";
import AvatarImage2 from "../images/ex.jpg";
import { FaGoodreads, FaGoodreadsG, FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import NavBar from "../layout/NavBar";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const enteredEmailIsValid = data.email.includes("@");
  const emailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsValid = data.password.trim() !== "";
  const passwordIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched;

  const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

  const emailBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const passwordBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    const { email, password } = data;
    if (email && password) {
      try {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/signin`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const dataRes = await fetchData.json();
        toast(dataRes.message);
        if (dataRes.alert) {
          dispatch(loginRedux(dataRes));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again later.");
      }
    } else {
      toast.error("Please enter required fields.");
    }

    setEnteredEmailTouched(false);
    setEnteredPasswordTouched(false);
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="grid md:grid-cols-2 md:h-screen  bg-[#131315] justify-between h-screen w-full ">
        <div className=" bg-red-500 flex justify-center items-center md:bg-[url('src/images/watch.png')] bg-cover bg-center  ">
          <div className="hidden md:flex flex-col">
            {" "}
            <h3 className="text-3xl font-bold text-[#EEEEF1]">JosNetExpress</h3>
            <p>Buy anything with our web Application</p>
          </div>
        </div>
        <div className="py-20 md:py-10 px-8 md:px-28 flex flex-col justify-center h-screen ">
          <h3 className="text-3xl font-bold text-[#EEEEF1]">Welcome Back</h3>
          <p className="text-[#B7B7B7] text-sm pt-2">
            Enter the information you entered while registering
          </p>{" "}
          <form onSubmit={loginHandler} className="text-white  pt-4">
            <div className=" ">
              <div className="272F3F">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full py-3 px-3 text-sm rounded mt-3 border bg-transparent border-[#424248] hover:border-[#87878f] placeholder-[#6B6A5D] outline-none text-white"
                  onChange={handleOnChange}
                  onBlur={emailBlurHandler}
                  value={data.email}
                />
                {emailIsInvalid && <p>Email must not be empty.</p>}
              </div>

              <div className="mt-8">
                <div className="flex items-center relative text-sm  py-3 px-3 border bg-transparent border-[#424248] hover:border-[#87878f] outline-none text-white rounded mt-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full bg-transparent  placeholder-[#6B6A5D]"
                    onChange={handleOnChange}
                    onBlur={passwordBlurHandler}
                    value={data.password}
                  />
                  <span onClick={handleShowPassword}>
                    {showPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>
                {passwordIsInvalid && <p>Password must not be empty.</p>}
              </div>

              <div className="flex items-center mt-4 ">
                <div className="flex gap-2 items-center ">
                  <input type="checkbox" id="remember" className="text-red" />
                  <label htmlFor="remember" className="text-sm text-gray-400">
                    Remember me
                  </label>
                </div>
                <div className="text-sm translate-x-4 text-[#F8A81C] font-bold">
                  <span>
                    <Link to="/ForgotPassword">Forgot password?</Link>
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={!formIsValid}
                  className="w-full py-2 bg-gradient-to-r from-[#FFE27F] to-[#F8A81C] rounded-sm text-sm cursor-pointer "
                >
                  LOGIN
                </button>
                <div className="flex pt-4 text-[#E5E4E9] items-center">
                  <span className=" bg-[#E5E4E9] h-[1px] w-full  mx-1 my-2 :content-[''] inline-block font-semibold"></span>

                  <span className="text-sm">or</span>
                  <span className="bg-[#E5E4E9] h-[1px] w-full  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
                </div>
                <div className="flex w-full mt-4 rounded py-2 gap-2 bg-[#424248]  justify-center items-center">
                  <FcGoogle />

                  <h3 className="text-sm"> Sign in with Google</h3>
                </div>
                <div className="flex items-center text-sm mt-4">
                  <span>Don't have an account?</span>
                  <span className="translate-x-4 text-[#F8A81C] font-bold">
                    <Link to="/Sign-Up">Create one now</Link>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
//
