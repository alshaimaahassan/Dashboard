// import NotificationBell from './NotificationBell';
// export default function Header() {
//     const notificationCount = 5; // Example notification count

//     return (
//         <header className="flex gap-10 justify-between flex-row-reverse items-center px-10 py-4  bg-white">
//             <div className='flex gap-10'>
//                 {/* Notification Bell */}
//                 <NotificationBell notificationCount={notificationCount} />
//                 {/* Notification Bell */}
//                 {/* User Profile */}
//                 <div className='flex gap-7 '>
//                     <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
//                         <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
//                     </div>
//                     <div className="flex flex-col ">
//                         <p>John Doe</p>
//                         <p>Admin</p>
//                     </div>

//                 </div>
//                 {/* User Profile */}
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                 </svg>



//             </div>
//             {/* Search Bar */}

//             <div className="relative ">
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     className="border border-gray-300 rounded-3xl p-2 bg-gray-50 pl-10 w-96"
//                 />
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-5 h-5 absolute top-2 left-2 text-gray-500"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M21 21l-4.35-4.35m2.487-6.487A7.5 7.5 0 1110.5 3a7.5 7.5 0 018.637 7.163z"
//                     />
//                 </svg>
//             </div>
//             {/* Search Bar */}

//         </header>
//     );
// }
import NotificationBell from './NotificationBell';

export default function Header({ toggleSidebar }) {
    const notificationCount = 5; // Example notification count



    return (
        <header className="flex gap-10 justify-between flex-row-reverse items-center px-10 py-4 bg-white">
            <div className="flex gap-10">
                <div className="flex gap-10">
                    {/* Notification Bell - Hidden on sm */}
                    <div className='hidden sm:block'>
                        <NotificationBell
                            notificationCount={notificationCount}

                        />
                    </div>
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 hidden sm:block"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </div>
            </div>

            {/* Search Bar */}
            {/* <div className="flex flex-row-reverse gap-10">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-3xl p-2 bg-gray-50 pl-10 w-96"
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
                </div> */}
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


    // return (
    //     <header className="flex gap-10 justify-between flex-row-reverse items-center px-10 py-4  bg-white">
    //         <div className="flex gap-10">


    //             <div className="flex gap-10">
    //                 {/* Notification Bell */}
    //                 <NotificationBell notificationCount={notificationCount} />

    //                 <div className="flex gap-7">
    //                     {/* User Profile */}
    //                     <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    //                         <svg
    //                             className="absolute w-12 h-12 text-gray-400 -left-1"
    //                             fill="currentColor"
    //                             viewBox="0 0 20 20"
    //                             xmlns="http://www.w3.org/2000/svg"
    //                         >
    //                             <path
    //                                 fillRule="evenodd"
    //                                 d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
    //                                 clipRule="evenodd"
    //                             />
    //                         </svg>
    //                     </div>
    //                     <div className="flex flex-col">
    //                         <p>John Doe</p>
    //                         <p>Admin</p>
    //                     </div>
    //                     {/* User Profile */}
    //                 </div>

    //                 <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     strokeWidth={1.5}
    //                     stroke="currentColor"
    //                     className="w-6 h-6"
    //                 >
    //                     <path
    //                         strokeLinecap="round"
    //                         strokeLinejoin="round"
    //                         d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    //                     />
    //                 </svg>
    //             </div>
    //         </div>

    //         {/* Search Bar */}
    //         <div className='flex flex-row-reverse gap-10'>
    //         <div className="relative">
    //             <input
    //                 type="text"
    //                 placeholder="Search..."
    //                 className="border border-gray-300 rounded-3xl p-2 bg-gray-50 pl-10 w-96"
    //             />
    //             <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 strokeWidth="1.5"
    //                 stroke="currentColor"
    //                 className="w-5 h-5 absolute top-2 left-2 text-gray-500"
    //             >
    //                 <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M21 21l-4.35-4.35m2.487-6.487A7.5 7.5 0 1110.5 3a7.5 7.5 0 018.637 7.163z"
    //                 />
    //             </svg>
    //         </div>
    //         {/* Sidebar Toggle Icon */}
    //         <button
    //             onClick={toggleSidebar}
    //             className="text-gray-500 focus:outline-none "
    //         >

    //             <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <g opacity="0.898019">
    //                     <path d="M9.53711 6.5625H26.0371V7.9375H9.53711V6.5625ZM9.53711 12.0625H26.0371V13.4375H9.53711V12.0625ZM9.53711 17.5625H26.0371V18.9375H9.53711V17.5625Z" fill="#202224" />
    //                 </g>
    //             </svg>

    //         </button>
    //         </div>
    //     </header>
    // );
}





