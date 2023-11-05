import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((elem, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={elem.title}
          number={index}
          key={index}
        >
          {elem.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
