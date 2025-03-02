import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import {
  BsArrowRight,
  BsChevronLeft,
  BsChevronRight,
  BsPlay
} from "react-icons/bs";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../Components4/Testimonial/testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";
const About = () => {
  const [setCurrentSlide] = useState(0);
  // const [setLoaded] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width:768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      // setLoaded(true);
    },
  });

  return (
    <section className="">
      <BreadCrumb title="About Us" home={""} />

      {/* about content */}
      <section className="dark:bg-mediumBlack">
        <div className="Container py-20 2xl:py-[120px] sm:overflow-hidden lg:overflow-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* image */}
            <div
              className="flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-1/Hotel1.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>

            {/* text */}
          <div className="flex-1 font-Garamond  mt-5 md:mt-0 md:pl-8 p-5  lg:pl-10 2xl:pl-14">
            <h5 className="text-base text-khaki leading-[26px] font-medium">
              KETTLE RIVER INN & SUITES
            </h5>
            <h1 className="text-[22px] sm:text-2xl md:text-[21px]  xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
              YOUR HOME AWAY FROM HOME
            </h1>
            <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
            At Kettle River Inn & Suites, we pride ourselves on delivering exceptional quality, comfort, and service. Our commitment to excellence ensures an elegant and memorable experience for every guest.
            </p>
            <div className="flex items-center mt-4 md:mt-3 lg:mt-4">
              <div>
                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  3xl:text-[70px] leading-[42px] text-khaki font-medium ">
                  20 +
                </h1>
                <p className="text-sm sm:text-base md:text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-5 xl:pt-7 md:w-[94px] lg:w-full">
                  Suite Rooms
                </p>
              </div>
              <div className="ml-10 xl:ml-[60px] 2xl:ml-20 3xl:ml-[100px]">
                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  3xl:text-[70px] leading-[42px] text-khaki font-medium ">
                  4.9
                </h1>
                <p className="text-sm sm:text-base md:text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-5 xl:pt-7 md:w-[134px] lg:w-full">
                  Customer Ratings
                </p>
              </div>
            </div>
            <div className="py-5 lg:py-7 xl:py-[30px]">
              <div className="relative overflow-x-hidden ">
                <hr className="w-full h-[2px] bg-[#ddd] text-[#ddd]" />
                <span className="w-[60px] h-[2px] bg-khaki rounded-full absolute -top-[0px] animation-move1"></span>
              </div>
            </div>
            <Link to={"/about"}>
              <button className="btn-primary ">More About</button>
            </Link>
          </div>
        </div>
        </div>
      </section>
      {/* Hostel Facilities */}
      {/* next --> */}

      {/* best hotel manager */}
      <div className="bg-lightBlack -z-[1] py-20 2xl:py-[120px]">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div
            className="bg-[#f8f6f3] dark:bg-normalBlack space-y-[14px] flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-10 md:py-[96px] lg:pr-[70px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h5 className="text-base text-khaki leading-[26px] font-semibold">
              MANAGER
            </h5>
            <h1 className="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
              KETTLE RIVER INN & SUITES
            </h1>
            <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
            Welcome to Kettle River Inn & Suites! It is our pleasure to invite you to experience exceptional comfort, warm hospitality, and top-tier service at our hotel. Whether you are traveling for business or leisure, we are committed to making your stay relaxing, enjoyable, and truly memorable.
            
            </p>
            <p className="text-sm sm:text-base font-Lora italic leading-[26px] underline  text-gray dark:text-lightGray font-normal ">
              “ Our team is dedicated to providing you with the best accommodations, modern amenities, and a welcoming atmosphere that feels like home. We look forward to hosting you and ensuring your stay exceeds expectations.
              We cant wait to welcome you soon! ”
            </p>
            <div className="flex items-center space-x-6 pt-5">
              <img
                src="/images/home-1/call-do-action-img.png"
                className="w-[65px] h-[65px] object-cover"
                alt=""
              />

              <div className="">
                <h4 className="text-lg sm:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                JOGINDER SAHOTA
                </h4>
                <p className="pt-1 text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center font-Lora">
                  <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                  Manager
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 h-[100%] w-full relative "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-1/action-img.png"
              className="h-full w-full md:h-[80%] lg:h-full 2xl:h-[99%] "
              alt=""
            />

            <div
              className="w-[70px] h-[70px]  text-white absolute top-1/2 md:top-[35%] lg:top-1/2 left-[45%] bg-khaki rounded-full flex items-center justify-center cursor-pointer z-[1] "
              onClick={() => setToggler(!toggler)}
            >
              <BsPlay className="w-8 h-8" />
            </div>
            <span className=" top-[47%] md:top-[33%] lg:top-[48%] left-[42%] lg:left-[43.5%] border w-[90px] h-[90px] rounded-full absolute border-white video-animation"></span>
          </div>
          <FsLightbox
            toggler={toggler}
            sources={["https://youtu.be/fFDyoI73viQ?si=GbDzAagjoa_0Nv2x"]}
          />
        </div>
      </div>

      {/* Clients Feedback */}
      <section className="bg-[#f8f6f3] dark:bg-lightBlack py-20 lg:py-[120px]">
        <div className="Container  ">
          {/* Section heading */}
          <div
            className="flex items-start justify-between relative "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="space-y-3 md:w-[450px] xl:w-[550px] font-Garamond">
              <h5 className="text-base text-khaki leading-[26px] font-medium">
                CLIENTS FEEDBACK
              </h5>
              <h1 className="text-[22px] sm:text-3xl 2xl:text-[38px] leading-6 md:leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold uppercase">
                UNFILTERED FEEDBACK FROM GUESTS
              </h1>
            </div>
            <div className="hidden sm:flex items-center lg:space-x-5  space-x-3 ">
              <button className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki hover:border-none group">
                <BsChevronLeft className="w-5 h-5 text-[#cccbc8] group-hover:text-white " />
              </button>
              <button
                className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki
             hover:border-none group"
              >
                <BsChevronRight className="w-5 h-5 text-[#cccbc8]  group-hover:text-white" />
              </button>
            </div>
          </div>
          <hr className="w-full h-[2px] text-[#e8e8e8] dark:text-[#383838]  mt-10 " />

          {/* Clients Feedback  */}
          <div
            className="relative"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="mt-[60px] keen-slider " ref={sliderRef}>
              {/* slide - 1 */}
              <div className="keen-slider__slide number-slide1 group ">
                <div className="bg-white dark:bg-normalBlack group-hover:bg-khaki dark:hover:bg-khaki transition-all ease-in-out duration-500 p-[30px] relative before:absolute before:w-6 before:h-6 before:bg-white before:group-hover:bg-khaki  dark:before:bg-normalBlack before:rotate-45 before:left-[37px] before:-bottom-[13px] ">
                  <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                  </span>
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray group-hover:text-white  font-normal mt-7 ">
                  From the moment I arrived, I felt welcomed. The rooms were spotless, the staff was incredibly attentive, and the breakfast was simply amazing. I will definitely be returning!
                  </p>
                </div>
                <div className="flex items-center mt-10 lg:mt-[51px]">
                  <img src="/images/home-1/testi-author.png" alt="" />
                  <div className="ml-5 md:ml-6">
                    <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-[#041341] dark:text-white font-medium font-Garamond ">
                      Marii Brown
                    </h4>
                    <p className="text-sm sm:text-base leading-7 font-Lora font-normal text-gray dark:text-lightGray ">
                      Rome, Italy
                    </p>
                  </div>
                </div>
              </div>
              {/* slide - 2 */}
              <div className="keen-slider__slide number-slide1 group ">
                <div className="bg-white dark:bg-normalBlack group-hover:bg-khaki dark:hover:bg-khaki transition-all ease-in-out duration-500 p-[30px] relative before:absolute before:w-6 before:h-6 before:bg-white before:group-hover:bg-khaki  dark:before:bg-normalBlack before:rotate-45 before:left-[37px] before:-bottom-[13px] ">
                  <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                  </span>
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray group-hover:text-white  font-normal mt-7 ">
                  This hotel exceeded my expectations! The smart card lock system made me feel secure, the WiFi was fast, and the room service was top-notch. A perfect blend of luxury and convenience!
                  </p>
                </div>
                <div className="flex items-center mt-10 lg:mt-[51px]">
                  <img src="/images/home-1/testi-author.png" alt="" />
                  <div className="ml-5 md:ml-6">
                    <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-[#041341] dark:text-white font-medium font-Garamond ">
                      John Azi
                    </h4>
                    <p className="text-sm sm:text-base leading-7 font-Lora font-normal text-gray dark:text-lightGray ">
                      Canada
                    </p>
                  </div>
                </div>
              </div>
              {/* slide - 3 */}
              <div className="keen-slider__slide number-slide1 group ">
                <div className="bg-white dark:bg-normalBlack group-hover:bg-khaki dark:hover:bg-khaki transition-all ease-in-out duration-500 p-[30px] relative before:absolute before:w-6 before:h-6 before:bg-white before:group-hover:bg-khaki  dark:before:bg-normalBlack before:rotate-45 before:left-[37px] before:-bottom-[13px] ">
                  <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                    <FaStar
                      className="text-khaki group-hover:text-white"
                      size={18}
                    />
                  </span>
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray group-hover:text-white  font-normal mt-7 ">
                  Staying here felt like being at home, but with elegant service. The atmosphere was warm, the facilities were modern, and the staff went above and beyond to make my stay special.
                  </p>
                </div>
                <div className="flex items-center mt-10 lg:mt-[51px]">
                  <img src="/images/home-1/testi-author.png" alt="" />
                  <div className="ml-5 md:ml-6">
                    <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-[#041341] dark:text-white font-medium font-Garamond ">
                      Aning Richmond
                    </h4>
                    <p className="text-sm sm:text-base leading-7 font-Lora font-normal text-gray dark:text-lightGray ">
                      Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blog */}

      <div className=" dark:bg-normalBlack">
        <section className="Container py-20 lg:py-[120px]">
          {/* Section Header */}
          <div
            className=" text-center mx-auto  px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2 mb-4  ">
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
              <img
                src="/images/home-1/section-shape1.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[44px] lg:leading-[52px] text-lightBlack dark:text-white  font-Garamond font-semibold uppercase mb-[8px]">
              LATEST POST FROM BLOG
            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base">
              Proactively morph optimal infomediaries rather than accurate
              expertise. Intrinsicly progressive resources rather than
              resource-leveling
            </p>
          </div>
          {/* all blogs are here */}
          <div className="relative">
            <div className="mt-14 2xl:mt-[60px] keen-slider" ref={sliderRef}>
              {/* slide - 1 */}
              <div className="keen-slider__slide number-slide1 ">
                {/* card one */}
                <div
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src="/images/home-1/blog-1.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="py-6 px-[30px] lg:px-5 xl:px-[25px] ">
                      <div className="flex items-center space-x-6">
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          August 10, 2023
                        </p>
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          Interior
                        </p>
                      </div>
                      <Link to="/blog">
                        <h2 className="text-xl sm:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                          Luxury Hotel for Traveling Spot USA, California
                        </h2>
                      </Link>
                    </div>
                    <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-2 lg:py-3">
                      <div className="px-[30px] flex items-center justify-between ">
                        <div className="">
                          <span className=" text-sm sm:text-base flex items-center ">
                            <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                              Read More
                            </span>
                          </span>
                        </div>
                        <span className="">
                          <BsArrowRight
                            className="text-gray dark:text-lightGray group-hover:text-khaki"
                            size={"24px"}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* slide - 2 */}
              <div className="keen-slider__slide number-slide1 ">
                <div
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src="/images/home-1/blog-2.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="py-6 px-[30px] lg:px-5 xl:px-[25px] ">
                      <div className="flex items-center space-x-6">
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          August 10, 2023
                        </p>
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          Interior
                        </p>
                      </div>
                      <Link to="/blog">
                        <h2 className="text-xl sm:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                          Luxury Hotel for Traveling Spot USA, California
                        </h2>
                      </Link>
                    </div>
                    <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-2 lg:py-3">
                      <div className="px-[30px] flex items-center justify-between ">
                        <div className="">
                          <span className=" text-sm sm:text-base flex items-center ">
                            <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                              Read More
                            </span>
                          </span>
                        </div>
                        <span className="">
                          <BsArrowRight
                            className="text-gray dark:text-lightGray group-hover:text-khaki"
                            size={"24px"}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* slide - 3 */}
              <div className="keen-slider__slide number-slide1 ">
                <div
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src="/images/home-1/blog-3.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="py-6 px-[30px] lg:px-5 xl:px-[25px] ">
                      <div className="flex items-center space-x-6">
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          August 10, 2023
                        </p>
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          Interior
                        </p>
                      </div>
                      <Link to="/blog">
                        <h2 className="text-xl sm:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                          Luxury Hotel for Traveling Spot USA, California
                        </h2>
                      </Link>
                    </div>
                    <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-2 lg:py-3">
                      <div className="px-[30px] flex items-center justify-between ">
                        <div className="">
                          <span className=" text-sm sm:text-base flex items-center ">
                            <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                              Read More
                            </span>
                          </span>
                        </div>
                        <span className="">
                          <BsArrowRight
                            className="text-gray dark:text-lightGray group-hover:text-khaki"
                            size={"24px"}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
