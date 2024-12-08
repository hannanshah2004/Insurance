import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.ceil(faq.length / 2);

  return (
    <section className="bg-gradient-to-b from-purple-800 to-indigo-900 py-24">
      <Element name="faq" className="relative">
        <div className="container relative z-2">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-white">
              You've got questions, we've got answers.
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our insurance services and coverage options.
            </p>
          </div>

          <div className="relative bg-white bg-opacity-5 backdrop-filter backdrop-blur-md rounded-3xl border-2 border-yellow-300 p-8 md:p-12">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="rounded-full bg-indigo-900 p-4 border-2 border-yellow-300">
                <img src="/images/faq-logo.svg" alt="FAQ" className="w-8 h-8" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                {faq.slice(0, halfLength).map((item, index) => (
                  <FaqItem key={item.id} item={item} index={index} />
                ))}
              </div>
              <div>
                {faq.slice(halfLength).map((item, index) => (
                  <FaqItem key={item.id} item={item} index={halfLength + index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;

