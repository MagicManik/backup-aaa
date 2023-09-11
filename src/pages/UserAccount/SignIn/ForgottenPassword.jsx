import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useState } from "react";
import Swal from "sweetalert2";
import FormInput from "../../../components/FormInput/FormInput";
import Label from "../../../components/Label/Label";
import { useUserRQ } from "../../../requests/useUserRQ";
import { useTranslation } from "react-i18next";

const ForgottenPassword = ({ setIsOpen }) => {
  const { mutate, data } = useUserRQ("/passwrod-reset");
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  // generate a minimum 50 character random number
  const generateRandomNumber = (length) => {
    const minDigit = 0;
    const maxDigit = 9;
    let randomNumber = "";

    for (let i = 0; i < length; i++) {
      const randomDigit =
        Math.floor(Math.random() * (maxDigit - minDigit + 1)) + minDigit;
      randomNumber += randomDigit.toString();
    }

    return randomNumber;
  };

  // handle password change by email
  const handleForgottenPassword = (e) => {
    if (e) {
      e.preventDefault();
    }

    const random50CharacterNumber = generateRandomNumber(50);
    // console.log("Random number:", random50CharacterNumber);

    mutate({
      random_key: random50CharacterNumber,
      email: email,
    });
  };

  if (data?.status === "failed") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: data?.reason,
    });
  }

  return (
    <>
      <form onSubmit={handleForgottenPassword} className="text-left">
        <div className="w-full">
          <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl px-6 mt-3">
            {t("resetyourpasswordbyemail")}
          </h3>
          <div className="border-t border-gray-300 py-1 w-full mt-4 pt-3 px-6">
            <Label
              label={t("typeyouremailaddress")}
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            />
            <FormInput
              type="email"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end px-6 mt-1">
          <Button
            onClick={() => setIsOpen(false)}
            className="!text-sm !normal-case !bg-gray-200 !text-gray-800"
          >
            {t("cancel")}
          </Button>
        </div>
        <div className="pt-5 pb-6 px-6">
          <input
            type="submit"
            className="text-white block rounded-lg text-center font-medium leading-6 px-6 py-2 bg-green-normal hover:bg-green-dark hover:shadow-lg hover:shadow-green-normal/40 transition-all duration-300 w-full cursor-pointer"
            value={t("sendResetPasswordEmail")}
          />
        </div>
      </form>
    </>
  );
};

ForgottenPassword.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default ForgottenPassword;
