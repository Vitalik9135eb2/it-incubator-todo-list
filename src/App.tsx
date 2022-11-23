import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, IconButton, Toolbar, Typography, Grid, Paper} from "@material-ui/core";
import {Menu} from '@material-ui/icons';
import {log} from "util";

export type FilterValuesType = "all" | "active" | "completed";
export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function deleteTodoList(id:string){
        setTodolists([...todolists.filter(el => el.id != id)])
    }

    function removeTask(todoListId: string, id: string) {
        setTasks({...tasks, [todoListId]: tasks[todoListId].filter(t => t.id != id)});
    }

    function addTask(todoListId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListId]: [task, ...tasks[todoListId]]});
    }

    function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
        console.log(todoListId)
        setTasks({...tasks, [todoListId]: tasks[todoListId].map(el => el.id === taskId ? {...el, isDone} : el)})
    }

    function changeFilter(todoListId: string, value: FilterValuesType) {
        setTodolists(todolists.map(filtered => filtered.id === todoListId ? {...filtered, filter: value} : filtered))
    }

    function addTodoList(title:string) {
        let todoList: todolistsType = {
            id: v1(),
            filter: "all",
            title: title
        }

        setTodolists([todoList, ...todolists])
        setTasks({
            ...tasks, [todoList.id]: []
        })
    }

    const updateTask = (todolistId:string, taskId:string,  updateTitle: string ) => {
        console.log(updateTitle)
        setTasks({...tasks,[todolistId]:tasks[todolistId].map(el => el.id === taskId ? {...el, title:updateTitle} : el)})
    }

    const updateTodolist = (todolistId:string, updateTitle: string ) => {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, title: updateTitle}: el))
    }

    return (
        <div className="App">

            <AppBar>
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge={"start"} color={"inherit"}>
                        <Menu/>
                    </IconButton>

                    <Typography>
                        Todolists
                    </Typography>

                    <Button color={"inherit"} variant={"outlined"}>Login</Button>

                </Toolbar>
            </AppBar>

            <Container fixed style={{paddingTop: "100px"}}>
                <Grid container>
                    <AddItemForm addItem={addTodoList}/>

                </Grid>

                <Grid container spacing={4} style={{paddingTop: "40px"}}>
                    {
                        todolists.map(el => {
                            let tasksForTodolist = tasks[el.id];
                            if (el.filter === "active") {
                                tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                            }
                            if (el.filter === "completed") {
                                tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                            }


                            return (
                                <Grid item key={el.id}>

                                    <Paper style={{padding: "10px"}}
                                           elevation={6}

                                    >
                                        <Todolist todoListId={el.id}
                                                  title={el.title}
                                                  tasks={tasksForTodolist}
                                                  removeTask={removeTask}
                                                  changeFilter={changeFilter}
                                                  addTask={addTask}
                                                  changeTaskStatus={changeStatus}
                                                  filter={el.filter}
                                                  updateTask={updateTask}
                                                  updateTodolist={updateTodolist}
                                                  deleteTodoList={deleteTodoList}
                                        />
                                    </Paper>

                                </Grid>


                            )
                        })
                    }
                </Grid>

            </Container>


        </div>
    );
}

export default App;
