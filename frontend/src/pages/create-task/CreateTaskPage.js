import React, { Component } from "react";
import { TextField, FormControl, Button
} from "@material-ui/core";
import styled from "styled-components";
import { inject,observer } from "mobx-react";
import ErrorMessage from "../../components/ErrorMessage";
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import Footer from '../../components/Footer';

const FormWrapper = styled.div`
  width: 100vw
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  max-width: 980px;
  width: 100%;
  background-color: #ffffff;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom:35px
  border-radius: 5px;
`;

@inject("tasksStore", "routerStore", "userStore")
@observer
class CreateTaskPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      errorMessage: null,
    };
  }

  handleSubmitTask = async () => {
    const { tasksStore, routerStore } = this.props;
    const { title, description } = this.state;

    try {
      await tasksStore.createTask(title, description);
      routerStore.push("/tasks");
    } catch (error) {
      const errorMessage = error.response.data.message;
      this.setState({ errorMessage });
    }
  };

  goToTasks = () => {
    const { routerStore } = this.props;
    routerStore.push('/tasks');
  }

  handleSignOut = () => {
    const { userStore, tasksStore, routerStore } = this.props;
    userStore.signout();
    tasksStore.resetTasks();
    routerStore.push("/signin");
  };

  render() {
    // const { userStore } = this.props;

    // if(userStore.isNotLoggedIn() === true) {
    //   this.handleSignOut();
    // }

    return (
      <div>
      <FormWrapper>
        <FormContainer>
          <h1>Create a new task</h1>
          <p>Provide information about the task you wish to complete.</p>

          {this.state.errorMessage && (
            <ErrorMessage message={this.state.errorMessage} />
          )}

          <FormControl fullWidth>              
            <TextField
              placeholder="Title"
              margin="normal"
              variant="outlined"
              InputLabelProps={{shrink: false}}
              onChange={(e) => this.setState({ title: e.target.value })}
            />            
          </FormControl>
          <FormControl fullWidth>
            <CKEditor
              config={{
                placeholder: "Description",
              }}
              onInit={(editor) => {
                editor.ui
                  .getEditableElement()
                  .parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                  );
              }}
              editor={DecoupledEditor}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ description: data });
                }}
            />
            {/* <TextField id="toolbar-container"
                            label="Description"
                            multiline
                            rows="8"
                            margin="normal"
                            variant="outlined"
                        /> */}
          </FormControl>

          <Button
            style={{ marginTop: "10px",
              backgroundColor:"#303030",
              color:"#ffffff",
            }}
            fullWidth
            variant="contained"
            onClick={this.handleSubmitTask}
          >
            CREATE TASK
          </Button>
          <Button
            style={{ marginTop: "10px",
              backgroundColor:"#626262",
              color:"#ffffff",
            }}
            fullWidth
            variant="contained"
            onClick={this.goToTasks}
          >
            Go back to homepage
          </Button>
        </FormContainer>
      </FormWrapper>
    </div>

    );
  }
}

export default CreateTaskPage;
