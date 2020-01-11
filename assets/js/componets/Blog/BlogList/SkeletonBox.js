import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import {Skeleton} from "@material-ui/lab";


const styles = theme => ({
    box: {
        backgroundColor: "white",
        marginBottom: "50px",
        border: "1px solid #666A86",
        position: "relative"
    },
    link: {
        textDecoration: "none",
        color: "black"
    },
    boxImg: {
        textAlign: "center",
        [theme.breakpoints.down('md')] :{
            order: "1"
        },
        "& > div": {
            height: "170px",
            margin: "40px",
            [theme.breakpoints.down('md')] :{
                margin: "20px 10px 10px 10px"
            },
            [theme.breakpoints.down('xs')] :{
                width: "100%",
                margin: 0
            },
        }
    },
    boxText: {
        marginTop: "10px",
        [theme.breakpoints.down('md')] :{
            order: "3"
        },
        "& h1": {
            width: "300px",
            [theme.breakpoints.down('md')] :{
                width: "50%",
                padding: "30px",
                textAlign: "center"
            },
        },
        "& p": {
            width: "80%",
            [theme.breakpoints.down('md')] :{
                padding: "0 30px 20px 30px"
            },
        }
    },
    boxInfo: {
        "& p > div" : {
            height: "30px",
            width: "70%"
        },
        [theme.breakpoints.down('md')]: {
            display: "none"
        }
    },
});


class SkeletonBox extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid className={classes.box} xs={10} item>
                    <Grid container>
                        <Grid className={classes.boxImg} xs={12} lg={4} item>
                            <Skeleton variant="rect" animation="wave" />
                        </Grid>
                        <Grid className={classes.boxText} xs={12} lg={6} item>
                            <h1><Skeleton animation="wave" /></h1>
                            <p>
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                            </p>
                        </Grid>
                        <Grid className={classes.boxInfo} xs={12} lg={2} item>
                            <p>
                                <Skeleton variant="rect" animation="wave" />
                            </p>
                        </Grid>
                    </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(SkeletonBox);
