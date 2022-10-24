import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content'


const Sales_Highlights = () => {

    function clicked() {
        toast.info('Hello HighLights!!');
        toast.error('Hello HighLights!!');
        toast.success('Hello HighLights!!');
        toast.warning('Hello HighLights!!');



        // Swal.fire({
        //     title: 'Error!',
        //     text: 'Do you want to continue',
        //     icon: 'error',
        //     confirmButtonText: 'Cool'
        // })

        // Swal.fire({
        //     // position: 'top-end',
        //     icon: 'success',
        //     title: 'Your work has been saved',
        //     showConfirmButton: false,
        //     timer: 1500
        // })

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    return (

        // return wrapper div
        <div className='mt-16 md:mt-2'>

            <div className="m-2 flex justify-center">
                <div className="block w-11/12 ">

                    {/* Main Card */}
                    <div className="block rounded-lg shadow-lg bg-white dark:bg-secondary-dark-bg  text-center">
                        {/* Main Card header */}
                        <div className="py-3 'bg-white text-xl dark:text-gray-200 text-start px-6 border-b border-gray-300">
                            Sales
                        </div>
                        {/* Main Card header--/-- */}

                        {/* Main Card body */}
                        <div className=" px-6 pb-4 text-start md:min-h-[60vh]">

                            {/* Per inner cards */}

                            <div className="flex justify-start mt-5">
                                <div className="flex h-auto flex-col md:flex-row w-full rounded-lg  dark:bg-main-dark-bg bg-white shadow-lg">
                                    <img className="w-full h-44 md:h-[215px] object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://c4.wallpaperflare.com/wallpaper/18/165/122/5bd11f64e6b5f-wallpaper-preview.jpg" alt="" />
                                    <div className="p-3 w-full md:w-[80%] h-auto flex flex-col justify-start">


                                        <TooltipComponent position='BottomCenter' content='NameNameNameNameNameNameNameNameNameNameNameNameNameNameNameName'>
                                            <h5 className=" whitespace-nowrap text-ellipsis overflow-hidden text-gray-900 dark:text-gray-300 text-lg font-medium mb-2">Product: NameNameNameNameNameNameNameNameNameNameNameNameNameNameNameName</h5>
                                        </TooltipComponent>


                                        <p className="w-full break-all pb-3 md:pb-0 text-gray-700 dark:text-gray-400 text-sm">
                                            Model: lkVOSDKVOSDK. <br />
                                            Stock Available: 25pcs
                                            <br />
                                            Sold Quantity: 25pcs
                                            <br />
                                            Serial Found: 25pcs
                                            <br />
                                            Price per Unit: 10tk
                                            <br />
                                            Subtotal: 10tk
                                        </p>

                                        <div className='flex justify-end'>
                                            <div className='flex gap-3 justify-center'>

                                                <button
                                                    type="button"

                                                    className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                                    onClick={() => { clicked() }}
                                                >Like</button>
                                                <button
                                                    type="button"

                                                    className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                                    onClick={() => { clicked() }}
                                                >share</button>
                                                <button
                                                    type="button"

                                                    className="inline-block px-5 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg hover:scale-110 focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                                    onClick={() => { clicked() }}
                                                >Delete</button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Per inner card--/-- */}


                            {/* Per inner cards */}

                            <div className="flex justify-start mt-5">
                                <div className="flex h-auto flex-col md:flex-row w-full rounded-lg  dark:bg-main-dark-bg bg-white shadow-lg">
                                    <img className="w-full h-44 md:h-[215px] object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://c4.wallpaperflare.com/wallpaper/18/165/122/5bd11f64e6b5f-wallpaper-preview.jpg" alt="" />
                                    <div className="p-3 w-full md:w-[80%] h-auto flex flex-col justify-start">


                                        <TooltipComponent position='BottomCenter' content='NameNameNameNameNameNameNameNameNameNameNameNameNameNameNameName'>
                                            <h5 className=" whitespace-nowrap text-ellipsis overflow-hidden text-gray-900 dark:text-gray-300 text-lg font-medium mb-2">Product: NameNameNameNameNameNameNameNameNameNameNameNameNameNameNameName</h5>
                                        </TooltipComponent>


                                        <p className="w-full break-all text-gray-700 dark:text-gray-400 text-sm">
                                            Model: lkVOSDKVOSDK. <br />
                                            Stock Available: 25pcs
                                            <br />
                                            Sold Quantity: 25pcs
                                            <br />
                                            Serial Found: 25pcs
                                            <br />
                                            Price per Unit: 10tk
                                            <br />
                                            Subtotal: 10tk
                                        </p>

                                        <div className='flex justify-end'>
                                            <div className='flex gap-3 justify-center'>

                                                <button
                                                    type="button"

                                                    className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                                    onClick={() => { clicked() }}
                                                >Like</button>
                                                <button
                                                    type="button"

                                                    className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                                    onClick={() => { clicked() }}
                                                >Share</button>
                                                <button
                                                    type="button"

                                                    className="inline-block px-5 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg hover:scale-110 focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                                    onClick={() => { clicked() }}
                                                >Delete</button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Per inner card--/-- */}

                            {/* Per inner cards */}

                            <div className="flex justify-start mt-5">
                                <div className="flex h-auto flex-col md:flex-row w-full rounded-lg  dark:bg-main-dark-bg bg-white shadow-lg">
                                    <img className="w-full h-44 md:h-[215px] object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                                    <div className="p-3 w-full md:w-[80%] h-auto flex flex-col justify-start">


                                        <TooltipComponent position='BottomCenter' content='NameNameNameNameNameNameNameNameNameNameNameNameNameNameNameName'>
                                            <h5 className=" whitespace-nowrap text-ellipsis overflow-hidden text-gray-900 dark:text-gray-300 text-lg font-medium mb-2">Product: NameNameNameNameNameNameNameNameNameNameNameNameNameNameNameName</h5>
                                        </TooltipComponent>


                                        <p className="w-full break-all text-gray-700 dark:text-gray-400 text-sm">
                                            Model: lkVOSDKVOSDK. <br />
                                            Stock Available: 25pcs
                                            <br />
                                            Sold Quantity: 25pcs
                                            <br />
                                            Serial Found: 25pcs
                                            <br />
                                            Price per Unit: 10tk
                                            <br />
                                            Subtotal: 10tk
                                        </p>

                                        <div className='flex justify-end'>
                                            <div className='flex gap-3 justify-center'>

                                                <button
                                                    type="button"

                                                    className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                                    onClick={() => { clicked() }}
                                                >Like</button>
                                                <button
                                                    type="button"

                                                    className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                                    onClick={() => { clicked() }}
                                                >Share</button>
                                                <button
                                                    type="button"

                                                    className="inline-block px-5 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg hover:scale-110 focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                                    onClick={() => { clicked() }}
                                                >Delete</button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Per inner card--/-- */}



                            {/* Per inner card */}

                            <div className="flex justify-start mt-5">
                                <div className="flex h-auto flex-col md:flex-row max-w-full rounded-lg  dark:bg-main-dark-bg bg-white shadow-lg">
                                    <img className=" w-auto h-44 md:h-44 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                                    <div className="p-1 h-auto flex flex-col justify-start">
                                        <h5 className="text-gray-900 dark:text-gray-300 text-lg font-medium mb-2">Card title</h5>
                                        <p className="text-gray-700 dark:text-gray-400 text-base mb-4">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-500 text-xs">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            {/* Per inner card--/-- */}

                            {/* Per inner card */}
                            <div className="flex justify-start mt-5">
                                <div className="flex h-auto flex-col md:flex-row max-w-full rounded-lg  dark:bg-main-dark-bg bg-white shadow-lg">
                                    <img className=" w-auto h-44 md:h-44 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                                    <div className="p-1 h-auto flex flex-col justify-start">
                                        <h5 className="text-gray-900 dark:text-gray-300 text-lg font-medium mb-2">Card title</h5>
                                        <p className="text-gray-700 dark:text-gray-400 text-base mb-4">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-500 text-xs">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            {/* Per inner card--/-- */}

                            {/* Per inner card */}

                            <div className="flex justify-start mt-5">
                                <div className="flex h-auto flex-col md:flex-row md:max-w-full rounded-lg  dark:bg-main-dark-bg bg-white shadow-lg">
                                    <img className=" w-auto h-44 md:h-44 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                                    <div className="p-1 h-auto flex flex-col justify-start">
                                        <h5 className="text-gray-900 dark:text-gray-300 text-lg font-medium mb-2">Card title</h5>
                                        <p className="text-gray-700 dark:text-gray-400 text-base mb-4">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-500 text-xs">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            {/* Per inner card--/-- */}

                        </div>
                        {/* Main Card Body--/-- */}

                        {/* Main Card footer */}
                        <div className="py-3 px-6 border-t text-start border-gray-300 text-gray-600">
                            <button
                                type="button"

                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                onClick={() => { clicked() }}
                            >Click me</button>
                        </div>
                        {/* Main Card footer--/-- */}
                    </div>
                    {/* Main Card--/-- */}

                </div>
            </div>

        </div>
        // return wrapper div--/--
    )
}

export default Sales_Highlights