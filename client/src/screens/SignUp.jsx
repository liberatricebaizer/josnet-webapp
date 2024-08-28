import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import userIcon from "../images/google.png";
import ImagetoBase from "../utility/ImagetoBase";
import { BiShow, BiHide } from "react-icons/bi";
/////////
const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [enteredConfirmPasswordTouched, setEnteredConfirmPasswordTouched] =
    useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  // console.log(data);

  const enteredFirstNameIsValid = data.firstName.trim() !== "";
  const firstNameIsInvalid =
    !enteredFirstNameIsValid && enteredFirstNameTouched;

  const enteredLastNameIsValid = data.lastName.trim() !== "";
  const lastNameIsInValid = !enteredLastNameIsValid && enteredLastNameTouched;

  const enteredEmailIsValid = data.email.includes("@");
  const emailIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsValid = data.password.trim() !== "";
  const enteredPasswordIsInValid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const enteredConfirmPasswordIsValid = data.confirmPassword.trim() !== "";
  const enteredConfirmPasswordIsInValid =
    !enteredConfirmPasswordIsValid && enteredConfirmPasswordTouched;

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredConfirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  const firstNameBlurHandler = (e) => {
    setEnteredFirstNameTouched(true);
  };

  const lastNameBlurHandler = (e) => {
    setEnteredLastNameTouched(true);
  };

  const emailBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const passwordBlurHandler = (e) => {
    setEnteredPasswordTouched(true);
  };
  const confirmPasswordBlurHandler = (e) => {
    setEnteredConfirmPasswordTouched(true);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
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
  //   console.log(process.env.REACT_APP_SERVER_DOMIN);
  const submitHandler = async (e) => {
    e.preventDefault();
    setEnteredFirstNameTouched(true);
    setEnteredLastNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);
    setEnteredConfirmPasswordTouched(true);

    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const dataRes = await fetchData.json();

        // alert(dataRes.message);
        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/Signin");
        }
      } else {
        alert("password and confirm password not equal");
      }
    } else {
      alert("Please Enter required fields");
    }

    setEnteredFirstNameTouched(false);
    setEnteredLastNameTouched(false);
    setEnteredEmailTouched(false);
    setEnteredPasswordTouched(false);
    setEnteredConfirmPasswordTouched(false);
  };

  const handlerUploadfile = async (e) => {
    const data = await ImagetoBase(e.target.files[0]);

    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  return (
    <Fragment>
      {" "}
      <div className="grid md:grid-cols-2 md:h-screen  text-white bg-[#131315] justify-between  w-full ">
        <div className=" bg-red-500 flex justify-center items-center md:bg-[url('src/images/watch.png')]  bg-cover bg-center  ">
          <div className=" hidden md:flex flex-col">
            {" "}
            <h3 className="text-3xl font-bold text-[#EEEEF1]">JosNetExpress</h3>
            <p>Buy anything with our web Application</p>
          </div>
        </div>
        <div className="py-20 md:py-10 px-8 md:px-28 flex flex-col justify-center h-screen ">
          <h3 className="text-3xl font-bold text-[#EEEEF1]">Sign Up</h3>

          <form action="#" onSubmit={submitHandler} className="mt-6">
            <div className="  ">
              <div className="m-auto flex items-center flex-col">
                <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
                  <img
                    src={data.image ? data.image : userIcon}
                    alt="user"
                    className="w-full"
                  />

                  {/* <h2>TBR Agency</h2> */}

                  <label
                    htmlFor="profileImage"
                    className="text-center absolute bottom-0 h-1/3 bg-orange-400 bg-opacity-50 w-full"
                  >
                    <div className="text-sm p-1 text-white">
                      <p>Upload</p>
                    </div>
                    <input
                      type={"file"}
                      id="profileImage"
                      accept="image/*"
                      onChange={handlerUploadfile}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="">
                  Your Name <span className="text-[#FF3F07]">*</span>
                </label>
                <input
                  type={"text"}
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  className=" w-full py-3 px-3 text-sm rounded mt-1 border bg-transparent border-[#424248] hover:border-[#87878f] placeholder-[#6B6A5D] outline-none text-white"
                  onChange={handleOnChange}
                  onBlur={firstNameBlurHandler}
                  value={data.firstName}
                />
                {firstNameIsInvalid && <p>Enter your firstName</p>}
              </div>

              <div style={{ marginTop: "12px" }}>
                <label htmlFor="">
                  Your Email <span className="text-[#FF3F07]">*</span>
                </label>
                <input
                  type={"email"}
                  id="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full py-3 px-3 text-sm rounded mt-1 border bg-transparent border-[#424248] hover:border-[#87878f] placeholder-[#6B6A5D] outline-none text-white"
                  onChange={handleOnChange}
                  onBlur={emailBlurHandler}
                  value={data.email}
                />
                {emailIsInValid && <p>Email must not be empty.</p>}
              </div>
              {/* 
              <div className="form-input-sign">
                <input type="text" placeholder="Phone number" required />
              </div> */}
              <div style={{ fontSize: "14px", marginTop: "12px" }}>
                <label htmlFor="">
                  Password <span className="text-[#FF3F07]">*</span>
                </label>
                <div className="w-full relative flex py-3 px-3 text-sm rounded mt-1 border bg-transparent border-[#424248] hover:border-[#87878f] placeholder-[#6B6A5D] outline-none text-white">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    className="w-full bg-transparent  outline-none text-white  border-none"
                    onChange={handleOnChange}
                    onBlur={passwordBlurHandler}
                    value={data.password}
                  />
                  <span onClick={handleShowPassword}>
                    {showPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>
                {enteredPasswordIsInValid && <p>password must not be empty.</p>}
              </div>

              <div style={{ marginTop: "12px" }}>
                <label htmlFor="">
                  Confirm Password <span className="text-[#FF3F07]">*</span>
                </label>
                <div
                  // className={confirmPasswordClasses}
                  className="w-full py-3 px-3 text-sm rounded mt-1 border bg-transparent border-[#424248] hover:border-[#87878f] placeholder-[#6B6A5D] outline-none text-white flex"
                >
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmpassword"
                    name="confirmPassword"
                    placeholder="Confirm Your Password"
                    onBlur={confirmPasswordBlurHandler}
                    value={data.confirmPassword}
                    onChange={handleOnChange}
                    className="w-full bg-transparent outline-none text-white"
                  />
                  <span onClick={handleShowConfirmPassword}>
                    {showConfirmPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>
                {enteredConfirmPasswordIsInValid && (
                  <p> confirm your password.</p>
                )}
              </div>

              <div className="mt-4 ">
                <div className="flex text-black justify-center items-center">
                  <button
                    type="submit"
                    disabled={!formIsValid}
                    className="w-full py-2  bg-gradient-to-r from-[#FFE27F] to-[#F8A81C] rounded-sm text-sm cursor-pointer "
                  >
                    Sign up
                  </button>
                </div>

                <div className="flex text-[#E5E4E9] items-center text-sm mt-4">
                  <span> Already have account ? </span>
                  <span className="translate-x-4 text-[#F8A81C] font-bold">
                    <Link to="/SignIn"> Login now </Link>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
