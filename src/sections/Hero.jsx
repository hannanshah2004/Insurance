import { Element } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 bg-gradient-to-b from-indigo-900 to-purple-800">
      <Element name="hero">
        <div className="container flex flex-col items-center text-center">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-yellow-300 mb-4 animate-pulse">
              Reliable Service
            </div>
            <h1 className="mb-6 h1 text-white uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 font-extrabold tracking-wide">
              Jersey City Residents
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 ml-10 text-gray-200">
              Please call 201-918-7570 for personalized, comprehensive, and reliable insurance solutions tailored to the needs of Jersey City residents.
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Get a Quote Now
            </Button>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto filter drop-shadow-2xl"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;

