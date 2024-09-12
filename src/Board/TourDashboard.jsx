import { useState } from "react";

export default function TourDashboard() {
    const [users, setUsers] = useState([
        {
            id: 1,
            avatar: "https://via.placeholder.com/150",
            guide: "John Doe",
            Address: "Antara Ben Shadad St 15, Jeruslem",
            phone: "123-456-7890",
        },
        {
            id: 2,
            avatar: "https://via.placeholder.com/150",
            guide: "Jane Smith",
            Address: "Antara Ben Shadad St 15, Jeruslem",
            phone: "987-654-3210",
        }, {
            id: 3,
            avatar: "https://via.placeholder.com/150",
            guide: "John Doe",
            Address: "Antara Ben Shadad St 15, Jeruslem",
            phone: "123-456-7890",
        },
        {
            id: 4,
            avatar: "https://via.placeholder.com/150",
            guide: "Jane Smith",
            Address: "Antara Ben Shadad St 15, Jeruslem",
            phone: "987-654-3210",
        },
        // Add more users here
    ]);


    // Handle Delete User
    const handleDelete = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    };



    return (
        <div className="overflow-x-auto bg-white p-10 ">
            <h2 className="text-2xl font-bold pb-4">Tour Guide</h2>
            <h3 className="text-xl font-thin pb-4">Hotels listing Management</h3>
            <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase h-12 border-t-2 border-b-2 border-t-gray-200 border-b-gray-800"> 
                    <tr >
                        <th scope="col" className="px-6 py-3">User</th>
                        <th scope="col" className="px-6 py-3">Tour Guide</th>
                        <th scope="col" className="px-6 py-3">Address</th>
                        <th scope="col" className="px-6 py-3">Phone</th>
                        <th scope="col" className="px-6 py-3 text-center">View</th>
                        <th scope="col" className="px-6 py-3 text-center">Edit</th>
                        <th scope="col" className="px-6 py-3 text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <img
                                    src={user.avatar}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full"
                                />
                            </td>
                            <>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {user.guide}
                                </td>
                                <td className="px-6 py-4">{user.Address}</td>
                                <td className="px-6 py-4">{user.phone}</td>
                            </>
                            {/* View Button */}
                            <td className="px-6 py-4 text-center">
                                <button className="text-blue-600 hover:text-blue-800">
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.969727" width="40" height="40" rx="4" fill="#4880FF" />
                                        <g clipPath="url(#clip0_627_438)">
                                            <path d="M20.9697 14.5C24.7597 14.5 28.1397 16.63 29.7897 20C28.1397 23.37 24.7697 25.5 20.9697 25.5C17.1697 25.5 13.7997 23.37 12.1497 20C13.7997 16.63 17.1797 14.5 20.9697 14.5ZM20.9697 12.5C15.9697 12.5 11.6997 15.61 9.96973 20C11.6997 24.39 15.9697 27.5 20.9697 27.5C25.9697 27.5 30.2397 24.39 31.9697 20C30.2397 15.61 25.9697 12.5 20.9697 12.5ZM20.9697 17.5C22.3497 17.5 23.4697 18.62 23.4697 20C23.4697 21.38 22.3497 22.5 20.9697 22.5C19.5897 22.5 18.4697 21.38 18.4697 20C18.4697 18.62 19.5897 17.5 20.9697 17.5ZM20.9697 15.5C18.4897 15.5 16.4697 17.52 16.4697 20C16.4697 22.48 18.4897 24.5 20.9697 24.5C23.4497 24.5 25.4697 22.48 25.4697 20C25.4697 17.52 23.4497 15.5 20.9697 15.5Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_627_438">
                                                <rect width="24" height="24" fill="white" transform="translate(8.96973 8)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                            </td>

                            {/* Edit Button */}
                            <td className="px-6 py-4 text-center">

                                <button

                                >
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.969727" width="40" height="40" rx="4" fill="#4880FF" />
                                        <g clipPath="url(#clip0_627_442)">
                                            <path d="M26.9697 12H24.9697V19.9L26.9697 17.9V12Z" fill="white" />
                                            <path d="M14.9697 12H12.9697V28H14.9697V12Z" fill="white" />
                                            <path d="M20.9697 12H18.9697V16H20.9697V12Z" fill="white" />
                                            <path d="M20.9697 18H18.9697V22H20.9697V18Z" fill="white" />
                                            <path d="M20.9697 24H18.9697V28H20.9697V24Z" fill="white" />
                                            <path d="M31.5297 20.5901L30.3797 19.4401C29.7897 18.8501 28.8397 18.8501 28.2597 19.4401L22.9697 24.7301V28.0001H26.2397L31.5297 22.7101C32.1197 22.1201 32.1197 21.1701 31.5297 20.5901ZM25.5497 26.4501H24.5197V25.4201L27.9697 21.9701L28.9997 23.0001L25.5497 26.4501Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_627_442">
                                                <rect width="24" height="24" fill="white" transform="translate(8.96973 8)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>

                            </td>

                            {/* Delete Button */}
                            <td className="px-6 py-4 text-center">
                                <button
                                    onClick={() => handleDelete(user.id)}
                                >
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.969727" width="40" height="40" rx="4" fill="#FF372E" />
                                        <g clipPath="url(#clip0_627_454)">
                                            <path d="M14.9697 27C14.9697 28.1 15.8697 29 16.9697 29H24.9697C26.0697 29 26.9697 28.1 26.9697 27V15H14.9697V27ZM16.9697 17H24.9697V27H16.9697V17ZM24.4697 12L23.4697 11H18.4697L17.4697 12H13.9697V14H27.9697V12H24.4697Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_627_454">
                                                <rect width="24" height="24" fill="white" transform="translate(8.96973 8)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


