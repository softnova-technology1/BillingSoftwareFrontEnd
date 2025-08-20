import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const CustomerEntry = () => {
    const navigate = useNavigate()

    const handleCustomerPage = () => {
        navigate('/customer-page')
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First Name', width: 130 },
        { field: 'lastName', headerName: 'Last Name', width: 130 },
        { field: 'companyName', headerName: 'Company Name', width: 250, },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 250,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        { field: 'emailId', headerName: 'Email Id', width: 160, },
        { field: 'contactNumber', headerName: 'Contact Number', width: 160, },
        { field: 'gstnum', headerName: 'GSTIN', width: 160, },
        
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

    const paginationModel = { page: 0, pageSize: 10 };

    return (
        <div style={{ padding: "30px"}}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant='h4'>All Customers</Typography>
                <Button variant='contained' color='success' onClick={handleCustomerPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    New Customer
                </Button>
            </div>
            <Paper sx={{ height: "100%", width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0, fontSize:"1.5rem " }}
                />
            </Paper>
        </div>
    )
}

export default CustomerEntry