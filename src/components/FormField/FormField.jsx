import React from 'react';
import { useFormikContext } from 'formik'
import TextInput from '../TextInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function FormField({ name, type, Placeholder }) {
    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();
    // console.log(values)

    return (
        <>
            <TextInput
                onBlur={() => setFieldTouched(name)}
                onChange={(e) => setFieldValue(name, e.target.value)}
                value={values.name}
                Placeholder={Placeholder}
                type={type}
                name={name}
            />
            
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormField;