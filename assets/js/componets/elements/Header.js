import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AboutButton, ContactButton} from "./StyledElements";
import Logo from '../../images/logo.svg';
import { ReactSVG } from 'react-svg'
import {Link} from "react-router-dom";

const styles = theme => ({
    container: {
        backgroundColor: "#333333",
        height: "95px",
        [theme.breakpoints.down('xs')] :{
            flexFlow: "column nowrap",
            alignItems: "center",
            textAlign: "center"
        }
    },
    item: {
        textAlign: "center"
    },
    logo: {
        width: "190px",
        padding: "10px",
        marginLeft: "50px",
        [theme.breakpoints.down('xs')] :{
            marginLeft: "0"
        },
        "& :hover svg .text-title" : {
            animation: "translateTitle 3s infinite alternate"
        },
        "& :hover svg .ico" : {
            transformOrigin: "20% 51%",
            animation: "rotateIco 3s infinite alternate"
        }
    },
    buttons: {
        lineHeight: "95px",
        whiteSpace: "nowrap",
        [theme.breakpoints.down('md')] :{
            textAlign: "center"
        }
    }
});

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid justify={"center"} container>
                <Grid item xs={12} md={10}>
                        <Grid className={classes.container} container>
                            <Grid className={classes.item} item xs={12} sm={4}>
                                <Link to={"/app"}>
                                    <ReactSVG src={Logo} className={classes.logo}/>
                                </Link>
                            </Grid>
                            <Grid item xs={3} lg={4}>

                            </Grid>
                            <Grid item xs={12} sm={4} md={5} lg={4}>
                                <div className={classes.buttons}>
                                    <AboutButton variant="contained">About me</AboutButton>
                                    <ContactButton variant="contained">Contact</ContactButton>
                                </div>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Header);
