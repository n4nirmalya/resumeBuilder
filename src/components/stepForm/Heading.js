import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core';

import DeleteIcon from '@mui/icons-material/Delete';

export const Heading = ({
    headingFormData,
    setHeadingForm,
    navigation,
    inputList,
    setInputList,
}) => {
    const { firstName, lastName, profession, city, state, zip, phone, email } =
        headingFormData;
    // handle input change
    const handleInputChange = (e, index) => {
        e.preventDefault();
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { socialAccount: '', link: '' }]);
    };
    return (
        <Container>
            <h3>Contact</h3>
            <Grid container spacing={2}>
                <Grid item xs>
                    <TextField
                        label='First Name'
                        name='firstName'
                        value={firstName}
                        onChange={setHeadingForm}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        label='Last Name'
                        name='lastName'
                        value={lastName}
                        onChange={setHeadingForm}
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
                        label='Profession'
                        name='profession'
                        value={profession}
                        onChange={setHeadingForm}
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
                        onChange={setHeadingForm}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        label='State/Province'
                        name='state'
                        value={state}
                        onChange={setHeadingForm}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        label='Zip Code'
                        name='zip'
                        value={zip}
                        onChange={setHeadingForm}
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
                        label='Phone'
                        name='phone'
                        value={phone}
                        onChange={setHeadingForm}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        label='Email Address'
                        name='email'
                        value={email}
                        onChange={setHeadingForm}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Button
                variant='contained'
                fullWidth
                color='primary'
                style={{ marginTop: '1rem' }}
                onClick={() => handleAddClick()}>
                Add Social Account
            </Button>
            <hr className='my-3' />
            {inputList.map((account, index) => {
                return (
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <FormControl fullWidth>
                                    <InputLabel id='demo-simple-select-label'>
                                        Social Website
                                    </InputLabel>
                                    <Select
                                        labelId='demo-simple-select-label'
                                        id='demo-simple-select'
                                        name='socialAccount'
                                        value={account.socialAccount}
                                        defaultValue='Twitter'
                                        onChange={(e) =>
                                            handleInputChange(e, index)
                                        }>
                                        <MenuItem value={'LinkedIn'}>
                                            LinkedIn
                                        </MenuItem>
                                        <MenuItem value={'Twitter'}>
                                            Twitter
                                        </MenuItem>
                                        <MenuItem value={'Website'}>
                                            Website
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    label='Social Link'
                                    name='link'
                                    value={account.link}
                                    onChange={(e) =>
                                        handleInputChange(e, index)
                                    }
                                    margin='normal'
                                    variant='outlined'
                                    autoComplete='off'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs>
                                <IconButton
                                    aria-label='delete'
                                    onClick={() => handleRemoveClick(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                );
            })}
            <Button
                variant='contained'
                disabled={!email}
                fullWidth
                color='primary'
                style={{ marginTop: '1rem' }}
                onClick={() => navigation.next()}>
                Next
            </Button>
        </Container>
    );
};
