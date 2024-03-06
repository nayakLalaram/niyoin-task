import React from "react";
import headImg from "../image/img-header.png";
import headImgtwo from "../image/girls-image.png";

import headImgthree from "../image/girls-image-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import payment from "../image/payment-1.avif";
import paymenttwo from "../image/payment-2.avif";
import paymentthree from "../image/payment-3.avif";
import paymentfour from "../image/payment-4.avif";
const Payroll = () => {
  return (
    <div className="bg-[#f3f7ff]">
      <section className="max-w-6xl mx-auto sm:px-10 px-6 pt-24 relative">
        <div className="hidden sm:block">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              {" "}
              <div className="flex">
                <div className="mt-12">
                  <h2 className="font-Lato sm:text-5xl text-2xl font-semibold text-blue-600">
                    Build Customer Trust <br />{" "}
                    <span className="text-black">with Razorpay in seconds</span>
                  </h2>
                  <p className="text-sm font-Lato text-[#5f6c7d] py-6">
                    RSPL - RBI Authorized PA | Safe & Secure Payments
                  </p>
                  <div className="flex gap-6">
                    <button className="font-Lato font-semibold text-sm bg-blue-500 text-white px-8 py-3 flex items-center ">
                      Sign Up Now{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        className="mx-2"
                        height="16"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                      </svg>
                    </button>
                    <button className="font-Lato font-semibold text-sm text-blue-500">
                      Know More
                    </button>
                  </div>
                </div>
                <div className="hidden sm:block absolute left-56">
                  <img
                    src={headImg}
                    className="w-auto h-[500px]"
                    alt="header-image"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="flex">
                <div className="mt-12">
                  <h2 className="font-Lato sm:text-5xl text-2xl font-semibold text-blue-600">
                    Advanced Payment Solutions
                    <br />{" "}
                    <span className="text-black">
                      for India's finest disruptors
                    </span>
                  </h2>
                  <p className="text-sm font-Lato text-[#5f6c7d] py-6">
                    RSPL - RBI Authorized PA | Safe & Secure Payments
                  </p>
                  <div className="flex gap-6">
                    <button className="font-Lato font-semibold text-sm bg-blue-500 text-white px-8 py-3 flex items-center ">
                      Sign Up Now{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        className="mx-2"
                        height="16"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                      </svg>
                    </button>
                    <button className="font-Lato font-semibold text-sm text-blue-500">
                      Know More
                    </button>
                  </div>
                </div>
                <div className="hidden sm:block absolute left-56">
                  <img
                    src={headImgtwo}
                    className="w-auto h-[500px]"
                    alt="header-image"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="flex">
                <div className="mt-12">
                  <h2 className="font-Lato sm:text-5xl text-2xl font-semibold text-blue-600">
                    Build Customer Trust <br />{" "}
                    <span className="text-black">with Razorpay in seconds</span>
                  </h2>
                  <p className="text-sm font-Lato text-[#5f6c7d] py-6">
                    RSPL - RBI Authorized PA | Safe & Secure Payments
                  </p>
                  <div className="flex gap-6">
                    <button className="font-Lato font-semibold text-sm bg-blue-500 text-white px-8 py-3 flex items-center ">
                      Sign Up Now{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        className="mx-2"
                        height="16"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                      </svg>
                    </button>
                    <button className="font-Lato font-semibold text-sm text-blue-500">
                      Know More
                    </button>
                  </div>
                </div>
                <div className="hidden sm:block absolute left-56">
                  <img
                    src={headImgthree}
                    className="w-auto h-[500px]"
                    alt="header-image"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="sm:hidden">
          <div className="flex">
            <div className="mt-12">
              <h2 className="font-Lato sm:text-5xl text-2xl font-semibold text-blue-600">
                Build Customer Trust <br />{" "}
                <span className="text-black">with Razorpay in seconds</span>
              </h2>
              <p className="text-sm font-Lato text-[#5f6c7d] py-6">
                RSPL - RBI Authorized PA | Safe & Secure Payments
              </p>
              <div className="flex gap-6">
                <button className="font-Lato font-semibold text-sm bg-blue-500 text-white px-8 py-3 flex items-center ">
                  Sign Up Now{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mx-2"
                    height="16"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </button>
                <button className="font-Lato font-semibold text-sm text-blue-500">
                  Know More
                </button>
              </div>
            </div>
            <div className="hidden sm:block absolute left-56">
              <img
                src={headImg}
                className="w-auto h-[500px]"
                alt="header-image"
              />
            </div>
          </div>
        </div>
        <div className="sm:mt-60 mt-32">
          <input
            type="text"
            className="bg-white shadow-lg h-14 w-full rounded-lg px-4 placeholder:font-Lato placeholder:text-black  "
            placeholder="i am Search bar"
          />
        </div>

        <div className="pt-20">
          <h2 className="font-Lato sm:text-5xl text-2xl font-semibold text-black">
            The all in one{" "}
            <span className="text-[#01b256]">finance platform</span> <br />{" "}
            you've been looking for
          </h2>

          <ul className="flex sm:flex-row flex-col  sm:space-x-6 space-y-2  sm:items-center sm:py-12 py-6 text-black">
            <li className="text-sm font-Lato text-[#5f6c7d]  hover:text-blue-500  border-r-2 sm:px-6 bordet-[#5f6c7d]">
              Wi th Razorpay, you can:
            </li>
            <li className="text-sm font-Lato text-black font-semibold hover:text-blue-500 ">
              Accept Payments
            </li>
            <li className="text-sm font-Lato text-black font-semibold hover:text-blue-500 ">
              Make Payouts
            </li>
            <li className="text-sm font-Lato text-black font-semibold hover:text-blue-500 ">
              Start Business Making
            </li>
            <li className="text-sm font-Lato text-black font-semibold hover:text-blue-500  ">
              Automake Payroll
            </li>
            <li className="text-sm font-Lato text-black font-semibold hover:text-blue-500 ">
              Get credit and loss
            </li>
            <li className="text-sm font-Lato text-black font-semibold">
              Pricing
            </li>
          </ul>
        </div>
        <div className="bg-white  px-10">
          <h2 className="font-Lato text-black font-semibold text-3xl py-8">
            Accept Payments
          </h2>
          <div className="grid sm:grid-cols-4 grid-cols-1 gap-2">
            <div className="bg-white shadow-sm">
              <img src={payment} alt="img-one" className="w-auto h-64" />
              <div className="group">
                <h2 className="text-lg font-semibold font-Lato py-3 px-3">
                  Payment Getway
                </h2>
                <p className="text-sm px-3">
                  Lorem ipsum dolor, sit consectetur <br /> adipisicing elit.
                </p>
                <div className="invisible group-hover:visible  py-3 flex gap-6">
                  <button className="font-Lato font-semibold text-xs bg-blue-500 text-white px-4 py-2 my-2 flex items-center ">
                    Sign Up Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mx-2"
                      height="16"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </button>
                  <button className="font-Lato font-semibold text-xs text-blue-500">
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm">
              <img src={payment} alt="img-one" className="w-auto h-64" />
              <div className="group">
                <h2 className="text-lg font-semibold font-Lato py-3 px-3">
                  Payment Getway
                </h2>
                <p className="text-sm px-3">
                  Lorem ipsum dolor, sit consectetur <br /> adipisicing elit.
                </p>
                <div className="invisible group-hover:visible  py-3 flex gap-6">
                  <button className="font-Lato font-semibold text-xs bg-blue-500 text-white px-4 py-2 my-2 flex items-center ">
                    Sign Up Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mx-2"
                      height="16"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </button>
                  <button className="font-Lato font-semibold text-xs text-blue-500">
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm">
              <img src={payment} alt="img-one" className="w-auto h-64" />
              <div className="group">
                <h2 className="text-lg font-semibold font-Lato py-3 px-3">
                  Payment Getway
                </h2>
                <p className="text-sm px-3">
                  Lorem ipsum dolor, sit consectetur <br /> adipisicing elit.
                </p>
                <div className="invisible group-hover:visible  py-3 flex gap-6">
                  <button className="font-Lato font-semibold text-xs bg-blue-500 text-white px-4 py-2 my-2 flex items-center ">
                    Sign Up Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mx-2"
                      height="16"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </button>
                  <button className="font-Lato font-semibold text-xs text-blue-500">
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm">
              <img src={payment} alt="img-one" className="w-auto h-64" />
              <div className="group">
                <h2 className="text-lg font-semibold font-Lato py-3 px-3">
                  Payment Getway
                </h2>
                <p className="text-sm px-3">
                  Lorem ipsum dolor, sit consectetur <br /> adipisicing elit.
                </p>
                <div className="invisible group-hover:visible  py-3 flex gap-6">
                  <button className="font-Lato font-semibold text-xs bg-blue-500 text-white px-4 py-2 my-2 flex items-center ">
                    Sign Up Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mx-2"
                      height="16"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </button>
                  <button className="font-Lato font-semibold text-xs text-blue-500">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payroll;
