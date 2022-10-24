import React from 'react';
import { useState, useEffect } from 'react';
import scannerImg from '../data/scanner.gif';
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Slider,
    Select,
    MenuItem
} from "@mui/material";
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import { useForm } from "react-hook-form";


// material table
import MaterialTable from 'material-table';
import { Paper } from '@material-ui/core';

import { forwardRef } from 'react';

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

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// timeline dots,connectors
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { timelineItemClasses } from '@mui/lab/TimelineItem';


// import muiStyleCustom from '../muiStyleCustom';


const Sales_HiglightsNew = () => {

    const { register, handleSubmit } = useForm();


    // ---[datepicker states]---
    const [buyerDateState, setBuyerDateState] = useState(dayjs());
    const [invoiceDateState, setInvoiceDateState] = useState(dayjs());





    // material-table
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
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
        { title: "Phone", field: "phone", filterPlaceholder: "filter by phone no" },
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

    }, [])

    // const classes = muiStyleCustom();

    return (
        // return wrapper div
        <div className='mt-16 md:mt-2'>

            <div className="m-2 flex justify-center">
                <div className="block w-11/12 ">

                    {/* Main Card */}
                    <div className="block rounded-lg shadow-lg bg-white dark:bg-secondary-dark-bg  text-center">
                        {/* Main Card header */}
                        <div className="py-3 'bg-white text-xl dark:text-gray-200 text-start px-6 border-b border-gray-300">
                            Sales_Main
                        </div>
                        {/* Main Card header--/-- */}

                        {/* Main Card body */}
                        <div className=" px-6 pb-4 text-start md:min-h-[60vh] grid grid-cols-4 gap-4 mt-2">
                            <fieldset className="md:col-span-2 col-span-4 border border-solid dark:text-slate-50 border-gray-300 px-3 pt-1 pb-3">
                                <legend className="text-sm">Buyer Details</legend>

                                <div className="grid md:grid-cols-2 gap-x-4 gap-y-1 ">

                                    <TextField sx={{ width: '100%' }} {...register("buyerName")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="buyerName" label="Buyer Name" variant="standard" size="small" />

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            label="Date"
                                            // inputFormat="DD/MM/YYYY HH:MM" blockletter HH means hours in 24h format, small letter hh means 12h format. dd/mm/yyyy value varies if DD/MM/YYY check urself. for am/pm= a, AM/PM= A
                                            //visit https://day.js.org/docs/en/parse/string-format for datetime formats
                                            inputFormat="DD/MM/YYYY hh:mm A"

                                            renderInput={(params) =>
                                                <TextField
                                                    sx={{ width: '100%', marginTop: 1 }}
                                                    {...params}
                                                    {...register("date")}
                                                    InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                                    InputLabelProps={{
                                                        ...params.InputLabelProps, style: { fontSize: 14 },
                                                        // classes: {
                                                        //     root: classes.inputLabel,
                                                        //     focused: "focused"
                                                        // }
                                                    }}
                                                    variant="standard"
                                                    size="small"
                                                />}
                                            value={buyerDateState}
                                            onChange={(newValue) => {

                                                console.log("date Changed");
                                                setBuyerDateState(newValue);
                                            }}
                                        />
                                    </LocalizationProvider>

                                    <TextField sx={{ width: '100%' }} {...register("buyerAddress")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="buyerAddress" label="Buyer Address" variant="standard" size="small" />

                                    <Autocomplete
                                        id="orderNo"
                                        clearOnEscape
                                        size="small"
                                        // options={top100Films}
                                        options={[]}
                                        // defaultValue={top100Films[2]}
                                        renderInput={(params) => (
                                            <TextField
                                                sx={{ width: '100%', marginTop: 1 }}
                                                {...params}
                                                {...register("orderNo")}
                                                InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                                InputLabelProps={{
                                                    ...params.InputLabelProps, style: { fontSize: 14 },
                                                    // classes: {
                                                    //     root: classes.inputLabel,
                                                    //     focused: "focused"
                                                    // }
                                                }}
                                                onChange={(newValue) => {
                                                    console.log("autocomp Changed")
                                                }}
                                                label="Order No." variant="standard" />
                                        )}
                                    />

                                    <TextField sx={{ width: '100%' }} {...register("prevDues")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="prevDues" label="Previous Dues" variant="standard" size="small" />

                                    <Autocomplete
                                        id="terms"
                                        clearOnEscape
                                        size="small"
                                        // options={top100Films}
                                        options={[]}
                                        // defaultValue={top100Films[2]}
                                        renderInput={(params) => (
                                            <TextField
                                                sx={{ width: '100%', marginTop: 1 }}
                                                {...params}
                                                {...register("terms")}
                                                InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                                InputLabelProps={{
                                                    ...params.InputLabelProps, style: { fontSize: 14 },
                                                    // classes: {
                                                    //     root: classes.inputLabel,
                                                    //     focused: "focused"
                                                    // }
                                                }}
                                                onChange={(newValue) => {
                                                    console.log("autocomp Changed")
                                                }}
                                                label="Terms" variant="standard" />
                                        )}
                                    />

                                    <TextField sx={{ width: '100%' }} {...register("remarks")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="remarks" label="Remarks" variant="standard" size="small" />

                                    <TextField sx={{ width: '100%' }} {...register("value")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="value" label="Value" variant="standard" size="small" />


                                </div>
                            </fieldset>

                            <fieldset className="md:col-span-2 col-span-4 border border-solid border-gray-300 px-3 pt-1 pb-3 dark:text-slate-50">
                                <legend className="text-sm">Invoice Details</legend>

                                <div className='grid grid-cols-2 gap-x-4 gap-y-1'>

                                    <TextField sx={{ width: '100%' }} {...register("invoiceNo")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="invoiceNo" label="Invoice No." variant="standard" size="small" />

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            label="Invoice Date"
                                            // inputFormat="DD/MM/YYYY HH:MM" blockletter HH means hours in 24h format, small letter hh means 12h format. dd/mm/yyyy value varies if DD/MM/YYY check urself. for am/pm= a, AM/PM= A
                                            //visit https://day.js.org/docs/en/parse/string-format for datetime formats
                                            inputFormat="DD/MM/YYYY hh:mm A"

                                            renderInput={(params) =>
                                                <TextField
                                                    sx={{ width: '100%', marginTop: 1 }}
                                                    {...params}
                                                    {...register("invoiceDate")}
                                                    InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                                    InputLabelProps={{
                                                        ...params.InputLabelProps, style: { fontSize: 14 },
                                                        // classes: {
                                                        //     root: classes.inputLabel,
                                                        //     focused: "focused"
                                                        // }
                                                    }}
                                                    variant="standard"
                                                    size="small"
                                                />}
                                            value={invoiceDateState}
                                            onChange={(newValue) => {

                                                console.log("date Changed");
                                                setInvoiceDateState(newValue);
                                            }}
                                        />
                                    </LocalizationProvider>

                                    <Autocomplete
                                        id="pending"
                                        clearOnEscape
                                        size="small"
                                        // options={top100Films}
                                        options={[]}
                                        // defaultValue={top100Films[2]}
                                        renderInput={(params) => (
                                            <TextField
                                                sx={{ width: '100%', marginTop: 1 }}
                                                {...params}
                                                {...register("pending")}
                                                InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                                InputLabelProps={{
                                                    ...params.InputLabelProps, style: { fontSize: 14 },
                                                    // classes: {
                                                    //     root: classes.inputLabel,
                                                    //     focused: "focused"
                                                    // }
                                                }}
                                                onChange={(newValue) => {
                                                    console.log("autocomp Changed")
                                                }}
                                                label="Pending?" variant="standard" />
                                        )}
                                    />

                                    <TextField sx={{ width: '100%' }} {...register("invDiscount")}

                                        InputProps={{ style: { fontSize: 13 }, endAdornment: <InputAdornment position="end">%</InputAdornment>, inputMode: 'numeric', pattern: '[0-9]*' }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }}
                                        id="invDiscount"
                                        label="Invoice Discount"
                                        variant="standard"
                                        size="small"
                                    />

                                    <TextField sx={{ width: '100%' }} {...register("vrNo")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="vrNo" label="VR No." variant="standard" size="small" />

                                    <Autocomplete
                                        id="paymentMode"
                                        clearOnEscape
                                        size="small"
                                        // options={top100Films}
                                        options={[]}
                                        // defaultValue={top100Films[2]}
                                        renderInput={(params) => (
                                            <TextField
                                                sx={{ width: '100%', marginTop: 1 }}
                                                {...params}
                                                {...register("paymentMode")}
                                                InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                                InputLabelProps={{
                                                    ...params.InputLabelProps, style: { fontSize: 14 },
                                                    // classes: {
                                                    //     root: classes.inputLabel,
                                                    //     focused: "focused"
                                                    // }
                                                }}
                                                onChange={(newValue) => {
                                                    console.log("autocomp Changed")
                                                }}
                                                label="Payment Mode" variant="standard" />
                                        )}
                                    />

                                    <TextField sx={{ width: '100%' }} {...register("trackNo")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="trackNo" label="Track No." variant="standard" size="small" />

                                </div>
                            </fieldset>



                            <fieldset className="border border-solid border-gray-300 md:col-span-3 col-span-4 px-3 pt-1 pb-3 dark:text-slate-50">
                                <legend className="text-sm">Products</legend>


                                <div className=" grid md:grid-cols-3 grid-cols-1 gap-x-4 gap-y-1">

                                    <div className='col-span-3 grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-1'>

                                        <Autocomplete
                                            id="prodCode"
                                            clearOnEscape
                                            size="small"
                                            // options={top100Films}
                                            options={[]}
                                            // defaultValue={top100Films[2]}
                                            renderInput={(params) => (
                                                <TextField
                                                    sx={{ width: '100%', marginTop: 1 }}
                                                    {...params}
                                                    {...register("prodCode")}
                                                    InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                                    InputLabelProps={{ ...params.InputLabelProps, style: { fontSize: 14 } }}
                                                    onChange={(newValue) => {
                                                        console.log("autocomp Changed")
                                                    }}
                                                    label="Product Code" variant="standard" />
                                            )}
                                        />

                                        <TextField sx={{ width: '100%' }} {...register("prodDresc")} InputProps={{ style: { fontSize: 13 } }}
                                            InputLabelProps={{
                                                style: { fontSize: 14 },
                                                // classes: {
                                                //     root: classes.inputLabel,
                                                //     focused: "focused"
                                                // }
                                            }} id="prodDresc" label="Product Description" variant="standard" size="small" />

                                    </div>

                                    <Autocomplete
                                        id="serial"
                                        clearOnEscape
                                        size="small"
                                        // options={top100Films}
                                        options={[]}
                                        // defaultValue={top100Films[2]}
                                        renderInput={(params) => (
                                            <TextField
                                                sx={{ width: '100%', marginTop: 1 }}
                                                {...params}
                                                {...register("serial")}
                                                InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                                InputLabelProps={{
                                                    ...params.InputLabelProps, style: { fontSize: 14 },
                                                    // classes: {
                                                    //     root: classes.inputLabel,
                                                    //     focused: "focused"
                                                    // }
                                                }}
                                                onChange={(newValue) => {
                                                    console.log("autocomp Changed")
                                                }}
                                                label="Serial" variant="standard" />
                                        )}
                                    />

                                    <TextField sx={{ width: '100%' }} {...register("quantity")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="quantity" label="Qunatity" variant="standard" size="small" />

                                    <Autocomplete
                                        id="unitType"
                                        clearOnEscape
                                        size="small"
                                        // options={top100Films}
                                        options={[]}
                                        // defaultValue={top100Films[2]}
                                        renderInput={(params) => (
                                            <TextField
                                                sx={{ width: '100%', marginTop: 1 }}
                                                {...params}
                                                {...register("unitType")}
                                                InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                                InputLabelProps={{
                                                    ...params.InputLabelProps, style: { fontSize: 14 },
                                                    // classes: {
                                                    //     root: classes.inputLabel,
                                                    //     focused: "focused"
                                                    // }
                                                }}
                                                onChange={(newValue) => {
                                                    console.log("autocomp Changed")
                                                }}
                                                label="Unit Type" variant="standard" />
                                        )}
                                    />

                                    <TextField sx={{ width: '100%' }} {...register("cost")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="cost" label="Cost" variant="standard" size="small" />

                                    <TextField sx={{ width: '100%' }} {...register("price")} InputProps={{ style: { fontSize: 13 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }} id="price" label="Price" variant="standard" size="small" />

                                    <TextField sx={{ width: '100%' }} {...register("discount")}

                                        InputProps={{ style: { fontSize: 13 }, endAdornment: <InputAdornment position="end">%</InputAdornment>, inputMode: 'numeric', pattern: '[0-9]*' }}
                                        InputLabelProps={{
                                            style: { fontSize: 14 },
                                            // classes: {
                                            //     root: classes.inputLabel,
                                            //     focused: "focused"
                                            // }
                                        }}
                                        id="discount"
                                        label="Discount"
                                        variant="standard"
                                        size="small"
                                    />

                                    <div className='col-start-1 mt-1'>
                                        <button
                                            type="button"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                            onClick={() => { }}
                                        >Add</button>
                                    </div>

                                    {/* material table */}

                                    <div className='col-span-3 mt-4'>
                                        <MaterialTable
                                            icons={tableIcons}
                                            columns={mtColumns}
                                            data={mtTableData}
                                            title="Material-Table"
                                            sx={{ width: '100%' }}
                                            defaultExpanded={true}
                                            detailPanel={(rowData) => {
                                                console.log(rowData);
                                                const subColumns = [
                                                    { title: "Father", field: "father" },
                                                    { title: "Mother", field: "mother" },
                                                    { title: "Sister", field: "sister" }
                                                ]
                                                // material-table

                                                return (
                                                    <div className='max-w-full'>
                                                        <MaterialTable
                                                            icons={tableIcons}
                                                            columns={subColumns}
                                                            data={rowData.subTableData}
                                                            components={{
                                                                Container: props => <Paper {...props} elevation={0} />
                                                            }}
                                                            options={{
                                                                showTitle: false,
                                                                search: false,
                                                                toolbar: false,
                                                                rowStyle: { fontSize: "13px" },
                                                                paging: false,
                                                                headerStyle: {
                                                                    fontSize: "10px"
                                                                },
                                                                maxBodyHeight: "200px"
                                                            }}>

                                                        </MaterialTable>
                                                    </div>
                                                )
                                            }}
                                            onRowClick={(event, rowData, togglePanel) => togglePanel()}
                                            options={{
                                                filtering: false,
                                                // defaultExpanded: true,
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
                                                    top: "0"
                                                },
                                                maxBodyHeight: "400px"


                                            }}
                                        />
                                    </div>
                                    {/* --/-material table */}

                                </div>





                            </fieldset>

                            <div className='md:col-span-1 col-span-4'>
                                <fieldset className="border border-solid border-gray-300 px-3 pt-1 pb-3 dark:text-slate-50">
                                    <legend className="text-sm">Product Scanner</legend>

                                    <div className='grid grid-cols-1 gap-x-2 gap-y-1'>


                                        <label htmlFor="small-toggle1" className="inline-flex relative items-center cursor-pointer">
                                            <input type="checkbox" value="" id="small-toggle1" className="sr-only peer" />
                                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Include Serial Scan</span>
                                        </label>


                                        <img className=" w-full h-52 object-cover rounded-lg" src={scannerImg} alt="" />

                                        <label htmlFor="small-toggle2" className="inline-flex relative items-center mt-2 cursor-pointer">
                                            <input type="checkbox" value="" id="small-toggle2" className="sr-only peer" />
                                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Scan</span>
                                        </label>
                                    </div>

                                </fieldset>

                                <fieldset className="border border-solid border-gray-300 px-3 pt-1 pb-3 dark:text-slate-50 mt-2">
                                    <legend className="text-sm">Stock Position</legend>

                                    <Typography variant="subtitle2" gutterBottom>
                                        Total in Stock: 0pcs
                                    </Typography>

                                    <Timeline
                                        sx={{
                                            [`& .${timelineItemClasses.root}:before`]: {
                                                flex: 0,
                                                padding: 0,
                                            },
                                        }}
                                    >
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>

                                                <Typography variant="body2" gutterBottom>
                                                    Warehouse 1 : 0pcs
                                                </Typography>

                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="body2" gutterBottom>
                                                    Warehouse 2 : 0pcs
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="body2" gutterBottom>
                                                    Warehouse 3 : 0pcs
                                                </Typography></TimelineContent>
                                        </TimelineItem>
                                    </Timeline>




                                </fieldset>

                            </div>



                        </div>
                        {/* Main Card Body--/-- */}

                        {/* Main Card footer */}
                        <div className="py-3 px-6 border-t text-start border-gray-300 text-gray-600">
                            <button
                                type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900  active:-translate-y-1 active:shadow-lg transform-all duration-150 ease-in-out"
                                onClick={() => { }}
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

export default Sales_HiglightsNew