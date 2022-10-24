import * as React from 'react';
import { useEffect, useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import { useForm } from "react-hook-form";

// material table
import MaterialTable from 'material-table';

import { forwardRef } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Paper } from '@material-ui/core';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

// --/- material table

const Test4dataTable = () => {
    const { register, handleSubmit } = useForm();

    // MUI X v4 table

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 160,
            editable: true,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
                }`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];



    // material-table
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => (
            // <div className='rupom'>
            //     <AddCircleOutlineIcon />
            <ChevronRight className='rupom'  {...props} ref={ref} />
            // </div>
        )),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };



    const [mtTableData, setMtTableData] = useState([])

    const mtColumns = [
        { title: "Name", field: "name", filterPlaceholder: "filter by name" },
        { title: "Email", field: "email", filterPlaceholder: "filter by email" },
        { title: "Phone Number", field: "phone", filterPlaceholder: "filter by phone no" },
        { title: "Age", field: "age", filterPlaceholder: "filter by name" },
        { title: "Gender", field: "gender", lookup: { M: "Male", F: "Female" }, filterPlaceholder: "filter by gender" },
        { title: "City", field: "city", filterPlaceholder: "filter by city" },
    ]

    useEffect(() => {

        const tempData = [
            { name: "Rupom", email: "rupom@gmail.com", phone: "01942722175", age: "25", gender: "M", city: "Dhaka", subTableData: [{ father: "reaz", mother: "jharna", sister: "ruponti" }] },
            { name: "Nabin", email: "nabin@gmail.com", phone: "01942722176", age: "27", gender: "M", city: "Pallabi", subTableData: [{ father: "sr. nobin", mother: "unknown", sister: "unknown" }] },
            { name: "Saiful", email: "saiful@gmail.com", phone: "01942722177", age: "26", gender: "M", city: "Narayanganj" },
            { name: "Fariha", email: "fariha@gmail.com", phone: "01942722178", age: "05", gender: "F", city: "Uttara" },
            { name: "Fariha", email: "fariha@gmail.com", phone: "01942722178", age: "05", gender: "F", city: "Uttara" },
            { name: "Fariha", email: "fariha@gmail.com", phone: "01942722178", age: "05", gender: "F", city: "Uttara" },
            { name: "Fariha", email: "fariha@gmail.com", phone: "01942722178", age: "05", gender: "F", city: "Uttara" }
        ]

        setMtTableData(tempData);

        const timer = setTimeout(() => {
            const myToggler = document.getElementsByClassName("rupom");
            console.log(myToggler);
            // console.log(myToggler.0);

            Object.keys(myToggler).forEach(function (key, index) {
                myToggler[key].parentElement.click();
                // myToggler[key].parentNode.style.display = "none";
            });

            // myToggler.map(element)
            // if (!!myToggler) {
            //     myToggler.map(funtion(element){
            //         element.click();
            //         element.parentNode.style.display = "none";
            //     })
            // myToggler.click();
            // myToggler.parentNode.style.display = "none";
            // }

        }, 1);
        return () => clearTimeout(timer);


    }, [])



    return (
        <div className='mt-16 md:mt-2'>

            <div className="m-2 flex justify-center">
                <div className="block w-11/12 ">

                    {/* Main Card */}
                    <div className="block rounded-lg shadow-lg bg-white dark:bg-secondary-dark-bg  text-center">
                        {/* Main Card header */}
                        <div className="py-3 'bg-white text-xl dark:text-gray-200 text-start px-6 border-b border-gray-300">
                            Test3Mui
                        </div>
                        {/* Main Card header--/-- */}

                        {/* Main Card body */}
                        <div className=" px-6 pb-4 text-start md:min-h-[60vh] mt-2">





                            <form onSubmit={handleSubmit((data) => {
                                console.log(data);
                                console.log(datePickerVal1);
                            })}>
                                {/* MUI X v4 table */}

                                <div style={{ height: 400, width: '100%' }}>
                                    {/* <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        checkboxSelection
                                    // enableSelectionOnClick
                                    /> */}
                                </div>

                                {/* material-table */}
                                <div className='mt-4 max-w-full'>
                                    <MaterialTable
                                        icons={tableIcons}
                                        columns={mtColumns}
                                        data={mtTableData}
                                        title="Material-Table"
                                        sx={{ width: '100%' }}

                                        detailPanel={(rowData) => {
                                            console.log(rowData);


                                            const subColumns = [
                                                { title: "Father", field: "father" },
                                                { title: "Mother", field: "mother" },
                                                { title: "Sister", field: "sister" }
                                            ]
                                            // material-table

                                            return (

                                                <MaterialTable
                                                    icons={tableIcons}
                                                    columns={subColumns}
                                                    data={rowData.subTableData}
                                                    component={{
                                                        Container: props => <Paper {...props} elevation={0} />
                                                    }}
                                                    options={{
                                                        showTitle: false,
                                                        search: false,
                                                        toolbar: false,
                                                        rowStyle: { fontSize: "13px" },
                                                        paging: false,
                                                        headerStyle: {
                                                            fontSize: "10px",
                                                            zIndex: "revert"
                                                        },
                                                        maxBodyHeight: "200px"
                                                    }}>

                                                </MaterialTable>

                                            )
                                        }}
                                        onRowClick={(event, rowData, togglePanel) => togglePanel()}
                                        options={{
                                            filtering: false,
                                            showTitle: false,
                                            search: false,
                                            toolbar: false,
                                            filterCellStyle: { fontSize: "8px" },
                                            hideFilterIcons: true,
                                            searchFieldVariant: "standard",
                                            rowStyle: { fontSize: "13px" },
                                            paging: true,
                                            paginationType: "stepped",
                                            paginationPosition: "bottom",
                                            showFirstLastPageButtons: false,
                                            exportButton: true,
                                            columnsButton: true,
                                            selection: true,
                                            headerStyle: {
                                                position: "sticky",
                                                top: "0",
                                                borderBottom: "2px solid black"
                                            },
                                            maxBodyHeight: "300px"


                                        }}
                                    />



                                </div>

                                {/* <MaterialTable
                                    detailPanel={customDetailPanel}
                                    data={
                                        props.data?.map((d, i) => ({
                                            ...d,
                                            tableData: {
                                                showDetailPanel: customDetailPanel,
                                            },
                                        })) || []
                                    }
                                /> */}


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

        </div >
        // return wrapper div--/--
    )
}

export default Test4dataTable