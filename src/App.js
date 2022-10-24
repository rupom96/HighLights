import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

import { ECommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line, Sales_Highlights, DataTable } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css'
import SmoothScroll from './components/SmoothScroll_Js/SmoothScroll';

import Sales_Main from './pages/Sales_Main';
import Test from './pages/Test';
import Test2 from './pages/Test2';
import Test3Mui from './pages/Test3Mui';
import Sales_HiglightsNew from './pages/Sales_HiglightsNew';

import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import Test4dataTable from './pages/Test4dataTable';

const App = () => {

    const { initialState, activeMenu, setActiveMenu, themeSettings, setThemeSettings, currentColor, currentMode, screenSize, setIsClicked } = useStateContext();


    const hideAllOpened = () => {
        setThemeSettings(false);
        setIsClicked(initialState);
        // console.log("function e dhukse");

        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false);
        }
    }


    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <ThemeProvider theme={createTheme({
                palette: {
                    mode: currentMode === 'Dark' ? 'dark' : 'light',
                },
            })}>

                <BrowserRouter>
                    {/* --the most super background on which everything is situated-- */}
                    <div className='flex relative dark:bg-main-dark-bg'>

                        {/* --Settings Icon & button-- */}
                        <div className='fixed right-4 bottom-4' style={{ zindex: '1000' }}>

                            <TooltipComponent content="Settings" position="Top">

                                <button type="button" onClick={() => setThemeSettings(true)} className="text-2xl p-3 hover:drop-shadow-2xl hover:scale-110 transform-all duration-300 hover:transform-all hover:bg-light-gray text-white" style={{ background: currentColor, borderRadius: '50%' }}>
                                    <FiSettings />
                                </button>

                            </TooltipComponent>

                        </div>

                        {/* --Sidebar depending on 'activeMenu' var--  */}
                        {activeMenu ?
                            (

                                <div className="w-72 fixed sidebar drop-shadow-lg bg-white dark:bg-secondary-dark-bg transition-all duration-300 " id="sidebarDiv">
                                    <Sidebar />
                                </div>
                            )
                            :
                            (
                                <div className='transition-all duration-300 w-0 drop-shadow-2xl  bg-white dark:bg-secondary-dark-bg '>
                                    <Sidebar />
                                </div>
                            )
                        }

                        {/* --main background--  */}
                        <div className={
                            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
                        ${activeMenu ? 'md:ml-72' : 'flex-2'}`

                        }>
                            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                                <Navbar />
                            </div>


                            <div>
                                {themeSettings && <ThemeSettings />}
                                {/* --declaring routes of components/pages--  */}
                                <div onClick={() => hideAllOpened()}>
                                    <Routes>
                                        {/* Dahsboard */}
                                        <Route path="/" element={<ECommerce />} />
                                        <Route path="/ecommerce" element={<ECommerce />} />

                                        {/* Pages */}
                                        <Route path="/orders" element={<Orders />} />
                                        <Route path="/employees" element={<Employees />} />
                                        <Route path="/customers" element={<Customers />} />

                                        {/* databiz Pages */}
                                        <Route path="/sales" element={<Sales_Highlights />} />
                                        <Route path="/datatable" element={<DataTable />} />
                                        <Route path="/sales_main" element={<Sales_Main />} />
                                        <Route path="/test" element={<Test />} />
                                        <Route path="/test2" element={<Test2 />} />
                                        <Route path="/test3mui" element={<Test3Mui />} />
                                        <Route path="/test4datatable" element={<Test4dataTable />} />
                                        <Route path="/sales_highlights" element={<Sales_HiglightsNew />} />


                                        {/* Apps */}
                                        <Route path="/kanban" element={<Kanban />} />
                                        <Route path="/editor" element={<Editor />} />
                                        <Route path="/calendar" element={<Calendar />} />
                                        <Route path="/color-picker" element={<ColorPicker />} />


                                        {/* Charts */}
                                        <Route path="/line" element={<Line />} />
                                        <Route path="/area" element={<Area />} />
                                        <Route path="/bar" element={<Bar />} />
                                        <Route path="/pie" element={<Pie />} />
                                        <Route path="/financial" element={<Financial />} />
                                        <Route path="/color-mapping" element={<ColorMapping />} />
                                        <Route path="/pyramid" element={<Pyramid />} />
                                        <Route path="/stacked" element={<Stacked />} />

                                    </Routes>
                                </div>

                            </div>
                        </div>
                    </div>
                </BrowserRouter>
                <ToastContainer
                    theme='colored'
                    position="bottom-right"
                    autoClose={2000}
                    pauseOnHover={true}
                    draggable={true}
                    closeOnClick={true}
                    hideProgressBar={false}
                    newestOnTop={false}
                    pauseOnFocusLoss
                />

            </ThemeProvider>
        </div>
    )
}

export default App