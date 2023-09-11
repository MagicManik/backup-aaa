import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleLogo from "../../../assets/images/icons/google.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./SocialLogin.css";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signInWithGoogle } = useContext(AuthContext);

  const googleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user?.emailVerified) {
          toast.success(<small>Welcome! Login Successful.</small>);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mb-3">
      <button
        onClick={googleLogin}
        type="submit"
        className="w-full text-green-normal focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-4 border bg-green-white hover:bg-green-100 transition-all duration-500"
      >
        <img width={24} src={googleLogo} alt="" />
        Sign in with google
      </button>
    </div>
  );
};

export default SocialLogin;
