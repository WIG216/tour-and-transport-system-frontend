import React, {useState, useEffect} from 'react';
import DashboardLayout from '../../components/dashboard/Layout/Layout';
import Button from '../../components/dashboard/form/components/Button';
import Form from '../../components/dashboard/form/components/Form';
import FormField from '../../components/dashboard/form/components/FormField';
import { getAllBooking } from '../../db/booking';
import moment from 'moment';



function BookingDriver() {

    const [booking, setBooking] = useState([]);


    const handleGetBooking = () => {
        
        getAllBooking().then((res) => {
            console.log('RESPONSE GET: ', res.data);
            
            if (res.ok) {
                setBooking(res.data.data);
            }
        }).catch(err => {
            console.log('error: ', err);
        })

    }

    console.log(booking)


    useEffect(() => {
        handleGetBooking();
    }, []);


    return (
        <DashboardLayout title="Booking">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <div className="flex items-center justify-between  pb-4 bg-white dark:bg-gray-900 pt-6 px-6">
                  
                    <label for="table-search" className="sr-only">Search</label>
                    <div className="relative ">
                        
                        <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:outline-none focus:ring-0" placeholder="Search Bookings" />
                    </div>
                    
                </div>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tour Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Guest Size
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date of Creation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(bookings =>(
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="pl-3">
                                    <div className="text-base font-semibold text-gray-500">{bookings.fullName}</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                {bookings.tourName}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                <div className="font-normal text-gray-500">{bookings.userEmail}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                <div className="font-normal text-gray-500">{bookings.phone}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                <div className="font-normal text-gray-500">{bookings.guestSize}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">{moment(new Date(bookings.createdAt)).format('MMMM d, YYYY')}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> {bookings.status}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <i className="fa-solid fa-pen-to-square pr-4 text-blue-500"></i>
                                <i className="fa-solid fa-trash-can text-red-900"></i>
                            </td>
                        </tr>
                            ))
                        }
                       
                    </tbody>
                </table>
            </div>

        </DashboardLayout >
    );
}

export default BookingDriver;