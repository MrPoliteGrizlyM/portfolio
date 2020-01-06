import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';

const styles = theme => ({
    background: {
        backgroundColor: "#495561"
    },
    breadcrumbBox: {
        marginTop: "40px"
    },
    breadcrumb: {
        color: "white",
        textAlign: "left"
    },
    breadcrumbLink: {
        display: "flex"
    },
    breadcrumbIcon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    content: {
        backgroundColor: "white",
        border: "1px solid #666A86",
        margin: "10px 0 50px 0",
        textAlign: "center",
        "& > img": {
            padding: "50px 0 0 0",
            width: "40%",
            [theme.breakpoints.down('xs')] :{
                paddingTop: "0",
                width: "100%"
            },
            [theme.breakpoints.between('sm', 'md')] :{
                width: "60%"
            },
        },
        "& > h1": {
            textAlign: "center",
            fontFamily: "Roboto",
            fontWeight: "normal",
            fontSize: "35px",
            color: "#666A86",
            [theme.breakpoints.down('xs')] :{
                marginBottom: "0"
            },
        },
        "& > p": {
            textAlign: "justify",
            fontFamily: "Nunito",
            fontWeight: "normal",
            fontSize: "17px",
            color: "black",
            padding: "5px 50px 40px 50px",
            [theme.breakpoints.down('xs')] :{
                padding: "5px 20px 30px 20px"
            },
        }
    }
});

class BlogShow extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid className={classes.background} justify={"center"} container>

                <Grid xs={10} className={classes.breadcrumbBox} item>
                    <Breadcrumbs className={classes.breadcrumb} aria-label="breadcrumb">
                        <Link color={"inherit"} className={classes.breadcrumbLink} href="/">
                            <HomeIcon className={classes.breadcrumbIcon} />
                            Home
                        </Link>
                        <Typography color={"inherit"}>Identity app</Typography>
                    </Breadcrumbs>
                </Grid>


                <Grid xs={10} className={classes.content} item>
                    <img src="/images/project-img.jpg" alt=""/>
                    <h1>Identity app</h1>
                    <p>
                        <p>
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
                        and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the
                        sea to the level of the spectator on a hillside, the sable cloud beneath was dished out,
                        and the car seemed to float in the middle of an immense dark sphere, whose upper half was
                        strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming
                        through a rift in the clouds.
                        </p>
                        <p>
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and
                        the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to
                        the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car
                        seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
                        Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the
                        clouds.
                        </p>
                        <p>
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and
                        the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the
                        level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed
                        to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
                        Looking down into the dark gulf below, I could see a ruddy light streaming through a rift
                        in the clouds.
                        </p>
                        <p>
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
                        and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the
                        sea to the level of the spectator on a hillside, the sable cloud beneath was dished out,
                        and the car seemed to float in the middle of an immense dark sphere, whose upper half was
                        strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming
                        through a rift in the clouds.Apparently we had reached a great height in the atmosphere,
                        for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which
                        lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud
                        beneath was dished out, and the car seemed to float in the middle of an immense dark sphere,
                        whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a
                        ruddy light streaming through a rift in the clouds.
                        </p>
                    </p>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(BlogShow);
