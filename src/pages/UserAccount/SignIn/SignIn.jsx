import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import background from "../../../assets/images/DreamCity.jpg";
import logo from "../../../assets/images/icons/logo-white.svg";
import FormInput from "../../../components/FormInput/FormInput";
import { useUserRQ } from "../../../requests/useUserRQ";
import SocialLogin from "../SocialLogin/SocialLogin";
import ForgottenPassword from "./ForgottenPassword";
import { useTranslation } from "react-i18next";

const Login = () => {
  // for api call
  const { mutate, data: userData } = useUserRQ("/login");
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    if (e) {
      e.preventDefault();
    }

    mutate({ email: email, password: password });
  };

  useEffect(() => {
    if (userData?.status === "success" && userData?.email) {
      localStorage.setItem("login_key", userData?.login_key);
      localStorage.setItem("member_id", userData?.member_id);
      toast.success(<small>Welcome! Login successful.</small>);
      navigate(from, { replace: true });
    }
  }, [userData?.status]);

  // console.log(userData);

  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="bg-no-repeat bg-blend-multiply bg-center opacity-90 bg-cover h-[80vh] md:h-[75vh] lg:h-auto pt-0 pb-6 lg:py-0 md:py-8 flex flex-col items-center justify-center"
    >
      <div className="bg-transparent lg:py-0 lg:pb-10 lg:w-[60%] md:w-[56%] w-[100%]">
        <div className="flex flex-col items-center justify-center mx-auto lg:h-[85vh] md:h-screen lg:px-6 px-4 py-0">
          <Link
            to="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <img className="w-80 h-8 mr-2" src={logo} alt="logo" />
          </Link>
          <div className="w-full bg-white rounded-3xl shadow  md:mt-0 sm:max-w-md xl:p-0">
            {!isOpen ? (
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  {t("signintoyouraccount")}
                </h1>
                <form
                  onSubmit={handleSignIn}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      {t("youremail")}
                    </label>
                    <FormInput
                      type="email"
                      name="email"
                      id="email"
                      placeholder="name@company.com"
                      value={email}
                      required="required"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      {t("password")}
                    </label>
                    <FormInput
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      required="required"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500">
                          {t("rememberme")}
                        </label>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      // onClick={handleForgetPassword}
                      className="text-sm font-medium text-green-normal hover:underline"
                    >
                      {t("forgotPassword")}?
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-green-normal hover:bg-green-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    {t("signIn")}
                  </button>

                  {/* <SocialLogin></SocialLogin> */}

                  <p className="text-sm font-medium text-center text-gray-900">
                    {t("don'thaveanaccountyet")}
                    <Link
                      to="/register"
                      className="font-medium text-green-normal hover:underline ml-1"
                    >
                      {t("signup")}
                    </Link>
                  </p>
                </form>
              </div>
            ) : (
              <ForgottenPassword isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
