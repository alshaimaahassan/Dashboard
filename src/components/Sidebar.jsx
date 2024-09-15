import SidebarDropdownItem from './SidebarDropdownItem';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Sidebar = ({ isOpen }) => {
    return (
        <div className='bg-white'>
        <aside
            className={` z-40 w-64 h-screen transition-transform bg-white dark:bg-gray-800 ${
                isOpen ? 'translate-x-0' : '-translate-x-full fixed top-0 left-0 '
            }`}
            aria-label="Sidebar"
        >
            <h3 className="text-2xl p-4 text-logo font-bold ">Jerusalem</h3>
            <h6 className=" text-center pt-7">Dashboard</h6>
            <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <SidebarDropdownItem />
                    
                </ul>
                <ul className="pl-4 py-5">
                    <Link to="/profile">
                    <li className="font-light py-4 cursor-pointer">Settings</li>
                    </Link>
                    <li className="font-light cursor-pointer">Logout</li>
                </ul>
            </div>
        </aside>
        </div>
    );
};
Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
