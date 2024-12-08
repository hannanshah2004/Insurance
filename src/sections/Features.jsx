import { Element } from "react-scroll";
import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-900 to-purple-800 py-24">
      <Element name="Auto">
        <div className="container">
          <div className="relative flex flex-wrap justify-center gap-8 rounded-3xl border-2 border-yellow-300 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-8 md:p-12">
            {features.map(({ id, icon, caption, title, text }) => (
              <div
                key={id}
                className="relative z-2 flex flex-col items-center text-center max-w-sm p-6 rounded-2xl bg-indigo-800 bg-opacity-50 backdrop-filter backdrop-blur-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-0.5 h-16 bg-yellow-300 absolute -top-8" />
                  <img
                    src={icon}
                    className="w-24 h-24 object-contain"
                    alt={title}
                  />
                </div>

                <p className="caption mb-3 text-yellow-300">{caption}</p>
                <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
                <p className="mb-6 text-gray-300">{text}</p>
                <Button className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-around flex-wrap gap-8">
            {details.map(({ id, icon, title }) => (
              <div key={id} className="flex flex-col items-center">
                <div className="mb-4 p-4 border-2 border-yellow-300 rounded-full bg-indigo-900 transition-all duration-300 hover:shadow-lg">
                  <img
                    src={icon}
                    alt={title}
                    className="w-12 h-12 object-contain filter invert"
                  />
                </div>
                <h3 className="text-center text-sm font-semibold uppercase text-white max-w-[120px]">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;

