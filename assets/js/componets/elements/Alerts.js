import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Alert, AlertTitle} from "@material-ui/lab";


const makeClasses = makeStyles(theme => ({

}));

const AlertServerError = (props) => {
    const classes = makeClasses();
    return (
        <Grid className={props.className} xs={8} item>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Something went wrong!
            </Alert>
        </Grid>
    )
};


export { AlertServerError };
