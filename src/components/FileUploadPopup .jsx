import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
const FileUploadPopup = ({ onClose }) => {
    const [files, setFiles] = useState([]);
    const formRef = useRef(null);

    // Handle file input change
    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    // Handle file deletion
    const handleDelete = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (files.length === 0) {
            alert("No files selected.");
        } else {
            console.log("Submitting files:", files);
            // Logic for file upload goes here (e.g., Axios request)
        }
    };

    // Close popup when clicked outside the form
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                onClose(); // Call the onClose function to close the popup
            }
        };

        // Add event listener to detect clicks outside the popup
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div ref={formRef} className="bg-white rounded-lg w-96 p-6 shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Upload Files</h2>

                {/* File input with change handler */}
                <label
                    htmlFor="dropzone-file"
                    className="flex flex-row justify-evenly p-5 mx-auto mt-2 text-center
                    bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
                >
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
                        Drag & Drop or <span className="text-blue-500 font-bold">Browse</span> to upload files
                    </p>

                    <input
                        id="dropzone-file"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>

                {/* Display selected files */}
                <div className="my-4 bg-white shadow-lg border-neutral-500">
                    {files.length > 0 && (
                        <ul>
                            {files.map((file, index) => (
                                <li key={index} className="flex items-center justify-between px-3 py-2 rounded mb-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_335_3405" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_335_3405)">
                                        <path d="M9 14H19L15.55 9.5L13.25 12.5L11.7 10.5L9 14ZM8 18C7.45 18 6.97917 17.8042 6.5875 17.4125C6.19583 17.0208 6 16.55 6 16V4C6 3.45 6.19583 2.97917 6.5875 2.5875C6.97917 2.19583 7.45 2 8 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H8ZM8 16H20V4H8V16ZM4 22C3.45 22 2.97917 21.8042 2.5875 21.4125C2.19583 21.0208 2 20.55 2 20V6H4V20H18V22H4Z" fill="#1C1B1F" />
                                        </g>
                                    </svg>
                                    <span className="truncate w-64">{file.name}</span>
                                    <button onClick={() => handleDelete(index)}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_335_3346" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_335_3346)">
                                                <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#1C1B1F" />
                                            </g>
                                        </svg>

                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Submit button */}
                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
};
FileUploadPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
};
export default FileUploadPopup;
