import { useState } from 'react';
import FileUploadPopup from '../components/FileUploadPopup ';
export default function AddHotel() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Function to open the popup
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className="overflow-x-auto bg-white p-10 ">
            <h2 className="text-2xl font-bold pb-4">Add Hotel Details</h2>
            <h3 className="text-xl font-thin pb-4">Hotels listing Management</h3>
            {/* Hotel Name */}
            <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-8 mb-4 focus-within:border-blue-600"
            >
                <input
                    type="text"
                    id="UserEmail"
                    placeholder="Hotel Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                    Hotel Name
                </span>
            </label>
            {/* Hotel Name */}
            {/* Contact Person */}
            <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-8 mb-4 focus-within:border-blue-600"
            >
                <input
                    type="text"
                    id="UserEmail"
                    placeholder="Hotel Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                    Contact Person
                </span>
            </label>
            {/* Contact Person */}
            {/* Hotel Address */}
            <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-8 mb-4 focus-within:border-blue-600"
            >
                <input
                    type="text"
                    id="UserEmail"
                    placeholder="Hotel Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                    Hotel Address
                </span>
            </label>
            {/* Hotel Address */}


    

            <div className="flex justify-between w-full gap-4">
                {/*longitude*/}
                <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-8 w-full mb-4 focus-within:border-blue-600"
                >
                    <input
                        type="text"
                        id="UserEmail"
                        placeholder="Hotel Name"
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                        className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    >
                        longitude
                    </span>
                </label>
                {/* longitude */}
                {/* latitude */}
                <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden border-b border-gray-200 bg-transparent w-full pt-8 mb-4 focus-within:border-blue-600"
                >
                    <input
                        type="text"
                        id="UserEmail"
                        placeholder="Hotel Name"
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                        className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    >
                        latitude
                    </span>
                </label>
                {/* latitude*/}
            </div>
            <div className="flex flex-row gap-10">
                <div className=" w-full gap-4">
                    {/* Select  category */}
                    <label htmlFor="underline_select" className="sr-only" ><span>Underline select</span> </label>
                    <select id="underline_select" className="block py-2.5 px-0 w-full text-sm pt-8 mb-4 text-gray-500 bg-transparent 
        border-0 border-b-2 border-gray-500  dark:text-gray-400
            dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                      <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    {/* Select  category */}
                    {/* Select  Sub category */}
                    <label
                        htmlFor="UserEmail"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-8 mb-4 focus-within:border-blue-600"
                    >
                        <input
                            type="text"
                            id="UserEmail"
                            placeholder="Hotel Name"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span
                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                        >
                            Hotel Address
                        </span>
                    </label>
                    {/* Select  Sub category */}
                </div>
                {/* file upload */}
                <form >
                  
                    <label onClick={openPopup}  className="flex flex-col items-center w-96 h-40 max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_330_3162)">
                                <path d="M48.375 25.1C46.675 16.475 39.1 10 30 10C22.775 10 16.5 14.1 13.375 20.1C5.85 20.9 0 27.275 0 35C0 43.275 6.725 50 15 50H47.5C54.4 50 60 44.4 60 37.5C60 30.9 54.875 25.55 48.375 25.1ZM47.5 45H15C9.475 45 5 40.525 5 35C5 29.875 8.825 25.6 13.9 25.075L16.575 24.8L17.825 22.425C20.2 17.85 24.85 15 30 15C36.55 15 42.2 19.65 43.475 26.075L44.225 29.825L48.05 30.1C51.95 30.35 55 33.625 55 37.5C55 41.625 51.625 45 47.5 45ZM20 32.5H26.375V40H33.625V32.5H40L30 22.5L20 32.5Z" fill="#2D9DE0" />
                            </g>
                            <defs>
                                <clipPath id="clip0_330_3162">
                                    <rect width="60" height="60" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p className="mt-2 text-xs w-40 tracking-wide text-gray-500 dark:text-gray-400">
                            Drag & Drop or<span className="text-blue-500 font-bold">Browse</span> pdf files to upload JPG, Video, 360 Video</p>

                        <input id="dropzone-file" type="file" className='hidden' />
                        {isPopupOpen && <FileUploadPopup onClose={closePopup} />}

                    </label>
                    {/* file upload */}

                    {/* submit button */}
                    <button className=" text-white bg-blue-500 border-0 py-2  px-8 focus:outline-none
hover:bg-blue-600 rounded text-lg mt-4 w-64 ml-32">submit</button>
                    {/* submit button */}

                </form>



            </div>
        </div>
    )
}







