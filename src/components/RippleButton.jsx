import { useRef } from "react";

export default function RippleButton() {
  const btnRef = useRef(null);
  const rippleRef = useRef(null);

  const handleMove = (event) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    rippleRef.current.style.left = x + "px";
    rippleRef.current.style.top = y + "px";
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMove}
      className="relative group overflow-hidden bg-pink-300 px-14 py-10 rounded-md 
                 text-black text-5xl font-normal shadow-lg"
    >
      <span className="relative z-10">Button</span>

      {/* Ripple Effect */}
      <span
        ref={rippleRef}
        className="absolute w-0 h-0 bg-orange-600 rounded-full 
                   -translate-x-1/2 -translate-y-1/2 
                   transition-all duration-500 
                   pointer-events-none 
                   group-hover:w-[400px] group-hover:h-[400px]"
      ></span>
    </button>
  );
}
