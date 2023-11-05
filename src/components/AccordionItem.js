const AccordionItem = ({
  number,
  title,
  children,
  curOpen,
  onOpen
}) => {
  const isOpen = number === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <p className="number">
        {number < 9 ? `0${number + 1}` : `${number + 1}`}
      </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
};

export default AccordionItem;
