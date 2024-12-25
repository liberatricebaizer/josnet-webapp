import { useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import socketIO from "socket.io-client";
import { FcGoogle } from "react-icons/fc";

import { Spinner } from "react-bootstrap"; // Import Spinner from Bootstrap or any other spinner component
import { loadUser } from "../../redux/actions/user";
import { loadUserSuccess } from "../../redux/reducers/user";

const socketIo = socketIO("https://josnet-api.onrender.com", {
  transports: ["websocket"],
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    socketIo.on("connect", () => {
      console.log("actually it works !");
      socketIo.on("test", (ms) => {
        console.log(ms);
      });
    });
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login starts
    try {
      const res = await axios.post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      // Dispatch an action to update the Redux state

      dispatch(loadUserSuccess(res.data));

      toast.success("Login Success!");
      await dispatch(loadUser()).then(() => {
        navigate("/");
      });
      // window.location.reload(true);
    } catch (err) {
      if (err.response) {
        toast.error(
          err.response.data.message || "Login failed. Please try again."
        );
      } else if (err.request) {
        toast.error(
          "No response from server. Please check your network connection."
        );
      } else {
        toast.error("Error: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 md:h-screen bg-[#131315] justify-between h-screen w-full">
        <div className="bg-red-500 flex justify-center items-center md:bg-[url('src/images/bg.jpeg')] bg-cover bg-center">
          <div className="hidden md:flex flex-col">
            <h3 className="text-3xl font-bold text-[#EEEEF1]">JosNetExpress</h3>
            <p>Buy anything with our web Application</p>
          </div>
        </div>
        <div className="py-20 md:py-10 px-8 md:px-16 flex flex-col justify-center h-screen">
          <h3 className="text-3xl font-bold text-[#EEEEF1]">Welcome Back</h3>
          <p className="text-[#B7B7B7] text-sm pt-2">
            Enter the information you entered while registering
          </p>
          <form onSubmit={loginHandler} className="text-white pt-4">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 px-3 text-sm rounded mt-3 border bg-transparent border-[#424248] hover:border-[#87878f] placeholder-[#6B6A5D] outline-none text-white"
              />
              <div className="flex mt-8 items-center relative text-sm py-3 px-3 border bg-transparent border-[#424248] hover:border-[#87878f] outline-none text-white rounded">
                <input
                  type={visible ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-transparent placeholder-[#6B6A5D]"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>

              <div className="flex items-center mt-4">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    required
                    className="text-red"
                  />
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
                  disabled={loading}
                  className={`w-full py-2 bg-gradient-to-r from-[#FFE27F] to-[#F8A81C] rounded-sm text-sm cursor-pointer ${loading ? "opacity-50" : ""
                    }`}
                >
                  {loading ? (
                    <div className="flex gap-2 justify-center text-main">
                      <Spinner animation="border" size="sm" /> loading...
                    </div>
                  ) : (
                    "LOGIN"
                  )}{" "}
                  {/* Show spinner or text */}
                </button>
                <div className="flex pt-4 text-[#E5E4E9] items-center">
                  <span className="bg-[#E5E4E9] h-[1px] w-full mx-1 my-2 inline-block font-semibold"></span>
                  <span className="text-sm">or</span>
                  <span className="bg-[#E5E4E9] h-[1px] w-full mx-1 my-2 inline-block font-semibold"></span>
                </div>
                <div className="flex w-full mt-4 rounded py-2 gap-2 bg-[#424248] justify-center items-center">
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
