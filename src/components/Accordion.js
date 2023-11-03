import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((elem, index) => (
        <AccordionItem
          title={elem.title}
          text={elem.text}
          number={index}
          key={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
