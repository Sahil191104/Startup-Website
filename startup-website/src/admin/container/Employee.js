import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adddata, deleteemployee, fetchdata, updateemployee } from '../../redux/action/employee.action';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Alert, AlertTitle, Box, CircularProgress, Stack } from '@mui/material';
import EmployeeForm from './Employee/EmployeeForm';

export default function Employee() {
    const dispatch = useDispatch();
    const employee = useSelector(state => state.employee)
    const [update, setUpadate] = useState(null);

    useEffect(() => {
        dispatch(fetchdata())
    }, [])

    const handleSubmitData = (data) => {
        if (update) {
            dispatch(updateemployee(data))
        } else {
            dispatch(adddata(data))
        }

        setUpadate(null)
    }

    const handleUpdate = (data) => {
        setUpadate(data)
    }

    const handleDelete = (id) => {
        dispatch(deleteemployee(id))
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleUpdate(params.row)}>
                        <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        }
    ]

    return (
        <div>
            {
                employee.loading ?
                    <Box className="d-flex justify-content-center" >
                        <CircularProgress sx={{ color: '#FF6337' }} />
                    </Box> :
                    employee.error ?
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                This is an error alert — <strong>check it out!</strong>
                            </Alert>
                        </Stack> :
                        <>
                            <center>
                                <h1>Employee</h1>

                                <EmployeeForm onGetdata={handleSubmitData} onUpdate={update} />

                                <div style={{ height: 400, width: '60%' }}>
                                    <DataGrid
                                        rows={employee.doctor}
                                        columns={columns}
                                        initialState={{
                                            pagination: {
                                                paginationModel: { page: 0, pageSize: 5 },
                                            },
                                        }}
                                        pageSizeOptions={[5, 10]}
                                        checkboxSelection
                                    />
                                </div>
                            </center>
                        </>
            }
        </div>
    );
}