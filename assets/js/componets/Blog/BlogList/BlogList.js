import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import ProjectBox from "./ProjectBox";
import SkeletonBox from "./SkeletonBox";
import {AlertServerError} from "../../elements/Alerts";
import {LIST_PROJECTS} from "../../services/queries";
import BlogHeader from "../BlogHeader/BlogHeader";

const styles = theme => ({
    background: {
        backgroundColor: "#495561",
        padding: "50px 0"
    },
    alertBlock: {
        height: "800px"
    },
    loadingBlock: {
        height: "800px"
    }
});

class BlogList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <BlogHeader/>
                <Grid className={classes.background} justify={"center"} container>
                    <Query query={LIST_PROJECTS}>
                        {({ loading, error, data }) => {
                            if (loading) return (
                                <>
                                    <SkeletonBox/>
                                    <SkeletonBox/>
                                    <SkeletonBox/>
                                </>
                            );
                            if (error) return <AlertServerError className={classes.alertBlock}/>;

                            return data.projects_list.projects.map((el, key) => <ProjectBox id={el.id}
                                                                                            title={el.title}
                                                                                            isActive={el.isActive}
                                                                                            content={`${el.content.substr(0, 450)}...`}
                                                                                            image={el.image}
                                                                                            key={key}/>)
                        }}
                    </Query>
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(BlogList);
