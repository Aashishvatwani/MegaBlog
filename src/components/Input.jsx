
import React, { useId } from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(function Input(
    { label, type = "text", className = "", ...props },
    ref
) {
    const id = useId();

    return (
        <div className="w-full">
            {label && 
                <label className='inline-block mb-1 pl-1'  htmlFor={id}>
                    {label}
                </label>
            }
            <input
                 type={type}
                 className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                 ref={ref}
                 {...props}
                 id={id}
            />
        </div>
    );
});

// Define PropTypes for better validation


// Set default props for better fallback behavior


export default Input;
