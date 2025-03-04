import { MdEmail, MdOutlineShareLocation } from "react-icons/md";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { IoIosCall } from "react-icons/io";
import Swal from "sweetalert2";

const Contact = () => {
  return (
    <div>
      <BreadCrumb title="Contact " />

      {/* Contact */}
      {/* Contact with Us */}
      <div className="">
        <div className="Container bg-whiteSmoke  px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px] relative  z-[1] mt-[-100px] mb-[100px]">
          <div className="flex md:items-center flex-col md:flex-row">
            <div
              className="px-2 py-5 sm:p-5 flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <p className="text-Garamond text-base leading-[26px] text-khaki font-medium">
                CONTACT US
              </p>
              <h2 className="text-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-uppercase text-lightBlack  font-semibold my-3 md:my-5">
                KETTLE RIVER INN & SUITE
              </h2>
              <p className="text-Lora text-sm sm:text-base leading-[26px]  text-gray  font-normal">
              Have questions or need assistance? Our team is here to help—reach out to us anytime for a seamless booking experience!
              </p>

              {/* call */}
              <div className="flex items-center my-4  lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <IoIosCall
                    size={20}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray  font-normal">
                    Call Us Now
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack  font-medium">
                  +1 204 808 7512 <br></br> +1 204 939 0031
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* email */}
              <div className="flex items-center my-4  lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdEmail
                    size={20}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray  font-normal">
                    Send Email
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack  font-medium ">
                  Gillamdliteinc@hotmail.com
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* location */}
              <div className="flex items-center my-4  lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdOutlineShareLocation
                    size={20}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray  font-normal">
                    Our Locations
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack  font-medium ">
                  119 RAILWAY AVE (W) <br />
                  GILLAM MB ROB OLO 
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex-1 py-5 sm:p-5"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="bg-lightBlack  p-[30px] lg:p-[45px] 2xl:p-[61px]">
                <h2 className="font-Garamond text-[22px] sm:text-2xl md:text-[28px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-white font-semibold text-center">
                  GET IN TOUCH
                </h2>
                <form className="grid items-center grid-cols-1 gap-2 mt-8">
                  <input
                    type="text"
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray  text-lightGray outline-none focus:border-gray bg-transparent mt-4 focus:ring-0 placeholder:text-gray"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border  border-gray  text-lightGray outline-none focus:border-gray  bg-transparent mt-4 focus:ring-0 placeholder:text-gray"
                    placeholder="Enter E-mail"
                    required
                  />
                  <select
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray  text-lightGray outline-none  bg-transparent mt-4 focus:ring-0 focus:border-gray "
                    onFocus={(e) => {
                      e.target.size = 6;
                    }}
                    onBlur={(e) => {
                      e.target.size = 0;
                    }}
                    onChange={(e) => {
                      e.target.size = 1;
                      e.target.blur();
                    }}
                  >
                    <option
                      className="bg-khaki text-white px-3 py-3"
                      value=""
                      disabled
                    >
                      Select Subject
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option1"
                    >
                      Subject One
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option2"
                    >
                      Subject Two
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option3"
                    >
                      Select Three
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option4"
                    >
                      Select Four
                    </option>
                  </select>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="w-full h-[121px] px-4 border border-gray  text-lightGray outline-none  bg-transparent mt-4 focus:ring-0  focus:border-gray placeholder:text-gray resize-none"
                    placeholder="Write Message:"
                    required
                  ></textarea>
                  <button
                    className="w-full bg-khaki text-white text-center h-10 2xl:h-[55px] mt-5"
                    onClick={() => {
                      Swal.fire({
                        title: "Form Fill-Up Complete?",
                        text: "Please Fill All Type Of Field",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#008000",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, complete!",
                        color: "#fff",
                        background: "#c19d68",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            title: "Congratulation!",
                            text: "Your Appointment Added Successful!",
                            icon: "success",
                            background: "#c19d68",
                            color: "#fff",
                            confirmButtonColor: "#008000",
                          });
                        }
                      });
                    }}
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* google map */}
      <div data-aos="fade-down" data-aos-duration="1000">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2210.9356093955066!2d-94.70135272308069!3d56.348194373310434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTbCsDIwJzUzLjUiTiA5NMKwNDEnNTUuNiJX!5e0!3m2!1sen!2sgh!4v1740485140608!5m2!1sen!2sgh"
          height={450}
          allowFullScreen=""
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;
