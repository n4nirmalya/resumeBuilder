import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@material-ui/core';
export const RenderAccordion = ({ summary, details, go }) => (
    <Accordion>
        <AccordionSummary>{summary}</AccordionSummary>
        <AccordionDetail>
            <div>
                {details.map((data, index) => {
                    return (
                        <div key={index}>
                            {Object.keys(data).map((info, index) => {
                                console.log(
                                    '🚀 ~ file: RenderAccordion.js ~ line 21 ~ Object.keys ~ info',
                                    data[info]
                                );
                                return (
                                    <ListItemText key={index}>
                                        {`${info} : ${data[info]}`}
                                    </ListItemText>
                                );
                            })}
                            <Grid container spacing={2} key={index}>
                                <Grid item xs>
                                    <IconButton
                                        color='primary'
                                        component='span'
                                        onClick={() => go(`workHistory`)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color='primary'
                                        component='span'
                                        onClick={() => go(`workHistory`)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </div>
                    );
                })}
            </div>
        </AccordionDetail>
    </Accordion>
);
