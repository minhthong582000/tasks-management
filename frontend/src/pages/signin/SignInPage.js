import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import "./SignInPage.scss";
import { inject } from "mobx-react";
import ErrorMessage from "../../components/ErrorMessage";
import Footer from "../../components/Footer";

const Heading = styled.h1`
    margin-top: 0;
`;

const FormContainer = styled.div`
    max-width: 480px;
    width: 100%;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 5px;
`;

const FormField = styled(TextField)`
    width: 100%;
`;

@inject("userStore", "routerStore")
class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMesssage: null,
        };
    }

    submit = async () => {
        this.setState({ errorMessage: null });
        const { username, password } = this.state;

        try {
            await this.props.userStore.signin(username, password);
            this.props.routerStore.push("/tasks");
        } catch (error) {
            const errorMessage = error.response.data.message;
            this.setState({ errorMessage });
        }
    };

    goToSignUp = () => {
        this.props.routerStore.push("/signup");
    };

    goToTasks = () => {
        this.props.routerStore.push("/tasks");
    };

    render() {
        const { errorMessage } = this.state;

        return (
            <div>
                <div className="fullscreen-wrapper">
                    <FormContainer>
                        <Heading>Welcome to Trang Web cua nhom 12!</Heading>
                        <p>Đây là trang web báo cáo môn Thiết Kế Mạng.</p>
                        <p>Chức năng:</p>
                        <ul>
                            <li>Login</li>
                            <li>Signup</li>
                            <li>CRUD tasks</li>
                        </ul>
                        <p>Stack:</p>
                        <ul>
                            <li>Nestjs</li>
                            <li>Reactjs</li>
                            <li>PostgresSQL</li>
                            <li>AWS</li>
                        </ul>
                        <p>Thành viên:</p>
                        <ul>
                            <li>Lê Minh Thông - 18521457</li>
                            <li>Nguyễn Trần Minh Thiện - 18521428</li>
                            <li>Ngô Phúc Thịnh - 18521439</li>
                            <li>Nguyễn Võ Bảo Huy - 18520254</li>
                        </ul>
                        <p
                            style={{
                                fontSize: "100%",
                                fontStyle: "italic",
                                color: "#303030",
                            }}
                        >
                            Fill in your username and password to sign in
                        </p>

                        {errorMessage && (
                            <ErrorMessage message={this.state.errorMessage} />
                        )}

                        <div>
                            <FormField
                                id="outlined-name"
                                label="Username"
                                margin="dense"
                                variant="outlined"
                                onChange={(e) =>
                                    this.setState({ username: e.target.value })
                                }
                            />
                        </div>
                        <div>
                            <FormField
                                id="outlined-name"
                                label="Password"
                                margin="dense"
                                variant="outlined"
                                type="password"
                                onChange={(e) =>
                                    this.setState({ password: e.target.value })
                                }
                            />
                        </div>
                        <hr />
                        <div>
                            <Button
                                style={{
                                    marginBottom: "10px",
                                    backgroundColor: "#303030",
                                    color: "#ffffff",
                                }}
                                fullWidth
                                variant="contained"
                                onClick={this.submit}
                            >
                                SIGN IN
                            </Button>

                            <Button fullWidth onClick={this.goToSignUp}>
                                Don't have an account? Sign up now!
                            </Button>
                        </div>
                    </FormContainer>
                </div>
            </div>
        );
    }
}

export default SignInPage;
