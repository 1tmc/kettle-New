import { HiArrowLongRight } from "react-icons/hi2";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="">
      <BreadCrumb title="services" />

      {/* service page content */}
      <div className="dark:bg-mediumBlack ">
        <section className="Container py-[120px] md:py-0 md:pb-[120px] lg:py-[120px]">
          {/* section title and button */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-3 sm:px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" md:w-[450px] font-Garamond">
              <h5 className="text-base text-khaki leading-[26px] font-medium mb-[14px]  ">
                FACILITIES
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px]  text-lightBlack dark:text-white font-semibold ">
                ENJOY BEST QUALITY FACILITIES & SERVICES
              </h1>
            </div>
            <div className="mt-5 md:mt-0">
              <Link to="/our_team">
                <button className="btn-items">view more item</button>
              </Link>
            </div>
          </div>
          {/* facilities container */}
          <div className="">
            {/* facilities section -1  */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <img
                  src="/images/home-1/facilities-1.png"
                  alt=""
                  className="w-full h-full"
                />
                <div className=" hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    01
                  </h2>
                </div>
              </div>
              <div className="relative font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                  Pickup and Drop-off
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/service_details">Our Pickup</Link>
                </h1>

                <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                  We are ready to pick you up any where in the country. Similarly drop you off per your request.
                </p>
                <Link to="/service_details">
                  <HiArrowLongRight
                    size={30}
                    className="text-gray hover:text-khaki"
                  />
                </Link>
              </div>
            </div>

            {/* facilities section - 2 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                  Wifi & Smart Lock
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/service_details">Free Wifi & Smart Lock</Link>
                </h1>

                <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  From top-speed bandwidth wifi to smart card lock doors, we have you covered. This facility is available in all our rooms 24/7
                </p>
                <Link to="/service_details">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>

              <div className="w-full h-[100%] md:pl-[30px] relative mt-5 md:mt-0">
                <img
                  src="/images/home-1/facilities-thumb-2.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    02
                  </h1>
                </div>
              </div>
            </div>
            {/* facilities section - 3 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <img
                  src="/images/home-1/facilities-thumb-3.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    03
                  </h2>
                </div>
              </div>
              <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                  FOODS
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/service_details">The Restaurant Center</Link>
                </h1>

                <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] relative before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  You are entitled to breakfast when you lodge in any of our rooms. However, the restaurant is available whenever you need a nutritious and delicious meal. 
                </p>
                <Link to="/service_details">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>
            </div>

            {/* facilities section - 4 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                  Bar & Vendor
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/service_details">Our Bar & Vendor</Link>
                </h1>

                <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Experience a vibrant bar and vendor service offering a selection of refreshing drinks and curated local products. Enjoy quality service in a lively and welcoming atmosphere.
                </p>
                <Link to="/service_details">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>

              <div className="w-full h-[100%] md:pl-[30px] relative mt-5 md:mt-0">
                <img
                  src="/images/home-1/facilities-thumb-4.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    04
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
