import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AboutButton, ContactButton} from "./StyledElements";
import Logo from '../../images/logo.svg';

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
        padding: "10px"
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
                                <img src={Logo} alt="" className={classes.logo}/>
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
