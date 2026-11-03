import { useState } from "react"
import Task from "./Task.tsx";

function App() {
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "name": "test1",
            "checked": true
        },
        {
            "id": 2,
            "name": "test2",
            "checked": false
        },
        {
            "id": 3,
            "name": "test3",
            "checked": true
        },
    ]);

    const [filteredTasks, setFilteredTasks] = useState(tasks);

    const elements = filteredTasks.map(task => {
        return <Task key={task.id} id={task.id} name={task.name} checked={task.checked} toggleFunction={toggleTask} />
    });

    function getChecked() {
        return tasks.filter(task => { return task.checked });
    }

    function toggleTask(id: number) {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                let newTask = task;
                newTask.checked = !task.checked;

                return newTask;
            } else {
                return task;
            }
        });

        setTasks(updatedTasks);
    }

    return (
        <>
            <select onChange={event => {
                if (event.target.value === "all") {
                    setFilteredTasks(tasks);
                } else {
                    let temp = tasks.filter(item => {
                        return item.checked === Boolean(Number(event.target.value));
                    })

                    setFilteredTasks(temp);
                }
            }}>
                <option value={"all"}>Wszystkie</option>
                <option value={"1"}>Wykonane</option>
                <option value={"0"}>Niewykonane</option>
            </select>
            <select onChange={event => {
                if (event.target.value === "normal") {
                    setFilteredTasks(filteredTasks);
                } else if (event.target.value === "alphabetical") {
                    let temp = filteredTasks.sort((a, b) => {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    })

                    setFilteredTasks(temp);
                }
            }}>
                <option value={"normal"}>Zwykle</option>
                <option value={"alphabetical"}>alfabetyczne</option>
            </select>
            {elements}
            <p>Ilość zrobionych zadań: <b>{getChecked().length}</b></p>
        </>
    )
}

export default App
