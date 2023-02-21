import React from 'react';
import Layout from '../../components/dashboard/Layout/Layout';

function DashboardLanding() {
    return (
        <Layout title="Dashboard">
            <div className="w-full px-6 py-6 mx-auto">
                {/* <!-- row 1 --> */}
                <div className="flex flex-wrap -mx-3">
                    {/* <!-- card1 --> */}
                    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">Total Amount Obtained</p>
                                            <h5 className="mb-2 font-bold ">0 CFA</h5>
                                            <p className="mb-0  dark:opacity-60">
                                                <span className="text-sm font-bold leading-normal text-emerald-500">+0% </span>
                                                since creation
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                                            <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card2 --> */}
                    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase   dark:opacity-60">Total Users</p>
                                            <h5 className="mb-2 font-bold  ">2</h5>
                                            <p className="mb-0   dark:opacity-60">
                                                <span className="text-sm font-bold leading-normal text-emerald-500">+1%</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                                            <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card3 --> */}
                    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase   dark:opacity-60">New Clients</p>
                                            <h5 className="mb-2 font-bold  ">0</h5>
                                            <p className="mb-0   dark:opacity-60">
                                                <span className="text-sm font-bold leading-normal text-red-600">-2%</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                                            <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card4 --> */}
                    <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase   dark:opacity-60">Sales of Last Week</p>
                                            <h5 className="mb-2 font-bold  ">1</h5>
                                            <p className="mb-0   dark:opacity-60">
                                                <span className="text-sm font-bold leading-normal text-emerald-500">+5%</span>
                                                than last month
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                                            <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default DashboardLanding;