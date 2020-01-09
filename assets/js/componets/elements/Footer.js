import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithubSquare,
         faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const styles = theme => ({
    background: {
        backgroundColor: "#495561",
        borderTop: "1px solid #666A86",
    },
    copyrightBox: {
        color: "white",
        fontFamily: "Nunito",
        "& p": {
            marginTop: "20px",
            [theme.breakpoints.down('sm')]: {
                marginTop: "0"
            }
        }
    },
    followMeBox: {
        "& > p": {
            display: "flex",
            alignItems: "center"
        },
        "& p > span" : {
            color: "white",
            fontFamily: "Roboto",
            fontSize: "17px",
            [theme.breakpoints.down('sm')]: {
                fontSize: "15px"
            }
        },
        "& p > a " : {
            textDecoration: "none",
            paddingLeft: "10px"
        }
    },

});


class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid className={classes.background} justify={"center"} container>
                <Grid xs={10} item>
                    <Grid container>
                        <Grid xs={12} md={5} className={classes.followMeBox} item>
                            <p>
                                <span>FOLLOW ME AT: </span>
                                <a href="https://www.instagram.com/ilyamaxu/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size={"2x"} color={"#f783ac"}/>
                                </a>
                                <a href="https://www.linkedin.com/in/ilya-maxutov-a4a01615a/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} size={"2x"} color={"#849bf5"}/>
                                </a>
                                <a href="https://github.com/MrPoliteGrizlyM" target="_blank">
                                    <FontAwesomeIcon icon={faGithubSquare} size={"2x"} color={"white"}/>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100011249894893" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookSquare} size={"2x"} color={"#6298f5"}/>
                                </a>
                            </p>
                        </Grid>
                        <Grid xs={12} md={7} className={classes.copyrightBox} item>
                            <p>© mrgrizly.me</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Footer);
