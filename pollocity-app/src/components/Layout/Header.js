import React, {Component} from "react";
import {AppBar, Button, Grid, Toolbar, Typography} from "@material-ui/core";
import { Link } from "react-router-dom";

const {REACT_APP_NAME} = process.env;


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: null,
        };
    }

    logoutUser = () => {
        let token = sessionStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
        };
        fetch("http://localhost:8000/api/user/logout", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status === "success") {
                    window.location.reload();
                    sessionStorage.clear();
                    let tempUrl = window.location.origin;
                    window.location.href = tempUrl + "/login";
                }
            })
            .catch((error) => console.log("error", error));
    };


    componentDidMount() {
        let isLoggedIn = sessionStorage.getItem("isLoggedIn");
        this.setState({isLoggedIn: isLoggedIn});
    }


    render() {
        const {isLoggedIn} = this.state;
        let logoutDiv = null;


        if (isLoggedIn === "true") {
            logoutDiv = (
                <AppBar
                    position="static"
                    style={{color: "black", backgroundColor: "#0074D9"}}
                >
                    <Toolbar
                        style={{display: " flex", justifyContent: "space-between"}}
                    >
                        <Typography variant="h6">{REACT_APP_NAME}</Typography>
                        <Grid>
                            <Link to='/my-polls'>
                            <Button >My Polls</Button>
                                </Link>
                            <Button onClick={this.logoutUser}>Logout</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            );
        }

        if (isLoggedIn === null) {
            logoutDiv = (
                <AppBar
                    position="static"
                    style={{color: "black", backgroundColor: " #0074D9 "}}
                >
                    <Toolbar
                        style={{display: " flex", justifyContent: "space-between"}}
                    >
                        <Link to='/' style={{textDecoration:'none',color:'black'}}>
                        <Typography variant="h6">{REACT_APP_NAME}</Typography>
                        </Link>
                        <Grid>
                            <Link to='/login'>
                            <Button>Login</Button>
                            </Link>
                            <Link to='/register'>
                            <Button>Register</Button>
                            </Link>

                        </Grid>
                    </Toolbar>
                </AppBar>
            );
        }
        return <div>{logoutDiv}</div>;
    }
}
