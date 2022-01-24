import { Button, TextareaAutosize } from '@material-ui/core';
import { useState } from 'react';

export const WorkDescription = ({
    workHistoryFormData,
    setWorkHistoryFormData,
    navigation,
    count,
}) => {
    const [description, setDescription] = useState('');
    const handelChange = (e) => {
        const { name, value } = e.target;
        const newList = [...workHistoryFormData];
        newList[count][name] = value;
        setWorkHistoryFormData(newList);
        setDescription(value);
    };
    return (
        <div>
            <TextareaAutosize
                aria-label='minimum height'
                placeholder='Type your achievements and responsibility here'
                name='description'
                value={description}
                onChange={handelChange}
                style={{ width: '100%', height: '50vh' }}
            />
            <Button
                variant='contained'
                fullWidth
                color='primary'
                style={{ marginTop: '1rem' }}
                onClick={() => navigation.next()}>
                Next
            </Button>
        </div>
    );
};
