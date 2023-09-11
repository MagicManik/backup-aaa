import arrowDown from "../../assets/images/icons/arrow-circle-down2.svg";
import infoIcon from "../../assets/images/icons/info.svg";
import PaymentInput from "../../components/PaymentInput/PaymentInput";

const PaymentDetails = () => {
  return (
    <div className="min-w-[100%] lg:min-w-[41.66%] lg:max-w-[0] lg:px-4 mt-10 lg:mt-0 md:mb-9 lg:mb-0">
      <h1 className="tracking-widest uppercase md:text-lg font-bold mb-2">
        PAYMENT DETAILS
      </h1>

      <div className="flex items-center tracking-tight mb-2">
        <h3 className="text-3xl font-bold text-[#0e9749] mr-2">10,239 SAR</h3>
        <span className="text-[#9ABDA9] font-bold text-2xl before:content-['/'] before:mr-2">
          4 night
        </span>
      </div>

      {/* Register Form */}
      <div className="mt-10 md:-ml-2 lg:ml-0 lg:-mr-4">
        <form>
          <div className="flex flex-wrap md:-mx-2 lg:ml-[-1rem]">
            <div className="min-w-[100%] md:min-w-[51.7%] lg:min-w-[53.1%] md:max-w-[50%] md:px-4 mb-5 md:mb-9">
              <label className="tracking-normal md:tracking-widest uppercase font-semibold md:font-bold text-[#9ABDA9] text-sm md:text-base block">
                Payment Method
              </label>
              <select
                style={{
                  backgroundImage: `url(${arrowDown})`,
                  backgroundPosition: "right 12px center",
                  backgroundSize: "12px",
                }}
                className="custom-select bg-no-repeat bg-center text-lg font-normal border-solid border-[1px] border-[rgba(14,151,73,0.4)] max-h-[2.3rem] min-h-[2rem] md:min-h-[2.7rem] bg-[#fafffc] rounded-md block w-full py-1 md:py-1.5 px-[10px] md:pl-[10px] md:pr-7 leading-normal bg-clip-padding outline-0 transition duration-[0.15ms] ease-in-out focus:border-[#38ed86] appearance-none"
              >
                <option value="">Select...</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="american Express">American Express</option>
              </select>
            </div>
          </div>

          <div className="pl-[-0.5rem] md:pl-[0.5rem] lg:px-4 lg:-ml-4 mb-5 md:mb-9">
            <PaymentInput type="name" name="name">
              Card Holder Name
            </PaymentInput>
          </div>

          <div className="pl-[-0.5rem] md:pl-[0.5rem] lg:px-4 lg:-ml-4 mb-5 md:mb-9">
            <PaymentInput type="number" name="cardnumber">
              Card Number
            </PaymentInput>
          </div>

          <div className="flex flex-wrap md:ml-[0.5rem] lg:ml-0 mr-[-0.6rem] md:mr-[-0.5rem] lg:mr-[0.28rem]">
            <div className="min-w-[100%] md:max-w-[50%] lg:max-w-[50%] md:min-w-[50%] pl-0 pr-2.5 md:pr-4 lg:pr-6 mb-5 md:mb-9">
              <PaymentInput type="text" placeholder="MM/YYYY" name="expiration">
                Expiration Date
              </PaymentInput>
            </div>

            <div className="min-w-[100%] md:max-w-[50%] lg:max-w-[50%] md:min-w-[50%] pr-2.5 md:pr-2 lg:pr-[0.7rem] pl-0 md:pl-3 mb-5 md:mb-9">
              <PaymentInput type="number" name="cvv">
                CVV
              </PaymentInput>
            </div>
          </div>

          <div className="ml-0 md:ml-[0.5rem] lg:ml-[-0.25rem] lg:mr-[14px] p-3 bg-[#f2faf5] rounded-2xl text-[#0e9749]">
            <div className="flex items-center gap-5">
              <img
                className="font-bold w-28 md:w-11 lg:w-[68px]"
                src={infoIcon}
                alt=""
              />
              <p>
                All information about the transaction will be sent to the{" "}
                <strong>cronaldo@juventus.com</strong>. Check your email is
                correct
              </p>
            </div>
          </div>

          <div className="mt-5 lg:mr-[14px] md:ml-2 lg:ml-0">
            <input
              type="submit"
              className="cursor-pointer bg-[#0e9749] py-3 md:py-4 lg:py-5 px-5 md:px-6 text-white text-sm md:text-xl rounded-[.75rem] hover:bg-[#0b7438] hover:border-[#0a6832] w-full font-medium transition duration-[350ms] ease-in-out"
              value="Payment Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
