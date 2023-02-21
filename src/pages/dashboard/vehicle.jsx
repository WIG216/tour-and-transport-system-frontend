import React, { useState, useEffect } from 'react';
import Layout from '../../components/dashboard/Layout/Layout';
import Button from '../../components/dashboard/form/components/Button';
import Form from '../../components/dashboard/form/components/Form';
import FormField from '../../components/dashboard/form/components/FormField';
import { getVehicles, deleteVehicle, updateVehicle } from '../../db/vehicle';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import moment from 'moment';
import { AiOutlineCopy } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { AddVehicleModal, DeleteVehicleModal, EditVehicleModal } from '../../components/dashboard/ui/VehicleModal/index';

const rows = [
    {
        label: '#',
        name: 'x-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40  text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'
    },
    {
        label: 'Image',
        name: 'x-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40  text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'
    },
    {
        label: 'Name',
        name: 'x-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40  text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'
    },
    {
        label: 'Vehicle Model',
        name: 'x-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40  text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'
    },
    {
        label: 'Created Date',
        name: 'x-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40  text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'
    },
    {
        label: 'Status',
        name: 'x-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40  text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'
    },
    {
        label: 'Action',
        name: 'x-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40  text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'
    }
]

function Vehicle() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [deleteModal, setShowDeleteModal] = useState(false);
    const [editModal, setShowEditModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [updateId, setUpdateId] = useState(null);

    const [vehicles, setVehicles] = useState([]);

    const toggleAddModal = () => {
        console.log('toggle add modal')
        setShowAddModal(!showAddModal);
    }

    const toggleDeleteModal = () => {
        setShowDeleteModal(!deleteModal);
    }

    const toggleEditModal = () => {
        setShowEditModal(!editModal);
    }

    const handleGetVehicles = () => {
        
        getVehicles().then((res) => {
            console.log('RESPONSE GET: ', res.data);
            if (res.ok) {
                setVehicles(res.data.data);
            }
        }).catch(err => {
            console.log('error: ', err);
        })

    }

    const handleDeleteVehicle = () => {
        console.log('DELETE Vehicle');
        console.log(deleteId)
        deleteVehicle(deleteId).then((res) => {
            if (res.ok) {
                toggleDeleteModal();
                handleGetVehicles();
                toast.success(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })

            } else {
                toast.error(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            toast.error("ERROR", {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })
    }

    const handleEditVehicle = () => {
        console.log('DELETE Vehicle');
        console.log(updateId)
        updateVehicle(updateId).then((res) => {
            if (res.ok) {
                toggleDeleteModal();
                handleGetVehicles();
                toast.success(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })

            } else {
                toast.error(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            toast.error("ERROR", {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })
    }

    const handleVehicleAdded = () => {
        handleGetVehicles();
        toggleAddModal();
    }
    const handleVehicleUpdated = () => {
        handleEditVehicle();
        toggleEditModal();
    }

    const handleVehicleDeleted = () => {
        handleDeleteVehicle();
        toggleDeleteModal();
    }

    useEffect(() => {
        handleGetVehicles();
    }, []);
    return (
        <Layout title="Vehicle">

            <div className="relative w-[70vw] mx-auto md:mt-10 overflow-x-auto shadow-md sm:rounded-lg ">
                <div className="flex items-center w-full justify-between  pb-4 bg-white dark:bg-gray-900 pt-6 px-6">
                    <label for="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div> */}
                        <input type="text" id="table-search-users" className=" p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:outline-none focus:ring-0" placeholder="Search for Vehicle" />
                    </div>
                    <div className="relative">
                        <button onClick={toggleAddModal} to="/vehicle/add" className="btn border">Add Vehicle </button>
                        {/* <a className="inline-block px-5 py-2.5 font-bold leading-normal text-center text-white align-middle transition-all bg-transparent rounded-lg cursor-pointer text-sm ease-in shadow-md bg-150 bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 hover:shadow-xs active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25" href="javascript:;"> <i class="fas fa-plus"> </i>&nbsp;&nbsp;Add New Card</a> */}
                    </div>
                    {/* <Button title="Add"/> */}
                </div>
                <table className="w-full text-sm text-center text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            {rows.map((row, index) => <th key={index} className={row.name}>{row.label}</th>)}
                        </tr>
                    </thead>

                    <tbody className='border-t'>
                        {vehicles.map((data, index) =>
                            <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none  text-slate-400">{index + 1}</span>
                                </td>
                                <td className="p-2 align-middle items-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="flex px-2 py-1">
                                        <div>
                                            <img src={data.vehicleImage} className="mx-auto items-center text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <h6 className="mb-0 text-sm leading-normal">{data.vehicleName}</h6>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">{data.model}</p>
                                    {/* <p className="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Organization</p> */}
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">{moment(new Date(data.createdAt)).format('MMMM d, YYYY')}</p>
                                    {/* <p className="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Organization</p> */}
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">{data.status}</span>
                                </td>
                                {/* <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <span className="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">{moment(new Date(data.createdAt)).format('MMMM d, YYYY')}</span>
                                </td> */}

                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className='flex justify-center'>
                                        <Tippy className='text-slate-500 text-sm font-semibold' content="Edit" animation="fade">
                                            <button className="see"><FiEdit onClick={() => {
                                                setUpdateId(data._id);
                                                toggleEditModal();

                                            }} size={18} />
                                            </button>
                                        </Tippy>
                                        <Tippy className='text-slate-500 text-sm font-semibold' content="Delete Vehicle" animation="fade">
                                            <button onClick={() => {
                                                setDeleteId(data._id);
                                                toggleDeleteModal();
                                            }} className="ml-4"><i className="fa-solid fa-trash-can text-red-900"></i>
                                            </button>
                                        </Tippy>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {showAddModal && <AddVehicleModal onVehicleAdded={handleVehicleAdded} onClose={toggleAddModal} />}
            {editModal && <EditVehicleModal onVehicleAdded={handleVehicleUpdated} onClose={toggleAddModal} />}
            {deleteModal && <DeleteVehicleModal onAccept={handleDeleteVehicle} onCancel={toggleDeleteModal} />}
        </Layout >
    );
}

export default Vehicle;