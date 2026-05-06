import { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

interface DropdownProps {
  options: string[];
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

function Dropdown({ options, value, placeholder = 'Selecione', onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="dropdown" ref={ref}>
      <button
        type="button"
        className={`dropdown__trigger ${open ? 'dropdown__trigger--open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span className={value ? 'dropdown__value' : 'dropdown__placeholder'}>
          {value || placeholder}
        </span>
        <svg
          className={`dropdown__arrow ${open ? 'dropdown__arrow--open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <path fill="#EC1B23" d="M6 8L1 3h10z" />
        </svg>
      </button>

      {open && (
        <ul className="dropdown__lista">
          {options.map((option) => (
            <li
              key={option}
              className={`dropdown__item ${value === option ? 'dropdown__item--ativo' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;