import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import { cards1, cards2 } from "./UIdata";
import FAQ from "./Faq";
import RaiseRequest from "./RaiseRequest";
import Animation from "./Animation";
import AnimationCards from "./AnimationCards";
export const Hero = () => {
  return (
    <>
      <div className="relative h-screen bg-white ">
        {/* Header */}
        <div className="flex absolute header justify-between items-center py-4 px-4 md:px-20 w-full z-50">
          <div className="logo bg-[#DBDBDB] p-2 text-[20px] md:text-[32px] font-bold">
            LOGO
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <div className="text-[#1959AC] text-[18px] flex gap-2 items-center">
              Lorem ipsum <FaAngleDown />
            </div>
            <div className="text-[#1959AC] text-[18px] flex gap-2 items-center">
              Lorem ipsum <FaAngleDown />
            </div>
            <div className="text-[#1959AC] text-[18px] flex gap-2 items-center">
              Lorem ipsum <FaAngleDown />
            </div>
          </div>
          <button className="shadow-[0px_4px_20px_0px_#00000026] text-black bg-white text-[15px] font-bold px-4 py-2 rounded">
            Sign In
          </button>
        </div>

        {/* Right side image overlay with diagonal clip */}
        <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 overflow-hidden z-0 hidden lg:block">
          <div
            className="h-full w-[200%]"
            style={{
              clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <img
              src="/dash.png"
              alt="Hero"
              className="h-full w-auto object-cover"
            />
          </div>
        </div>

        {/* Left side content */}
        <div className="relative z-10  h-full  w-full lg:w-1/2 bg-[url('/dash.png')] bg-cover bg-center flex flex-col justify-center  lg:bg-none">
          <div className="flex flex-col gap-4 justify-center h-auto bg-white px-20 py-10">
            <div className="text-[20px] md:text-[40px] lg:text-[64px] font-bold font-roboto ">
              Lorem ipsum dolor sit amet
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
              quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi
              platea morbi libero imperdiet neque. Justo suspendisse tristique
              posuere quis eget viverra. Nunc euismod ultrices etiam nulla
              habitasse.
            </div>
            <div className="lg:flex items-center gap-4">
              <input
                type="text"
                className="border border-[#C3C3C3] rounded-[3px] p-2"
              />
              <button className="bg-[#1959AC] shadow-[0px_4px_20px_0px_#00000026] text-white px-4 py-2 rounded flex items-center gap-2">
                Submit <FaArrowRight />
              </button>
            </div>
            <div className="text-[15px] flex items-center gap-2 ">
              <img
                src={"tick1.svg"}
                alt="Tick Icon"
                className="inline-block w-[25px] h-[25px] mr-2"
              />
              No Credit Card Required
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] to-[#FFFFFF] top-[-20px] w-full h-[20px]"></div>
      </div>
      <Animation />
      <div className="my-40">
        <div className="ml-20 relative">
          <div className="lg:flex pb-20">
            <div className="w-full lg:w-1/2  flex flex-col gap-4">
              <div className="font-sans font-semibold text-[15px] lg:text-[24px] leading-[100%] tracking-[-0.04em] text-[#0546D2]">
                Lorem ipsum dolor sit amet
              </div>
              <div className="font-sans font-bold text-[20px] lg:text-[42px] leading-[100%] tracking-[-0.02em] uppercase text-[#222222] w-4/5">
                Lorem ipsum dolor sit amet consectetur. Eu elit.
              </div>
              <div className="font-sans font-normal text-[18px] leading-[25px] tracking-normal">
                Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
                leo eleifend condimentum in vitae faucibus. Amet massa malesuada
                sit pretium. Donec pharetra erat lacus suspendisse ornare.
              </div>
              <div className="">
                {[
                  {
                    id: 1,
                    title:
                      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
                    description:
                      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
                  },
                  {
                    id: 2,
                    title:
                      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
                    description:
                      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
                  },
                  {
                    id: 3,
                    title:
                      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
                    description:
                      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4"
                  >
                    {/* Icon & Title */}
                    <div className="flex gap-2 items-center font-sans font-semibold text-[18px] sm:text-[20px] leading-[100%] tracking-[-0.02em] text-[#222222]">
                      <img
                        src="/logo.svg"
                        alt={item.title}
                        className="w-[24px] sm:w-[40px] lg:w-[140px] h-auto object-contain"
                      />
                      <span>{item.title}</span>
                    </div>

                    {/* Description */}
                    <div className="font-sans font-normal text-[16px] sm:text-[18px] leading-[25px] tracking-normal sm:ml-6 mt-2 sm:mt-0">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 my-16 flex justify-end">
              <img
                src="/shake.png"
                alt="Card Image"
                className="w-full lg:w-[580px] h-auto object-cover "
              />
            </div>
          </div>
          <div className="">
            <div className="bg-[linear-gradient(90deg,_#043898_0%,_#079902_45.96%,_#170041_91.18%)] w-[70%] h-[20px] bottom-0 right-0 absolute"></div>
          </div>
        </div>
      </div>
      <div
        className="relative w-full lg:h-screen bg-cover bg-center p-8 "
        style={{ backgroundImage: "url('/bg1.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content container */}
        <div className="relative z-10  text-white space-y-6 h-full">
          {/* Logo */}
          <div className="bg-[#DBDBDB] px-4 py-2 text-[32px] font-bold text-black w-fit  mb-10">
            LOGO
          </div>
          <div className="flex justify-center items-center flex-col gap-8 pt-10 h-full">
            {/* Heading */}
            <h1 className="font-roboto-condensed text-3xl md:text-5xl font-bold leading-tight tracking-tight uppercase text-center max-w-[90%]">
              Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus
              egestas aliquam viverra mi.
            </h1>

            {/* Subheading paragraph */}
            <p className="text-base md:text-lg font-semibold leading-relaxed text-center max-w-[55%]">
              Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
              volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
              justo pellentesque id sed. Id tellus id luctus id. At quis nunc
              libero urna arcu vulputate sed ut. Nisl porta massa diam
              condimentum nulla quam.
            </p>

            {/* Additional paragraph */}
            <p className="text-base md:text-lg font-semibold leading-relaxed text-center max-w-[55%]">
              Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
              condimentum ultrices non. Ornare semper in tincidunt pellentesque
              cras mauris in vitae. At viverra quis eu malesuada vel et
              porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi
              feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus
              vitae leo.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-30">
        <div className="flex flex-col items-center">
          <div className="font-roboto-condensed font-bold text-[20px] lg:text-[42px] leading-[100%] tracking-[-0.02em] text-center uppercase max-w-[60%] mb-8">
            Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
          </div>
          <div className="grid grid-cols-4 gap-6 my-10 mt-20">
            {[...Array(12)].map((_, i) => (
              <img
                key={i}
                src={
                  i == 7 || i == 10 || i == 11
                    ? `/car_${i + 1}.jpg`
                    : `/car_${i + 1}.png`
                }
                alt={`Car ${i + 1}`}
                className="w-full h-20 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
      <AnimationCards />
      <div
        className="relative w-full lg:h-screen bg-cover bg-center p-8 "
        style={{ backgroundImage: "url('/bg2.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content container */}
        <div className="relative z-10  text-white space-y-6 w-full h-full flex flex-col ">
          {/* Logo */}
          <div className="bg-[#DBDBDB] px-4 py-2 text-[32px] font-bold text-black w-fit  ">
            LOGO
          </div>
          <div className="flex justify-center items-center h-full flex-col gap-8 pt-10 ">
            {/* Heading */}
            <h1 className="font-roboto-condensed text-4xl md:text-5xl font-bold leading-tight tracking-tight uppercase text-center max-w-[90%]">
              dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
              viverra mi. dolor sit amet consectetur. Quis adipiscing
            </h1>
          </div>
        </div>
      </div>
      <RaiseRequest />
      <div className=" bg-[#F3F3F3] md:flex">
        <div className="md:max-w-[50%] p-10 pt-20 flex flex-col gap-8">
          <div className="font-sans font-semibold text-[24px] leading-[100%] tracking-[-0.04em] text-[#0546D2]">
            Lorem ipsum
          </div>
          <div className="font-sans font-bold text-[42px] leading-[100%] tracking-[-0.02em] uppercase text-[#222222] ">
            Lorem ipsum dolor sit almen
          </div>
          <div className="font-sans font-normal text-[18px] leading-[25px] tracking-normal">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/iphone1.png"
              alt="Card Image"
              className="w-[150px] h-auto  object-cover"
            />
            <img
              src="/iphone2.png"
              alt="Card Image"
              className="w-[150px] h-auto  object-cover"
            />
          </div>
        </div>
        <div className=" w-full md:w-1/2 ">
          <img
            src={"/iphone.png"}
            alt="Iphone"
            className="  w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className="relative w-full h-full bg-cover bg-center  py-8"
        style={{ backgroundImage: "url('/Line2.svg')" }}
      >
        <div className="my-20 bg-[#F1F5F9] lg:p-20 lg:flex lg:h-screen overflow-hidden gap-4 ">
          <div className="w-full lg:w-1/2 ">
            <div className="flex ">
              <div className="w-4/5">
                <div className="font-sans font-semibold text-[20px] leading-[100%] tracking-[-0.04em] text-[#475569]">
                  NO LIMITS
                </div>
                <div className="font-sans font-bold text-[42px] leading-[100%] tracking-[-0.02em] uppercase text-[#0F172A] ">
                  Lorem ipsum dolor sit almen
                </div>
                <div className="font-sans font-normal text-[18px] leading-[25px] tracking-normal">
                  Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
                  morbi suspendisse convallis. Urna a urna lectus donec felis
                  risus duis pellentesque. Pellentesque ultricies ipsum.
                </div>
                <button className="bg-[#1959AC] shadow-[0px_4px_20px_0px_#00000026] w-fit text-white px-4 py-2 rounded flex items-center gap-2">
                  Lorem ipsum <FaArrowRight />
                </button>
              </div>
              <div className="w-1/5 pt-30">
                <img
                  src="/newimg3.png"
                  alt="New Image"
                  className="w-[300px] h-auto object-cover mt-4"
                />
              </div>
            </div>

            <div className="flex gap-4 ">
              <div className="w-1/5 pt-30">
                <img
                  src="/newimg2.png"
                  alt="New Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-4/5">
                <img
                  src="/newimg1.png"
                  alt="New Image"
                  className="w-full h-auto object-cover mt-4"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-1/2 pt-5 lg:pt-0 h-full">
            {/* First row - 2 images */}
            <div className="flex justify-between relative h-1/3 w-full gap-2">
              <img
                src="/img1.png"
                alt="Image 1"
                className="w-3/7 h-auto  object-cover  pt-5"
              />
              <img
                src="/img2.png"
                alt="Image 2"
                className=" w-4/7 h-auto  object-cover"
              />
            </div>

            {/* Second row - 1 image, spans 2 columns */}
            <img
              src="/img3.png"
              alt="Image 3"
              className="w-full h-1/3 top-[350px] left-[735px]"
            />

            {/* Third row - 2 images again */}
            <div className="flex justify-between h-1/3 w-full relative gap-2">
              <img
                src="/card4.png"
                alt="Image 4"
                className="w-3/7 h-auto top-[693px] left-[735px] object-cover  pt-5"
              />
              <img
                src="/card2.png"
                alt="Image 5"
                className="w-4/7 h-auto top-[693px] left-[900px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F8F8F8] px-4 sm:px-6 md:pr-20">
          <div className="flex flex-col md:flex-row w-full">
            {/* Left Image */}
            <div className="w-full md:w-1/2 relative">
              <img
                src={"/listbg1.png"}
                alt="List Background"
                className="w-full max-w-[550px] h-auto object-cover md:absolute top-[-30px] left-0 z-0 mx-auto md:mx-0"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2">
              <div className="p-6 sm:p-8 md:p-10 md:pt-20 flex flex-col gap-6 sm:gap-8">
                {/* Subheading */}
                <div className="font-sans font-semibold text-[20px] sm:text-[22px] md:text-[24px] leading-[100%] tracking-[-0.04em] text-[#0546D2]">
                  Lorem ipsum
                </div>

                {/* Heading */}
                <div className="font-sans font-bold text-[28px] sm:text-[36px] md:text-[42px] 2xl:text-[52px] leading-[110%] tracking-[-0.02em] uppercase text-[#222222]">
                  <span className="text-[#1959AC]">Lorem</span> ipsum dolor sit
                  amet consectetur. Enim donec.
                </div>

                {/* Paragraph */}
                <div className="font-sans font-normal text-[16px] sm:text-[18px] leading-[25px] tracking-normal text-[#222222]">
                  Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio
                  enim amet non.
                </div>

                {/* Grid List */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {Array(6)
                    .fill("Lorem Ipsum")
                    .map((item, i) => (
                      <div
                        key={i}
                        className="font-sans font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] tracking-[-0.02em] text-[#222222]"
                      >
                        {item}
                      </div>
                    ))}
                </div>

                {/* Button */}
                <button className="bg-[#1959AC] shadow-[0px_4px_20px_0px_#00000026] w-fit text-white px-4 py-2 rounded flex items-center gap-2">
                  Lorem ipsum <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Gradient Strip */}
          <div className="bg-[linear-gradient(90deg,_#043898_0%,_#079902_45.96%,_#170041_91.18%)] w-full sm:w-[80%] md:w-[70%] h-[20px] mt-6"></div>
        </div>
      </div>
      <div className="bg-[#155ADA] h-full ">
        <div className="flex justify-center items-center text-white p-16">
          <div className="w-3/5 flex flex-col gap-6">
            <div className="font-sans font-semibold text-[20px] leading-[100%] tracking-[-0.04em] text-[#FFFFFF]">
              Join other Sun harvesters
            </div>
            <div className="font-sans font-bold text-[42px] leading-[100%] tracking-[-0.02em] uppercase text-[#FFFFFF] ">
              Lorem ipsum dolor sit amet
            </div>
            <div className="font-sans font-normal text-[18px] leading-[25px] tracking-normal text-[#FFFFFF]">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </div>
          </div>
          <div className="w-2/5 flex justify-center items-center">
            <button className="bg-white shadow-[0px_4px_20px_0px_#00000026] w-fit text-black px-10 py-2 rounded flex items-center gap-2 font-bold ">
              Lorem ipsum
            </button>
          </div>
        </div>
        <div className="flex justify-center text-white pb-20">
          <div className="flex gap-8 overflow-x-auto pl-20 w-full px-4">
            <div className="flex w-max gap-8">
              {cards2.map((card) => (
                <div
                  key={card.id}
                  className="shrink-0 border border-[#E2E8F0] shadow-[0_0_10px_0_#00000012] shadow-[0_20px_25px_-5px_#0000001A] w-[364px] h-[450px] border-solid rounded-[10px] bg-white p-6"
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-[64px] h-[64px]"
                  />
                  <div className="font-roboto font-normal text-[18px] leading-[160%] tracking-[0em] text-[#0F172A] w-[90%]">
                    {card.title}
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <img
                      src={card.user}
                      alt={card.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <span className="font-roboto font-normal text-[18px] leading-[160%] tracking-[0em] text-[#0F172A]">
                      {card.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen py-10 lg:py-30 items-center px-4 sm:px-8 lg:px-20 2xl:px-40">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center text-center lg:text-left">
          <div className="font-roboto-condensed font-bold text-[28px] sm:text-[36px] lg:text-[42px] 2xl:text-[54px] leading-[110%] tracking-[-0.02em] uppercase text-[#0F172A]">
            Lorem ipsum dolor sit amet
          </div>

          {/* Tab Selector */}
          <div className="flex rounded-[8px] overflow-hidden shadow-sm border border-[#CBD5E1] w-full sm:w-fit mx-auto lg:mx-0">
            {["Recharge", "Plan", "Design"].map((item, index) => (
              <div
                key={item}
                className={`w-full sm:w-[120px] md:w-[150px] lg:w-[200px] h-[48px] px-4 flex items-center justify-center text-[16px] sm:text-[18px] font-semibold tracking-tight font-inter
            ${index === 0 ? "rounded-tl-[8px] rounded-bl-[8px]" : ""}
            ${index === 2 ? "rounded-tr-[8px] rounded-br-[8px]" : ""}
            ${index !== 0 ? "bg-white" : "bg-[#F1F5F9]"}
            text-gray-800 border-r last:border-r-0 cursor-pointer transition-colors duration-200 hover:bg-[#E2E8F0]`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Paragraph */}
          <div className="font-inter font-normal text-[16px] sm:text-[18px] leading-[25px] tracking-[0em] text-[#475569] px-2 sm:px-0">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </div>

          {/* Link */}
          <div className="text-[#1959AC] flex gap-2 items-center font-semibold justify-center lg:justify-start">
            Check tools <FaArrowRight />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="/handshake1.png"
            alt=""
            className="object-cover w-full lg:h-[400px] xl:w-[600px] 2xl:w-[700px] h-auto "
          />
        </div>
      </div>

      <div className="lg:h-screen lg:my-10 sm:my-16 lg:my-20 bg-[#F1F1F1] h-auto flex flex-col md:flex-row relative">
        <div className="bg-[linear-gradient(90deg,_#043898_0%,_#079902_45.96%,_#170041_91.18%)] w-full sm:w-[80%] md:w-[70%] h-[20px] absolute bottom-0 left-0"></div>
        {/* Left Content */}
        <div className="w-full md:w-1/2 py-8 sm:py-10 px-4 sm:px-8 md:pl-12 flex flex-col gap-6 relative">
          {/* Heading */}
          <div className="font-roboto-condensed font-bold text-[28px] sm:text-[36px] lg:text-[42px] 2xl:text-[52px] leading-[110%] tracking-[-0.02em] uppercase text-[#1959AC] max-w-full md:max-w-[80%]">
            Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
          </div>

          {/* Paragraph */}
          <div className="font-inter font-normal text-[16px] sm:text-[18px] leading-[25px] tracking-[0em] max-w-full md:max-w-[90%] text-[#222]">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor
            tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl
            felis. Massa in facilisis semper libero eget eu quisque bibendum
            platea. Tortor fames.
          </div>

          {/* Button */}
          <button className="bg-[#1959AC] shadow-[0px_4px_20px_0px_#00000026] w-fit text-white px-4 py-2 rounded flex items-center gap-2">
            Lorem Ipsum <FaArrowRight />
          </button>

          {/* Bottom Gradient Bar */}

          {/* Floating Card */}
          <div className="relative">
            <div className="bg-white p-6 sm:p-8 md:p-10 flex flex-col gap-4 lg:absolute top-6 sm:top-8 md:top-10 max-w-full md:max-w-[80%] shadow-md rounded-md">
              <div className="font-inter font-semibold text-[18px] sm:text-[20px] pb-2">
                Lorem ipsum dolor sit
              </div>
              <div className="font-inter font-normal text-[16px] sm:text-[18px] leading-[25px] text-[#222222]">
                Lorem ipsum dolor sit amet consectetur. Habitant vestibulum
                vitae amet habitasse semper.
              </div>
              <div className="font-inter font-normal text-[16px] sm:text-[18px] leading-[25px] text-[#222222]">
                Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
                placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc
                id tristique sit.
              </div>
              <div className="font-inter font-normal text-[16px] sm:text-[18px] leading-[25px] text-[#222222]">
                Lorem ipsum dolor sit amet consectetur. Hac netus consectetur
                amet quisque scelerisque facilisi. Ultrices lectus viverra
                pharetra commodo.
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative mb-10 md:mt-0">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:absolute  right-0 top-0 md:top-[-100px]">
            <img
              src="/handshake2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="lg:my-40 md:p-20 p-10">
        <div className="">
          <div className="font-roboto-condensed font-bold text-[42px] leading-[100%] tracking-[-0.02em] text-center uppercase text-[#0F172A] mb-6">
            Lorem ipsum dolor sit amet{" "}
          </div>
          <div className="font-inter font-normal text-[18px] leading-[25px] tracking-[0em] text-center text-[#0F172A]">
            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis
            dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed
            ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut
            facilisi.
          </div>
        </div>
        <div className="lg:flex mt-20">
          <div className="w-full lg:w-1/2  ">
            <img
              src="/mountain1.png"
              alt="Card Background"
              className="w-[680px] h-[412px] object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 relative md:p-10 flex justify-center items-center">
            <div className="lg:absolute  left-[-100px]  p-10 bg-white shadow-lg rounded-lg flex flex-col gap-8 border border-[#E2E8F0] shadow-[0_0_10px_0_#00000012] shadow-[0_20px_25px_-5px_#0000001A]">
              <div className="font-inter font-semibold text-[24px] leading-[100%] tracking-[0.06em] text-[#475569]">
                Artist & Investor
              </div>
              <div className="font-inter font-normal text-[18px] leading-[25px] tracking-[0em] text-[#0F172A]">
                Enim sagittis, sit porttitor morbi lobortis amet, libero
                adipiscing auctor. Malesuada tristique libero, id netus
                tincidunt. Egestas ac arcu amet nisl quis est ...
              </div>
              <div className="font-roboto font-medium text-[16px] leading-[24px] tracking-[0.5px] text-[#1959AC] underline flex gap-2 items-center">
                Read Full Story <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <div className="bg-[#F3F3F3] min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-10 py-10">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 w-full max-w-screen-xl">
          {/* Logo */}
          <div className="logo bg-[#DBDBDB] p-2 text-[24px] sm:text-[28px] md:text-[32px] font-bold w-fit">
            LOGO
          </div>

          {/* Heading */}
          <div className="font-roboto-condensed font-bold text-[28px] sm:text-[36px] md:text-[42px] 2xl:text-[52px] leading-[110%] tracking-[-0.02em] text-center uppercase text-[#222222] max-w-full sm:max-w-[80%] md:max-w-[60%]">
            Lorem ipsum dolor sit amet consectetur. Dui.
          </div>

          {/* Paragraph */}
          <div className="font-inter font-normal text-[16px] sm:text-[18px] leading-[25px] text-center text-[#222222] max-w-full sm:max-w-[80%] md:max-w-[60%]">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </div>

          {/* Button */}
          <button className="bg-[#1959AC] shadow-[0px_4px_20px_0px_#00000026] text-white px-4 py-2 rounded flex items-center gap-2">
            Lorem Ipsum <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="bg-[#171E2B] text-white px-6 py-10 sm:px-12 md:px-20 md:py-20">
        <div className="max-w-[1300px] mx-auto flex flex-col gap-10">
          {/* Logo */}
          <div className="logo bg-[#DBDBDB] p-2 text-[28px] sm:text-[32px] font-bold w-fit text-black">
            LOGO
          </div>

          {/* Heading Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4 ">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={`heading-${i}`}
                  className="font-figtree font-bold text-[18px] sm:text-[20px] leading-[23px] tracking-[-0.04em] text-center"
                >
                  Lorem Ipsum
                </div>
              ))}
          </div>

          {/* Text Rows */}
          {Array(5)
            .fill(0)
            .map((_, rowIdx) => (
              <div
                key={`row-${rowIdx}`}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-4 text-center"
              >
                {Array(4)
                  .fill(0)
                  .map((_, colIdx) => (
                    <div
                      key={`text-${rowIdx}-${colIdx}`}
                      className="font-figtree font-normal text-[16px] sm:text-[18px] leading-[23px] tracking-[-0.04em]"
                    >
                      Lorem Ipsum
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
