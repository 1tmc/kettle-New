import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "../../Components4/Testimonial/testimonials.css";
import "keen-slider/keen-slider.min.css";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
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
    <section className="bg-[url('/images/home-1/testi-bg.jpg')] bg-[rgba(30,30,30,0.4)] dark:bg-[rgba(30,30,30,0.6)] bg-opacity-40 grid items-center justify-center bg-no-repeat bg-cover">
      <div className="Container py-20 lg:py-[120px]">
        {/* section title */}
        <div
          className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px]  2xl:px-[335px] mx-auto px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Section logo */}
          <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5">
            <hr className="w-[100px] h-[1px]  text-[#473f39] " />
            <img
              src="/images/home-1/section-shape1.png"
              alt="room_section_logo"
              className="w-[50px] h-[50px]"
            />
            <hr className="w-[100px] h-[1px]  text-[#473f39] " />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-white mt-[20px] mb-[16px] font-Garamond font-semibold uppercase">
            Customer’s Testimonial
          </h1>
          <p className="font-Lora leading-7 lg:leading-[26px] text-white font-normal text-sm sm:text-base">
            These are unfiltered Testimonials from some clients who decided to share their review with us. Do not forget you can leave your review aswell after visiting.
          </p>
        </div>

        {/* very small screen Show and 567px hidden */}
        <div
          className="mt-14 sm:hidden px-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Small device show one testimonials section */}
          <div className="py-[10px] pt-4 sm:hidden">
            <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%]  before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 sm:hidden">
              {/* quote icon */}
              <img
                src="/images/home-1/testi-quote.png"
                alt=""
                className="absolute  right-3 xl:right-10 -top-8"
              />

              {/* rating icon */}
              <ul className="flex items-center text-khaki space-x-[4px]">
                <li>
                  <FaStar size={"16px"} />
                </li>
                <li>
                  <FaStar size={"16px"} />
                </li>
                <li>
                  <FaStar size={"16px"} />
                </li>
                <li>
                  <FaStar size={"16px"} />
                </li>
                <li>
                  <FaStar size={"16px"} />
                </li>
              </ul>
              <p className="font-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                “Kettle River Inn & Suites exceeded my expectations! The rooms were spotless, the bed was incredibly comfortable, and the staff went above and beyond to make my stay perfect. I’ll definitely be coming back”
              </p>
              <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

              <div className="flex items-center space-x-6 ">
                <img
                  src="/images/home-1/testi-author.png"
                  className="w-[65px] h-[65px]"
                  alt=""
                />

                <div className="">
                  <h4 className="text-base lg:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                    Esther Smith
                  </h4>
                  <p className="pt-1 text-sm md:text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center">
                    <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                    Visitor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* testimonial */}
        <div
          className="mt-14 2xl:mt-[60px] relative keen-slider  hidden sm:block"
          ref={sliderRef}
        >
          {/* slider one */}
          <div className="keen-slider__slide number-slide1 hidden sm:block">
            <div
              className="py-[10px] pt-10 hidden sm:block"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%]  before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 hidden sm:block">
                {/* quote icon */}
                <img
                  src="/images/home-1/testi-quote.png"
                  alt=""
                  className="absolute  right-3 xl:right-10 -top-8"
                />

                {/* rating icon */}
                <ul className="flex items-center text-khaki space-x-[4px]">
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                </ul>
                <p className="font-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                  “From the moment I arrived, I felt welcomed. The breakfast was delicious, the WiFi was fast, and the smart card lock system made everything seamless. A truly enjoyable experience!”
                </p>
                <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                <div className="flex items-center space-x-6 ">
                  <img
                    src="/images/home-1/testi-author-2.png"
                    className="w-[65px] h-[65px]"
                    alt=""
                  />

                  <div className="">
                    <h4 className="text-base lg:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                      Marina Trange
                    </h4>
                    <p className="pt-1 text-sm md:text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center">
                      <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                      Visitor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider two */}
          <div className="keen-slider__slide number-slide1 hidden sm:block">
            <div
              className="py-[10px] pt-10 hidden sm:block"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%]  before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 hidden sm:block">
                {/* quote icon */}
                <img
                  src="/images/home-1/testi-quote.png"
                  alt=""
                  className="absolute  right-3 xl:right-10 -top-8"
                />

                {/* rating icon */}
                <ul className="flex items-center text-khaki space-x-[4px]">
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                </ul>
                <p className="font-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                  “I stayed here during a business trip, and it was the perfect balance of relaxation and convenience. The room service was prompt, and the overall atmosphere was peaceful. Highly recommend!”
                </p>
                <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                <div className="flex items-center space-x-6 ">
                  <img
                    src="/images/home-1/call-do-action-img.png"
                    className="w-[65px] h-[65px]"
                    alt=""
                  />

                  <div className="">
                    <h4 className="text-base lg:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                      Phil Ellie
                    </h4>
                    <p className="pt-1 text-sm md:text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center">
                      <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                      Manger
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider three */}
          <div className="keen-slider__slide number-slide1 hidden sm:block">
            <div
              className="py-[10px] pt-10 hidden sm:block"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%]  before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 hidden sm:block">
                {/* quote icon */}
                <img
                  src="/images/home-1/testi-quote.png"
                  alt=""
                  className="absolute  right-3 xl:right-10 -top-8"
                />

                {/* rating icon */}
                <ul className="flex items-center text-khaki space-x-[4px]">
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                </ul>
                <p className="font-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                  “Professionally repurpose flexible testing procedures via
                  molla in customer service. Dynamically reconceptualize
                  value-added the systems before manufactured products.
                  Enthusiastically envisioneer emerging best”
                </p>
                <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                <div className="flex items-center space-x-6 ">
                  <img
                    src="/images/home-1/testi-author.png"
                    className="w-[65px] h-[65px]"
                    alt=""
                  />

                  <div className="">
                    <h4 className="text-base lg:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                      Brandon Mack
                    </h4>
                    <p className="pt-1 text-sm md:text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center">
                      <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                      Manger
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slide changer */}
        <div className="mx-auto  ">
          {loaded && instanceRef.current && (
            <div className="dots flex items-center justify-center">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
