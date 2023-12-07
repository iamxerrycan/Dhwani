import React, { useState } from 'react';
import '../../style/dropdown/Listbox.css'; 


const ListBox = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="listbox">
      <h3>Select an option:</h3>
      <div className="selected-option" onClick={toggleOptions}>
        Selected option: {selectedOption}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              //className={selectedOption === option ? 'selected' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListBox;
