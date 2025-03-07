import React, { useState } from "react";

const FaqItem = ({ pregunta, respuesta }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const arrowDown = <box-icon name="chevron-down" color="gray" size="lg"></box-icon>;
  const arrowUp = <box-icon name="chevron-up" color="gray" size="lg"></box-icon>;

  return (
    <li
      onClick={handleShow}
      className="group border-b-2 hover:border-cyan-600 transition-all duration-300 ease-in-out border-gray-300 text-stone-100 py-4 w-full flex flex-col cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold text-2xl group-hover:text-cyan-600 transition-all duration-300 ease-in-out ">{pregunta}</p>
        <div>{show ? arrowUp : arrowDown}</div>
      </div>
      
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          show ? "max-h-40 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-stone-300 text-xl">{respuesta}</p>
      </div>
    </li>
  );
};

export default FaqItem;
