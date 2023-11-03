import { useState } from "react";

const AccordionItem = ({ number, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      // onClick={() => setIsOpen(!isOpen)}
      onClick={handleToggle}
    >
      <p className="number">
        {number < 9 ? `0${number + 1}` : `${number + 1}`}
      </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
};

export default AccordionItem;
