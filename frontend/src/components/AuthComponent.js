import React, { Component } from 'react';

import { inject,observer } from "mobx-react";

@inject("tasksStore", "routerStore", "userStore")
@observer
class AuthComponent extends Component {

    constructor(props) {
        super(props)

        const { userStore, routerStore } = this.props;

        if(userStore.isNotLoggedIn() === true) {
            routerStore.push("/tasks");
        }
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default AuthComponent;