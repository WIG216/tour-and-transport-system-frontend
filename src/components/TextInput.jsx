import React from 'react'

const TextInput = (type, name, value, Placeholder, onChange, onBlur) => {
    return (
        <>
            <input
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={Placeholder}
                className='text-sm font-medium focus:outline-none text-textColor'
            />
        </>
    );
}

export default TextInput