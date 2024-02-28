import React from "react";

const PrortFolio = () => {
  return (
    <div>
      <div class="bg-banner_image bg-no-repeat bg-center bg-cover bg-fixed relative overflow-hidden">
        <header class="header relative w-full border-b border-b-clr_cusborder z-10 xxl:after:block after:hidden after:absolute after:right-[calc(20%-30px)] after:top-0 after:w-[1px] after:h-full after:content:[''] after:bg-clr_cusborder xxl:before:block before:hidden before:absolute before:left-[calc(15%-40px)] before:top-0 before:w-[1px] before:h-full before:content:[''] before:bg-clr_cusborder">
          <div class="xxl:max-w-[1805px] xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
            <div class="flex justify-between items-center w-full relative py-5">
              <div class="main__logo">
                <a href="index.html" class="block xl:w-[150px] w-[100px]">
                  <img
                    src="./assets/img/logo/logo.png"
                    alt="logo"
                    class="w-full h-full object-contain"
                  />
                </a>
              </div>
              <ul class="menus flex lg:flex-row flex-col lg:items-center opacity-0 invisible lg:opacity-100 lg:visible lg:gap-[14px] gap-0 fixed z-50 lg:static top-20 left-0 w-full lg:w-auto bg-clr_subtitle min-h-screen lg:min-h-full lg:bg-transparent duration-500 origin-top px-3">
                <li class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                  <a
                    href="./index.html"
                    class="text-white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                  >
                    Home
                  </a>
                </li>
                <li class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                  <a
                    href="./index.html#about"
                    class="text-white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                  >
                    About
                  </a>
                </li>
                <li class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                  <a
                    href="./index.html#projects"
                    class="text-white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                  >
                    Work
                  </a>
                </li>
                <li class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown dropdown">
                  <a
                    href="./index.html#services"
                    class="text-white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                  >
                    Services
                  </a>
                  <ul class="lg:absolute lg:block hidden static top-[50px] left-0 w-[250px] px-5 py-2 leading-9 z-50 transition-all lg:bg-white lg:shadow-mainShadow justify-center gap-[5px] before:absolute before:content-[''] before:-top-[17.6px] before:left-[26px] before:w-0 before:h-0 before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 dropdownItem">
                    <li>
                      <a
                        href="./services.html"
                        class="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="./serviceDetails.html"
                        class="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                      >
                        Service Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                  <a
                    href="./index.html#testimonial"
                    class="text-white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                  >
                    TESTIMONIAL
                  </a>
                </li>
                <li class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown dropdown">
                  <a
                    href="./index.html#blog"
                    class="text-white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                  >
                    Blog
                  </a>
                  <ul class="lg:absolute lg:block hidden static top-[50px] left-0 w-[250px] px-5 py-2 leading-9 z-50 transition-all lg:bg-white lg:shadow-mainShadow justify-center gap-[5px] before:absolute before:content-[''] before:-top-[17.6px] before:left-[26px] before:w-0 before:h-0 before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 dropdownItem">
                    <li>
                      <a
                        href="./blogs.html"
                        class="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="./blogDetails.html"
                        class="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                      >
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                  <a
                    href="./contact.html"
                    class="text-white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div class="flex items-center gap-4">
                <a
                  href=""
                  class="flex items-center gap-2 xxl:px-[26px] xxl:py-[19px] lg:px-[16px] lg:py-[9px] px-[11px] py-[7px] font-medium text-lg capitalize relative bg-clr_base overflow-hidden rounded-[5px] transition-all text-clr_subtitle max-h-[58px] before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
                >
                  <span class="text-sm xl:text-lg z-10 relative duration-500">
                    Let's Talk
                  </span>
                  <span>
                    <i class="bi bi-arrow-right text-xl z-10 relative duration-500"></i>
                  </span>
                </a>
                <div class="header-bar lg:hidden">
                  <i class="bi bi-x text-[32px] text-white cursor-pointer hidden menuCloseIcon"></i>

                  <i class="bi bi-list text-[32px] text-white cursor-pointer menuActiveIcon"></i>
                </div>
                <div class="drawerActiveIcon xl:w-[58px] xl:h-[58px] w-[39px] h-[39px] rounded-md flex items-center justify-center bg-clr_white cursor-pointer">
                  <i class="bi bi-list lg:text-[32px] text-[22px] text-clr_title"></i>
                </div>
              </div>
            </div>

            <div class="w-80 h-full fixed z-50 top-0 duration-500 overflow-y-scroll bg-black -right-80 drawer">
              <div class="flex justify-center items-center w-10 h-10 m-[10px] bg-clr_base ml-auto p-[5px] rounded-md hover:cursor-pointer drawerCloseIcon">
                <i class="bi-x-lg text-[22px] text-clr_mtitle"> </i>
              </div>
              <div class="grid py-10 px-5">
                <a href="" class="mb-5">
                  <img src="./assets/img/logo/logo.png" alt="img" />
                </a>
                <p class="text-sm mb-10 text-clr_pra break-words leading-normal">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  consectetur, aliquam quaerats voluptatem. Ut enim ad minima
                  veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
                  velit esse quam nihil
                </p>
                <div class="grid gap-6 mb-10">
                  <div>
                    <div>
                      <span class="block mb-2 uppercase text-clr_pra font-bold text-sm">
                        address
                      </span>
                      <span class=" capitalize text-white font-medium leading-[120%]">
                        Victoria Street London,
                      </span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span class="block mb-2 uppercase text-clr_pra font-bold text-sm">
                        email
                      </span>
                      <a
                        href=""
                        class=" capitalize text-white font-medium leading-[120%]"
                      >
                        matias999@.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span class="block mb-2 uppercase text-clr_pra font-bold text-sm">
                        call now
                      </span>
                      <a
                        href=""
                        class=" capitalize text-white font-medium leading-[120%]"
                      >
                        +98 4758 2154 021
                      </a>
                    </div>
                  </div>
                </div>
                <div class="lg:mb-20 mb-14 relative">
                  <ul class="social flex gap-[14px]">
                    <li>
                      <a
                        href=""
                        class="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center"
                      >
                        <i class="bi-facebook text-clr_title"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        class="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center"
                      >
                        <i class="bi-twitter text-clr_title"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        class="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center"
                      >
                        <i class="bi-linkedin text-clr_title"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        class="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center"
                      >
                        <i class="bi-youtube text-clr_title"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <a
                  href=""
                  class="flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
                >
                  <span class="z-10 relative duration-500">
                    <i class="bi-chevron-right"> </i>
                  </span>
                  <span class="z-10 relative duration-500"> Let's Talk </span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <section id="home">
          <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
            <div class="grid md:grid-cols-[70%_auto] gap-5">
              <div>
                <div class="banner__content xl:pt-[140px] xl:pb-[180px] lg:pt-[120px] lg:pb-[150px] md:pt-[90px] md:pb-[100px] sm:pt-[80px] sm:pb-[85px] py-[60px] xl:pl-10 pl-0">
                  <a
                    href=""
                    class="bn__currently md:text-[24px] text-base leading-[140%] md:mb-[50px] mb-6 border-b border-b-clr_white text-white inline-block pb-4 hover:text-clr_base hover:border-b-clr_base capitalize"
                  >
                    <span class="block">
                      {" "}
                      Currently available for freelance{" "}
                    </span>
                    <span class="flex gap-4 items-center">
                      worldwide
                      <i class="">
                        <i class="bi bi-arrow-up-right"></i>
                      </i>
                    </span>
                  </a>
                  <h1 class="lg:text-[100px] md:text-[60px] sm:text-[45px] text-[34px] font-semibold sm:mb-[50px] mb-[30px] leading-[120%]">
                    <span class="hone text-white"> Creative Visual</span>
                    <span class="block designers" data-text="Designer">
                      Designer
                    </span>
                  </h1>
                  <div class="flex items-center gap-6">
                    <img
                      src="./assets/img/banner/bn-arrow.png"
                      class="vid__arrow animate-cir5"
                      alt="img"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=zFuJgOiUEso&amp;ab_channel=SujithRajendran"
                      class="video__80 video-btn cursor-pointer relative xl:w-20 xl:h-20 sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] flex justify-center items-center rounded-full border border-clr_white before:absolute before:border-2 before:border-clr_white before:w-full before:h-full before:content:[''] before:rounded-full before:animate-scales"
                    >
                      <i class="text-white sm:text-[42px] text-[30px]">
                        <i class="bi bi-play-fill"></i>
                      </i>
                    </a>
                    <span class="proces sm:text-xl text-base text-white w-[67px]">
                      Work Process
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  data-aos="fade-up-right"
                  data-aos-duration="300"
                  class="banner__thumb absolute xxl:left-[calc(50%--120px)] left-[calc(50%--80px)] bottom-0"
                >
                  <img
                    src="./assets/img/banner/banner-man.png"
                    alt="man-img"
                    class="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="banner__leftinfo hidden absolute -left-[40px] top-1/2 -translate-y-1/2 xl:grid gap-[220px]">
            <div class="left__infomobile rotate-90 flex items-center justify-center gap-[16px]">
              <a href="">
                <img
                  src="./assets/img/banner/dial.png"
                  alt="img"
                  class="-rotate-90 w-4"
                />
              </a>
              <a href="" class="text-white">
                (+02)-574-328-301
              </a>
            </div>
            <div class="right__infoscroll flex items-center justify-center gap-[50px] rotate-90 mb-[0px]">
              <a href="" class="scroll text-clr_pra uppercase text-[15px]">
                scroll down
              </a>
              <a href="" class="scroll__bar -rotate-90">
                <img
                  src="./assets/img/banner/scroll-down.png"
                  alt="img"
                  class="w-5"
                />
              </a>
            </div>
          </div>
          <div class="banner__rightinfo hidden absolute right-0 top-[55%] -translate-y-1/2 xl:grid gap-[150px]">
            <div class="right__infoscroll flex items-center justify-center gap-[50px] rotate-90">
              <a href="" class="scroll text-clr_pra uppercase text-[15px]">
                Follow Me
              </a>
              <a href="" class="scroll__bar -rotate-90">
                <img
                  src="./assets/img/banner/scroll-down.png"
                  alt="img"
                  class="w-5"
                />
              </a>
            </div>
            <div class="banner__xlsocial">
              <ul class="banner__soci grid justify-center lg:gap-[14px] gap-[10px]">
                <li>
                  <a
                    href=""
                    class="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center"
                  >
                    <i class="bi bi-facebook text-white"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    class="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center"
                  >
                    <i class="bi bi-twitter text-white"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    class="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center"
                  >
                    <i class="bi bi-youtube text-white"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    class="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center"
                  >
                    <i class="bi bi-linkedin text-white"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    class="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center"
                  >
                    <i class="bi bi-instagram text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div class="relative marquee-wrapper text-slider bg-clr_base h-[90px] overflow-hidden">
        <div class="slide-track">
          <div class="slide">
            sdafLNfalskd
            <img src="./assets/img/banner/ts1.png" alt="" />
          </div>
          <div class="slide">
            vxzKNVC
            <img src="./assets/img/banner/ts2.png" alt="" />
          </div>
          <div class="slide">
            dzFDSM:
            <img src="./assets/img/banner/ts3.png" alt="" />
          </div>
          <div class="slide">
            VAXCz
            <img src="./assets/img/banner/ts4.png" alt="" />
          </div>
          <div class="slide">
            <img src="./assets/img/banner/ts1.png" alt="" />
          </div>
          <div class="slide">
            <img src="./assets/img/banner/ts2.png" alt="" />
          </div>
          <div class="slide">
            <img src="./assets/img/banner/ts3.png" alt="" />
          </div>
          <div class="slide">
            <img src="./assets/img/banner/ts4.png" alt="" />
          </div>
        </div>
      </div>
      <section class="about__section pt_120 pb_120" id="about">
        <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
          <div class="personal__head text-center mx-auto xl:mb-[60px] md:mb-[50px] mb-[30px]">
            <img
              src="./assets/img/about/section-star.png"
              class="mb-[30px] animate-spin mx-auto aos-init"
              alt="star"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <p
              class="descrp lg:text-[42px] md:text-[28px] sm:text-xl text-base font-medium text-clr_white lg:leading-[66px] aos-init"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              I'm David Matias, I'm a Brand &amp; Webflow Designer, Currently
              residing in the lush Victoria Street London, Matias operates
              globally and is ready to take on any design challenge.
            </p>
          </div>

          <div class="singletab">
            <ul class="tablinks flex items-center justify-center flex-wrap gap-5 mb-[100px]">
              <li>
                <button
                  data="about"
                  class="tablink rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center bg-[#1D1D1D] text-clr_white"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  data="experience"
                  class="tablink rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center bg-[#1D1D1D] text-clr_white"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  data="education"
                  class="tablink rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center bg-[#1D1D1D] text-clr_white"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  data="skills"
                  class="tablink rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center bg-clr_base text-clr_title"
                >
                  Skills
                </button>
              </li>
            </ul>

            <div class="tabcontents relative">
              <div
                data="about"
                class="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0"
              >
                <div class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
                  <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start align-items-center">
                    <div>
                      <div
                        class="about__onethumb w-full aos-init"
                        data-aos="zoom-in"
                        data-aos-duration="500"
                      >
                        <img
                          src="./assets/img/about/personal-infothumb.png"
                          alt="img"
                          class="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="about__onecontent lg:pl-10 pl-0">
                        <h2
                          class="text-[42px] font-semibold text-clr_white mb-5 aos-init"
                          data-aos="fade-up"
                          data-aos-duration="500"
                        >
                          Personal Info
                        </h2>
                        <p
                          class="text-lg text-clr_pra mb-0 aos-init"
                          data-aos="fade-up"
                          data-aos-duration="500"
                        >
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit consectetur, aliquam quaerats voluptatem. Ut enim
                          ad minima veniam, exercitationem laboriosam, nisi ut
                          aliquid ex ea autem velit esse quam nihil
                        </p>
                        <div class="mt-10">
                          <div class="">
                            <div
                              class="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between gap-6 aos-init"
                              data-aos="zoom-in"
                            >
                              <div class="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                                <div class="">
                                  <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                    Email
                                  </span>
                                  <a href="" class="text-xl text-clr_white">
                                    dev.mostafizar.com
                                  </a>
                                </div>
                              </div>
                              <div class="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                                <div class="">
                                  <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                    Phone
                                  </span>
                                  <a href="" class="text-xl text-clr_white">
                                    01575699193
                                  </a>
                                </div>
                              </div>
                              <div class="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                                <div class="">
                                  <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                    Address
                                  </span>
                                  <a href="" class="text-xl text-clr_white">
                                    Dahagram, Lalmonirhat
                                  </a>
                                </div>
                              </div>
                              <div class="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                                <div class="">
                                  <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                    Follow
                                  </span>
                                  <ul class="flex items-center xl:gap-4 gap-2">
                                    <li>
                                      <a href="" class="text-clr_white text-xl">
                                        <i class="bi-facebook"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="" class="text-clr_white text-xl">
                                        <i class="bi-twitter"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="" class="text-clr_white text-xl">
                                        <i class="bi-instagram"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="" class="text-clr_white text-xl">
                                        <i class="bi-youtube"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data="experience"
                class="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0"
              >
                <div class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
                  <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
                    <div>
                      <div class="about__onethumb">
                        <img
                          src="./assets/img/about/personal-infothumb.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="about__onecontent lg:pl-10 pl-0">
                        <h2 class="text-[42px] font-semibold text-clr_white mb-5">
                          Experience
                        </h2>
                        <p class="text-lg text-clr_pra mb-0">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit consectetur, aliquam quaerats voluptatem. Ut enim
                          ad minima veniam, exercitationem laboriosam, nisi ut
                          aliquid ex ea autem velit esse quam nihil
                        </p>
                        <div class="exprience__box lg:mt-[30px] mt-5">
                          <div class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                            <span class="md:text-lg text-base font-medium text-clr_base">
                              In 2011
                            </span>
                            <div class="expri__cont">
                              <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                                Software Engineer
                              </h4>
                              <p class="md:text-lg text-base text-clr_pra d-block">
                                UI Head &amp; Manager
                              </p>
                            </div>
                          </div>
                          <div class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                            <span class="md:text-lg text-base font-medium text-clr_base">
                              In 2016
                            </span>
                            <div class="expri__cont">
                              <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                                Product Designer
                              </h4>
                              <p class="md:text-lg text-base text-clr_pra d-block">
                                Head of Department
                              </p>
                            </div>
                          </div>
                          <div class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                            <span class="md:text-lg text-base font-medium text-clr_base">
                              In 2023
                            </span>
                            <div class="expri__cont">
                              <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                                Senior UI Designer
                              </h4>
                              <p class="md:text-lg text-base text-clr_pra d-block">
                                Fiverr.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data="education"
                class="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0"
              >
                <div class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
                  <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
                    <div>
                      <div class="about__onethumb">
                        <img
                          src="./assets/img/about/personal-infothumb.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="about__onecontent lg:pl-10 pl-0">
                        <h2 class="text-[42px] font-semibold text-clr_white mb-5">
                          Education
                        </h2>
                        <p class="text-lg text-clr_pra mb-0">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit consectetur, aliquam quaerats voluptatem. Ut enim
                          ad minima veniam, exercitationem laboriosam, nisi ut
                          aliquid ex ea autem velit esse quam nihil
                        </p>
                        <div class="exprience__box lg:mt-[30px] mt-5">
                          <div class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                            <span class="md:text-lg text-base font-medium text-clr_base">
                              2011 - 2013
                            </span>
                            <div class="expri__cont">
                              <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                                Programming Course
                              </h4>
                              <p class="md:text-lg text-base text-clr_pra d-block">
                                New York University
                              </p>
                            </div>
                          </div>
                          <div class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                            <span class="md:text-lg text-base font-medium text-clr_base">
                              2013 - 2016
                            </span>
                            <div class="expri__cont">
                              <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                                University Of Design
                              </h4>
                              <p class="md:text-lg text-base text-clr_pra d-block">
                                Kingston, United States
                              </p>
                            </div>
                          </div>
                          <div class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                            <span class="md:text-lg text-base font-medium text-clr_base">
                              2016 - 2018
                            </span>
                            <div class="expri__cont">
                              <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                                Web Design Course
                              </h4>
                              <p class="md:text-lg text-base text-clr_pra d-block">
                                New York University
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data="skills"
                class="tabitem w-full duration-700 z-10 opacity-100 translate-y-0"
              >
                <div class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
                  <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
                    <div>
                      <div class="about__onethumb">
                        <img
                          src="assets/img/about/personal-infothumb.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="about__onecontent">
                        <h2 class="text-[42px] font-semibold text-clr_white mb-5">
                          My Skills
                        </h2>
                        <p class="text-lg text-clr_pra mb-0">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit consectetur, aliquam quaerats voluptatem. Ut enim
                          ad minima veniam, exercitationem laboriosam, nisi ut
                          aliquid ex ea autem velit esse quam nihil
                        </p>
                        <div class="mt-10">
                          <div class="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between gap-6">
                            <div class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                              <div class="abox myskill__item flex items-center gap-6">
                                <div class="">
                                  <img
                                    src="assets/img/about/html.png"
                                    alt="img"
                                  />
                                </div>
                                <div class="mys">
                                  <span class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">
                                    HTML
                                  </span>
                                  <h1 class="font-semibold text-5xl text-clr_white">
                                    85%
                                  </h1>
                                </div>
                              </div>
                            </div>
                            <div class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                              <div class="abox myskill__item flex items-center gap-6">
                                <div class="">
                                  <img
                                    src="assets/img/about/figma.png"
                                    alt="img"
                                  />
                                </div>
                                <div class="mys">
                                  <span class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">
                                    Figma
                                  </span>
                                  <h1 class="font-semibold text-5xl text-clr_white">
                                    90%
                                  </h1>
                                </div>
                              </div>
                            </div>
                            <div class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                              <div class="abox myskill__item flex items-center gap-6">
                                <div class="">
                                  <img
                                    src="assets/img/about/word.png"
                                    alt="img"
                                  />
                                </div>
                                <div class="mys">
                                  <span class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">
                                    Wordpress
                                  </span>
                                  <h1 class="font-semibold text-5xl text-clr_white">
                                    95%
                                  </h1>
                                </div>
                              </div>
                            </div>
                            <div class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                              <div class="abox myskill__item flex items-center gap-6">
                                <div class="">
                                  <img
                                    src="assets/img/about/boot.png"
                                    alt="img"
                                  />
                                </div>
                                <div class="mys">
                                  <span class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">
                                    Bootstrap
                                  </span>
                                  <h1 class="font-semibold text-5xl text-clr_white">
                                    97%
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrortFolio;
