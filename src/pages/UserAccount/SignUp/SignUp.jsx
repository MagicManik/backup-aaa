import MuiPhoneNumber from "material-ui-phone-number-2";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "../../../components/FormInput/FormInput";
import FormCountryOptions from "../../../components/FormOptions/FormCountryOptions";
import FormOptions from "../../../components/FormOptions/FormOptions";
import { countryInfo, gender } from "../../../constant/constant";
import { useUserRQ } from "../../../requests/useUserRQ";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const countryInfoData = countryInfo;
  const genderData = gender;
  // for api call
  const { mutate, data } = useUserRQ("/registration");
  const isUserEmail = data?.data?.email;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [isdCode, setIsdCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  };
  console.log(isdCode, selectedCountry);

  const handleCountry = (e) => {
    const selectedDialCodeValue = e.target.value;
    const selectedCountryName = e.target.options[e.target.selectedIndex].text;
    setIsdCode(selectedDialCodeValue);
    setSelectedCountry(selectedCountryName);
  };

  const fullName = firstName + " " + lastName;
  // console.log(fullName);

  const handleSignUp = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (!phoneNumber) {
      toast.warning(<small>Please provide your phone number</small>);
      return;
    }

    mutate({
      email: email,
      fullname: fullName,
      isd_code: isdCode,
      mobile: phoneNumber,
      dob: dateOfBirth,
      gender: selectedGender,
      address: address,
      city: city,
      state: state,
      postal_code: postalCode,
      country: selectedCountry,
      passwd: password,
      passwd2: confirmPassword,
    });
  };

  if (data?.status === "failed") {
    toast.error(<small>{data?.reason}</small>);
  }

  useEffect(() => {
    if (isUserEmail) {
      toast.success(<small>Congratulations! Register successful.</small>);
      return navigate("/");
    }
  }, [isUserEmail]);

  // console.log(data);

  return (
    <>
      <div className="font-poppins aaa-wrapper py-14">
        <div>
          <h1 className="text-4xl -mx-2 md:-mx-0 md:text-4xl lg:text-5xl leading-tight font-bold mb-5 md:mb-10">
            {t("register")}
          </h1>

          <form onSubmit={handleSignUp}>
            <div className="flex flex-wrap -mx-2">
              <div className="min-w-[100%] md:min-w-[33%] md:px-4 mb-5 md:mb-9">
                <FormInput
                  type="text"
                  name="first"
                  value={firstName}
                  required="required"
                  onChange={(e) => setFirstName(e.target.value)}
                >
                  {t("firstName")}
                </FormInput>
              </div>

              <div className="min-w-[100%] md:min-w-[33%] md:px-4 mb-5 md:mb-9">
                <FormInput
                  type="text"
                  name="last"
                  value={lastName}
                  required="required"
                  onChange={(e) => setLastName(e.target.value)}
                >
                  {t("lastName")}
                </FormInput>
              </div>
            </div>

            <div className="flex flex-wrap -mx-2">
              <div className="min-w-[100%] md:min-w-[74.2%] lg:min-w-[66.13%] md:px-4 mb-5 md:mb-9">
                <FormInput
                  type="email"
                  name="email"
                  value={email}
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                >
                  {t("emailAddress")}
                </FormInput>
              </div>
            </div>

            {/* phone number */}
            <div className="flex flex-wrap -mx-2">
              <div className="min-w-[100%] md:min-w-[74.2%] lg:min-w-[66.13%] md:px-4 mb-5 md:mb-9">
                <label className="tracking-normal md:tracking-widest uppercase font-semibold md:font-bold block mb-2">
                  {t("phoneNumber")}
                </label>
                <div className="border border-green-rgba rounded-md py-1.5 px-2">
                  <MuiPhoneNumber
                    defaultCountry={"bd"}
                    onChange={handlePhoneNumber}
                    variant="standard"
                    fullWidth
                  />
                </div>
              </div>
            </div>

            {/* date of birth and gender */}
            <div className="flex flex-wrap -mx-2">
              <div className="min-w-[100%] md:min-w-[33%] md:px-4 mb-5 md:mb-9">
                <FormInput
                  type="text"
                  name="first"
                  value={dateOfBirth}
                  placeholder="YYYY-MM-DD"
                  required="required"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                >
                  {t("dateofbirth")}
                </FormInput>
              </div>

              {/* ----------------------------------------
                                  gender
              -------------------------------------------- */}
              <div className="min-w-[100%] md:min-w-[33%] md:px-4 mb-5 md:mb-9">
                <FormOptions
                  // selected value
                  value={selectedGender}
                  // gender array
                  selectName={genderData}
                  defaultOption="Select Gender"
                  required="required"
                  // onclick
                  onChange={(e) => setSelectedGender(e.target.value)}
                >
                  {t("gender")}
                </FormOptions>
              </div>
            </div>
            {/* date of birth and gender close */}

            {/* password and reenter password */}
            <div className="flex flex-wrap -mx-2">
              <div className="min-w-[100%] md:min-w-[33%] md:px-4 mb-5 md:mb-9">
                <FormInput
                  type="password"
                  name="first"
                  value={password}
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                >
                  {t("enterPassword")}
                </FormInput>
              </div>

              <div className="min-w-[100%] md:min-w-[33%] md:px-4 mb-5 md:mb-9">
                <FormInput
                  type="password"
                  name="last"
                  value={confirmPassword}
                  required="required"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                >
                  {t("re-enterPassword")}
                </FormInput>
              </div>
            </div>
            {/* password and reenter password close */}
            <div className="flex items-center text-center my-5">
              <span className="flex-grow bg-[rgba(14,151,73,0.2)] h-0.5"></span>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="min-w-[100%] md:min-w-[74.2%] lg:min-w-[66.13%] md:px-4 mb-5 md:mb-9">
                <FormInput
                  type="text"
                  name="address1"
                  newClass="mb-4"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                >
                  {t("address")}
                </FormInput>
              </div>
            </div>

            {/* -----------------------------------
                        country selection
              ------------------------------------ */}
            {/*  country and state */}
            <div className="flex flex-wrap -mx-2">
              <div className="min-w-[100%] md:min-w-[33%] md:px-4 mb-5 md:mb-9">
                {/* country */}
                <label className="tracking-normal md:tracking-widest uppercase font-semibold md:font-bold block mb-2">
                  {t("country")}
                </label>
                {/* <FormCountryOptions
                  required="required"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  selectName={countryInfoData}
                  defaultOption="Select Country"
                  className="!rounded-md px-4 py-[7px] !border-green-rgba"
                ></FormCountryOptions> */}

                <FormCountryOptions
                  onChange={handleCountry}
                  required="required"
                  countryInfoData={countryInfoData}
                  className="!rounded-md px-4 py-[7px] !border-green-rgba"
                ></FormCountryOptions>
              </div>
              {/* state */}
              <div className="min-w-[100%] md:min-w-[33%] md:px-4 mb-5 md:mb-9">
                <FormInput
                  type="text"
                  name="first"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  {t("state")}
                </FormInput>
              </div>
            </div>
            {/* country and state close */}

            {/* city and post code */}
            <div className="flex flex-wrap -mx-2">
              <div className="min-w-[100%] md:min-w-[33%] md:px-4 mb-5 md:mb-9">
                <FormInput
                  type="text"
                  name="first"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  {t("city")}
                </FormInput>
              </div>

              <div className="min-w-[100%] md:min-w-[33%] md:px-4 mb-5 md:mb-9">
                <FormInput
                  type="text"
                  name="last"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                >
                  {t("postCode")}
                </FormInput>
              </div>
            </div>
            {/* city and post code close */}

            <div className="md:flex items-baseline mt-5">
              <input
                type="submit"
                className="cursor-pointer bg-[#0e9749] py-3 md:py-4 px-5 md:px-6 text-white text-sm md:text-xl rounded-[.75rem] hover:bg-[#0b7438] hover:border-[#0a6832] w-full md:w-fit font-medium transition duration-[350ms] ease-in-out"
                value={t("createAccount")}
              />

              <h5 className="mt-4 font-semibold text-lg md:text-left text-center md:ml-4">
                {t("doyouhaveanaccountalready")}?{" "}
                <Link
                  to="/signin"
                  className="inline-block text-[#0e9749] transition duration-[350ms] ease-in-out hover:underline hover:text-[#085127]"
                >
                  {t("signIn")}
                </Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
