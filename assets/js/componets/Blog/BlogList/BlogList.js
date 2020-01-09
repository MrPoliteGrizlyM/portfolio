import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CogTop from '../../../images/cog-top.png';
import CogExtra from '../../../images/cog-extra.png';
import CogBot from '../../../images/cog-bot.png';

const styles = theme => ({
    background: {
        backgroundColor: "#495561",
        padding: "50px 0"
    },
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


class BlogList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.background} justify={"center"} container>
                <Grid className={classes.box} xs={10} item>
                    <Link className={classes.link} to={"/app/show"}>
                        <Grid container>
                            <Grid className={classes.boxImg} xs={12} lg={4} item>
                                <img src="/images/project-img.jpg" alt=""/>
                            </Grid>
                            <Grid className={classes.boxText} xs={12} lg={6} item>
                                <h1>IDENTITY APP</h1>
                                <p>
                                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                                    By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside,
                                    the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere,
                                    whose upper half was strewn with silver. Looking down into the dark gulf below,
                                    I could see a ruddy light streaming through a rift in the clouds.
                                </p>
                            </Grid>
                            <Grid className={classes.boxInfo} xs={12} lg={2} item>
                                <span className={classes.statusText}>Status: </span><span className={classes.statusOnline}>Online</span>
                                <div className={classNames(classes.cogsBox, classes.cogsActive)}>
                                    <img src={CogTop} alt=""/>
                                    <img src={CogExtra} alt=""/>
                                    <img src={CogBot} alt=""/>
                                </div>
                            </Grid>
                        </Grid>
                    </Link>
                </Grid>

                {/*Test*/}
                <Grid className={classes.box} xs={10} item>
                    <Link className={classes.link} to={"/app/show"}>
                        <Grid container>
                            <Grid className={classes.boxImg} xs={12} lg={4} item>
                                <img src="/images/project-img.jpg" alt=""/>
                            </Grid>
                            <Grid className={classes.boxText} xs={12} lg={6} item>
                                <h1>IDENTITY APP</h1>
                                <p>
                                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                                    By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside,
                                    the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere,
                                    whose upper half was strewn with silver. Looking down into the dark gulf below,
                                    I could see a ruddy light streaming through a rift in the clouds.
                                </p>
                            </Grid>
                            <Grid className={classes.boxInfo} xs={12} lg={2} item>
                                <div className={classes.statusBox}>
                                    <span className={classes.statusText}>Status: </span><span className={classes.statusDown}>Down</span>
                                </div>
                                <div className={classNames(classes.cogsBox, classes.cogsBroken)}>
                                    <img src={CogTop} alt=""/>
                                    <img src={CogExtra} alt=""/>
                                    <img src={CogBot} alt=""/>
                                </div>
                            </Grid>
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(BlogList);
