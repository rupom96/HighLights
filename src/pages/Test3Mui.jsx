import React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';

// import Box from '@mui/material/Box';

import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import MUIDataTable from "mui-datatables";
// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
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

import { useForm } from "react-hook-form";

const Test3Mui = () => {

    const { register, handleSubmit } = useForm();

    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    // const top100Films = [
    //     { title: 'The Shawshank Redemption', year: 1994 },
    //     { title: 'The Godfather', year: 1972 },
    //     { title: 'The Godfather: Part II', year: 1974 },
    //     { title: 'The Dark Knight', year: 2008 },
    //     { title: '12 Angry Men', year: 1957 },
    //     { title: "Schindler's List", year: 1993 },
    //     { title: 'Pulp Fiction', year: 1994 },
    //     {
    //         title: 'The Lord of the Rings: The Return of the King',
    //         year: 2003,
    //     },
    //     { title: 'The Good, the Bad and the Ugly', year: 1966 },
    //     { title: 'Fight Club', year: 1999 },
    //     {
    //         title: 'The Lord of the Rings: The Fellowship of the Ring',
    //         year: 2001,
    //     },
    //     {
    //         title: 'Star Wars: Episode V - The Empire Strikes Back',
    //         year: 1980,
    //     },
    //     { title: 'Forrest Gump', year: 1994 },
    //     { title: 'Inception', year: 2010 },
    //     {
    //         title: 'The Lord of the Rings: The Two Towers',
    //         year: 2002,
    //     },
    //     { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    //     { title: 'Goodfellas', year: 1990 },
    //     { title: 'The Matrix', year: 1999 },
    //     { title: 'Seven Samurai', year: 1954 },
    //     {
    //         title: 'Star Wars: Episode IV - A New Hope',
    //         year: 1977,
    //     },
    //     { title: 'City of God', year: 2002 },
    //     { title: 'Se7en', year: 1995 },
    //     { title: 'The Silence of the Lambs', year: 1991 },
    //     { title: "It's a Wonderful Life", year: 1946 },
    //     { title: 'Life Is Beautiful', year: 1997 },
    //     { title: 'The Usual Suspects', year: 1995 },
    //     { title: 'Léon: The Professional', year: 1994 },
    //     { title: 'Spirited Away', year: 2001 },
    //     { title: 'Saving Private Ryan', year: 1998 },
    //     { title: 'Once Upon a Time in the West', year: 1968 },
    //     { title: 'American History X', year: 1998 },
    //     { title: 'Interstellar', year: 2014 },
    //     { title: 'Casablanca', year: 1942 },
    //     { title: 'City Lights', year: 1931 },
    //     { title: 'Psycho', year: 1960 },
    //     { title: 'The Green Mile', year: 1999 },
    //     { title: 'The Intouchables', year: 2011 },
    //     { title: 'Modern Times', year: 1936 },
    //     { title: 'Raiders of the Lost Ark', year: 1981 },
    //     { title: 'Rear Window', year: 1954 },
    //     { title: 'The Pianist', year: 2002 },
    //     { title: 'The Departed', year: 2006 },
    //     { title: 'Terminator 2: Judgment Day', year: 1991 },
    //     { title: 'Back to the Future', year: 1985 },
    //     { title: 'Whiplash', year: 2014 },
    //     { title: 'Gladiator', year: 2000 },
    //     { title: 'Memento', year: 2000 },
    //     { title: 'The Prestige', year: 2006 },
    //     { title: 'The Lion King', year: 1994 },
    //     { title: 'Apocalypse Now', year: 1979 },
    //     { title: 'Alien', year: 1979 },
    //     { title: 'Sunset Boulevard', year: 1950 },
    //     {
    //         title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    //         year: 1964,
    //     },
    //     { title: 'The Great Dictator', year: 1940 },
    //     { title: 'Cinema Paradiso', year: 1988 },
    //     { title: 'The Lives of Others', year: 2006 },
    //     { title: 'Grave of the Fireflies', year: 1988 },
    //     { title: 'Paths of Glory', year: 1957 },
    //     { title: 'Django Unchained', year: 2012 },
    //     { title: 'The Shining', year: 1980 },
    //     { title: 'WALL·E', year: 2008 },
    //     { title: 'American Beauty', year: 1999 },
    //     { title: 'The Dark Knight Rises', year: 2012 },
    //     { title: 'Princess Mononoke', year: 1997 },
    //     { title: 'Aliens', year: 1986 },
    //     { title: 'Oldboy', year: 2003 },
    //     { title: 'Once Upon a Time in America', year: 1984 },
    //     { title: 'Witness for the Prosecution', year: 1957 },
    //     { title: 'Das Boot', year: 1981 },
    //     { title: 'Citizen Kane', year: 1941 },
    //     { title: 'North by Northwest', year: 1959 },
    //     { title: 'Vertigo', year: 1958 },
    //     {
    //         title: 'Star Wars: Episode VI - Return of the Jedi',
    //         year: 1983,
    //     },
    //     { title: 'Reservoir Dogs', year: 1992 },
    //     { title: 'Braveheart', year: 1995 },
    //     { title: 'M', year: 1931 },
    //     { title: 'Requiem for a Dream', year: 2000 },
    //     { title: 'Amélie', year: 2001 },
    //     { title: 'A Clockwork Orange', year: 1971 },
    //     { title: 'Like Stars on Earth', year: 2007 },
    //     { title: 'Taxi Driver', year: 1976 },
    //     { title: 'Lawrence of Arabia', year: 1962 },
    //     { title: 'Double Indemnity', year: 1944 },
    //     {
    //         title: 'Eternal Sunshine of the Spotless Mind',
    //         year: 2004,
    //     },
    //     { title: 'Amadeus', year: 1984 },
    //     { title: 'To Kill a Mockingbird', year: 1962 },
    //     { title: 'Toy Story 3', year: 2010 },
    //     { title: 'Logan', year: 2017 },
    //     { title: 'Full Metal Jacket', year: 1987 },
    //     { title: 'Dangal', year: 2016 },
    //     { title: 'The Sting', year: 1973 },
    //     { title: '2001: A Space Odyssey', year: 1968 },
    //     { title: "Singin' in the Rain", year: 1952 },
    //     { title: 'Toy Story', year: 1995 },
    //     { title: 'Bicycle Thieves', year: 1948 },
    //     { title: 'The Kid', year: 1921 },
    //     { title: 'Inglourious Basterds', year: 2009 },
    //     { title: 'Snatch', year: 2000 },
    //     { title: '3 Idiots', year: 2009 },
    //     { title: 'Monty Python and the Holy Grail', year: 1975 },
    // ];

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
            label: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { label: 'The Good, the Bad and the Ugly', year: 1966 },
        { label: 'Fight Club', year: 1999 },
        {
            label: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
        }
    ]

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title
    };

    console.log(defaultProps);


    const flatProps = {
        options: top100Films.map((option) => option.title),
        values: top100Films.map((option) => option.year)
    };

    // const [value, setValue] = React.useState(null);



    const rup = e => {
        console.log(e.target.value);

    }


    //------empty date field------->
    // const [datePickerVal1, setDatePickerVal1] = React.useState(null);

    //------today's date and time fill in date field------->
    // const [datePickerVal1, setDatePickerVal1] = React.useState();
    //or
    //const [datePickerVal1, setDatePickerVal1] = React.useState(dayjs());

    //------A certain date and time fill in date field------->
    const [datePickerVal1, setDatePickerVal1] = React.useState(dayjs("25-08-2022 10:05 PM", "DD-MM-YYYY hh:mm A")); //visit https://day.js.org/docs/en/parse/string-format for datetime formats









    const tableColumns = [
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
                editable: true,
            }
        },
        {
            name: "company",
            label: "Company",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "city",
            label: "City",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "state",
            label: "State",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];

    const tableData = [
        { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
        { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
        { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
        { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    ];

    const tableOptions = {
        filterType: 'checkbox',
    };




    const xtableColumns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const xtableRows = [
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










    return (
        // return wrapper div
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
                                <Autocomplete
                                    // {...register("name")}
                                    // value={}
                                    // {...flatProps}

                                    id="clear-on-escape"
                                    clearOnEscape
                                    size="small"
                                    options={top100Films}
                                    defaultValue={top100Films[2]}

                                    renderInput={(params) => (
                                        <TextField
                                            sx={{ width: '100%', marginTop: 1 }}
                                            {...params}
                                            {...register("autoComp")}
                                            InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                            InputLabelProps={{ ...params.InputLabelProps, style: { fontSize: 14 } }} onChange={(newValue) => {
                                                console.log("autocomp Changed")

                                            }}

                                            label="clearOnEscape" variant="standard" />
                                    )}
                                />


                                <Autocomplete
                                    id="size-small-standard"
                                    size="small"
                                    options={top100Films}
                                    getOptionLabel={(option) => option.label}
                                    defaultValue={top100Films[3]}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="standard"
                                            label="Size small"
                                            placeholder="Favorites"
                                        />
                                    )}
                                />



                                <TextField sx={{ width: '100%', marginTop: 1 }} {...register("normalInp")} InputProps={{ style: { fontSize: 13 } }}
                                    InputLabelProps={{ style: { fontSize: 14 } }} id="standard-basic" label="Standard" variant="standard" size="small" />


                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        label="Responsive"
                                        // inputFormat="DD/MM/YYYY HH:MM" blockletter HH means hours in 24h format, small letter hh means 12h format. dd/mm/yyyy value varies if DD/MM/YYY check urself. for am/pm= a, AM/PM= A
                                        //visit https://day.js.org/docs/en/parse/string-format for datetime formats
                                        inputFormat="DD/MM/YYYY hh:mm A"

                                        renderInput={(params) =>
                                            <TextField
                                                sx={{ width: '100%', marginTop: 1 }}
                                                {...params}
                                                {...register("date")}
                                                InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                                InputLabelProps={{ ...params.InputLabelProps, style: { fontSize: 14 } }}
                                                variant="standard"
                                                size="small"
                                            />}
                                        value={datePickerVal1}
                                        onChange={(newValue) => {

                                            console.log("date Changed");
                                            setDatePickerVal1(newValue);
                                        }}
                                    />
                                </LocalizationProvider>



                                <MUIDataTable
                                    title={"Employee List"}
                                    data={tableData}
                                    columns={tableColumns}
                                    options={tableOptions}
                                />

                                {/* <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        checkboxSelection
                                    />
                                </div> */}


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

export default Test3Mui