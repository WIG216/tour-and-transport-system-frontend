import React from 'react';
import { useFormikContext } from 'formik';

function Button({ title}) {
    const { handleSubmit } = useFormikContext();

    return (
        <button onClick={handleSubmit}  type="submit" className={`text-white items-center rounded-bl-[10px] rounded-tr-[10px] bg-primaryColor hover:bg-secondary focus:outline-none  font-medium search-icon text-sm px-4 py-2 mr-2 mb-2`}>
            { title? {title} :
            <i className="ri-search-line text-2xl bg-secondary text-white"></i>}
        </button>
    );
}

export default Button;