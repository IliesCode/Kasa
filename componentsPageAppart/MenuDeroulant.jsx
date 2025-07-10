import { useState } from 'react';
import './MenuDeroulant.scss'; 

function MenuDeroulant({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='menuDeroulant'>
      <div className='description'>
        <p>{title}</p>
        <div onClick={toggle}>
          <svg 
            className={`arrow-icon ${isOpen ? 'rotate' : ''}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
          >
            <path fill="#ffffff" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className='textD'>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default MenuDeroulant;
