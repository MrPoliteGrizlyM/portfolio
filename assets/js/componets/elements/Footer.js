import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    background: {
        backgroundColor: "#495561",
        border: "1px solid black",
        "& p": {
            color: "white",
            fontFamily: "Nunito",
            textAlign: "center"
        }
    }
});

class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.background}>
                <p>© mrgrizly.me</p>
            </div>
        )
    }
}

export default withStyles(styles)(Footer);
