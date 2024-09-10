import SidebarDropdownItem from './SidebarDropdownItem';

const Sidebar = () => {
    return (
        <aside
            id="sidebar-multi-level-sidebar"
            // className={`fixe top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white dark:bg-gray-800 `}

            className={` top-0 left-0 z-40 w-64 max-h-fit transition-transform bg-white dark:bg-gray-800  sm:translate-x-0 `}
            aria-label="Sidebar"
        >
            <h3 className="text-2xl p-4 text-blue-600 font-bold ">Jerusalem</h3>
            <h6 className=" text-center pt-7">Dashboard</h6>
            <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">

                    <SidebarDropdownItem />
                    <li className='font-light cursor-pointer p-2 flex flex-row items-center gap-2'>
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_253_3153)">
                                <path d="M21.5252 13H14.8502V19H12.6252V13H5.9502V11H12.6252V5H14.8502V11H21.5252V13Z" fill="#323232" />
                            </g>
                            <defs>
                                <clipPath id="clip0_253_3153">
                                    <rect width="26.7" height="24" fill="white" transform="translate(0.387695)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>
                            add new section</span>
                    </li>
                </ul>

                <ul className='pl-4 py-5'>
                    <li className='font-light py-4 cursor-pointer'>
                        Settings
                    </li>
                    <li className='font-light cursor-pointer'>
                        Logout
                    </li  >
                </ul>
            </div>

        </aside>
    );
};

export default Sidebar;
