import React, { useState } from 'react';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export const WorkHistory = ({
    workHistoryFormData,
    setWorkHistoryFormData,
    navigation,
    count,
    setCount,
}) => {
    console.log(count);
    const { title, employer, city, state } = workHistoryFormData;
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const handelChange = (e) => {
        const { name, value } = e.target;
        const newList = [...workHistoryFormData];
        newList[count][name] = value;
        setWorkHistoryFormData(newList);
    };

    const handelStartDate = (value) => {
        const newList = [...workHistoryFormData];
        newList[count]['startDate'] = value;
        setWorkHistoryFormData(newList);
        setStartDate(value)
    };
    const handelEndDate = (value) => {
        const newList = [...workHistoryFormData];
        newList[count]['endDate'] = value;
        setWorkHistoryFormData(newList);
        setEndDate(value)
    };
    return (
        <Container>
            <h3>Tell us about your most recent job</h3>
            <h5>We’ll start there and work backward.</h5>
            <Grid container spacing={2}>
                <Grid item xs>
                    <TextField
                        label='Job Title'
                        name='title'
                        value={title}
                        onChange={(e) => handelChange(e)}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        label='Employer'
                        name='employer'
                        value={employer}
                        onChange={(e) => handelChange(e)}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs>
                    <TextField
                        label='City'
                        name='city'
                        value={city}
                        onChange={(e) => handelChange(e)}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        label='State'
                        name='state'
                        value={state}
                        onChange={(e) => handelChange(e)}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label='Start Date'
                            value={startDate}
                            onChange={(newValue) => {
                                handelStartDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label='End Date'
                            value={endDate}
                            onChange={(newValue) => {
                                handelEndDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Button
                variant='contained'
                fullWidth
                color='primary'
                style={{ marginTop: '1rem' }}
                onClick={() => navigation.next()}>
                Next
            </Button>
        </Container>
    );
};
