import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    background: {
        backgroundColor: "white"
    }
});

class BlogShow extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.background}>
                <p>Empty</p>
            </div>
        )
    }
}

export default withStyles(styles)(BlogShow);
