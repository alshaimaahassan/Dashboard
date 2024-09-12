export default function AddUser() {
    return (
        <div className="overflow-x-auto bg-white p-10 ">
            <h2 className="text-2xl font-bold pb-4">Add User Details</h2>
            <h3 className="text-xl font-thin pb-4">User Profile Management</h3>
            <hr className="border-t-2 border-gray-400 my-4" />

            <form>
                {/* First Name and Last Name */}
                <div className="flex space-x-4 mb-4">
                    {/* First Name */}
                    <label
                        htmlFor="firstName"
                        className="relative block w-1/2 rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <input
                            type="text"
                            id="firstName"
                            className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3"
                            placeholder="First Name"
                        />
                        <span
                            className="pointer-events-none absolute left-2.5 top-0 -translate-y-1/2 bg-white px-1 
                            text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            First Name
                        </span>
                    </label>

                    {/* Last Name */}
                    <label
                        htmlFor="lastName"
                        className="relative block w-1/2 rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <input
                            type="text"
                            id="lastName"
                            className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3"
                            placeholder="Last Name"
                        />
                        <span
                            className="pointer-events-none absolute left-2.5 top-0 -translate-y-1/2 bg-white px-1 
                            text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Last Name
                        </span>
                    </label>
                </div>

                {/* Phone Number and Password */}
                <div className="flex space-x-4 mb-4">
                    {/* Phone Number */}
                    <label
                        htmlFor="phoneNumber"
                        className="relative block w-1/2 rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3"
                            placeholder="Phone Number"
                        />
                        <span
                            className="pointer-events-none absolute left-2.5 top-0 -translate-y-1/2 bg-white px-1 
                            text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Phone Number
                        </span>
                    </label>

                    {/* Password */}
                    <label
                        htmlFor="password"
                        className="relative block w-1/2 rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <input
                            type="password"
                            id="password"
                            className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3"
                            placeholder="Password"
                        />
                        <span
                            className="pointer-events-none absolute left-2.5 top-0 -translate-y-1/2 bg-white px-1 
                            text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Password
                        </span>
                    </label>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="relative block w-full rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <input
                            type="email"
                            id="email"
                            className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3"
                            placeholder="Email"
                        />
                        <span
                            className="pointer-events-none absolute left-2.5 top-0 -translate-y-1/2 bg-white px-1 
                            text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Email
                        </span>
                    </label>     {/* submit button */}
                <button className=" text-white bg-primary border-0 py-3 px-16 focus:outline-none
                    hover:bg-blue-600 rounded text-lg mt-4 w-64 ">SUBMIT</button>
         {/* submit button */}
                </div>

            </form>
        </div>
    )
}
