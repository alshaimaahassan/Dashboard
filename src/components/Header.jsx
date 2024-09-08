import NotificationBell from './NotificationBell';
export default function Header() {
    const notificationCount = 5; // Example notification count

    return (
        <header className="flex gap-10 justify-between flex-row-reverse items-center px-10 py-4  bg-white">
            <div className='flex gap-10'>
                {/* Notification Bell */}
                <NotificationBell notificationCount={notificationCount} />
                {/* Notification Bell */}
                {/* User Profile */}
                <div className='flex gap-7 '>
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="flex flex-col ">
                        <p>John Doe</p>
                        <p>Admin</p>
                    </div>

                </div>
                {/* User Profile */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>



            </div>
            {/* Search Bar */}

            <div className="relative ">
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
            </div>
            {/* Search Bar */}

        </header>
    );
}








