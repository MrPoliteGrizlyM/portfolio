import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from "../../elements/Header";
import Cogs from "../../../images/cogs-bg.jpg"

const styles = theme => ({
    header: {
        paddingTop: "50px"
    },
    background: {
        height: "300px",
        background: `url("${Cogs}") center no-repeat`,
        backgroundSize: 'cover'

    }
});

class BlogHeader extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.background}>
                <div className={classes.header}>
                    <Header/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(BlogHeader);
