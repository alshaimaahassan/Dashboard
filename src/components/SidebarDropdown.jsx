import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SidebarDropdown = ({ label, icon, menuItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <li>
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center w-full p-3 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-example"
      >
        {/* Icon */}
        {icon}

        <span className="flex-1 ms-3 text-left font-normal whitespace-nowrap">{label}</span>
        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_177_3084)">
            <path d="M10.5059 16.5899L15.6011 11.9999L10.5059 7.40994L12.0745 5.99994L18.7495 11.9999L12.0745 17.9999L10.5059 16.5899Z" fill="#323232" />
          </g>
          <defs>
            <clipPath id="clip0_177_3084">
              <rect width="24" height="26.7" fill="white" transform="matrix(0 -1 1 0 0.949219 23.9999)" />
            </clipPath>
          </defs>
        </svg>

      </button>

      <ul
        id="dropdown-example"
        className={`py-2 space-y-2 ${isDropdownOpen ? 'block' : 'hidden'}`}
      >
        {menuItems.map((item) => (
          <li onClick={() => setSelectedItem(item.id)} key={item.id}>
            <Link
              to={item.to || '#'}
              className={`flex font-thin items-center w-full p-1 transition py-2 duration-75  pl-11 group
                ${selectedItem === item.id
                  ? 'bg-primary text-white dark:bg-gray-600 dark:text-white'
                  : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'}`
              }
            >
              {item.label || 'Untitled'}
            </Link>
          </li>
          
        ))}
        
      </ul>
      
    </li>
      
  </>
  );
};

SidebarDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
};


export default SidebarDropdown;

