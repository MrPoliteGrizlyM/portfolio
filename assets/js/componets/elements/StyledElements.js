import { styled } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";


const AboutButton = styled(Button)({
    background : "linear-gradient(45deg, #F06449 30%, #F06450 90%)",
    borderRadius: 0,
    color : "white",
    width: "135px",
    padding : "5px 30px",
});

const ContactButton = styled(Button)({
    background : "linear-gradient(45deg, #539987 30%, #539990 90%)",
    borderRadius: 0,
    color : "white",
    width: "135px",
    padding : "5px 30px",
});


export {AboutButton, ContactButton}
