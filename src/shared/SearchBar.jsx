import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Form from '../components/Form/Form';
import FormField from '../components/FormField/FormField'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import * as Yup from 'yup';

import './SearchBar.css'
import Button from '../components/Button/Button';
import { Col } from 'reactstrap';

const initialValues = {
    location: '',
    noSeat: '',
    distance: '',
}

// console.log(initialValues)

const SearchBar = () => {

    const [error, setError] = useState(null);


    const validationSchema = Yup.object().shape({
        location: Yup.string().required('Location field is required'),
        noSeat: Yup.number().required('Number of seat field is required'),
        distance: Yup.number().required('distance field is required'),
    })

    console.log(initialValues)
    const searchHandler = (values) => {

        console.log(values)

        // console.log(validationSchema)
        // if(validationSchema) {
        //     toast.success('success', {
        //         pauseOnHover: false,
        //         closeOnClick: true,
        //     })
        // }else {
        //     console.log(initialValues)
        //     toast.error("error", {
        //         pauseOnHover: false,
        //         closeOnClick: true,
        //     })
        // }
    }

    // console.log(placeholder)
    return (
        <Col lg='7' className='search-bar py-2 px-4 flex'>
            
                <Form
                    initialValues={initialValues}
                    onSubmit={searchHandler}
                    validationSchema={validationSchema}
                >
                    <div className='flex items-center gap-3' >
                        <span className='text-lg text-[#ee6e6e]'><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6 className='mb-0'>Location</h6>
                            <FormField name="location" type="text" Placeholder="Where are you going?" />
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <span className='text-lg text-[#ee6e6e]'>
                            <i className="ri-map-pin-time-line"></i>
                        </span>
                        <div>
                            <h6 className='mb-0'>Distance</h6>
                            <FormField name="distance" type="number" Placeholder="Distance in k/m" />
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-3'>
                        <span className='text-lg text-[#ee6e6e]'>
                            <i className="ri-group-line"></i>
                        </span>
                        <div>
                            <h6 className='mb-0'>Max People</h6>
                            <FormField name="noSeat" type="number" Placeholder="0" />
                        </div>
                    </div>

                     <Button /> 
                </Form>
        </Col>
    )
}

export default SearchBar;