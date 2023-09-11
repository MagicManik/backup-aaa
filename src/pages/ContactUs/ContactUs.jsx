import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

const ContactUs = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="aaa-wrapper lg:py-[90px] pt-12 pb-0 flex lg:flex-nowrap flex-wrap">
        <div className="lg:w-[65%] w-full bg-gray-300 rounded-lg p-10 flex items-end justify-start relative lg:mr-10 md:h-[500px] sm:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37790410.94171717!2d-18.065266445575148!3d39.4949309450254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x64be63a54193ecdf%3A0x90466e51b7777f94!2sInnovate%20Solutions!5e0!3m2!1sen!2sus!4v1693913892275!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="absolute inset-0 rounded outline-none"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="relative lg:bottom-0 md:-bottom-28 sm:-bottom-28 -bottom-36 bg-white lg:mx-6 md:mx-24 sm:mx-10 mr-3 ml-3.5 lg:py-6 py-3 rounded shadow-md w-full flex lg:flex-nowrap flex-wrap">
            <div className="lg:w-1/2 lg:px-5 px-3">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="lg:w-1/2 lg:px-6 mx-3 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[35%] bg-white flex flex-col md:ml-auto w-full md:py-8 lg:my-0 lg:py-0 md:mt-20 sm:mt-24 mt-36">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Get in touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            eaque neque nihil facere, ratione similique.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-light focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-light focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-light focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            ></textarea>
          </div>
          <PrimaryBtn
            size="!w-full !bg-green-normal !py-2.5 !text-base !font-poppins !font-normal !duration-300"
            label="Send"
          />
          <p className="text-xs text-gray-500 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta
            deleniti voluptas aliquid expedita ex deserunt rem?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
