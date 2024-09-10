

export default function AddTour() {
    return (

        <div className="overflow-x-auto bg-white p-10 ">
            <h2 className="text-2xl font-bold pb-4"> Tour Guide Details</h2>
            <h3 className="text-xl font-thin pb-4">Tour Guide listing Management</h3>
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
                {/* Select  category */}
                <label htmlFor="underline_select" className="sr-only" ><span>Underline select</span> </label>
                <select id="underline_select" className="block py-2.5 px-0 w-full text-sm pt-8 mb-4 text-gray-400 bg-transparent 
        border-0 border-b-2 border-gray-200  dark:text-gray-400
            dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option selected>Choose a country</option>

                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                {/* Select  category */}
                {/* Select  category */}
               
                    <select  id="underline_select" className="py-2.5 px-0 w-full text-sm pt-8 mb-4 text-gray-400 bg-transparent 
                    border-0 border-b-2 border-gray-200 dark:text-gray-400
dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer ">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>

                 {/* Select  category */}
            </div>
            </div>


    )
}
