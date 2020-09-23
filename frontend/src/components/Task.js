import React, { Component } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  Grid,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const CardContainer = styled.div`
  margin-bottom: 20px;
  type: 'dark'
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 22px;
`;

const ControlContainer = styled.div`
    background-color: #303030;
    border-radius: 5px;
    padding: 10px;
`;

@inject('tasksStore')
class Task extends Component {
  deleteTask = () => {
    this.props.tasksStore.deleteTask(this.props.id);
  };

  handleStatusChange = e => {
    this.props.tasksStore.updateTaskStatus(this.props.id, e.target.value);
  };

  render() {
    const { title, description } = this.props;
    //{{ backgroundColor: "#303030" }}>
    return (
      <CardContainer>
        <Card style={{ backgroundColor: "#424242", color:"white" }}>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            {description}
          </CardContent>
          <CardActions style={{ padding: '14px' }} disableSpacing>
            <Grid
              justify="space-between" // Add it here :)
              container 
            >
              <Grid item>
                <ControlContainer>
                  <FormControl style={{ 
                    width: '140px',
                  }}>

                      <Select
                        value={this.props.status}
                        onChange={this.handleStatusChange}
                        displayEmpty
                        style={{ color: "white"}}
                        disableUnderline={true}  
                      >
                        <MenuItem value={'OPEN'}>Open</MenuItem>
                        <MenuItem value={'IN_PROGRESS'}>In Progress</MenuItem>
                        <MenuItem value={'DONE'}>Done</MenuItem>
                      </Select>


                  </FormControl>
                </ControlContainer>
              </Grid>

              <Grid item>
                <IconButton onClick={this.deleteTask}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </CardContainer>
    );
  }
}

export default Task;
