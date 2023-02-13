import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as landingImage from "src/assets/landing";
import * as partnerImage from "src/assets/partner";
import url from "src/config/url";
import * as commonUtils from "src/utils/commonUtils";
import "swiper/css/autoplay";

const HomeContainer = () => {
  const { role } = useSelector(state => state.user);
  const [processIndex, setProcessIndex] = useState(0);
  const [link, setLink] = useState(null);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 280px)": {
          slides: {
            spacing: 12,
            perView: 2,
            origin: "center",
          },
        },
        "(min-width: 640px)": {
          slides: {
            spacing: 16,
            perView: 2,
            origin: "center",
          },
        },
        "(min-width: 768px)": {
          slides: {
            spacing: 30,
            perView: 4,
            origin: "center",
          },
        },
        "(min-width: 1024px)": {
          slides: {
            spacing: 40,
            perView: 4,
            origin: "center",
          },
        },
      },
      slides: {
        spacing: 40,
        perView: 4,
        origin: "center",
      },
    },
    [
      slider => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const partnerList = [
    partnerImage.partner01Image,
    partnerImage.partner02Image,
    partnerImage.partner03Image,
    partnerImage.partner04Image,
    partnerImage.partner05Image,
    partnerImage.partner06Image,
    partnerImage.partner07Image,
    partnerImage.partner08Image,
    partnerImage.partner09Image,
    partnerImage.partner10Image,
    partnerImage.partner11Image,
    partnerImage.partner12Image,
    partnerImage.partner13Image,
    partnerImage.partner14Image,
    partnerImage.partner15Image,
    partnerImage.partner16Image,
  ];

  const tabContentList = [
    {
      index: 0,
      title: "Create a item",
      desc: "Consider the various categories and specifications and build up with your own custom packaging.",
      img: landingImage.flowCreateImage,
    },
    {
      index: 1,
      title: "Request quote",
      desc: "Select an item with sufficient specifications and request a quote with quantity, delivery.",
      img: landingImage.flowCreateImage,
    },
    // {
    //   index: 2,
    //   title: "Register quote",
    //   desc: "Take opportunities of new and diverse project by registering for a quote.",
    //   img: landingImage.flowCreateImage,
    // },
    {
      index: 2,
      title: "Submit order",
      desc: "Choose one of the different manufacturers that submitted your quote and place an order.",
      img: landingImage.flowCreateImage,
    },
  ];

  const tabChangeClickEvent = e => {
    e.preventDefault();
    const target = e.currentTarget;
    const value = Number(target.dataset.id);

    setProcessIndex(value);
  };

  useEffect(() => {
    if (commonUtils.checkBuyerType(role)) {
      setLink(url.buyer.managingOrder);
    } else if (commonUtils.checkSupplierType(role)) {
      setLink(url.supplier.myTransaction);
    } else {
      setLink(url.auth.signIn);
    }
  }, []);

  return (
    <>
      {/* <!-- section01 --> */}
      <div
        style={{ backgroundImage: `url(${landingImage.frontBgImage.src})` }}
        className={`relative flex h-full flex-col items-center justify-center overflow-hidden bg-cover bg-no-repeat pt-24 after:absolute after:bottom-0 after:h-24 after:w-full after:bg-gradient-to-t after:from-white after:content-['']`}
      >
        <div className="mb-6 flex flex-col justify-center gap-4 p-4 text-center">
          <h2
            className="text-[28px] font-extrabold sm:max-w-lg sm:text-[32px] lg:max-w-4xl lg:text-[52px]"
            data-aos="fade-up"
          >
            Innovative packaging manufacturing platform
          </h2>
          <p
            className="text-lg lg:text-2xl"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            for collaboration between Buyers and Suppliers
          </p>
          <Link
            href={`${link}`}
            className="mx-auto flex rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-6 text-xl font-semibold text-white shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get Started
          </Link>
        </div>
        <div className="relative z-10 flex justify-center">
          <Image
            src={landingImage.phoneImg02Image}
            className="-mr-16"
            alt=""
            data-aos="fade-right"
          />
          <Image src={landingImage.phoneImg01Image} alt="" data-aos="zoom-in" />
          <Image
            src={landingImage.phoneImg03Image}
            className="-ml-16"
            alt=""
            data-aos="fade-left"
          />
        </div>
      </div>
      {/* <!-- section02 --> */}
      <div className="mx-auto max-w-[1400px] border-t px-4 py-16 lg:border-t-0 lg:py-24">
        <div className="mb-6 lg:mb-10" data-aos="fade-up">
          <h3 className="text-2xl lg:text-2xl">
            More than 500 buyers and Supplier that Packposs has collaborated
            with
          </h3>
        </div>
        <ul
          className="grid grid-cols-2 border-t border-l sm:grid-cols-4 lg:grid-cols-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {partnerList.map((item, idx) => (
            <li className="border-r border-b" key={idx}>
              <Image src={item} alt="" className="m-auto" />
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- section03 --> */}
      <div className="mx-auto max-w-[1400px] border-t px-4 py-16 lg:border-t-0 lg:py-24">
        <div className="mb-6 lg:mb-10" data-aos="fade-up">
          <h3 className="text-xl lg:text-2xl">Who needs the Packposs?</h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-20">
          <div
            className="mb-12 flex flex-col lg:mb-0 lg:items-center"
            data-aos="flip-left"
          >
            <div className="mb-4 overflow-hidden rounded">
              <Image src={landingImage.buyerImage} alt="" />
            </div>
            <div className="relative z-[2] rounded bg-white lg:mx-6 lg:-mt-16 lg:max-w-xl lg:p-4">
              <h3
                className="mb-3 text-xl lg:text-2xl"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                Buyer
              </h3>
              <p data-aos="fade-up" data-aos-delay="100">
                <strong className="block">
                  {`Start a new project with the world's leading manufacturer.`}
                </strong>
                You can compare the prices of different manufacturers and make
                the custom packaging reasonably.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col lg:items-center"
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <div className="mb-4 overflow-hidden rounded">
              <Image src={landingImage.supplierImage} alt="" />
            </div>
            <div className="relative z-[2] rounded bg-white lg:mx-6 lg:-mt-16 lg:max-w-xl lg:p-4">
              <h3
                className="mb-3 text-xl lg:text-2xl"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                Supplier
              </h3>
              <p data-aos="fade-up" data-aos-delay="100">
                <strong className="block">
                  Expand your business world wide with Packposs.
                </strong>
                {`Don't focus on difficult marketing anymore, and meet buyer
              easily and conveniently through packposs.`}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- section04 --> */}
      <div className="mx-auto max-w-[1400px] border-t px-4 py-16 lg:border-t-0 lg:py-24">
        <div className="mb-6 max-w-lg lg:mb-10 lg:max-w-2xl">
          <h3 className="2 mb-3 text-2xl" data-aos="fade-up">
            The Best Partner for Your Custom Packaging
          </h3>
          <p data-aos="fade-up" data-aos-delay="100">
            PACKPOSS is a custom packaging platform with professional team and
            worldwide packaging suppliers. Bring your ideas and create your
            custom packaging with us!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-10">
          <div
            className="p-3 text-center lg:p-0"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <div className="mx-auto mb-4 flex h-36 w-36 overflow-hidden rounded-full lg:h-auto lg:w-full">
              <Image
                src={landingImage.ppImg01Image}
                className="object-cover"
                alt=""
              />
            </div>

            <h5 className="mb-2 lg:text-xl">Compare Free Quotes</h5>
            <p className="text-sm lg:text-base">
              Just start with inquire for a quote you can compare quotes from
              200 suppliers for free.
            </p>
          </div>
          <div
            className="p-3 text-center lg:p-0"
            data-aos="flip-up"
            data-aos-delay="200"
          >
            <div className="mx-auto mb-4 flex h-36 w-36 overflow-hidden rounded-full lg:h-auto lg:w-full">
              <Image
                src={landingImage.ppImg02Image}
                className="object-cover"
                alt=""
              />
            </div>

            <h4 className="mb-2 lg:text-xl">Quick Turn-Around</h4>
            <p className="text-sm lg:text-base">
              We delivers quick turn-around for all custom packaging needs from
              design to shipment
            </p>
          </div>
          <div
            className="p-3 text-center lg:p-0"
            data-aos="flip-up"
            data-aos-delay="300"
          >
            <div className="mx-auto mb-4 flex h-36 w-36 overflow-hidden rounded-full lg:h-auto lg:w-full">
              <Image
                src={landingImage.ppImg03Image}
                className="object-cover"
                alt=""
              />
            </div>

            <h4 className="mb-2 lg:text-xl">High-Quality</h4>
            <p className="text-sm lg:text-base">
              We offer High-Quality packaging with verified suppliers and
              experts.
            </p>
          </div>
          <div
            className="p-3 text-center lg:p-0"
            data-aos="flip-up"
            data-aos-delay="400"
          >
            <div className="mx-auto mb-4 flex h-36 w-36 overflow-hidden rounded-full lg:h-auto lg:w-full">
              <Image
                src={landingImage.ppImg04Image}
                className="object-cover"
                alt=""
              />
            </div>

            <h4 className="mb-2 lg:text-xl">Global Shipping</h4>
            <p className="text-sm lg:text-base">
              The products can be shipped anywhere in the world with door to
              door service.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- section05 --> */}
      <div className="mx-auto max-w-[1400px] border-t px-4 py-16 lg:border-t-0 lg:py-24">
        <h3 className="2 mb-6 text-2xl" data-aos="fade-up">
          How to proceed a new project?
        </h3>
        <div
          className="mb-4 overflow-hidden overflow-x-auto border-t border-b border-t-black lg:mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ul className="flex flex-row">
            {tabContentList.map(item => (
              <li
                className={`tab_item ${
                  item.index === processIndex && "active"
                } flex`}
                key={item.index}
              >
                <Link
                  href="#"
                  onClick={tabChangeClickEvent}
                  data-id={item.index}
                  className="relative whitespace-nowrap p-3 font-semibold"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="tab_inner active"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="mb-4 flex flex-col items-baseline lg:mb-6 lg:flex-row">
            <div className="lg:basis-3/12">
              <h4 className="text-xl lg:text-2xl">
                {tabContentList[processIndex].title}
              </h4>
            </div>
            <div className="lg:basis-9/12">
              <p className="text-sm lg:text-base">
                {tabContentList[processIndex].desc}
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <Image src={tabContentList[processIndex].img} alt="" />
          </div>
        </div>
        <div className="tab_inner">
          <div className="mb-4 flex flex-col items-baseline lg:mb-6 lg:flex-row">
            <div className="lg:basis-3/12">
              <h4 className="text-xl lg:text-2xl">Request quote</h4>
            </div>
            <div className="lg:basis-9/12">
              <p className="text-sm lg:text-base">
                Select an item with sufficient specifications and request a
                quote with quantity, delivery.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <Image src={landingImage.flowCreateImage} alt="" />
          </div>
        </div>
        <div className="tab_inner">
          <div className="mb-4 flex flex-col items-baseline lg:mb-6 lg:flex-row">
            <div className="lg:basis-3/12">
              <h4 className="text-xl lg:text-2xl">Submit order</h4>
            </div>
            <div className="lg:basis-9/12">
              <p className="text-sm lg:text-base">
                Take opportunities of new and diverse project by registering for
                a quote.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <Image src={landingImage.flowCreateImage} alt="" />
          </div>
        </div>
      </div>
      {/* <!-- section06 --> */}
      <div className="mx-auto border-t py-16 lg:border-t-0 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="mb-6 max-w-lg lg:mb-10 lg:max-w-2xl">
            <h3 className="2 mb-3 text-2xl" data-aos="fade-up">
              Customized Folding carton box
            </h3>
            <p data-aos="fade-up" data-aos-delay="100">
              Compare quotes from different manufacturers and start the project
              with a matched partner.
            </p>
          </div>
        </div>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1 transition-property: none; 	overflow-hidden rounded-lg">
            <Image src={landingImage.sliderFolding01Image} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2 transition-property: none; 	overflow-hidden rounded-lg">
            <Image src={landingImage.sliderFolding02Image} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3 transition-property: none; 	overflow-hidden rounded-lg">
            <Image src={landingImage.sliderFolding03Image} alt="" />
          </div>
          <div className="keen-slider__slide number-slide4 transition-property: none; 	overflow-hidden rounded-lg">
            <Image src={landingImage.sliderFolding04Image} alt="" />
          </div>
          <div className="keen-slider__slide number-slide5 transition-property: none; 	overflow-hidden rounded-lg">
            <Image src={landingImage.sliderFolding05Image} alt="" />
          </div>
        </div>
      </div>
      {/* <!-- section07 --> */}
      <div className="mx-auto border-t py-16 lg:border-t-0 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="mb-6 max-w-lg lg:mb-10 lg:max-w-2xl">
            <h3 className="2 mb-3 text-2xl" data-aos="fade-up">
              Customized Flexible pouches
            </h3>
            <p data-aos="fade-up" data-aos-delay="100">
              Compare quotes from different manufacturers and start the project
              with a matched partner.
            </p>
          </div>
        </div>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1 transition-property: none; 	overflow-hidden rounded-lg">
            <Image src={landingImage.sliderFlexible01Image} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2 transition-property: none; 	overflow-hidden rounded-lg">
            <Image src={landingImage.sliderFlexible02Image} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3 transition-property: none; 	overflow-hidden rounded-lg">
            <Image src={landingImage.sliderFlexible03Image} alt="" />
          </div>
          <div className="keen-slider__slide number-slide4 transition-property: none; 	overflow-hidden rounded-lg">
            <Image src={landingImage.sliderFlexible04Image} alt="" />
          </div>
          <div className="keen-slider__slide number-slide5 transition-property: none; 	overflow-hidden rounded-lg">
            <Image src={landingImage.sliderFlexible05Image} alt="" />
          </div>
        </div>
      </div>
      {/* <!-- section08 --> */}
      <div
        style={{ backgroundImage: `url(${landingImage.footerBgImage.src})` }}
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-[1400px] px-4 pb-12 ">
          <div className="py-16 text-center text-white lg:py-28">
            <h2 className="mb-4 text-2xl lg:text-5xl" data-aos="fade-up">
              Try Packposs now
            </h2>
            <p className="2 mb-6" data-aos="fade-up" data-aos-delay="100">
              Create a new item and Get reasonable quotes.
            </p>
            <Link
              href={`${link}`}
              className="inline-flex rounded-full border-2 border-white px-6 py-2 hover:border-white/70 hover:text-white/70 lg:px-8 lg:py-2.5 lg:text-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
