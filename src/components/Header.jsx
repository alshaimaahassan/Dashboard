import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Header({ toggleSidebar }) {

    let isDropdownOpen = false; // Set to true to open the dropdown by default, false to close it by default




    useEffect(() => {
        const dropdownButton = document.getElementById('dropdown-button');
        const dropdownMenu = document.getElementById('dropdown-menu');

        if (!dropdownButton || !dropdownMenu) return;

        function toggleDropdown() {
            isDropdownOpen = !isDropdownOpen;
            dropdownMenu.classList.toggle('hidden', !isDropdownOpen);
        }

        dropdownButton.addEventListener('click', toggleDropdown);

        window.addEventListener('click', (event) => {
            if (event.target instanceof Node &&
                !dropdownButton.contains(event.target) &&
                !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add('hidden');
                isDropdownOpen = false;
            }
        });

        // Clean up event listeners
        return () => {
            dropdownButton.removeEventListener('click', toggleDropdown);
            window.removeEventListener('click', toggleDropdown);
        };
    }, []);






    return (
        <header className="flex gap-10 justify-between flex-row-reverse items-center px-10 py-4 bg-white">
            <div className="flex gap-10">
                <div className="flex gap-10">
                    <div className="flex gap-7">
                        {/* User Profile */}
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg
                                className="absolute w-12 h-12 text-gray-400 -left-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        {/* User Info - Hidden on sm */}
                        <div className="flex flex-col hidden sm:block">
                            <p>John Doe</p>
                            <p>Admin</p>
                        </div>
                    </div>

                    {/* Logout Icon - Hidden on sm */}
                    <div className="relative inline-block text-left hidden md:block">
                        <button id="dropdown-button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium">
                            <svg width="19" height="20" className="w-7 h-7"
                                viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.9328 19.1C14.8449 19.1 18.823 15.0236 18.823 10C18.823 4.97644 14.8449 0.9 9.9328 0.9C5.02066 0.9 1.04258 4.97644 1.04258 10C1.04258 15.0236 5.02066 19.1 9.9328 19.1Z" stroke="#5C5C5C" strokeWidth="0.2" />
                                <path d="M9.93304 10.7929L7.7175 8.14645C7.55404 7.95118 7.289 7.95118 7.12553 8.14645C6.96206 8.34171 6.96206 8.65829 7.12553 8.85355L9.63706 11.8536C9.80053 12.0488 10.0656 12.0488 10.229 11.8536L12.7406 8.85355C12.904 8.65829 12.904 8.34171 12.7406 8.14645C12.5771 7.95118 12.3121 7.95118 12.1486 8.14645L9.93304 10.7929Z" fill="#565656" />
                                <mask id="mask0_177_4369" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="7" y="8" width="6" height="4">
                                    <path d="M9.93304 10.7929L7.7175 8.14645C7.55404 7.95118 7.289 7.95118 7.12553 8.14645C6.96206 8.34171 6.96206 8.65829 7.12553 8.85355L9.63706 11.8536C9.80053 12.0488 10.0656 12.0488 10.229 11.8536L12.7406 8.85355C12.904 8.65829 12.904 8.34171 12.7406 8.14645C12.5771 7.95118 12.3121 7.95118 12.1486 8.14645L9.93304 10.7929Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_177_4369)">
                                </g>
                            </svg>
                        </button >
                        <div id="dropdown-menu" className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                                <Link to="/profile" className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mr-2" viewBox="0 0 32 32" id="desktop"><path d="M30 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.998c-.004 1.446-.062 3.324-.61 4h-.404A.992.992 0 0 0 10 29c0 .552.44 1 .984 1h10.03A.992.992 0 0 0 22 29c0-.552-.44-1-.984-1h-.404c-.55-.676-.606-2.554-.61-4H30a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14 24l-.002.004L14 24zm4.002.004L18 24h.002v.004zM30 20H2V4h28v16z"></path>
                                    </svg> Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="flex flex-row-reverse gap-10">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-3xl p-2 bg-gray-50 pl-10 w-32 sm:w-96" // Set different width for small screens
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 absolute top-2 left-2 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m2.487-6.487A7.5 7.5 0 1110.5 3a7.5 7.5 0 018.637 7.163z"
                        />
                    </svg>
                </div>


                {/* Sidebar Toggle Icon */}
                <button
                    onClick={toggleSidebar}
                    className="text-gray-500 focus:outline-none"
                >
                    <svg
                        width="27"
                        height="25"
                        viewBox="0 0 27 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.898019">
                            <path
                                d="M9.53711 6.5625H26.0371V7.9375H9.53711V6.5625ZM9.53711 12.0625H26.0371V13.4375H9.53711V12.0625ZM9.53711 17.5625H26.0371V18.9375H9.53711V17.5625Z"
                                fill="#202224"
                            />
                        </g>
                    </svg>
                </button>
            </div>
        </header >
    );
}
Header.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
};




