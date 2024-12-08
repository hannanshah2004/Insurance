import clsx from "clsx";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => setActive(!active)}
      >
        <div className="flex-1">
          <div className="text-sm mb-1.5 text-yellow-300 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index + 1}
          </div>
          <div
            className={clsx(
              "text-xl font-semibold text-white transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "text-yellow-300"
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={clsx(
            "relative flex size-12 items-center justify-center rounded-full border-2 border-yellow-300 transition-all duration-500",
            active && "bg-yellow-300"
          )}
        >
          <div className={clsx("size-6 transition-transform duration-300", active ? "rotate-45" : "rotate-0")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#1E1E1E" : "#FFD700"}>
              <path d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      </div>

      <SlideDown>
        {active && (
          <div className="text-gray-300 px-7 py-3.5">{item.answer}</div>
        )}
      </SlideDown>

      <div
        className={clsx(
          "absolute -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500",
          active && "opacity-100 bg-indigo-800"
        )}
      >
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-yellow-300" />
      </div>
    </div>
  );
};

export default FaqItem;

