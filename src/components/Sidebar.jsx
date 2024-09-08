import SidebarDropdownItem from './SidebarDropdownItem';

const Sidebar = () => {
    return (
        <aside
            id="sidebar-multi-level-sidebar"
            className={` top-0 left-0 z-40 w-64 max-h-fit transition-transform bg-white dark:bg-gray-800  sm:translate-x-0`}
            aria-label="Sidebar"
        >
            <h3 className="text-2xl p-4 text-blue-600 font-bold ">Jerusalem</h3>
            <h6 className=" text-center pt-7">Dashboard</h6>
            <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">

                    <SidebarDropdownItem />
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
