import React, { useState } from "react";

function ChildComponent({ option, onClick }) {
  return <button onClick={onClick}>{option}</button>;
}

function ParentComponent() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <ChildComponent
        option="Option 1"
        onClick={() => handleOptionClick("Option 1")}
      />
      <ChildComponent
        option="Option 2"
        onClick={() => handleOptionClick("Option 2")}
      />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default ParentComponent;
