import React, { Component } from "react";
import { Grid,TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#F2AA4CFF",
        },
    },
});
export default class Registration extends Component {
    state = {
        signupData: {
            name: "",
            email: "",
            password: "",
        },
        hidden: true,
        errMsgName: "",
        errMsgEmail: "",
        errMsgPassword: "",
        successMsg: "",
        error: false,
    };
    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    };
    onChangeHandler = (e, key) => {
        const { signupData } = this.state;
        signupData[e.target.name] = e.target.value;
        this.setState({ signupData });
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("name", this.state.signupData.name);
        formdata.append("email", this.state.signupData.email);
        formdata.append("password", this.state.signupData.password);

        var requestOptions = {
            method: "POST",
            body: formdata,
        };
        fetch(
            "http://localhost:8000/api/user/register",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                if (result.status === "success") {
                    this.setState({
                        signupData: {
                            name: "",
                            password: "",
                        },
                        errMsgName: "",
                        errMsgEmail: "",
                        errMsgPassword: "",
                        error: false,
                    });
                }
                setTimeout(() => {
                    this.setState({ successMsg: result.message });
                }, 1000);
                if (result.status === "error" && result.validation_errors.name) {
                    this.setState({
                        error: true,
                        errMsgName: result.validation_errors.name[0],
                    });
                }

                if (result.status === "error" && result.validation_errors.email) {
                    this.setState({
                        error: true,
                        errMsgEmail: result.validation_errors.email[0],
                    });
                }
                if (result.status === "error" && result.validation_errors.password) {
                    this.setState({
                        error: true,
                        errMsgPassword: result.validation_errors.password[0],
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (

            <Container className="themed-container mt-2" fluid="sm">


                    <div className="d-flex justify-content-around mb-5">
                        <div className="txt-first">
                            <h1>Sign up and create your own polls!</h1>
                        </div>
                    </div>

                        <Grid container direction={"column"} spacing={5}>
                            <Grid item>
                        <TextField
                            error={this.state.error}
                            name="name"
                            label="Display Name"
                            fullWidth
                            hintText="Name"
                            color="primary"
                            value={this.state.signupData.name}
                            onChange={this.onChangeHandler}
                            autoFocus
                            helperText={this.state.errMsgName}
                        />

                            </Grid>
                            <Grid item>
                        <TextField
                            error={this.state.error}
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth
                            value={this.state.signupData.email}
                            onChange={this.onChangeHandler}
                            helperText={this.state.errMsgEmail}
                        />
                            </Grid>
                                <Grid item>
                            <TextField
                                error={this.state.error}
                                name="password"
                                label="Password"
                                type={this.state.hidden ? "password" : "text"}
                                fullWidth

                                value={this.state.signupData.password}
                                onChange={this.onChangeHandler}
                                helperText={this.state.errMsgPassword}
                            />
                            </Grid>


                                <Grid item>
                        <div class=" alert-success pl-5">{this.state.successMsg}</div>
                        <Button
                            variant="contained"
                            fullWidth
                            color="primary"
                            onClick={this.onSubmitHandler}
                        >
                            SIGN UP
                        </Button>
                        <p className="already-txt ml-5">
                            Already have an account?&nbsp;
                            <Link to="/login" className="sign-in-txt">
                                Sign In!
                            </Link>
                        </p>
                        </Grid>
                        </Grid>


            </Container>
        );
    }
}
