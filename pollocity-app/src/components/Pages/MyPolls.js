import React, { Component, useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import PollTable from "../Poll/PollTable"
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
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
            <React.Fragment>
            <AppBar
                position="static"
                style={{color: "black", backgroundColor: "#0761b0"}}
            >


                    <Grid>
                        <Link to="/poll/new">
                        <Button style={{
                            backgroundColor: "green",

                        }} >Create new Poll</Button>
                        </Link>
                    </Grid>

            </AppBar>
            <Box m={1} p={2}>
                <Container  style={{backgroundColor:"white"}}>

                    <PollTable Url = "http://localhost:8000/api/user/poll">

                    </PollTable>


                </Container>
            </Box>
            </React.Fragment>
        )
    }
}
