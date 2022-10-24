import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const DataTable = () => {

    const editing = { allowDeleting: true, allowEditing: true };
    return (
        <div>



            {/* // return wrapper div */}
            <div className='mt-16 md:mt-2'>

                <div className="m-2 flex justify-center">
                    <div className="block w-11/12 ">

                        {/* Main Card */}
                        <div className="block rounded-lg shadow-lg bg-white dark:bg-secondary-dark-bg  text-center">
                            {/* Main Card header */}
                            <div className="py-3 'bg-white text-xl dark:text-gray-200 text-start px-6 border-b border-gray-300">
                                Data Tables
                            </div>
                            {/* Main Card header--/-- */}

                            {/* Main Card body */}
                            <div className=" mt-4 px-6 pb-4 text-start md:min-h-[60vh]">

                                {/* Syncfusion table */}
                                <GridComponent
                                    id="gridcomp"
                                    dataSource={ordersData}
                                    allowPaging
                                    allowSorting
                                    allowExcelExport
                                    allowPdfExport
                                    contextMenuItems={contextMenuItems}
                                    editSettings={editing}
                                >
                                    <ColumnsDirective>
                                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                                        {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                                    </ColumnsDirective>
                                    <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
                                </GridComponent>
                                {/* --/-Syncfusion table */}

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
            {/* // return wrapper div--/-- */}



        </div>
    )
}

export default DataTable