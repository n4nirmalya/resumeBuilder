import { Button, Container } from '@material-ui/core';
import { RenderAccordion } from './RenderAccordion';

export const WorkHistorySummery = ({
    workHistoryFormData,
    setWorkHistoryFormData,
    navigation,
    count,
    setCount,
}) => {
    const { go } = navigation;
    // const { title, employer, city, state, startDate, endDate, description } =
    //     workHistoryFormData;
    const addNewWork = (event) => {
        setCount((count) => count + 1);
        const newList = [...workHistoryFormData];
        newList.push({
            title: '',
            employer: '',
            city: '',
            state: '',
            startDate: null,
            endDate: null,
            description: '',
        });
        setWorkHistoryFormData(newList);
        go(`workHistory`);
    };
    return (
        <div>
            <Container maxWidth='sm'>
                <h3>Review</h3>
                <RenderAccordion
                    summary='Work History Summary'
                    go={go}
                    details={workHistoryFormData}
                />
                <Button
                    color='primary'
                    variant='contained'
                    style={{ marginTop: '1.5rem' }}
                    onClick={(e) => addNewWork(e)}>
                    Add Another Position
                </Button>
            </Container>
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
