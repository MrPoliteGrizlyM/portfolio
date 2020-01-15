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
                <AlertTitle>Error ༼ಢ_ಢ༽</AlertTitle>
                Something went wrong!
            </Alert>
        </Grid>
    )
};

const NothingToShow = (props) => {
    const classes = makeClasses();
    return (
        <Grid className={props.className} xs={8} item>
            <Alert severity="warning">
                Nothing to show ¯\_(ツ)_/¯
            </Alert>
        </Grid>
    )
};


export { AlertServerError, NothingToShow };
