import React from 'react'
import { DateTimePickerComponent, DatePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars'

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';

import { useForm } from "react-hook-form";

const Test = () => {

    const { register, handleSubmit } = useForm();

    const selectSportsData = [
        { Id: "game1", Game: "Badminton" },
        { Id: "game2", Game: "Cricket" },
        { Id: "game3", Game: "Game of thrones" }
    ]

    const autoCompData = [
        { Id: "series1", Series: "Breaking Bad" },
        { Id: "series2", Series: "Game of Thrones" },
        { Id: "series3", Series: "Assassination Classroom" }
    ]


    const rup = (event) => {
        console.log(event.target);

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
                            Test
                        </div>
                        {/* Main Card header--/-- */}

                        {/* Main Card body */}
                        <div className=" px-6 pb-4 text-start md:min-h-[60vh] mt-2">





                            {/* <DateTimePickerComponent floatLabelType='Auto' placeholder='Enter Date'></DateTimePickerComponent>

                            <TimePickerComponent></TimePickerComponent>

                            <DatePickerComponent></DatePickerComponent>


                            <DropDownListComponent floatLabelType='Auto' placeholder='Select Game' dataSource={selectSportsData} fields={{ value: "Id", text: "Game" }} onChange={rup}></DropDownListComponent> */}
                            <form onSubmit={handleSubmit((data) => {
                                console.log(data);
                            })}>
                                <div className="relative z-0">
                                    <input type="text" {...register("BuyerName")} onChange={rup} id="buyerName" className=" py-1.5 block px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label htmlFor="buyerName" className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-[0.90] top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-6">Buyer Name</label>
                                </div>

                                <div className='mt-4'>
                                    <DropDownListComponent {...register("gameName")} onChange={rup} cssClass='dark:text-white' floatLabelType='Auto' placeholder='Select Game' dataSource={selectSportsData} value="game2" fields={{ value: "Id", text: "Game" }} ></DropDownListComponent>
                                </div>

                                <div className='mt-4'>
                                    <DateTimePickerComponent {...register("Date")} floatLabelType='Auto' onChange={rup} placeholder='Enter Date'></DateTimePickerComponent>
                                </div>

                                <div className='mt-4'>
                                    <AutoCompleteComponent {...register("autoComp")} dataSource={autoCompData} floatLabelType='Auto' placeholder='Select Series' value="" fields={{ value: "Series" }} onChange={rup} ></AutoCompleteComponent>
                                </div>

                                <button
                                    type="Submit"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="mt-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                >Submit</button>
                            </form>


                        </div>
                        {/* Main Card Body--/-- */}

                        {/* Main Card footer */}
                        <div className="py-3 px-6 border-t text-start border-gray-300 text-gray-600">
                            <button
                                type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
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

export default Test