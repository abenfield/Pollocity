import React, { Component, useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import PollTable from "./PollTable"
const {REACT_APP_API_URL} = process.env;






const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#F2AA4CFF",
        },
    },
});

export default class Login extends Component {
    state = {

        error:false
    };
    rows;



componentDidMount(){


}



    render() {



        return (

            <Box m={1} p={2}>
        <Container  style={{backgroundColor:"white"}}>

            <PollTable Url = "http://localhost:8000/api/poll">

            </PollTable>


        </Container>
            </Box>
        )
    }
}
