import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Fab, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SignOutIcon from "@material-ui/icons/ExitToApp";
import styled from "styled-components";
import Task from "../../components/Task";
import TasksFilters from "../../components/TasksFilters";
import ReactHtmlParser from "react-html-parser";
import Header from "../../components/MenuButton";

const TasksWrapper = styled.div`
    width: 100%;
    max-width: 960px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
`;

const TasksHeader = styled.div`
    display: flex;
    justify-content: center;
`;

const Title = styled.h1`
    margin-top: 23px;
    width: 100%;
    color: white;
    margin-left: 50px;
    font-size: 50px;
`;

const MenuButton = styled.div`
    margin-right: 10px;
`;

const CreateButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const TasksContainer = styled.div`
    padding-top: 20px;
`;

const EmptyTasksPlaceholder = styled.p`
    color: #edf4ff;
    text-align: center;
    font-size: 22px;
`;

const SignOutIconContainer = styled.div`
    margin-left: 10px;

    .signOutIcon {
        fill: #edf4ff;
    }
`;

@inject("tasksStore", "routerStore", "userStore")
@observer
class TasksPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          loaded: false
        }
    }

    async componentDidMount() {
        await this.props.tasksStore.fetchTasks();
        this.setState({loaded: true});
    }

    handleSignOut = () => {
        const { userStore, tasksStore, routerStore } = this.props;
        userStore.signout();
        tasksStore.resetTasks();
        routerStore.push("/signin");
    };

    renderTasks = () => {
        const { tasksStore } = this.props;

        if (!tasksStore.tasks.length) {
            return (
                <EmptyTasksPlaceholder>
                    No tasks available. Create one?
                </EmptyTasksPlaceholder>
            );
        }

        return tasksStore.tasks.map((task) => (
            <Task
                key={task.id}
                id={task.id}
                title={task.title}
                description={ReactHtmlParser(task.description)}
                status={task.status}
            />
        ));
    };

    content() {
        return (
            <div style={{ width: "100%" }}>
                <MenuButton>
                    <Header />
                </MenuButton>
                <TasksWrapper>
                    <TasksHeader>
                        <Title>SIR NOTE</Title>

                        <CreateButtonContainer>
                            <Fab
                                variant="extended"
                                onClick={() =>
                                    this.props.routerStore.push("/tasks/create")
                                }
                                style={{
                                    backgroundColor: "#424242",
                                    color: "white",
                                }}
                            >
                                <AddIcon />
                                Create Task
                            </Fab>

                            <SignOutIconContainer>
                                <IconButton onClick={this.handleSignOut}>
                                    <SignOutIcon className="signOutIcon" />
                                </IconButton>
                            </SignOutIconContainer>
                        </CreateButtonContainer>
                    </TasksHeader>

                    <TasksFilters />

                    <TasksContainer>{this.renderTasks()}</TasksContainer>
                </TasksWrapper>
            </div>
        )
    }

    tempContent() {
        return (
            <div style={{backgroundColor: "#424242"}}></div>
        )
    }

    render() {
        return (
            <div>
                {this.state.loaded ? this.content(): this.tempContent()}
            </div>
        );
    }
}

export default TasksPage;
