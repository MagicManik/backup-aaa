import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useState } from "react";
import { GrSettingsOption } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FormInput from "../../../components/FormInput/FormInput";
import { useUserRQ } from "../../../requests/useUserRQ";

const ChangePassword = ({ email, loginKey, memberId }) => {
  const { mutate } = useUserRQ("/update-password");
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handlePasswordChange = (e) => {
    if (e) {
      e.preventDefault();
    }

    const inputData = {
      login_key: loginKey,
      member_id: memberId,
      email: email,
      existing_password: currentPassword,
      password: newPassword,
      cpassword: confirmPassword,
    };

    mutate(inputData, {
      onSuccess: (data) => {
        if (data?.status === "success") {
          setIsOpen(false);
          localStorage.removeItem("login_key");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Password successfuly changed",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="text-center !bg-green-normal !py-2 !text-white"
      >
        Need to Change Password?{" "}
        <GrSettingsOption
          style={{ animation: "gearrotate 2s linear infinite " }}
          className="animate-spin gear-icon text-2xl ml-2"
        />
      </Button>

      {isOpen && (
        <form onSubmit={handlePasswordChange} className="text-left">
          <div className="w-full">
            <div className="border-t border-gray-100 text-gray-600 py-1 w-full mt-4 pt-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Current Password
              </label>
              <FormInput
                type="text"
                required="required"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="text-gray-600 py-1 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                New password
              </label>
              <FormInput
                type="text"
                required="required"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="text-gray-600 py-1 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Re-type new password
              </label>
              <FormInput
                type="text"
                required="required"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="pt-7 pb-6 px-6">
            <input
              type="submit"
              className="text-white block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-green-light hover:bg-green-dark hover:shadow-lg hover:shadow-green-normal/40 transition-all duration-300 w-full cursor-pointer"
              value="Change password"
            />
          </div>
        </form>
      )}
    </>
  );
};

ChangePassword.propTypes = {
  email: PropTypes.string,
  loginKey: PropTypes.string,
  memberId: PropTypes.string,
};

export default ChangePassword;
