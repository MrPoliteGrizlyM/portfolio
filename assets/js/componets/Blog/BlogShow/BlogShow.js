import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import {Link, Redirect} from "react-router-dom";
import { Query } from 'react-apollo';
import {GET_PROJECT} from "../../services/queries";
import {AlertServerError} from "../../elements/Alerts";
import BlogHeader from "../BlogHeader/BlogHeader";
import {Skeleton} from "@material-ui/lab";

const styles = theme => ({
    background: {
        backgroundColor: "#495561"
    },
    breadcrumbBox: {
        marginTop: "40px"
    },
    breadcrumb: {
        color: "white",
        textAlign: "left",
    },
    breadcrumbLink: {
        display: "flex",
        color: "inherit",
        textDecoration: "none"
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
    },
    skeletonBrTitle: {
        width: "120px"
    },
    skeletonImage: {
        height: "170px",
        margin: "50px 0 0 0",
        width: "40%",
        left: "30%",
        [theme.breakpoints.down('xs')] :{
            margin: "0",
            width: "100%",
            left: "0"
        },
        [theme.breakpoints.between('sm', 'md')] :{
            width: "60%",
            left: "20%"
        },
    },
    skeletonTitle: {
        width: "40%",
        marginTop: "10px",
        marginBottom: "20px",
        left: "30%",
        [theme.breakpoints.down('xs')] :{
            width: "100%",
            left: "0"
        },
        [theme.breakpoints.between('sm', 'md')] :{
            width: "60%",
            left: "20%"
        },
    },
    skeletonText: {
        margin: "10px 80px 20px"
    }
});

class BlogShow extends Component {
    state = {
        query: '',
        redirect: false
    };

    componentDidMount() {
        if (this.props.location.state) {
            const { projectId } = this.props.location.state;
            this.setState({
                query: GET_PROJECT(projectId),
                redirect: false
            });
        } else {
            this.setState({
                redirect: true
            });
        }
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to={"/app/"}/>
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <>
                <BlogHeader/>
                {this.renderRedirect()}
                <Grid className={classes.background} justify={"center"} container>
                    {this.state.query && (
                        <Query query={this.state.query}>
                            { ({ loading, error, data }) => {
                                if (error) return <AlertServerError/>;

                                return (
                                    <>
                                        <Grid xs={10} className={classes.breadcrumbBox} item>
                                            <Breadcrumbs className={classes.breadcrumb} aria-label="breadcrumb">
                                                <Link className={classes.breadcrumbLink} to={'/app/'}>
                                                    <HomeIcon className={classes.breadcrumbIcon} />
                                                    Home
                                                </Link>
                                                {loading ? <Skeleton animation="wave" className={classes.skeletonBrTitle} />
                                                         : <Typography color={"inherit"}>{data.project.title}</Typography>}
                                            </Breadcrumbs>
                                        </Grid>


                                        <Grid xs={10} className={classes.content} item>
                                            {loading ? <Skeleton variant="rect" animation="wave" className={classes.skeletonImage} /> : <img src={data.project.image} alt=""/> }
                                            {loading ? <Skeleton animation="wave" className={classes.skeletonTitle} /> : <h1>{data.project.title}</h1>}
                                            {loading ? <>
                                                            <Skeleton animation="wave" className={classes.skeletonText} />
                                                            <Skeleton animation="wave" className={classes.skeletonText} />
                                                            <Skeleton animation="wave" className={classes.skeletonText} />
                                                            <Skeleton animation="wave" className={classes.skeletonText} />
                                                            <Skeleton animation="wave" className={classes.skeletonText} />
                                                            <Skeleton animation="wave" className={classes.skeletonText} />
                                                       </>
                                                     : <p>{data.project.content}</p>}
                                        </Grid>
                                    </>
                                );
                            }}
                        </Query>
                    )}
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(BlogShow);
