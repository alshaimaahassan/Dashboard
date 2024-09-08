import  { useState, useRef, useEffect } from 'react';

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
                                    <span className="truncate w-64">{file.name}</span>
                                    <button onClick={() => handleDelete(index)}>
                                        Delete
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

export default FileUploadPopup;
