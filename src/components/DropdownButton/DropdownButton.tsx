import React, { useEffect, useRef, useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";
import "./DropdownButton.css";

function DropdownButton({
  className,
  options,
  btnName,
  setSelectedOption,
  selectedOption,
}: {
  className: string;
  options: any[];
  btnName: string;
  setSelectedOption: any;
  selectedOption: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOptionChange = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {btnName} <CaretDownFill className="toggle-icon" />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {options.map((el) => (
              <li
                key={el.name}
                onClick={(e) => {
                  handleOptionChange(el.name);
                  e.preventDefault();
                }}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
