import React, { useState } from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import { Heading } from './stepForm/Heading';
import { WorkDescription } from './stepForm/WorkDescription';
import { WorkHistory } from './stepForm/WorkHistory';
import { WorkHistorySummery } from './stepForm/WorkHistorySummery';
import { Resume } from './template/Resume';

const headingDefaultData = {
    firstName: '',
    lastName: '',
    profession: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
};

const workHistoryDefaultData = [
    {
        title: 'software',
        employer: 'innomick',
        city: 'hyderabad',
        state: 'telengana',
        startDate: new Date().toLocaleString(),
        endDate: new Date().toLocaleString(),
        description: 'i am a developer',
    },
];

const steps = [
    { id: 'heading' },
    { id: 'workHistory' },
    { id: 'workDescription' },
    { id: 'workHistorySummery' },
    { id: 'submit' },
];
export const MultiStepForm = () => {
    const [headingFormData, setHeadingForm] = useForm(headingDefaultData);
    const [workHistoryFormData, setWorkHistoryFormData] = useState(
        workHistoryDefaultData
    );
    const [inputList, setInputList] = useState([]);
    const [count, setCount] = useState(0);

    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const headingProps = {
        headingFormData,
        setHeadingForm,
        navigation,
        inputList,
        setInputList,
    };

    const workHistoryProps = {
        workHistoryFormData,
        setWorkHistoryFormData,
        navigation,
        count,
        setCount,
    };

    switch (step.id) {
        case 'heading':
            return (
                <div>
                    <Heading {...headingProps} />

                    <Resume props={{ ...headingFormData, inputList }} />
                </div>
            );
        case 'workHistory':
            return (
                <div>
                    <WorkHistory {...workHistoryProps} />

                    <Resume
                        props={{
                            ...headingFormData,
                            inputList,
                            workHistoryFormData,
                        }}
                    />
                </div>
            );
        case 'workDescription':
            return (
                <div>
                    <WorkDescription {...workHistoryProps} />

                    <Resume
                        props={{
                            ...headingFormData,
                            inputList,
                            workHistoryFormData,
                        }}
                    />
                </div>
            );
        case 'workHistorySummery':
            return (
                <div>
                    <WorkHistorySummery {...workHistoryProps} />

                    <Resume
                        props={{
                            ...headingFormData,
                            inputList,
                            workHistoryFormData,
                        }}
                    />
                </div>
            );
    }

    return (
        <div>
            <h1>Multi step form</h1>
        </div>
    );
};
