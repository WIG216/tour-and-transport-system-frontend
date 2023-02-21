import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { createBooking } from '../db/booking'
import { toast } from 'react-toastify';
import * as Yup from 'yup';
// import ButtonHome from "../../ButtonHome/Button";
// import Tippy from '@tippyjs/react';
// import { useNavigate } from "react-router-dom";

const initialValues = {
    fullName : "",
    userName : "",
    tourName : "",
    phone : "",
    guestSize : "",
}

const Booking = () => {

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Name field is required'),
        userName: Yup.string().required('Color field is required'),
        tourName: Yup.string().required('Color field is required'),
        phone: Yup.number().integer().required('Color field is required'),
        guestSize: Yup.string().required('model field is required'),
       
    })

    const handleAddVehicle = (values) => {
        console.log("==========================================================")
        console.log('Booking info: ', values);

        createBooking(values).then((res) => {
            console.log(values)
            if (res.ok) {
                toast.success(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                // onVehicleAdded();
            } else {
                console.log(res)
                toast.error(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            console.log('ERROR CREATING: ', err);
            toast.error("ERROR", {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })

    }

  return (
    <Layout>
      <section id="contact" class="contact">
        <div class="container">

          <div class="section-header mt-24">
            <h2>Book a Driver</h2>
          </div>

        </div>

        <div class="container">

          <div class="row gy-5 gx-lg-5">

            

            <div class="col-lg-12">
            {/* {error && <ErrorMessage error={error} visible={true} />}
                                <Form
                                    initialValues={initialValues}
                                    onSubmit={handleAddVehicle}
                                    validationSchema={validationSchema}
                                >


                                    <FormField name="vehicleName" type="text" placeholder="Vehicle Name" />

                                    <FormField name="model" type="text" placeholder="Vehicle model" />

                                    <FormField name="status" type="text" placeholder="Vehicle Status" />

                                    <FormField name="color" type="text" placeholder="Color" />

                                    <FormField name="NoSeat" type="number" placeholder="Number of Seat" />

                                    <FormField name="pricePerKm" type="number" placeholder="Price per Km" />
                                    <FormField name="desc" type="text" placeholder="Vehicle description" />

                                    
                                   
                                    <div className="flex justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                        <ButtonHome type='danger' onClicked={onClose} text='Close' />

                                        <Button title="Create Vehicle" />

                                    </div>

                                </Form> */}
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                
                
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="userName" class="form-control" id="name" placeholder="Driver Name" required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="tourName" id="email" placeholder="Tour Name" required />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Your Objectives" required />
                </div>
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="phone" class="form-control" id="name" placeholder="Users Phone Number" required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="guestSize" id="email" placeholder="Number of people" required />
                  </div>
                </div>
                
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Book Now</button></div>
              </form>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Booking