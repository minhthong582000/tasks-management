import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";

import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import TasksPage from "./pages/tasks/TasksPage";
import CreateTaskPage from "./pages/create-task/CreateTaskPage";
// import NotFoundPage from "./pages/Not-found/404";

@inject("routerStore")
@observer
class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={TasksPage} />
                <Route path="/signin/" component={SignInPage} />
                <Route path="/signup/" component={SignUpPage} />
                <Route exact path="/tasks" component={TasksPage} />
                <Route exact path="/tasks/create" component={CreateTaskPage} />
                {/* <Route component={NotFoundPage}/> */}
            </Switch>
        );
    }
}

export default App;
