import clsx from "clsx";
import { Marker } from "./Marker.jsx";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill = "#FFD700",
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 gap-4 rounded-2xl overflow-hidden bg-indigo-700 group-hover:bg-indigo-600 transition-colors duration-300">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt="icon"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-2 font-bold text-yellow-300 uppercase">
          {children}
        </span>
      </span>

      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 rounded-2xl shadow-lg group overflow-hidden",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 rounded-2xl shadow-lg group overflow-hidden",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;

