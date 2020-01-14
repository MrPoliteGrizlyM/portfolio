import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import classNames from "classnames";
import CogTop from "../../../images/cog-top.png";
import CogExtra from "../../../images/cog-extra.png";
import CogBot from "../../../images/cog-bot.png";

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
        "& img": {
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
        marginTop: "40px",
        [theme.breakpoints.down('md')] :{
            marginTop: "10px",
            order: "3"
        },
        "& h1": {
            fontFamily: "Roboto",
            fontWeight: "normal",
            fontSize: "25px",
            color: "#666A86",
            margin: "0",
            [theme.breakpoints.down('md')] :{
                textAlign: "center"
            },
        },
        "& p": {
            fontFamily: "Nunito",
            fontWeight: "normal",
            margin: "5px 0 0 0",
            textAlign: "justify",
            [theme.breakpoints.down('md')] :{
                padding: "0 30px 20px 30px"
            },
        }

    },
    boxInfo: {
        textAlign: "center",
        font: "17px Roboto",
        marginTop: "40px",
        [theme.breakpoints.down('md')] : {
            order: "2",
            position: "absolute",
            top: "0",
            right: "5%"
        },
        [theme.breakpoints.down('xs')] : {
            order: "2",
            position: "relative",
            top: "0",
            right: "0",
            marginTop: "10px"
        }

    },
    statusText: {
        color: "#F06449"
    },
    statusOnline: {
        color: "#539987"
    },
    statusDown: {
        color: "#f44336"
    },
    cogsBox: {
        position: "relative",
        marginTop: "20px",
        [theme.breakpoints.down('md')] :{
            display: "none"
        },
        "& img": {
            position: "absolute",
            left: "48px",
            width: "70px"
        },
        "& :nth-child(1)": {
            top: "-13px",
        },
        "& :nth-child(2)": {
            left: "44%",
            top: "40px"
        },
        "& :nth-child(3)": {
            top: "93px",
            left: "43px"
        }
    },
    cogsActive: {
        "& img": {
            animation: "rotationRight 8s infinite linear"
        },
        "& :nth-child(2)": {
            animation: "rotationLeft 8s infinite linear"
        }
    },
    cogsBroken:{
        "& img": {
            animation: "brokenRotationRight 0.5s infinite linear"
        },
        "& :nth-child(2)": {
            animation: "brokenRotationLeft 0.5s infinite linear"
        }
    }
});


class ProjectBox extends Component {
    render() {
        const {classes, isActive} = this.props;
        return (
            <Grid className={classes.box} xs={10} item>
                <Link className={classes.link} to={{
                                                    pathname: "/app/show",
                                                    state: {
                                                        projectId: this.props.id
                                                    }
                }}>
                    <Grid container>
                        <Grid className={classes.boxImg} xs={12} lg={4} item>
                            <img src={this.props.image} alt=""/>
                        </Grid>
                        <Grid className={classes.boxText} xs={12} lg={6} item>
                            <h1>{this.props.title}</h1>
                            <p>
                                {this.props.content}
                            </p>
                        </Grid>
                        <Grid className={classes.boxInfo} xs={12} lg={2} item>
                            <span className={classes.statusText}>Status: </span>
                            <span className={isActive ? classes.statusOnline : classes.statusDown}>{isActive ? 'Online' : 'Down'}</span>
                            <div className={isActive ? classNames(classes.cogsBox, classes.cogsActive) : classNames(classes.cogsBox, classes.cogsBroken)}>
                                <img src={CogTop} alt=""/>
                                <img src={CogExtra} alt=""/>
                                <img src={CogBot} alt=""/>
                            </div>
                        </Grid>
                    </Grid>
                </Link>
            </Grid>
        )
    }
}

export default withStyles(styles)(ProjectBox);
