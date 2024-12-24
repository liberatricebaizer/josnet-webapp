import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { RxAvatar } from "react-icons/rx";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";
import { server } from "../../server";
import { Spinner } from "react-bootstrap";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handlerUploadfile = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${server}/user/create-user`, {
        name,
        email,
        password,
        avatar,
      });
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setPassword("");
      setAvatar();
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(
          error.response.data.message || "SignUp failed.please try again"
        );
      } else if (error.request) {
        toast.error(
          "No response from server. Please check your network connection."
        );
      } else {
        toast.error("Error" + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="grid md:grid-cols-2 md:h-screen text-white bg-[#131315] justify-between w-full">
        <div className="bg-red-500 flex justify-center items-center md:bg-[url('src/images/bg.jpeg')] bg-cover bg-center">
          <div className="hidden md:flex flex-col">
            <h3 className="text-3xl font-bold text-[#EEEEF1]">JosNetExpress</h3>
            <p>Buy anything with our web Application</p>
          </div>
        </div>
        <div className="py-20 md:py-10 px-8 md:px-16 flex flex-col justify-center h-screen">
          <h3 className="text-3xl font-bold text-[#EEEEF1]">Sign Up</h3>
          <form onSubmit={submitHandler} className="mt-6">
            <div className="m-auto flex items-center flex-col">
              <div className="mt-2 flex flex-col items-center">
                <span className="inline-block h-20 w-20 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-20 text-[#F8A81C] w-20" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="cursor-pointer flex items-center justify-center font-medium"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handlerUploadfile}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <label>
                Your Name <span className="text-[#FF3F07]">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full py-3 px-3 text-sm rounded mt-1 border bg-transparent border-[#424248] hover:border-[#87878f] placeholder-[#6B6A5D] outline-none text-white"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div style={{ marginTop: "12px" }}>
              <label>
                Your Email <span className="text-[#FF3F07]">*</span>
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full py-3 px-3 text-sm rounded mt-1 border bg-transparent border-[#424248] hover:border-[#87878f] placeholder-[#6B6A5D] outline-none text-white"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div style={{ fontSize: "14px", marginTop: "12px" }}>
              <label>
                Password <span className="text-[#FF3F07]">*</span>
              </label>
              <div className="w-full relative flex py-3 px-3 text-sm rounded mt-1 border bg-transparent border-[#424248] hover:border-[#87878f] placeholder-[#6B6A5D] outline-none text-white">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  className="w-full bg-transparent outline-none text-white border-none"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span onClick={handleShowPassword}>
                  {showPassword ? <BiShow /> : <BiHide />}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex text-black justify-center items-center">
                <button
                  type="submit"
                  disabled={loading} // Disable button while loading
                  className={`w-full py-2 bg-gradient-to-r from-[#FFE27F] to-[#F8A81C] rounded-sm text-sm cursor-pointer ${
                    loading ? "opacity-50" : ""
                  }`}
                >
                  {loading ? (
                    <div className="flex gap-2 justify-center text-main">
                      <Spinner animation="border" size="sm" /> loading...
                    </div>
                  ) : (
                    "Sign Up"
                  )}{" "}
                  {/* Show spinner or text */}
                </button>
              </div>
              <div className="flex text-[#E5E4E9] items-center text-sm mt-4">
                <span>Already have an account?</span>
                <span className="translate-x-4 text-[#F8A81C] font-bold">
                  <Link to="/SignIn">Login now</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default SignUp;
